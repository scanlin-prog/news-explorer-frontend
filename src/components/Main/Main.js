import './Main.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import NewsCard from '../NewsCard/NewsCard.js';
import Preloader from '../Preloader/Preloader.js';
import NoSearchResults from '../NoSearchResults/NoSearchResults.js';
import Error from '../Error/Error.js';
import Header from '../Header/Header.js';

function Main(props) {

    return (
        <main className="content">
            <div className="main">
            <Header nav={props.nav} user={props.user} openNavigation={props.openNavigation} closeNavigation={props.closeNavigation} logged={props.logged} handleLogin={props.handleLogin} handleLogout={props.handleLogout} />
            <section className="search-news">
                <div className="search-container">
                    <h1 className="search-news__title">Что творится в мире?</h1>
                    <p className="search-news__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                    <SearchForm searchNews={props.searchNews} onChangeSearchInput={props.onChangeSearchInput} />
                </div>
            </section>
            </div>
            <Preloader isPreloader={props.isPreloader} />
            <NoSearchResults isNoSearchResults={props.isNoSearchResults} />
            <Error isError={props.isError} />
            <section className={`news ${props.isNewsBlock ? "news_active" : ""}`}>
                <h2 className="news__title">Результаты поиска</h2>
                <NewsCardList>
                    {
                        props.articles.map((article) => {
                            return (
                                <NewsCard hidden={true} logged={props.logged} key={article.title} icon={`article__icon-save`} alert={`Войдите, чтобы сохранять статьи`} article={article} handleArticleSave={props.handleArticleSave} handleArticleDelete={props.handleArticleDelete} />
                            )
                        }).slice(0, props.visibleArticles)
                    }
                </NewsCardList>
                <button onClick={props.showMore} className={`news__button ${props.isButtonShowMore ? "news__button_visible" : ""}`}>Показать еще</button>
            </section>
        </main>
    )
}

export default Main