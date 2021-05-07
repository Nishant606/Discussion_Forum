import React from 'react';
import { Link } from 'react-router-dom';
const Comment = ({data})=>{
    return(
        <div className="posts">   
            <label className= "description">{data}</label>
            
        </div>
    );

}

export default Comment;