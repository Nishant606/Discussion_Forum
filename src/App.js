import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';
import Posts from './Components/posts'
import Post from './Pages/Post_Details';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Components/Nav'


function App() {
  const [post, setPost] = useState([]);
  const [newPost, setnewPost] = useState('');
  const [text, setText] = useState(); 
  const [title, setTitle] = useState('');
  useEffect(() =>{
    getPosts();
  },[newPost]);

  const getPosts = async ()=>{
    const res = await fetch("/getAllPosts");
    const data = await res.json()
    setPost(data);
  };

  const storePost = async e =>{
    setnewPost(text);
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
      <Nav/>
      <Switch>
        
        <Route path="/" exact>
        <form className="input-form" onSubmit={storePost}>
          <input className="input-title"  placeholder="Topic of Discussion" type="text" value={title} onChange={topic} required></input>
          <textarea className="input-content" rows="auto" placeholder="Content" type="text" value={text} onChange={content}></textarea>
          <button className="input-button" type="submit" value="Post">Post</button>
        </form>
        <div className='posts'>
        {post.map(post => (
          <Posts key= {post._id} id= {post._id} title= {post.title} text={post.content}></Posts>
        ))}
        </div>
        </Route>
        <Route path="/post/:id" exact component={Post}/>
        
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;