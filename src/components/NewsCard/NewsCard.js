import React from 'react';
import './NewsCard.css';


function NewsCard(props) {

    const [savedArticle, setSavedArticle] = React.useState(false);

    function saveArticle() {
        setSavedArticle(true)
    }

    return (
        <a href={props.link} className="article">
            <img className="article__image" src={props.image} alt="Изображение" />
            <p className="article__date">{props.date}</p>
            <h3 className="article__title">{props.title}</h3>
            <p className="article__text">{props.text}</p>
            <p className="article__source">{props.source}</p>
            <div onClick={saveArticle} className={`article__icon ${props.icon} ${savedArticle ? `${props.icon}_active` : ``}`}></div>
            <div className={`article__tag ${props.hidden ? "article__tag_hidden" : ""}`}>
                <p className="article__tag-title">{props.tag}</p>
            </div>
            {props.children}
        </a>
    )
}

export default NewsCard