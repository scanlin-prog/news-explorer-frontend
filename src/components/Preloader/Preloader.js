import './Preloader.css'

function Preloader() {
    return (
        <section className="preloader">
            <i className="preloader-circle"></i>
            <p className="preloader-text">Идет поиск новостей...</p>
        </section>
    )
}

export default Preloader;