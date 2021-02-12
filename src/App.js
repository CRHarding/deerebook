import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "Casey Harding",
        username: "CRHarding",
        image: "https://pyxis.nymag.com/v1/imgs/5e4/dfd/c59573793cc957a78d232f82d3832af173-17-thor.rsquare.w700.jpg",
        friendList: []
      },
      apiDataLoaded: false,
      potentialFriends: []
    }
  }

  render() {
    return (
      <div className="App">
        <h1>CaseyBook</h1>
        <Profile />
      </div>
    );
  }
}

export default App;
