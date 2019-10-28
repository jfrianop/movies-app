import React from 'react';
import MovieList from '../components/MovieList';
import APIHandler from '../components/APIHandler';

function Populars() {
  const category = "popular";
  return (
    <APIHandler category={category} render={data => <MovieList data={data} />} />
  )
}

export default Populars;