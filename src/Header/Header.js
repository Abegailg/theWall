import React, { Component } from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return (
            <div className="nav-bar">
                <ul id='myNav'>
                    <li>
                        <Link to="/">Get Lecture</Link>
                    </li>
                    <li>
                        <Link to="/film">Get Assignment</Link>
                    </li>   
                    <li>
                        <Link to="/post">Post Lecture</Link>
                    </li>
                    <li>
                        <Link to="/users">User List</Link>
                    </li>                    
                    <li>
                        <Link to="/login">Login Lecture</Link>
                    </li>                                   
                </ul>
            </div>
        )
    }
}
export default Header