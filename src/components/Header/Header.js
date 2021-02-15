import './Header.css';
import Navigation from '../Navigation/Navigation.js';
import logout from '../../images/logout.svg';
import menu from '../../images/menu.svg';

function Header(props) {
    return (
        <>
            <div className="header-overlay"></div>
            <header className="header">
                <h2 className="header__title">NewsExplorer</h2>
                <Navigation logged={props.logged} handleLogin={props.handleLogin} handleLogout={props.handleLogout} classLinkLight={"navigation__link_current"}  src={logout}></Navigation>
                <img className="header__menu" src={menu} />
                <button className="header__menu-button-close"></button>
            </header>
        </>
    )
}

export default Header