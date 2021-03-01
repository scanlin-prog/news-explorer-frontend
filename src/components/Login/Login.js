import './Login.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import * as api from '../../utils/MainApi.js';

function Login(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const emailInput = React.useRef()
    const emailSpan = React.useRef()
    const passwordInput = React.useRef()
    const passwordSpan = React.useRef()
    const loginButton = React.useRef()

    function resetForm() {
        setEmail('');
        setPassword('');
    }

    function validationForm(valueInput, errorInput, buttonElement) {
        if(!valueInput.current.validity.valid) {
            valueInput.current.classList.add("login__input_type_error");
            errorInput.current.classList.add("login__input-error_active");
            errorInput.current.textContent = valueInput.current.validationMessage;
            toggleButtonState(buttonElement, false)
        } else {
            valueInput.current.classList.remove("login__input_type_error");
            errorInput.current.classList.remove("login__input-error_active");
            errorInput.current.textContent = '';
            toggleButtonState(buttonElement, true)
        }
    }

    function toggleButtonState(buttonElement, boolean) {
        if(!boolean) {
            buttonElement.current.classList.add("login__button-create_inactive");
            buttonElement.current.setAttribute('disabled', true);
        } else {
            buttonElement.current.classList.remove("login__button-create_inactive");
            buttonElement.current.removeAttribute('disabled');
        }
    }

    function handleChangeEmail(evt) {
        const { value } = evt.target;
        setEmail(value)
        validationForm(emailInput, emailSpan, loginButton)
    }

    function handleChangePassword(evt) {
        const { value } = evt.target;
        setPassword(value)
        validationForm(passwordInput, passwordSpan, loginButton)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!email || !password) {
            console.log('Неверный email или пароль')
            return;
        }
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
            <button ref={loginButton} className={`login__button-create`}>Войти</button>
        </PopupWithForm>
    )
}

export default Login;