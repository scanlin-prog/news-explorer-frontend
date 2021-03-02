import './NewsCardList.css';
import '../NewsCard/NewsCard.js';
import NewsCard from '../NewsCard/NewsCard.js';

function NewsCardList(props) {
    return (
        <section className="articles">
            {props.children}
        </section>
    )
}

export default NewsCardList;