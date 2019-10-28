import React from 'react';
import MovieList from '../components/MovieList';
import APIHandler from '../components/APIHandler';

function NowPlaying() {
  const category = "now_playing";
  return (
    <APIHandler category={category} render={data => <MovieList data={data} />} />
  )
}

export default NowPlaying;