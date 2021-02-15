import './Footer.css';
import choto from '../../images/Choto.svg';
import facebook from '../../images/facebook.svg';
import facebookCircle from '../../images/facebook_circle.svg';


function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
            <nav className="footer__links">
                <div className="footer__links-text">
                    <a href="/" className="footer__link">Главная</a>
                    <a href="https://praktikum.yandex.ru" className="footer__link">Яндекс.Практикум</a>
                </div>
                <div className="footer__links-icon">
                    <a className="footer__link"><img src={choto} alt="choto" /></a>
                    <a href="https://ru-ru.facebook.com/" className="footer__link footer__link-square"><img src={facebook} alt="facebook"/></a>
                    <a href="https://ru-ru.facebook.com/" className="footer__link footer__link-circle"><img src={facebookCircle} alt="facebook" /></a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;