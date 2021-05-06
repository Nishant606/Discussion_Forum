import React from "react";
import {useState, useEffect} from 'react';

const Post = ( match )=>{
    const id = match.match.params.id;
    const [PostDetails, setPostDetails] = useState('');
    const [Comment, setComment] = useState('');
    useEffect(() => {
        getPostDetails();
    },[]);

    const getPostDetails = async () =>{
        const res = await fetch(`/post/${id}`);
        const data = await res.json();
        setPostDetails(data);
        console.log(PostDetails);
    }
    return(
        <div className="posts" >   
            <h1 className= "title"></h1>
            <label className= "description"></label>
            <textarea style={{whiteSpace:"pre-wrap"}}rows="auto" placeholder="Comment"></textarea>

        </div>
    );

}

export default Post;