import './PopupWithForm.css';
import React from 'react';

function PopupWithForm(props) {

    function handleOverlay(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            props.onClose();
        }
    }

    return(
        <div onMouseDown={handleOverlay} className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
            <form onSubmit={props.handleSubmit} className="popup__container" name="popup-window" noValidate>
                <h3 className="popup__title">{props.title}</h3>
                {props.children}
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