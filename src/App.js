import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';
import Post from './posts'


function App() {
  const [post, setPost] = useState([]);
  const [newPost, setnewPost] = useState('');
  const [text, setText] = useState();
  useEffect(() =>{
  },[newPost]);

  const storePost = e=>{
    setnewPost(text);
    e.preventDefault();
    setPost([text,...post]);
    setText('');
  }

  const content = e =>{
    setText(e.target.value);
  }

  return (
    <div className="App">
      <form className="input-form" onSubmit={storePost}>
        <input className="input-title" placeholder="Topic of Discussion" type="text" value={text} onChange={content}></input>
        <button className="input-button" type="submit" value="Post">Post</button>
      </form>
      {post.map(post => (
        <Post title= {post}></Post>
      ))}
      
    </div>
  );
}

export default App;
