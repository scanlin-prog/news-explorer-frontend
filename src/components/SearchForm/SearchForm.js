import './SearchForm.css';

function SearchForm() {
    return (
        <form className="search-form" name="search-form">
            <input type="text" className="search-form__input" name="search" placeholder="Введите тему новости" />
            <button type="button" className="search-form__button">Искать</button>
        </form>
    )
}

export default SearchForm;
