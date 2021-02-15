import './InfoToolTip.css';

function InfoToolTip(props) {
    return (
        <div className={`infotooltip ${props.isOpen ? "infotooltip_opened" : ""}`} id={`infotooltip-${props.name}`}>
            <form className="infotooltip__container" name="infotooltip" onSubmit={props.onSubmit} noValidate>
                <h3 className="infotooltip__title">Пользователь успешно зарегистрирован!</h3>
                <a href="#" className="infotooltip__link">Войти</a>
                <button onClick={props.onClose} className="infotooltip__button-close" type="button"></button>
            </form>
        </div>
    )
}

export default InfoToolTip;