import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutMe.css';
import photo from '../../images/photo.jpg';

const AboutMe = () => {
  return (
    <section className='about-me main__container' id='about-me'>
      <div className='about-me__container'>
        <SectionTitle>Студент</SectionTitle>
        <div className='about-me__wrapper'>
          <div className='about-me__info'>
            <h3 className='about-me__title'>Марина</h3>
            <p className='about-me__subtitle'>Фронтенд-разработчик, 31 год</p>
            <p className='about-me__description'>
              Идею, не вызывающую никаких опасений, и вовсе нельзя называть идеей.
            </p>
            <a href="https://github.com/NightMarys" target="_blank" rel="noreferrer" className="about-me__link">
            Github
          </a>
          </div>

          <img className='about-me__img' src={photo} alt='Фото студента' />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;