import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

function validateInput(data) {
  let errors = {};

  if (data.title === '') {
    errors.title = 'This field is required';
  }

  if (data.description === '') {
    errors.description = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if  (!isValid) {
      this.setState({errors});
    }
    return isValid;
  }


  handleSubmit(e) {
    e.preventDefault();

    if (this.isValid()){
      let movie = {title: this.state.title, description: this.state.description};
      this.props.addMovie(movie);
      this.refs.title.value = '';
      this.refs.description.value = '';
      this.setState({title: '', description: '', errors: {}});
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Title: <input autoComplete="off" type="text" name="title" ref="title" onChange={this.handleChange} /> <br /> {this.state.errors.title}<br />
          Description: <input autoComplete="off" type="text" ref="description" name="description" onChange={this.handleChange} /> <br /> {this.state.errors.description}<br />
          <button type="submit" >Add</button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  handleAddMovie: React.PropTypes.func,
};


export default AddMovie;
