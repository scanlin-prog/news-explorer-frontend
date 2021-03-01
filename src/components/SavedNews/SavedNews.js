import './SavedNews.css';
import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import delete_icon from '../../images/delete_icon.svg';
import NewsCard from '../NewsCard/NewsCard.js';

function SavedNews(props) {

    const tags = props.articles.map((article) => {
        return article.keyword
    })
    const sortedTags = Object.entries(getKeywords(tags)).sort((a, b) => b[1] - a[1]).map((item) => {
        return item.slice(0, 1).join('')
    })

    function getKeywords(array) {
        return array.reduce((sum, current) => {
            sum[current] = (sum[current] + 1) || 1;
            return sum;
        }, {})
    }

    const getKeywordForPhrase = keywords => (keywords.length <= 3)
        ? `${keywords.join(', ')}`
        : `${keywords.slice(0, 2).join(', ')} и ${keywords.length - 2}-м другим`;


    return (
        <>
            <SavedNewsHeader nav={props.nav}
                user={props.user}
                logged={props.logged}
                openNavigation={props.openNavigation}
                closeNavigation={props.closeNavigation}>
            </SavedNewsHeader>
            <section className="saved-news">
                <h3 className="saved-news__subtitle">Сохранённые статьи</h3>
                <h2 className="saved-news__title">{`${props.user.name}, у вас ${props.articles.length} сохраненных статей`}</h2>
                <p className="saved-news__keywords">По ключевым словам: <span className="saved-news__keywords-accent">{getKeywordForPhrase(sortedTags)}</span></p>
            </section>
            <section className="saved-articles">
                <NewsCardList>
                    {
                        props.articles.map((article) => {
                            return (
                                <NewsCard hidden={false} logged={props.logged} key={article.title} icon={`article__icon-delete`} alert={`Убрать из сохранённых`} article={article} handleArticleDelete={props.handleArticleDelete} />
                            )
                        })
                    }
                </NewsCardList>
            </section>
        </>
    )
}

export default SavedNews;