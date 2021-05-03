import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';
import Post from './posts'

const baseURL = "http://localhost:4000";

function App() {
  const [post, setPost] = useState([]);
  const [newPost, setnewPost] = useState('');
  const [text, setText] = useState(); 
  const [title, setTitle] = useState('');
  useEffect(() =>{
    getPosts();
  },[newPost]);

  const getPosts = async ()=>{
    const res = await fetch(baseURL+"/getAllPosts");
    const data = await res.json()
    setPost(data);
    console.log(post);
  };

  const storePost = async e=>{
    setnewPost(text);
    e.preventDefault();
    const option = {
      method: 'POST',
      headers: {
          'CONTENT-TYPE' : 'application/json'
      },
      body: JSON.stringify({"title": title, "content": text})
    };
    const response = await fetch(baseURL+'/createDiscussion',option);
    console.log(response);
    setTitle('');
    setText('');
  }

  const topic = e =>{
    setTitle(e.target.value);
  }
  const content = e =>{
    setText(e.target.value);
  }

  return (
    <div className="App">
      <form className="input-form" onSubmit={storePost}>
        <input className="input-title" placeholder="Topic of Discussion" type="text" value={title} onChange={topic}></input>
        <input className="input-content" placeholder="Content" type="text" value={text} onChange={content}></input>
        <button className="input-button" type="submit" value="Post">Post</button>
      </form>
      {post.map(post => (
        <Post title= {post.title} text={post.content}></Post>
      ))}
      
    </div>
  );
}

export default App;
