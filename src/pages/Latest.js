import React from 'react';
import Movie from '../components/Movie';
import APIHandler from '../components/APIHandler';

function Latest() {
  const category = "latest";
  return (
    <APIHandler category={category} render={data => <Movie data={data} />} />
  )
}

export default Latest;