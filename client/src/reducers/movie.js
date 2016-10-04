const defaultState = [];

export default (state = defaultState, action) => {

  switch (action.type) {
    case 'ADD_MOVIE_SUCCESS':
      return state.concat(action.movie);

    case 'ADD_MOVIE_FAILURE':
      console.log('this movie already exists');
      return state;

    case 'GET_MOVIES_SUCCESS':
      return state.concat(action.movies);


    case 'EDIT_MOVIE_SUCCESS':

      return state.map((movie) => {
        if (movie.id === action.movie.id) {
          return Object.assign({}, movie, {
            title: action.movie.title,
            description: action.movie.description,
          })
        }
        return movie
      })

    case 'DELETE_MOVIE_API_SUCCESS':
      var newState = state.filter((movie) => {
        return movie.id !== action.id
      })
      console.log('newState', newState);

      return newState;

    case 'DELETE_MOVIE':
      return state.filter((item) => (item.title !== action.title))

    default:
      return state;
  }
};
