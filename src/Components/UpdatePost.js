import React, { Component } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const UpdateWrapper=(props)=>{
  const navigate = useNavigate();
  const {id}=useParams();
  return <>
  <UpdatePost navigate={navigate} id={id}/>;

  </>
  
}
 class UpdatePost extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      EditPost:{
        title: '',
        body:'',
      }
    }
  }
  handleChange=(e)=>{
    const { name,value } = e.target;
    // Update the new post data in the state
    this.setState((prevState) => ({
      EditPost: {
        ...prevState.EditPost,
        [name]: value,
      },
    }));

  }

  handleUpdate =(e)=>{
    e.preventDefault();
    const{EditPost}=this.state;
    const {id}=this.props;
    console.log("update",EditPost);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(EditPost),
      headers: {
        'Content-Type': 'application/json',
      },}).then((response)=>response.json())
      .then((data)=>{this.setState({
        EditPost:data,
          })});
    const {navigate}=this.props;
    if (EditPost.title &&  EditPost.body){
      navigate("/");
  }
}
  render() {
    const{EditPost}=this.state;
    return (
      <div> <h1 className='text-center text-lg mt-8'>UpdatePost</h1>
 <div className="flex flex-col gap-4 justify-center items-center ">
          <form onSubmit={this.handleUpdate} className="h-60 text-black w-96 bg-gray-900 flex flex-col gap-4 justify-center items-center mt-16">
            <div className="flex gap-x-9">
              <label htmlFor="title" className="text-stone-100">Title:</label>
              <input
                type="text"
                name="title"
                value={EditPost.title}
                onChange={this.handleChange}
              />
            </div>
            <div className="flex gap-x-6">
              <label htmlFor="body" className="text-stone-100">Body:</label>
              <textarea
                name="body"
                value={EditPost.body}
                onChange={this.handleChange}
              />
            </div>
          <button className="px-4 bg-blue-700 ml-7 rounded-sm">Submit</button>
          </form>
        </div>

      </div>
    )
  }
}

export default UpdateWrapper