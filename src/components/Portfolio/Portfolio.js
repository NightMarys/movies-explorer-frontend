import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <Navigation className='portfolio__nav'>
          <ul className='portfolio__list'>
            <li className='portfolio__item'>
              <Link className='portfolio__link'
              to='https://github.com/NightMarys/how-to-learn'
              target='_blank'>
                Статичный сайт
              </Link>
            </li>
            <li className='portfolio__item'>
              <Link
                className='portfolio__link'
                to='https://github.com/NightMarys/russian-travel'
                target='_blank'
              >
                Адаптивный сайт
              </Link>
            </li>
            <li className='portfolio__item'>
              <Link
                className='portfolio__link'
                to='https://github.com/NightMarys/mesto'
                target='_blank'
              >
                Одностраничное приложение
              </Link>
            </li>
          </ul>
        </Navigation>
      </div>
    </section>
  );
};

export default Portfolio;