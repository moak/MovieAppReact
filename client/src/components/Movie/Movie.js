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

    // this.props[e.target.name] = e.target.value;

    this.props.handleEditChange();
  }

  enableEditing() {
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
            <p onClick={(event) => this.disableEditing()}>FINISH</p>
          </div>
        }

        { !this.state.editing &&
          <div>
            <p>ID: { id }</p>
            <p>Title: { title }</p>
            <p>Description: { description }</p>
            <p onClick={(event) => this.enableEditing()}>EDIT</p>
          </div>
        }


      </div>
    );
  }
}


export default Movie;
