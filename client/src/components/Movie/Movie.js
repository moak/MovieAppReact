import React, { Component } from 'react';
import './Movie.css'

class Movie extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      editing: false,
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.props.handleEditChange();
  }

  enableEditing(e) {
    e.preventDefault();
    this.setState({editing: true});
  }

  disableEditing() {
    this.setState({editing: false});
    this.props.saveChange(this.props.id, this.refs.title.value, this.refs.description.value)
  }


  render() {

    const { id, title, description } = this.props;

    return (
      <div className="movie">
        {this.state.editing &&
          <div>
            Title: <input autoComplete="off"  type="text" name="title" ref="title" defaultValue={this.props.title} /> <br /> <br />
            Description: <input autoComplete="off" type="text" ref="description" name="description" defaultValue={this.props.description}/> <br />
            <a  href='#' onClick={(event) => this.disableEditing()}>FINISH</a>
          </div>
        }

        { !this.state.editing &&
          <div>
            <p>ID: { id }</p>
            <p>Title: { title }</p>
            <p>Description: { description }</p>
            <a href='#' onClick={(event) => this.enableEditing(event)}>EDIT</a>
          </div>
        }


      </div>
    );
  }
}


export default Movie;
