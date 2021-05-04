import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';
import Posts from './posts'
import Post from './Post';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'

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
  };

  const storePost = async e=>{
    setnewPost(text);
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
    const data = e.target.value;
    setTitle(data.toUpperCase());
  }
  const content = e =>{
    setText(e.target.value);
  }

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact>
        <form className="input-form" onSubmit={storePost}>
          <input className="input-title"  placeholder="Topic of Discussion" type="text" value={title} onChange={topic} required></input>
          <textarea className="input-content" rows="auto" placeholder="Content" type="text" value={text} onChange={content}></textarea>
          <button className="input-button" type="submit" value="Post">Post</button>
        </form>
        {post.map(post => (
          <Posts key= {post._id} id= {post._id} title= {post.title} text={post.content}></Posts>
        ))}
        </Route>
        <Route path="/post/:id" component={Post}/>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
