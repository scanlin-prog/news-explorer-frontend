import React from 'react';
import './SearchForm.css';

function SearchForm(props) {

    const inputSearch = React.useRef();

    function searchNewsSubmit(evt) {
        evt.preventDefault();

        props.searchNews(inputSearch.current.value);
    }
    return (
        <form className="search-form" name="search-form" onSubmit={searchNewsSubmit}>
            <input ref={inputSearch} type="text" className="search-form__input" name="search" placeholder="Введите тему новости" required/>
            <button className="search-form__button">Искать</button>
        </form>
    )
}

export default SearchForm;
