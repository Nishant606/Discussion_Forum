import React from 'react';
import Styles from '../Styles/Posts.module.css'
const Comment = ({data})=>{
    return(
        <div className={Styles.commentcontent}>   
            <label className= "description">{data}</label>
        </div>
    );

}

export default Comment;