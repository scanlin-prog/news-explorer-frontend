import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation(props) {
    

    return (
        <nav className="navigation">
            <Link to={'/'} className={`navigation__link ${props.classLink} ${props.classLinkLight}`}>Главная</Link>
            <div className={`${props.logged ? "navigation__logged" : "navigation__not-logged"}`}>
                <Link to={'/saved-news'} className={`navigation__link ${props.classLink} ${props.classLinkDark}`}>Сохранённые статьи</Link>
                <Link to={'/'} onClick={props.handleLogout} className={`navigation__link ${props.classLink}`}>
                    <p className={`navigation__user ${props.classUser}`}>Грета</p>
                    <img className="navigation__icon" src={props.src} />
                    <img className="navigation__icon navigation__icon_hidden" src={props.dark} />
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