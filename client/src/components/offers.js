import React, {Component} from 'react';
import axios from 'axios';
import Post from './post';

class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {
        offers: []
    };
  }

  async componentDidMount() {
    await axios
    .get("https://sv-reqres.now.sh/api/offers")
    .then(res => this.setState({ offers: res.data.data }))
    .catch(err => console.log(err))
  }

  render() {
  return (
    <div>
      <ul>
        {this.state.offers.map(offer => (
          <Post listing={offer} key={offer.recid}/>
        ))}
      </ul>
    </div>
  );
  }
}

export default Offers;