import React, { Component } from 'react';
import Movie from '../Movie/Movie';

class MoviesList  extends Component {

  render() {

    return (
      <div>
        <Movie title='Titanic'/>
        <Movie title='Fifa2016'/>
        <Movie title='PES89'/>
      </div>
    );
  }
}

export default MoviesList;
