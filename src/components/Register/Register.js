import './Register.css';
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import * as api from '../../utils/MainApi.js';

function Register(props) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name, setName] = React.useState('')
    const emailInput = React.useRef()
    const emailSpan = React.useRef()
    const passwordInput = React.useRef()
    const passwordSpan = React.useRef()
    const nameInput = React.useRef()
    const nameSpan = React.useRef()
    const registerButton = React.useRef()

    function validationForm(valueInput, errorInput, buttonElement) {
        if(!valueInput.current.validity.valid) {
            valueInput.current.classList.add("register__input_type_error");
            errorInput.current.classList.add("register__input-error_active");
            errorInput.current.textContent = valueInput.current.validationMessage;
            toggleButtonState(buttonElement, false)
        } else {
            valueInput.current.classList.remove("register__input_type_error");
            errorInput.current.classList.remove("register__input-error_active");
            errorInput.current.textContent = '';
            toggleButtonState(buttonElement, true)
        }
    }

    function toggleButtonState(buttonElement, boolean) {
        if(!boolean) {
            buttonElement.current.classList.add("register__button-create_inactive");
            buttonElement.current.setAttribute('disabled', true);
        } else {
            buttonElement.current.classList.remove("register__button-create_inactive");
            buttonElement.current.removeAttribute('disabled');
        }
    }

    function handleChangeEmail(evt) {
        const { value } = evt.target;
        setEmail(value)
        validationForm(emailInput, emailSpan, registerButton)
    }

    function handleChangePassword(evt) {
        const { value } = evt.target;
        setPassword(value)
        validationForm(passwordInput, passwordSpan, registerButton)
    }

    function handleChangeName(evt) {
        const { value } = evt.target;
        setName(value)
        validationForm(nameInput, nameSpan, registerButton)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        api.register(name, email, password)
        .then((res) => {
            if(res) {
                props.handleInfoToolTipClick(true)
            } else {
                props.handleInfoToolTipClick(false)
            }
        })
        .catch(() => alert(400 && 'Некорректно заполнено одно из полей'))
    }

    return (
        <PopupWithForm isOpen={props.isOpen} handleSubmit={handleSubmit} onClick={props.handleLoginClick} onClose={props.onClose} title={'Регистрация'} titleButton={'Регистрация'} link={'Войти'}>
            <label className="register__field"> Email
                <input ref={emailInput} onChange={handleChangeEmail} type="email" className="register__input"  placeholder="Введите почту" name="email"
                    required minLength="2" maxLength="40" />
                <span ref={emailSpan} className="register__input-error"></span>
            </label>
            <label className="register__field"> Пароль
                <input ref={passwordInput} onChange={handleChangePassword} type="password" className="register__input" placeholder="Введите пароль"
                    name="password" required minLength="4" maxLength="12" />
                <span ref={passwordSpan} className="register__input-error"></span>
            </label>
            <label className="register__field"> Имя
                <input ref={nameInput} onChange={handleChangeName} type="text" className="register__input" placeholder="Введите имя"
                    name="name" required minLength="2" maxLength="20" />
                <span ref={nameSpan} className="register__input-error"></span>
            </label>
            <span className="register__input-error register__input-error_last">Такой пользователь уже есть</span>
            <button ref={registerButton} className={`register__button-create`}>Регистрация</button>
        </PopupWithForm>
    )
}

export default Register;