import React from "react";
import {useState, useEffect} from 'react';
import Comment from '../Components/Comments.js';
import Styles from '../Styles/Posts.module.css';

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
        await fetch(`/post/addcomment/${id}`,option);
        setcommenttext('');
    }

    const commentfield = e =>{
        setcommenttext(e.target.value);
    }
    
    useEffect(() => {     
        getPostDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    
    return (  
        <div>
            <div className={Styles.post}>
            <h1 className= {Styles.title}>{PostDetails.title}</h1>
            <p className= {Styles.content}>{PostDetails.content}</p>
            <form className={Styles.inputform} onSubmit={addComment}>
            <textarea className={Styles.inputcontent} rows="auto" placeholder="Comment" value={commenttext} onChange={commentfield}></textarea>
            <button type="submit">comment</button>
            </form>
            </div>
            <div className={Styles.comment}>
                {
                    comment.map(k => (
                    <Comment data={k}/>
                    ))
                }
            </div>
        </div>
        
    );

}

export default Post;