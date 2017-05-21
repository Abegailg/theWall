import React from "react";


class PostItem extends React.Component{
    render(){
        return (
            <div>
            <h1>{this.props.post._author.username} | {new Date(this.props.post.createdAt).toLocaleDateString()}</h1>
            <h1>{this.props.posts.posts}</h1>
           </div>
        )
    }
}

export default PostItem;