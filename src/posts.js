import React from "react";

const Post = ({title, text})=>{
    
    return(
        <div className="posts">   
            <h1 className="title">{title}</h1>
            {text}
        </div>
    );

}

export default Post;