import React from 'react';

const Comment = ({data})=>{
    return(
        <div className="posts">   
            <label className= "description">{data}</label>
            
        </div>
    );

}

export default Comment;