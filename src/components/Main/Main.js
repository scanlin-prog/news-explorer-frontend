import './Main.css';
import SearchForm from '../SearchForm/SearchForm.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import Preloader from '../Preloader/Preloader.js';
import NoSearchResults from '../NoSearchResults/NoSearchResults.js';
import park from '../../images/park.png';
import forest from '../../images/forest.png';
import taiga from '../../images/taiga.png';
import bookmark_normal from '../../images/bookmark_normal.svg';
import NewsCard from '../NewsCard/NewsCard.js';
import Header from '../Header/Header.js';

function Main(props) {
    return (
        <main className="content">
            <div className="main">
            <Header logged={props.logged} handleLogin={props.handleLogin} handleLogout={props.handleLogout}></Header>
            <section className="search-news">
                <div className="search-container">
                    <h1 className="search-news__title">Что творится в мире?</h1>
                    <p className="search-news__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                    <SearchForm></SearchForm>
                </div>
            </section>
            </div>
            <Preloader></Preloader>
            <NoSearchResults></NoSearchResults>
            <section className="news">
                <h2 className="news__title">Результаты поиска</h2>
                <NewsCardList>
                    <NewsCard hidden={true} image={park} date={'2 августа, 2019'} title={'Национальное достояние - парки'} text={'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'} source={'Лента.ру'} icon={`article__icon-save`}></NewsCard>
                    <NewsCard hidden={true} image={forest} date={'2 августа, 2019'} title={'Лесные огоньки: история одной фотографии'} text={'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.'} source={'Медуза'} icon={`article__icon-save`}></NewsCard>
                    <NewsCard hidden={true} image={taiga} date={'2 августа, 2019'} title={'«Первозданная тайга»: новый фотопроект Игоря Шпиленка'} text={'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...'} source={'Риа'} icon={`article__icon-save`}>
                        <div className="article__icon-alert">
                            <p className="article__alert">Войдите, чтобы сохранять статьи</p>
                        </div>
                    </NewsCard>
                </NewsCardList>
                <button className="news__button">Показать еще</button>
            </section>
        </main>
    )
}

export default Main