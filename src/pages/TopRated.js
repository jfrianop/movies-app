import React from 'react';
import MovieList from '../components/MovieList';
import APIHandler from '../components/APIHandler';

function TopRated() {
  const category = "top_rated";
  return (
    <APIHandler category={category} render={data => <MovieList data={data} />} />
  )
}

export default TopRated;