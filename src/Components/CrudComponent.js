import React, { Component } from "react";

class CrudComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newPost: {
        title: "",
        body: "",
      },
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }));
  };

  handleCreate = () => {
    const { newPost } = this.state;

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        this.setState({ newPost: { title: "", body: "" } });
        this.fetchPosts();
      });
  };

  handleUpdate = (id, updatedPost) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedPost),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        this.fetchPosts();
      });
  };

  handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then(() => {
      this.fetchPosts();
    });
  };

  render() {
    const { posts, newPost } = this.state;

    return (
      <div>
        <h1>CRUD Operations</h1>
        <div>
          <h2>Create Post</h2>
          <input
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) =>
              this.setState({ newPost: { ...newPost, title: e.target.value } })
            }
          />
          <textarea
            placeholder="Body"
            value={newPost.body}
            onChange={(e) =>
              this.setState({ newPost: { ...newPost, body: e.target.value } })
            }
          />
          <button onClick={this.handleCreate}>Create</button>
        </div>
        <div>
          <h2>Posts</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                {post.title}
                <button
                  onClick={() =>
                    this.handleUpdate(post.id, { title: "", body: "" })
                  }
                >
                  Update
                </button>
                <button onClick={() => this.handleDelete(post.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CrudComponent;
