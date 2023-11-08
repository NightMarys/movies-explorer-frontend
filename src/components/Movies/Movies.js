import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
  const {
    cards,
  } = props;

  return (
    <main className="content">
      <SearchForm  />
      <MoviesCardList cards={cards} />
    </main>
  );
}

export default Movies;