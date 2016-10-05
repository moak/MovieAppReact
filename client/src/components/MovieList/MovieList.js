import React, { PropTypes } from 'react'
import './MovieList.css';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='movieList'>
        {this.props.children}
      </div>
    )
  }
}

export default MovieList;
