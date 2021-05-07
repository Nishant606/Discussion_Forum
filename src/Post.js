import React from "react";
import {useState, useEffect} from 'react';
import Comment from './Comments'

const Post = ( match )=>{
    const id = match.match.params.id;
    const [PostDetails, setPostDetails] = useState([]);
    const [comment, setcomment] = useState([]);
    const [commenttext, setcommenttext] = useState('');

    const getPostDetails = async () =>{
        const res = await fetch(`/post/${id}`);
        const data = await res.json();
        console.log(data);
        setPostDetails(data);
        setcomment(data.comments);
        
        
    };
    
    useEffect(() => {     
        getPostDetails();
    },[]);

    const addComment= async e =>{
        
        const option = {
            method: 'POST',
            headers: {
                'CONTENT-TYPE' : 'application/json'
            },
            body: JSON.stringify({"comments": ""})
        };
        const response = await fetch('/createDiscussion',option);
    }

    const commentfield = e =>{
        setcommenttext(e.target.value);
    }
    return (
        <div className="posts" >   
            <h1 className= "title">{PostDetails.title}</h1>
            <label className= "description">{PostDetails.content}</label>
            <textarea style={{whiteSpace:"pre-wrap"}}rows="auto" placeholder="Comment" onChange={commentfield}></textarea>
            
            {
                comment.map(k => (
                <Comment data={k}/>
                ))

            }
        </div>
    );

}

export default Post;