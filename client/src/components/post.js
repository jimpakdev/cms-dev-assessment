import React, {Component} from 'react';
import fallback from '../img/fallback.jpg'

class Post extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
        <img src={fallback} alt="Fallback Image" /> 
        {this.props.listing.title}
        {this.props.listing.description}
      </div>
    );
  }
}

export default Post;