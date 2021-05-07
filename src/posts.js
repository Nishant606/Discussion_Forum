import React from 'react';
import { Link } from 'react-router-dom';
const Posts = ({id, title, text})=>{
    return(
        <div className="posts">   
            <h1 className= "title" ><Link to={`post/${id}`} 
            style={{ color :"white",textDecoration:"none"}} exact>{title}</Link></h1>
            <label className= "description">{text}</label>
        </div>
    );

}

export default Posts;