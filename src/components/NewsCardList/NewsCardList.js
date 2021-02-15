import './NewsCardList.css';
import '../NewsCard/NewsCard.js';

function NewsCardList(props) {
    return (
        <div className="articles">
            {props.children}
        </div >
    )
}

export default NewsCardList;