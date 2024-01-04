import React, { Component } from "react";
import { Link } from "react-router-dom";

class ViewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      searchQuery:'',
    };
  }
  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ post: data });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  
  handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then(() =>
     
      this.fetchPosts()
    );
  };

  handleSearch = (event) => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery }, () => {

    });
    console.log(searchQuery,"search");
  };

 

  render() {
    const { post } = this.state;
    const {searchQuery}=this.state;
    // console.log("posts", post);
    return (
      <div>
        <div className="flex justify-end  gap-x-8 mr-4 mt-3 items-center">
     
            <div className="">
              <input
                type="text"
                placeholder=" 🔍  Search Title..."
                value={searchQuery}
                onChange={this.handleSearch}
                className=" border-2 rounded p-1"
              />
        
          </div>
          <Link to={"/create-post"}>
            <button className="bg-sky-600 px-4 py-1 rounded">Add Post</button>
          </Link>
        </div>
        <h1 className="text-center text-2xl">View All posts</h1>
        <table className="table-auto md:border-spacing-4 bg-blue-600 text-black border-2 ml-16">
          <thead className="border-2">
            <tr>
              <th className="border-2">Id</th>
              <th className="border-2">Title</th>
              <th className="border-2">Body</th>
              <th className="border-2">Update</th>
              <th className="border-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {post?.filter((item)=>{
              return item.title.toLowerCase().includes(searchQuery)
            }).map((posts, index) => (
              <tr key={index} className="border-2">
                <td className="border-2">{posts?.id}</td>
                <td className="border-2">{posts?.title}</td>
                <td className="border-2">{posts?.body}</td>
                <td className="border-2">
                  <Link to={`/update-post/${posts?.id}`}>
                    <button
                      className="bg-green-600 px-4 py-0 rounded" /*onClick={()=>this.handleUpdate(posts.id)}*/
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td className="border-2">
                  <button
                    onClick={() => this.handleDelete(posts.id)}
                    className="bg-red-500 px-4 py-0 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ViewPost;
