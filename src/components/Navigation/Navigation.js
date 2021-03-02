import './Navigation.css';
import React from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext.js';
import { Link } from 'react-router-dom';

function Navigation(props) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <nav className={`navigation ${props.nav ? "navigation_visibility" : ""}`}>
            <Link to={'/'} className={`navigation__link ${props.classLink} ${props.classLinkLight}`}>Главная</Link>
            <div className={`${props.logged ? "navigation__logged" : "navigation__not-logged"}`}>
                <Link to={'/saved-news'} className={`navigation__link ${props.classLink} ${props.classLinkDark}`}>Сохранённые статьи</Link>
                <Link to={'/'} onClick={props.handleLogout} className={`navigation__link ${props.classLink}`}>
                    <p className={`navigation__user ${props.classUser}`}>{currentUser.name}</p>
                    <div className={`navigation__icon ${props.classIcon}`}></div>
                </Link>
            </div>
            <div className={`${props.logged ? "navigation__not-logged" : "navigation__logged"}`}>
                <a onClick={props.handleLogin} href="#" className={`navigation__link ${props.classLink}`}>
                    <p className={`navigation__user ${props.classUser}`}>Авторизоваться</p>
                </a>
            </div>
        </nav>
    )
}

export default Navigation;