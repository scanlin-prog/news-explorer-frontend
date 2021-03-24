import './About.css';

function About() {
    return (
        <section className="about">
            <div className="about__avatar" />
            <div className="about__info">
                <h2 className="about__title">Об авторе</h2>
                <p className="about__describe">Здравствуй!<br></br>
                Меня зовут Иван Ротарь, я начинающий фронтенд-разработчик.  Люблю программировать, работать в коллективе и постоянно учиться новому.<br></br>
                Обучался на курсах Яндекс.Практикума, где изучил HTML, CSS, JS. Также умею работать с Figma, Git и WebPack'ом.<br></br>
                Могу создать веб-сайт на React.js, написать бэкенд с помощью Node.js. Пользуюсь базой данных MongoDB и приложением для тестирования запросов - Postman'ом.
                </p>
                <p className="about__describe">
                    Ниже представлены мои первые проекты (ссылки в заголовках):<br></br>
                <a className="about__link" href="https://github.com/scanlin-prog/russian-travel">1. https://github.com/scanlin-prog/russian-travel</a><br></br>
                <a className="about__link" href="https://github.com/scanlin-prog/mesto">2. https://github.com/scanlin-prog/mesto</a><br></br>
                </p>
            </div>
        </section>
    )
}

export default About;