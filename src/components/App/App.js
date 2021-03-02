import React from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext.js';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main.js';
import About from '../About/About.js';
import Footer from '../Footer/Footer.js';
import SavedNews from '../SavedNews/SavedNews.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import InfoToolTip from '../InfoToolTip/InfoToolTip.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js'
import * as news from '../../utils/NewsApi.js';
import * as api from '../../utils/MainApi.js';

function App() {

  const [logged, setLogged] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoginPopup, setLoginPopup] = React.useState(false);
  const [isRegisterPopup, setRegisterPopup] = React.useState(false);
  const [isInfoToolTipPopup, setInfoToolTipPopup] = React.useState(false);
  const [nav, setNav] = React.useState(false);
  const [isPreloader, setPreloader] = React.useState(false);
  const [isError, setError] = React.useState(false);
  const [isNoSearchResults, setNoSearchResults] = React.useState(false);
  const [isNewsBlock, setNewsBlock] = React.useState(false);
  const [articles, setArticles] = React.useState([]);
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [visibleArticles, setVisibleArticles] = React.useState(3);
  const [isButtonShowMore, setButtonShowMore] = React.useState(true);
  const [errorsForm, setErrorsForm] = React.useState(false)

  React.useEffect(() => {
    tokenCheck()
    downloadLocalArticles()
  }, [])

  function searchNews(inputValue) {
    resetBlocks()
    setPreloader(true)
    news.getNews(inputValue)
      .then((result) => {
        reformatArticles(result.articles, inputValue)
      })
      .catch(() => {
        setPreloader(false)
        setError(true)
      })
  }

  function displayArticles(articles) {
    setPreloader(false)
    setArticles(articles)
    if (articles.length === 0) {
      setNoSearchResults(true)
    } else {
      setNewsBlock(true)
    }
  }

  function showMore() {
    const newArticles = visibleArticles + 3;
    setVisibleArticles(newArticles)

    if (newArticles >= articles.length) {
      setButtonShowMore(false)
    }
  }

  function reformatArticles(articles, value) {
    const newArticles = articles.map((article) => {
      article.keyword = value;
      article.text = article.description
      delete article.description;
      article.date = `${new Date(Date.parse(article.publishedAt)).toLocaleString("ru", {
        month: 'long',
        day: 'numeric',
      })}, ${new Date(Date.parse(article.publishedAt)).toLocaleString("ru", {
        year: 'numeric',
      })}`
      delete article.publishedAt;
      article.source = article.source.name
      delete article.source.name;
      article.link = article.url
      delete article.url;
      article.image = article.urlToImage
      delete article.urlToImage;
      article.boolean = savedArticles.some(i => i.link === article.link);
      article._id = savedArticles.map((savedArticle) => {
        if (savedArticle.link === article.link) {
          article._id = savedArticle._id
        }
        return article._id
      }).join('')
      return article
    })
    displayArticles(newArticles)
    localStorage.setItem('articles', JSON.stringify(newArticles))
  }

  function downloadLocalArticles() {
    const localArticles = JSON.parse(localStorage.getItem('articles'))
    if (localArticles) {
      setPreloader(true)
      setTimeout(displayArticles, 500, localArticles)
    }
  }

  function resetBlocks() {
    setNewsBlock(false)
    setNoSearchResults(false)
    setError(false)
    setVisibleArticles(3)
    setButtonShowMore(true)
  }

  function openNavigation() {
    setNav(true)
  }

  function closeNavigation() {
    setNav(false)
  }

  function handleArticleSave(data) {
    api.sendArticleData(data)
      .then((savedArticle) => {
        setSavedArticles([...savedArticles, savedArticle])
        const updateArticles = articles.map((article) => {
          if (article.link === savedArticle.link) {
            article._id = savedArticle._id
          }
          return article
        })
        setArticles(updateArticles)

      })
      .catch(() => {
        console.log('Что-то пошло не так')
      })
  }

  function handleArticleDelete(article) {
    api.deleteArticle(article._id)
      .then(() => {
        const newArticles = savedArticles.filter((c) => c._id !== article._id);
        setSavedArticles(newArticles);
      })
      .catch(() => {
        console.log('Что-то пошло не так')
      })
  }

  function handleLoginClick() {
    closeAllPopups()
    setNav(false)
    setLoginPopup(true)
    setErrorsForm(true)
  }

  function handleRegisterClick() {
    closeAllPopups()
    setRegisterPopup(true)
    setErrorsForm(true)
  }

  function handleInfoToolTipClick(boolean) {
    closeAllPopups()
    setInfoToolTipPopup(true)
  }

  function closeAllPopups() {
    setLoginPopup(false)
    setRegisterPopup(false)
    setInfoToolTipPopup(false)
    setErrorsForm(false)
  }

  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups()
    }
  }

  function handleLogin() {
    tokenCheck()
    closeAllPopups()
  }

  function handleLogout() {
    localStorage.removeItem('articles')
    localStorage.removeItem('token')
    setLogged(false)
  }

  function tokenCheck() {
    let token = localStorage.getItem('token');
    if (token) {
      api.checkToken(token)
        .then((res) => {
          if (res) {
            setLogged(true);
            setCurrentUser(res)
          }
        })
        .catch(() => {
          alert(401 && 'Переданный токен некорректен')
        })

      api.getArticlesData()
        .then((result) => {
          setSavedArticles(result)
        })
    }
  }

  return (
    <div onKeyDown={handleEscClose} className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Main nav={nav}
              user={currentUser}
              isNewsBlock={isNewsBlock}
              isPreloader={isPreloader}
              isError={isError}
              isNoSearchResults={isNoSearchResults}
              isButtonShowMore={isButtonShowMore}
              articles={articles}
              visibleArticles={visibleArticles}
              logged={logged}
              openNavigation={openNavigation}
              closeNavigation={closeNavigation}
              handleLogout={handleLogout}
              handleLogin={handleLoginClick}
              handleArticleSave={handleArticleSave}
              handleArticleDelete={handleArticleDelete}
              searchNews={searchNews}
              showMore={showMore}>
            </Main>
            <About></About>
          </Route>
          <ProtectedRoute path="/saved-news" component={SavedNews}
            logged={logged}
            nav={nav}
            user={currentUser}
            articles={savedArticles}
            openNavigation={openNavigation}
            closeNavigation={closeNavigation}
            handleArticleDelete={handleArticleDelete} />
        </Switch>
        <Footer></Footer>
        <Login isOpen={isLoginPopup}
          errorsForm={errorsForm}
          handleLogin={handleLogin}
          handleRegisterClick={handleRegisterClick}
          onClose={closeAllPopups}>
        </Login>
        <Register isOpen={isRegisterPopup}
          errorsForm={errorsForm}
          handleLoginClick={handleLoginClick}
          handleInfoToolTipClick={handleInfoToolTipClick}
          onClose={closeAllPopups}>
        </Register>
        <InfoToolTip isOpen={isInfoToolTipPopup}
          handleLoginClick={handleLoginClick}
          onClose={closeAllPopups}>
        </InfoToolTip>
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App;
