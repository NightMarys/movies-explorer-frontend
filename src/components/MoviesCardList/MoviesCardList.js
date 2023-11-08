import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ cards, saved  }) => {
  return (
    <section className='movies'>
      <ul className='movies__card-list'>
        {cards.map((card) => (
          <MoviesCard />
        ))}
      </ul>
      <div className='movies__wrapper'>
        {!saved && (
          <button
            type='button'
            className='movies__button-more'
           // onClick={onClickMore}
          >
            Ещё
          </button>
        )}
      </div>
    </section>
  );
};


export default MoviesCardList;