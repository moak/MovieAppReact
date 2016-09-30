const defaultState = [];

export default (state = defaultState, action) => {

  switch (action.type) {
    case 'ADD_MOVIE_SUCCESS':
      return state.concat(action.movie);

    case 'GET_MOVIES_SUCCESS':
      return state.concat(action.movies);

    case 'DELETE_MOVIE_API_SUCCESS':
    console.log('delete success');
      return state;

    case 'DELETE_MOVIE':
      return state.filter((item) => (item.title !== action.title))

    default:
      return state;
  }
};
