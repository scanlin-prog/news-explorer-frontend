import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import park from '../../images/park.png';
import forest from '../../images/forest.png';
import taiga from '../../images/taiga.png';
import delete_icon from '../../images/delete_icon.svg';
import NewsCard from '../NewsCard/NewsCard.js';

function SavedNews() {
    return (
        <>
            <section className="saved-news">
                <h3 className="saved-news__subtitle">Сохранённые статьи</h3>
                <h2 className="saved-news__title">Грета, у вас 5 сохраненных статей</h2>
                <p className="saved-news__keywords">По ключевым словам: <span className="saved-news__keywords-accent">Природа</span>, <span className="saved-news__keywords-accent">Тайга</span> и <span className="saved-news__keywords-accent">2-м другим</span></p>
            </section>
            <section className="saved-articles">
                <NewsCardList>
                    <NewsCard hidden={false} tag={'Природа'} image={park} date={'2 августа, 2019'} title={'Национальное достояние - парки'} text={'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'} source={'Лента.ру'} icon={`article__icon-delete`}></NewsCard>
                    <NewsCard hidden={false} tag={'Природа'} image={forest} date={'2 августа, 2019'} title={'Лесные огоньки: история одной фотографии'} text={'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.'} source={'Медуза'} icon={`article__icon-delete`}>
                        <div className="article__icon-alert">
                            <p className="article__alert">Убрать из сохранённых</p>
                        </div>
                    </NewsCard>
                    <NewsCard hidden={false} tag={'Тайга'} image={taiga} date={'2 августа, 2019'} title={'«Первозданная тайга»: новый фотопроект Игоря Шпиленка'} text={'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...'} source={'Риа'} icon={`article__icon-delete`}></NewsCard>
                    <NewsCard hidden={false} tag={'Парки'} image={park} date={'2 августа, 2019'} title={'Национальное достояние - парки'} text={'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'} source={'Лента.ру'} icon={`article__icon-delete`}></NewsCard>
                    <NewsCard hidden={false} tag={'Фотографии'} image={forest} date={'2 августа, 2019'} title={'Лесные огоньки: история одной фотографии'} text={'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.'} source={'Медуза'} icon={`article__icon-delete`}></NewsCard>
                </NewsCardList>
            </section>
        </>
    )
}

export default SavedNews;