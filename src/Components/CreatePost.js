import React, { Component } from "react";
import { useNavigate } from "react-router-dom";


const PostWrapper = (props) => {
  const navigate = useNavigate();
  return <CreatePost navigate={navigate} />;
};

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NewPost: {
        title: "",
        body: "",
       

      },
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      NewPost: {
        ...prevState.NewPost,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    const {NewPost}=this.state;
    e.preventDefault();
   
   fetch("https://jsonplaceholder.typicode.com/posts",{
    method :'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(NewPost),
   }
   )
   .then((response)=>response.json())
   .then((data)=>{this.setState({
 NewPost:data,
   })});
  
   if(NewPost.title && NewPost.body){
    this.props.navigate("/");
   }
  // console.log(NewPost,"news");
   
  };
  render() {
    const { NewPost } = this.state;
    return (
      <div>
        <h1 className="text-center text-2xl mt-2">Create new Post</h1>
        <div className="flex justify-center ">
          <form onSubmit={this.handleSubmit} className="h-60 text-black w-96 bg-gray-900 flex flex-col gap-4 justify-center items-center mt-16">
            <div className="flex gap-x-9">
              <label htmlFor="title" className="text-stone-100">Title:</label>
              <input
                type="text"
                name="title"
                value={NewPost.title}
                onChange={this.handleChange}
              />
            </div>
            <div className="flex gap-x-6">
              <label htmlFor="body" className="text-stone-100">Body:</label>
              <textarea
                name="body"
                value={NewPost.body}
                onChange={this.handleChange}
              />
            </div>
          <button className="px-4 bg-blue-700 ml-7 rounded-sm">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
export default  PostWrapper;
