import React, { Component } from 'react';
import './Movie.css';

let getInfo = (movie) => ({
  img: movie.poster_path, title: movie.title,
  score: movie.vote_average, duration: movie.runtime,
  date: movie.release_date, genre: movie.genres[0] ? movie.genres[0].name : "Not Defined",
  description: movie.overview, id: movie.id
});

class Movie extends Component {

  render() {
    let data = getInfo(this.props.data)
    return (
      <div className="movie-card" key={data.id}>
        <img src={"https://image.tmdb.org/t/p/w200" + data.img} alt="Poster" className="card-img" />
        <div className="card-info">
          <div className="card-title">
            <h3>{data.title}</h3>
            <h3>{data.score}</h3>
          </div>
          <div className="card-tags">
            <div className="card-time">{data.duration}</div>
            <div className="card-divider"></div>
            <div className="card-date">{data.date}</div>
            <div className="card-divider"></div>
            <div className="card-genre">{data.genre}</div>
          </div>
          <p className="card-description">{data.description}</p>
          <div className="card-buttons">
            <button className="card-trailer" movie-id={data.id}>Ver Trailer</button>
            <a href="/#" className="card-addFavorite" movie-id={data.id}>Agregar a favoritos <i className="fas fa-heart"></i></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Movie;