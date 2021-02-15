import './Register.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function Register(props) {
    return (
        <PopupWithForm isOpen={props.isOpen} onClick={props.handleLogin} onClose={props.onClose} title={'Регистрация'} titleButton={'Регистрация'} link={'Войти'}>
            <label className="register__field"> Email
                <input type="text" className="register__input" id="email-input" placeholder="Введите почту" name="email"
                    required minLength="2" maxLength="40" />
                <span className="register__input-error" id="email-input-error"></span>
            </label>
            <label className="register__field"> Пароль
                <input type="text" className="register__input" id="password-input" placeholder="Введите пароль"
                    name="password" required minLength="2" maxLength="200" />
                <span className="register__input-error" id="password-input-error"></span>
            </label>
            <label className="register__field"> Имя
                <input type="text" className="register__input" id="name-input" placeholder="Введите имя"
                    name="name" required minLength="2" maxLength="200" />
                <span className="register__input-error" id="name-input-error"></span>
            </label>
            <span className="register__input-error register__input-error_last">Такой пользователь уже есть</span>
        </PopupWithForm>
    )
}

export default Register;