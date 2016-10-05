import React, { Component } from 'react';
import './Movie.css'

class Movie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteMovie(this.props.id);
  }

  startEditing(e) {
    e.preventDefault();
    this.setState({editing: true});
  }

  stopEditing() {
    this.setState({editing: false});
    this.props.saveChange(this.props.id, this.refs.title.value, this.refs.description.value)
  }


  render() {

    const { id, title, description } = this.props;

    return (
      <div className="movie">
        <div className="movieThumb">
          <img src="http://placehold.it/140x100" />
        </div>
        {this.state.editing &&
          <div className="movieInfo" >
            <p>Title: <input autoComplete="off"  type="text" name="title" ref="title" defaultValue={this.props.title} /></p>
            <p>Description: <input autoComplete="off" type="text" ref="description" name="description" defaultValue={this.props.description}/></p>
            <div className="movieActions">
              <a href='#' onClick={(event) => this.stopEditing()}>Save</a>
            </div>
          </div>
        }
        { !this.state.editing &&
          <div className="movieInfo" >
            <p className='movieTitle'>{ title }</p>
            <p className='movieDescription'>{ description }{ description }{ description }</p>
            <div className="movieActions">
              <a href='#' onClick={(event) => this.startEditing(event)}>Edit</a>
              <a href='#' onClick={(event) => this.handleDelete(event)}>x</a>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Movie;
