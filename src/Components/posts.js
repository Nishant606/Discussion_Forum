import React from 'react';
import { Link } from 'react-router-dom';
import Styles from '../Styles/Post.module.css'
import Upvote from './upvote';
const Posts = ({id, title, text})=>{
    return(
        <div className= {Styles.posts}>   
            <Link className= {Styles.title} to={`post/${id}`} 
                 exact>{title}</Link>
            <Upvote id={id}/>
        </div>
    );

}

export default Posts;