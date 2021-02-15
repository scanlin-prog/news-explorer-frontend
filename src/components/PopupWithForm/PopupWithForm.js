import './PopupWithForm.css';

function PopupWithForm(props) {

    function handleOverlay(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            props.onClose();
        }
    }

    return(
        <div onMouseDown={handleOverlay} className={`popup ${props.isOpen ? "popup_opened" : ""}`} id={`popup-${props.name}`}>
            <form className="popup__container" name="popup-window" noValidate>
                <h3 className="popup__title">{props.title}</h3>
                {props.children}
                <button className="popup__button-create">{props.titleButton}</button>
                <button onClick={props.onClose} className="popup__button-close" type="button"></button>
                <div className="popup__text">
                    <p className="popup_text-span">или</p>
                    <a href="#" onClick={props.onClick} className="popup__text-link">{props.link}</a>
                </div>
            </form>
        </div>
    )
}

export default PopupWithForm