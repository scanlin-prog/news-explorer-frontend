import './InfoToolTip.css';

function InfoToolTip(props) {

    function handleOverlay(evt) {
        if (evt.target.classList.contains('infotooltip_opened')) {
            props.onClose();
        }
    }

    return (
        <div onMouseDown={handleOverlay} className={`infotooltip ${props.isOpen ? "infotooltip_opened" : ""}`}>
            <form className="infotooltip__container" name="infotooltip" noValidate>
                <h3 className="infotooltip__title">Пользователь успешно зарегистрирован!</h3>
                <a href="#" onClick={props.handleLoginClick} className="infotooltip__link">Войти</a>
                <button onClick={props.onClose} className="infotooltip__button-close" type="button"></button>
            </form>
        </div>
    )
}

export default InfoToolTip;