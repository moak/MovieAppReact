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
        {this.state.editing &&
          <div>
            <p>ID: { id }</p>
            <p>Title: <input autoComplete="off"  type="text" name="title" ref="title" defaultValue={this.props.title} /></p>
            <p>Description: <input autoComplete="off" type="text" ref="description" name="description" defaultValue={this.props.description}/></p>
            <p><a href='#' onClick={(event) => this.stopEditing()}>Save</a></p>
          </div>
        }
        { !this.state.editing &&
          <div>
            <p>ID: { id }</p>
            <p>Title: { title }</p>
            <p>Description: { description }</p>
            <p><a href='#' onClick={(event) => this.startEditing(event)}>Edit</a></p>
            <p><a href='#' onClick={(event) => this.handleDelete(event)}>x</a></p>
          </div>
        }
      </div>
    );
  }
}

export default Movie;
