import React from 'react';
import './NewsCard.css';


function NewsCard(props) {

    const [savedArticle, setSavedArticle] = React.useState(props.article.boolean);
    const [iconAlert, setIconAlert] = React.useState(false)

    function toggleAddArticle(evt) {
        if (props.logged === true) {
            if (evt.target.classList.contains('article__icon-save')) {
                if (evt.target.classList.contains('article__icon-save_active')) {
                    setSavedArticle(false)
                    props.handleArticleDelete(props.article)
                } else {
                    setSavedArticle(true)
                    props.handleArticleSave({
                        link: props.article.link,
                        image: props.article.image,
                        date: props.article.date,
                        title: props.article.title,
                        text: props.article.text,
                        source: props.article.source,
                        keyword: props.article.keyword
                    })
                }
            } else {
                props.handleArticleDelete(props.article)
                setSavedArticle(false)
            }
        } else {
            console.log('Необходима авторизация')
        }
    }

    function handleMouseEnter(evt) {
        if (evt.target.classList.contains('article__icon-save')) {
            if (props.logged === true) {
                setIconAlert(false)
            } else {
                setIconAlert(true)
            }
        } else {
            setIconAlert(true)
        }
    }

    function handleMouseLeave() {
        setIconAlert(false)
    }

    return (
        <div className="article">
            <a href={props.article.link} target="_blank" className="article__link">
                <img className="article__image" src={props.article.image} alt="Изображение" />
                <p className="article__date">{props.article.date}</p>
                <h3 className="article__title">{props.article.title}</h3>
                <p className="article__text">{props.article.text}</p>
                <p className="article__source">{props.article.source}</p>
            </a>
            <div onClick={toggleAddArticle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`article__icon ${props.icon} ${savedArticle ? `${props.icon}_active` : ``}`}></div>
            <div className={`article__tag ${props.hidden ? "article__tag_hidden" : ""}`}>
                <p className="article__tag-title">{props.article.keyword}</p>
            </div>
            <div className={`article__icon-alert ${iconAlert ? "article__icon-alert_visible" : ""}`}>
                <p className="article__alert article__alert_visible">{props.alert}</p>
            </div>
        </div>
    )
}

export default NewsCard