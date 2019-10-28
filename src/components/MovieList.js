import React, { Component } from 'react';
import APIHandler from '../components/APIHandler';
import Movie from '../components/Movie';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  render() {
    let data = this.props.data;
    return (<div className="card-container">
      {data.results.map(movie => {
        return (<APIHandler category={movie.id} render={data => {
          return <Movie data={data} key={movie.id} />
        }} />)
      })}
    </div>
    )
  }
}

export default MovieList;