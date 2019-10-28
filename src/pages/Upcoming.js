import React from 'react';
import MovieList from '../components/MovieList';
import APIHandler from '../components/APIHandler';

function Upcoming() {
  const category = "upcoming";
  return (
    <APIHandler category={category} render={data => <MovieList data={data} />} />
  )
}

export default Upcoming;