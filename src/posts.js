import React from "react";

const Post = ({title})=>{
    
    return(
        <div className="posts">   
            <h1 className="title">{title}</h1>
        </div>
    );

}

export default Post;