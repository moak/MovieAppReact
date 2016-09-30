import Movie from '../services/movie';

export const GET_MOVIES         =  'GET_MOVIES';
export const GET_MOVIES_SUCCESS =  'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAILURE =  'GET_MOVIES_FAILURE';

export const ADD_MOVIES         =  'ADD_MOVIES';
export const ADD_MOVIES_SUCCESS =  'ADD_MOVIES_SUCCESS';
export const ADD_MOVIES_FAILURE =  'ADD_MOVIES_FAILURE';


// GET MOVIES
export const getMoviesSuccess = (res) => {
  console.log('res', res);
  return {
    type: GET_MOVIES_SUCCESS,
    movies: res,
  }
}

export const getMoviesFailure = () => {
  return {
    type: GET_MOVIES_FAILURE,
  }
}

export const getMovies = () => {
  return dispatch => {
    return Movie.getMovies().then(
      (res) => dispatch(getMoviesSuccess(res)),
      () => dispatch(getMoviesFailure())
    );
  };
};


// ADD MOVIE
export const addMovieSuccess = (res) => {
  console.log(res);
  return {
    type: ADD_MOVIES_SUCCESS,
    movie: res,
  }
}

export const addMovieFailure = () => {
  return {
    type: ADD_MOVIES_FAILURE,
  }
}

export const addMovie = (movie) => {
  return dispatch => {
    return Movie.addMovie(movie).then(
      (res) => dispatch(addMovieSuccess(res)),
      () => dispatch(addMovieFailure())
    );
  };
};


export function deleteMovieAPI(id) {
  return dispatch => {
    return Movie.deleteMovie(id).then(
      (res) => dispatch(deleteMovieApiSuccess(res)),
      () => dispatch(deleteMovieApiFailure())
    );
  };
}

export function deleteMovieApiSuccess(id) {
  return {
    type: 'DELETE_MOVIE_API_SUCCESS',
    id: id,
  }
}

export function deleteMovieApiFailure(id) {
  return {
    type: 'DELETE_MOVIE_API_FAILURE',
  }
}


// export function addMovie(movie) {
//   return {
//     type: 'ADD_MOVIE',
//     title: movie.title,
//     description: movie.description,
//   }
// }

export function deleteMovie(title) {
  return {
    type: 'DELETE_MOVIE',
    title: title,
  }
}
