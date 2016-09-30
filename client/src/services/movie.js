import request from '../utils/request';

class Movie {

  static getMovies() {
    return request('GET', 'http://localhost:4000/movies');
  }

  static addMovie(movie) {
    console.log('movie in service', movie);
    return request('POST', 'http://localhost:4000/movies/', { title: movie.title, description: movie.description });
  }

  static deleteMovie(id) {
    return request('DELETE', 'http://localhost:4000/movies/' + id);
  }

}

export default Movie;
