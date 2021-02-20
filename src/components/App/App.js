import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main.js';
import About from '../About/About.js';
import Footer from '../Footer/Footer.js';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js';
import SavedNews from '../SavedNews/SavedNews.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import InfoToolTip from '../InfoToolTip/InfoToolTip.js';

function App() {

  const [logged, setLogged] = React.useState(true);
  const [isLoginPopup, setLoginPopup] = React.useState(false);
  const [isRegisterPopup, setRegisterPopup] = React.useState(false);
  const [isInfoToolTipPopup, setInfoToolTipPopup] = React.useState(false);
  const [nav, setNav] = React.useState(false);

  const history = useHistory();

  function openNavigation() {
    setNav(true)
  }

  function closeNavigation() {
    setNav(false)
  }

  function handleLoginClick() {
    closeAllPopups()
    setNav(false)
    setLoginPopup(true);
  }

  function handleRegisterClick() {
    closeAllPopups()
    setRegisterPopup(true);
  }

  function handleInfoToolTipClick() {
    setInfoToolTipPopup(true);
  }

  function closeAllPopups() {
    setLoginPopup(false);
    setRegisterPopup(false);
    setInfoToolTipPopup(false);
  }

  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }

  function handleLogout() {
    setLogged(false)
  }

  return (
    <div onKeyDown={handleEscClose} className="page">
      <Switch>
        <Route exact path="/">
          <Main nav={nav} openNavigation={openNavigation} closeNavigation={closeNavigation} logged={logged} handleLogout={handleLogout} handleLogin={handleLoginClick}></Main>
          <About></About>
        </Route>
        <Route path="/saved-news">
          <SavedNewsHeader nav={nav} openNavigation={openNavigation} closeNavigation={closeNavigation} logged={logged}></SavedNewsHeader>
          <SavedNews></SavedNews>
        </Route>
      </Switch>
      <Footer></Footer>
      <Login isOpen={isLoginPopup} handleRegister={handleRegisterClick} onClose={closeAllPopups}></Login>
      <Register isOpen={isRegisterPopup} handleLogin={handleLoginClick} onClose={closeAllPopups}></Register>
      <InfoToolTip isOpen={isInfoToolTipPopup} onClose={closeAllPopups}></InfoToolTip>
    </div>
  );
}

export default App;
