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
    const addComment= async e =>{
        const option = {
            method: 'POST',
            headers: {
                'CONTENT-TYPE' : 'application/json'
            },
            body: JSON.stringify({"comments": commenttext})
        };
        const response = await fetch(`/post/addcomment/${id}`,option);
        setcommenttext('');
    }

    const commentfield = e =>{
        setcommenttext(e.target.value);
    }
    
    useEffect(() => {     
        getPostDetails();
    },[]);

    
    return (
        <div className="posts" >   
            <h1 className= "title">{PostDetails.title}</h1>
            <label className= "description">{PostDetails.content}</label>
            <textarea style={{whiteSpace:"pre-wrap"}}rows="auto" placeholder="Comment" value={commenttext} onChange={commentfield}></textarea>
            {
                comment.map(k => (
                <Comment data={k}/>
                ))

            }
            <button onClick={addComment}>comment</button>
        </div>
    );

}

export default Post;