import './Register.css';
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import * as api from '../../utils/MainApi.js';
import * as validation from '../FormValidator/FormValidator.js';

function Register(props) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name, setName] = React.useState('')
    const [activeButton, setActiveButton] = React.useState(false)
    const emailInput = React.useRef()
    const emailSpan = React.useRef()
    const passwordInput = React.useRef()
    const passwordSpan = React.useRef()
    const nameInput = React.useRef()
    const nameSpan = React.useRef()
    const registerButton = React.useRef()

    React.useEffect(() => {
        validation.toggleButtonState(registerButton, hasInvalidInput(), 'register')
        hideRegisterErrors()
    }, [props.errorsForm])

    function resetForm() {
        setEmail('');
        setPassword('');
    }

    function hideRegisterErrors() {
        if (!props.errorsForm) {
            validation.hideInputError(emailInput, emailSpan, 'register')
            validation.hideInputError(passwordInput, passwordSpan, 'register')
            validation.hideInputError(nameInput, nameSpan, 'register')
        }
    }

    function hasInvalidInput() {
        if (!emailInput.current.validity.valid || !passwordInput.current.validity.valid || !nameInput.current.validity.valid) {
            return false
        }
        return true
    }

    function handleMouseEnter(evt) {
        if (evt.target.classList.contains('register__button-create_inactive')) {
            setActiveButton(false)
        } else {
            setActiveButton(true)
        }
    }

    function handleMouseLeave() {
        setActiveButton(false)
    }

    function handleChangeEmail(evt) {
        const { value } = evt.target;
        setEmail(value)
        validation.checkInputValidity(emailInput, emailSpan, registerButton, hasInvalidInput(), 'register')
    }

    function handleChangePassword(evt) {
        const { value } = evt.target;
        setPassword(value)
        validation.checkInputValidity(passwordInput, passwordSpan, registerButton, hasInvalidInput(), 'register')
    }

    function handleChangeName(evt) {
        const { value } = evt.target;
        setName(value)
        validation.checkInputValidity(nameInput, nameSpan, registerButton, hasInvalidInput(), 'register')
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        validation.toggleButtonState(registerButton, false, 'register')
        api.register(name, email, password)
        .then((res) => {
            if(res) {
                props.handleInfoToolTipClick(true)
                resetForm()
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
            <button ref={registerButton} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`register__button-create ${activeButton ? "register__button-create_active" : ""}`}>Регистрация</button>
        </PopupWithForm>
    )
}

export default Register;