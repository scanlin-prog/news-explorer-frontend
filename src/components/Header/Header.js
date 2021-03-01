import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation.js';
import menu from '../../images/menu.svg';

function Header(props) {
    return (
        <>
            <div className={`header-overlay ${props.nav ? "header-overlay_visibility" : ""}`}></div>
            <header className={`header ${props.nav ? "header_theme_dark" : ""}`}>
                <h2 className={`header__title ${props.nav ? "header__title_theme_dark" : ""}`}>NewsExplorer</h2>
                <Navigation nav={props.nav} user={props.user} logged={props.logged} handleLogin={props.handleLogin} handleLogout={props.handleLogout} classLinkLight={"navigation__link_current"}></Navigation>
                <img onClick={props.openNavigation} className={`header__menu ${props.nav ? "header__menu_hidden" : ""}`} src={menu} alt="menu" />
                <button onClick={props.closeNavigation} className={`header__menu-button-close ${props.nav ? "header__menu-button-close_visibility" : ""}`}></button>
            </header>
        </>
    )
}

export default Header