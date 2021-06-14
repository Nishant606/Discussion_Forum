import React from 'react';
import { Link } from 'react-router-dom';
import Styles from '../Styles/Post.module.css'
const Posts = ({id, title, text})=>{
    return(
        <div className= {Styles.posts}>   
            <h1 className= {Styles.title} ><Link className= {Styles.title} to={`post/${id}`} 
                 exact>{title}</Link></h1>
            <label className= {Styles.des}>{text}</label>
        </div>
    );

}

export default Posts;