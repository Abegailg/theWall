import React, { Component } from 'react';
import   "./Dashboard.css";
import PostItem from "./PostItem.js";
import Axios from "axios";  

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.cancelToken = Axios.CancelToken.source();
        this.state = {posts: false, message:"try again"}
    }
   
    getPosts = () => {
        Axios.get(`http://54.245.42.196/posts/${this.props.match.params.userId}`, { headers: {
            Authorization: localStorage.getItem("jw-token")}
        }).then((result) => {
                console.log(result);
                this.setState({
                    posts: result.data.posts
                })
            }).catch((err) => {
                this.setState({
                    message: 'try again'
                })
            })
    }
  handleSubmit = (e) => {
        e.preventDefault()        
        Axios({
            method: "post",
            url: "http://54.245.42.196/posts/create",
            data: {username: " " , password: this.props.match.user_id },
            headers: {Authorization: localStorage.getItem("jw-token")}
        }).then((result) => {
            console.log("successful")
            localStorage.getItem("jw-token");
            this.props.history.push("/dashboard/:userId");
        }).catch((err) => {
            console.log("unsuccessful");
        })
    }
      render(){
        console.log("RENDER METHOD", this.state.posts);
        if(this.state.posts){
            var posts = this.state.posts.map((onePost)=>{
                return <PostItem key={onePost._id} post={onePost}/>
            })
            return(
                <div>
                    <h1>Welcome</h1>
                    <h4> Post </h4>
                    {posts}
                </div>
            )
        } else {
            return <h3> {this.state.message} </h3>
        }

    }

    componentDidMount(){
        this.getPosts();
    }
}

export default Dashboard;