import './Error.css';
import error from '../../images/error_icon.svg';

function Error(props) {
    return(
        <section className={`error ${props.isError ? "error_active" : ""}`}>
            <img src={error} className="error__image" alt="error" />
            <h2 className="error__title">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h2>
        </section>
    )
}

export default Error;