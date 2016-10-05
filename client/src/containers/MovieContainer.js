import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Movie from '../components/Movie/Movie';
import MovieList from '../components/MovieList/MovieList';
import AddMovie from '../components/AddMovie/AddMovie';
import { addMovie, deleteMovie, getMovies, editMovie } from '../actions/index';

class MovieContainer extends Component {

  constructor(props) {
    super(props)
    this.saveChange = this.saveChange.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  handleDeleteMovie(e, title) {
    e.preventDefault();
    this.props.deleteMovie(title);
  }

  componentDidMount() {
    this.props.getMovies();
  }

  saveChange(id, title, description) {
    const movie = { id, title, description };
    this.props.editMovie(movie);
  }

  deleteMovie(id) {
    this.props.deleteMovie(id);
  }

  render() {
    const movieList = this.props.movies.map((movie, i) => {
      return (
        <Movie
          key={i}
          id={movie.id}
          title={movie.title}
          description={movie.description}
          saveChange={this.saveChange}
          deleteMovie={this.deleteMovie}
        />
      );
    });

    return (
      <div>
        <AddMovie addMovie={this.props.addMovie} />
        <br />
        {this.props.movies.length}
        <MovieList>
          {movieList}
        </MovieList>
      </div>
    );
  }
}

MovieContainer.propTypes = {
  addMovie: React.PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     boundAddMovie: (movie) => {
//       dispatch(addMovie(movie));
//     },
//   }
// }


export default connect (mapStateToProps, { addMovie, deleteMovie, getMovies, editMovie }) (MovieContainer);
// export default connect (mapStateToProps, { addMovie }) (MovieContainer);
// export default connect (mapStateToProps, mapDispatchToProps) (MovieContainer);
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginFormContainer)
