import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile';
import FriendsPage from './components/FriendsPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "Casey Harding",
        username: "CRHarding",
        image: "https://pyxis.nymag.com/v1/imgs/5e4/dfd/c59573793cc957a78d232f82d3832af173-17-thor.rsquare.w700.jpg",
        friendList: [],
        postList: []
      },
      apiDataLoaded: false,
      potentialFriends: []
    }
  }

  componentDidMount = async () => {
    const friendOne = await axios.get("https://randomuser.me/api/");
    const friendTwo = await axios.get("https://randomuser.me/api/");
    const friendThree = await axios.get("https://randomuser.me/api/");
    const friendFour = await axios.get("https://randomuser.me/api/");
    const friendFive = await axios.get("https://randomuser.me/api/");

    const friends = [
      friendOne.data.results[0],
      friendTwo.data.results[0],
      friendThree.data.results[0],
      friendFour.data.results[0],
      friendFive.data.results[0]
    ];

    this.setState({
      potentialFriends: friends
    })
  }

  addFriend = (newFriend) => {
    const currentFriends = this.state.user;
    currentFriends.friendList.push(newFriend);

    const potentialFriends = this.state.potentialFriends;
    const newPotentialFriends = potentialFriends.filter(friend => {
      return newFriend.login.uuid !== friend.login.uuid
    })
    console.log(newPotentialFriends);

    this.setState({
      user: currentFriends,
      potentialFriends: newPotentialFriends
    })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/profile">Profile</Link>
          <Link to="/users">Users</Link>
        </nav>
        <h1>CaseyBook</h1>
        <Route path="/profile" render={() => (
          <Profile user={this.state.user} />
        )} />
        <Route path="/users" render={() => (
          <FriendsPage
            potentialFriends={this.state.potentialFriends}
            addFriend={this.addFriend}
          />
        )} />
        <footer>This is my footer</footer>
      </div>
    );
  }
}

export default App;
