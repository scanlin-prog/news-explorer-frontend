import './SavedNewsHeader.css';
import Navigation from '../Navigation/Navigation.js';
import menu_dark from '../../images/menu_dark.svg';

function SavedNewsHeader(props) {
    return (
        <>
        <div className={`saved-news-header-overlay ${props.nav ? "saved-news-header-overlay_visibility" : ""}`}></div>
            <header className={`saved-news-header ${props.nav ? "saved-news-header_theme_dark" : ""}`}>
                <h2 className={`saved-news-header__title ${props.nav ? "saved-news-header__title_theme_dark" : ""}`}>NewsExplorer</h2>
                <Navigation nav={props.nav} user={props.user} logged={props.logged} classLink={'navigation__link_theme_dark'} classUser={'navigation__user_theme_dark'} classLinkDark={'navigation__link_current_theme_dark'} classIcon={'navigation__icon_theme_dark'}></Navigation>
                <img onClick={props.openNavigation} className={`saved-news-header__menu ${props.nav ? "saved-news-header__menu_hidden" : ""}`} src={menu_dark} alt="menu" />
                <button onClick={props.closeNavigation} className={`saved-news-header__menu-button-close ${props.nav ? "saved-news-header__menu-button-close_visibility" : ""}`}></button>
            </header>
        </>
    )
}

export default SavedNewsHeader;