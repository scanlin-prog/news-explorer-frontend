import './SavedNewsHeader.css';
import Navigation from '../Navigation/Navigation.js';
import logout_dark from '../../images/logout_dark.svg';
import logout from '../../images/logout.svg';
import menu_dark from '../../images/menu_dark.svg';

function SavedNewsHeader(props) {
    return (
        <>
        <div className="saved-news-header-overlay saved-news-header-overlay_visibility"></div>
            <header className="saved-news-header saved-news-header_theme_dark">
                <h2 className="saved-news-header__title saved-news-header__title_theme_dark">NewsExplorer</h2>
                <Navigation logged={props.logged} src={logout_dark} dark={logout} classLink={'navigation__link_theme_dark'} classUser={'navigation__user_theme_dark'} classLinkDark={'navigation__link_current_theme_dark'}></Navigation>
                <img className="saved-news-header__menu saved-news-header__menu_hidden" src={menu_dark} />
                <button className="saved-news-header__menu-button-close saved-news-header__menu-button-close_visibility"></button>
            </header>
        </>
    )
}

export default SavedNewsHeader;