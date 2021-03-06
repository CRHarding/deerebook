import React from 'react';
import PostContainer from './PostContainer';

const Profile = (props) => {
  return (
    <div>
      <h3>{props.user.name}</h3>
      <h3>{props.user.username}</h3>
      <img src={props.user.image} />
      {props.user.friendList.map(friend => <p>{friend.name.first}</p>)}
      <PostContainer posts={props.user.postList} />
    </div>
  )
}

export default Profile;
