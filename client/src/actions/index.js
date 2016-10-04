import Movie from '../services/movie';

export const GET_MOVIES         =  'GET_MOVIES';
export const GET_MOVIES_SUCCESS =  'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAILURE =  'GET_MOVIES_FAILURE';

export const ADD_MOVIE         =  'ADD_MOVIE';
export const ADD_MOVIE_SUCCESS =  'ADD_MOVIE_SUCCESS';
export const ADD_MOVIE_FAILURE =  'ADD_MOVIE_FAILURE';

export const EDIT_MOVIE         =  'EDIT_MOVIE';
export const EDIT_MOVIE_SUCCESS =  'EDIT_MOVIE_SUCCESS';
export const EDIT_MOVIE_FAILURE =  'EDIT_MOVIE_FAILURE';


// GET MOVIES
export const getMoviesSuccess = (res) => {
  console.log('res', res);
  return {
    type: GET_MOVIES_SUCCESS,
    movies: res.data,
  }
}

export const getMoviesFailure = () => {
  return {
    type: GET_MOVIES_FAILURE,
  }
}

export const getMovies = () => {
  console.log('get movie');
  return dispatch => {
    return Movie.getMovies().then(
      (res) => dispatch(getMoviesSuccess(res)),
      () => dispatch(getMoviesFailure())
    );
  };
};


// EDIT MOVIE
export const editMovieSuccess = (movie) => {
  return {
    type: EDIT_MOVIE_SUCCESS,
    movie: movie,
  }
}

export const editMovieFailure = () => {
  return {
    type: EDIT_MOVIE_FAILURE,
  }
}

export const editMovie = (movie) => {
  return dispatch => {
    return Movie.editMovie(movie).then(
      () => dispatch(editMovieSuccess(movie)),
      () => dispatch(editMovieFailure())
    );
  };
};


// ADD MOVIE
export const addMovieSuccess = (res) => {
  return {
    type: ADD_MOVIE_SUCCESS,
    movie: res.data,
  }
}

export const addMovieFailure = () => {
  return {
    type: ADD_MOVIE_FAILURE,
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

// DELETE MOVIE
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


export function deleteMovie(id) {
  return dispatch => {
    return Movie.deleteMovie(id).then(
      () => dispatch(deleteMovieApiSuccess(id)),
      () => dispatch(deleteMovieApiFailure())
    );
  };
}
