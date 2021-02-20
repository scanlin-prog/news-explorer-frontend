import './Login.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function Login(props) {
    return (
        <PopupWithForm isOpen={props.isOpen} onClick={props.handleRegister} onClose={props.onClose} title={'Вход'} titleButton={'Войти'} link={'Зарегистрироваться'}>
            <label className="login__field"> Email
                <input type="text" className="login__input" placeholder="Введите почту" name="email"
                    required minLength="2" maxLength="40" />
                <span className="login__input-error">Неправильный формат email</span>
            </label>
            <label className="login__field"> Пароль
                <input type="text" className="login__input" placeholder="Введите пароль"
                    name="password" required minLength="2" maxLength="200" />
                <span className="login__input-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default Login;