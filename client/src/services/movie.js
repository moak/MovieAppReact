import axios from 'axios';

class Movie {

  static getMovies() {
    return axios.get('http://localhost:4000/movies')
  }

  static addMovie(movie) {
    console.log('movie in service', movie);
    return axios.post('http://localhost:4000/movies/', { title: movie.title, description: movie.description })
  }

  static deleteMovie(id) {
    return axios.delete('http://localhost:4000/movies/' + id)
  }

  static editMovie(movie) {
    console.log('service edit moviz');
    return axios.put('http://localhost:4000/movies/' + movie.id, { title: movie.title, description: movie.description })
  }
}

export default Movie;
