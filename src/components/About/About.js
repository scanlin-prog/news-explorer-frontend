import './About.css';
import avatar from '../../images/author_avatar.png';

function About() {
    return (
        <section className="about">
            <img className="about__avatar" src={avatar} alt="Authot_avatar" />
            <div className="about__info">
                <h2 className="about__title">Об авторе</h2>
                <p className="about_describe">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
                <p className="about_describe">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
            </div>
        </section>
    )
}

export default About;