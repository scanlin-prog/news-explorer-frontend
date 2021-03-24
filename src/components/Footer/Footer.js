import './Footer.css';
import mail from '../../images/mail.svg';
import vk from '../../images/vk.svg';
import vkCircle from '../../images/vk_circle.svg';


function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2021 Supersite, Powered by News API</p>
            <nav className="footer__links">
                <div className="footer__links-text">
                    <a href="/" className="footer__link">Главная</a>
                    <a href="https://praktikum.yandex.ru" className="footer__link">Яндекс.Практикум</a>
                </div>
                <div className="footer__links-icon">
                    <a href="https://my.mail.ru/mail/inknw1999" className="footer__link"><img src={mail} alt="mail" /></a>
                    <a href="https://vk.com/scanlin" className="footer__link footer__link-square"><img src={vk} alt="vk"/></a>
                    <a href="https://vk.com/scanlin" className="footer__link footer__link-circle"><img src={vkCircle} alt="vk" /></a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;