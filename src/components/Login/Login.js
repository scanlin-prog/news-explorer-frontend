import './Login.css';
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import * as api from '../../utils/MainApi.js';
import * as validation from '../FormValidator/FormValidator.js';

function Login(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [activeButton, setActiveButton] = React.useState(false)
    const emailInput = React.useRef()
    const emailSpan = React.useRef()
    const passwordInput = React.useRef()
    const passwordSpan = React.useRef()
    const loginButton = React.useRef()

    React.useEffect(() => {
        validation.toggleButtonState(loginButton, hasInvalidInput(), 'login')
        hideLoginErrors()
    }, [props.errorsForm])

    function resetForm() {
        setEmail('');
        setPassword('');
    }

    function hideLoginErrors() {
        if (!props.errorsForm) {
            validation.hideInputError(emailInput, emailSpan, 'login')
            validation.hideInputError(passwordInput, passwordSpan, 'login')
        }
    }

    function hasInvalidInput() {
        if (!emailInput.current.validity.valid || !passwordInput.current.validity.valid) {
            return false
        }
        return true
    }

    function handleMouseEnter(evt) {
        if (evt.target.classList.contains('login__button-create_inactive')) {
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
        validation.checkInputValidity(emailInput, emailSpan, loginButton, hasInvalidInput(), 'login')
    }

    function handleChangePassword(evt) {
        const { value } = evt.target;
        setPassword(value)
        validation.checkInputValidity(passwordInput, passwordSpan, loginButton, hasInvalidInput(), 'login')
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!email || !password) {
            console.log('Неверный email или пароль')
            return;
        }
        validation.toggleButtonState(loginButton, false, 'login')
        api.authorize(email, password)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    props.handleLogin();
                    resetForm();
                } else {
                    return
                }
            })
            .catch(() => alert(401 && 'Пользователь с email не найден'))
    }

    return (
        <PopupWithForm isOpen={props.isOpen} handleSubmit={handleSubmit} onClick={props.handleRegisterClick} onClose={props.onClose} title={'Вход'} titleButton={'Войти'} link={'Зарегистрироваться'}>
            <label className="login__field"> Email
                <input onChange={handleChangeEmail} ref={emailInput} type="email" className="login__input" placeholder="Введите почту" name="email"
                    required minLength="2" maxLength="40" />
                <span ref={emailSpan} className="login__input-error">Жопа</span>
            </label>
            <label className="login__field"> Пароль
                <input onChange={handleChangePassword} ref={passwordInput} type="password" className="login__input" placeholder="Введите пароль"
                    name="password" required minLength="4" maxLength="12" />
                <span ref={passwordSpan} className="login__input-error"></span>
            </label>
            <button ref={loginButton} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`login__button-create ${activeButton ? "login__button-create_active" : ""}`}>Войти</button>
        </PopupWithForm>
    )
}

export default Login;