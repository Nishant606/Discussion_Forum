import React from 'react';
import {useState} from 'react';
import Styles from '../Styles/Form.module.css'
import { Link } from 'react-router-dom';
import { link } from 'fs';
const CreatePost = ()=>{
    
   
    const [text, setText] = useState(); 
    const [title, setTitle] = useState('');

    const storePost = async e =>{
    e. preventDefault();
    console.log("dkajfklajsdlkfjkjlkjkjdlsakfjlkdsajflkj");
    const option = {
      method: 'POST',
      headers: {
          'CONTENT-TYPE' : 'application/json'
      },
      body: JSON.stringify({"title": title, "content": text, "comments": []})
    };
      const response = await fetch('/createDiscussion',option);
      console.log(response);
      setTitle('');
      setText('');
      window.location = "http://localhost:3000/";
    }
    const topic = e =>{
      const data = e.target.value;
      setTitle(data.toUpperCase());
    }
    const content = e =>{
      setText(e.target.value);
    }
    return(
        <div>
            <form className={Styles.inputform} onSubmit={storePost}>
                <input className={Styles.inputTitle}  placeholder="Topic of Discussion" type="text" value={title} onChange={topic} required></input>
                <textarea className={Styles.inputcontent} rows="auto" placeholder="Content" type="text" value={text} onChange={content}></textarea>
                <button className={Styles.inputbutton} type="submit" value="Post">Post</button>
                
            </form>
        </div>
    )
}

export default CreatePost;