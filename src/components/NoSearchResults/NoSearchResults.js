import './NoSearchResults.css';
import notFound from '../../images/not_found.svg';

function NoSearchResults(props) {
    return (
        <section className={`no-search-results ${props.isNoSearchResults ? "no-search-results_active" : ""}`}>
            <img src={notFound} className="no-search-results__image" alt="not_found"></img>
            <h2 className="no-search-results__title">Ничего не найдено</h2>
            <p className="no-search-results__subtitle">К сожалению по вашему запросу ничего не найдено.</p>
        </section>
    )
}

export default NoSearchResults;