import './Preloader.css'

function Preloader(props) {
    return (
        <section className={`preloader ${props.isPreloader ? "preloader_active" : ""}`}>
            <i className="preloader-circle"></i>
            <h3 className="preloader-text">Идет поиск новостей...</h3>
        </section>
    )
}

export default Preloader;