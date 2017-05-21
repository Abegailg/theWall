import React, { Component } from 'react';
import Axios from "axios"; 

class Post extends Component{
    constructor(props){
        super(props);
        this.cancelToken = Axios.CancelToken.source();
        this.state = {username:"",password:"",errors:""}
    }
       handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
      register = (e) => {
        e.preventDefault();
        Axios({
            method: "post",
            url: "http://54.245.42.196/users/create",
            data: { username: this.state.username, password: this.state.password }
        }).then((result) => {
            console.log(result);
            this.setState({errors: "", username: '', password: ""})
        }).catch((err) => {
            console.log(err);
            console.log(err.response.data)
            this.setState({errors: err.response.data.errors})
        })
    } 
   
     render(){
        return (
            <div className="post-lecture">
                <div className="container">
                    <h1>Register Form</h1>
                    <form onSubmit={this.register}>
                        <label>Username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="username" 
                            onChange={this.handleChange}
                            value={this.state.username} 
                        />
                        <label>Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            name="password" 
                            onChange={this.handleChange} 
                            value={this.state.password} 
                        />
                        <input type="submit" className="btn btn-primary" />
                    </form>
                </div>
            </div>
        )
    }
} 
export default Post;