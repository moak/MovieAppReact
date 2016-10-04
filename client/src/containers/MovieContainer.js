import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Movie from '../components/Movie/Movie';
import AddMovie from '../components/AddMovie/AddMovie';
import { addMovie, deleteMovie, getMovies, editMovie } from '../actions/index';

class MovieContainer extends Component {

  constructor(props) {
    super(props)
    this.saveChange = this.saveChange.bind(this);
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

  renderList() {

    return this.props.movies.map((movie, i) => {
      console.log(movie);
      return (
        <tr key={i}>
          <td><Movie id={movie.id} title={movie.title} description={movie.description} saveChange={this.saveChange} /></td>
          <td><a href="" onClick={(event) => this.handleDeleteMovie(event, movie.id)}>x</a></td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <AddMovie addMovie={this.props.addMovie} />
        <br />
        Movie: {this.props.movies.length}
        <table>
          <thead>
            <tr>
              <th>Movie</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
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
