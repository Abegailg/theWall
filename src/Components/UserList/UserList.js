import React, { Component } from 'react';
import Axios from "axios"; 
import  "./UserList.css";

class UserList extends Component{
    constructor(props){
        super(props);
        this.cancelToken = Axios.CancelToken.source();
        this.state = {users: [], message:""}
    }

   componentDidMount(){
        Axios.get("http://54.245.42.196/users" ,
         {cancelToken: this.cancelToken.token})
            .then((result) => {
                this.setState({
                    users: result.data
              })  
           }).catch((err)=>{
            if(Axios.isCancel(err)){
                console.log(err.message);
                return;
            }
            console.log(err);
     })
  }
   render () {
       console.log(this.state.users);
       /*var users = [];
       for(var i =0; i < this.state.users.length; i++){
           users.push(
               <div>
                   <h2>{this.state.users[i].password}</h2>
                </div>
           )
       }*/
       var users = this.state.users.map((user) => {
           return(
               <tr>
                <td>{user.username}</td> 
                <td>{user.createdAt}</td>
                </tr>
           )
       })
        return (
            <div>
                <h3>User List</h3>
                
                    {users}      
            
            </div>
        )
    }
}
export default UserList;

