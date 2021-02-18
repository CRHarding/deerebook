import React, { Component } from 'react';

class CreatePostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    //           ^----- this is the same as...
    // const name = e.target.name;
    // const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { title, content } = this.state;
    //          ^---- this is the same as...
    // const title = this.state.title;
    // const content = this.state.content;
    return (
      <form onSubmit={(e) => this.props.createPost(e, this.state)}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <label htmlFor="content">Post Text</label>
        <textarea
          name="content"
          value={content}
          onChange={this.handleChange}
        />
        <input type="submit" value="Create a post!" />
      </form>
    )
  }
}

export default CreatePostForm;
