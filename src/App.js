import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';
import Posts from './Components/posts'
import Post from './Pages/Post_Details'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Components/Nav';
import CreatePost from './Pages/CreatePost'


function App() {
  const [post, setPost] = useState([]);
  useEffect(() =>{
    getPosts();
  }, []);
  const getPosts = async ()=>{
    const res = await fetch("/getAllPosts");
    const data = await res.json();
    data.sort(function (a, b) {
      return  b.timestamp - a.timestamp;
    });

    setPost(data);
  };

  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
        
        <Route path="/" exact>
        
        <div className='home'>
          <div className='top'>
            <h2>Top Discussions</h2>
            <ul>
              <li>lOisdlkfaj;laksdj ijlksdj flkj</li>
              <li>lOisdlkfaj;laksdj ijlksdj flkj</li>
              <li>lOisdlkfaj;laksdj ijlksdj flkj</li>
              <li>lOisdlkfaj;laksdj ijlksdj flkj</li>
              <li>lOisdlkfaj;laksdj ijlksdj flkj</li>

            </ul>
          </div>
          <div className='posts'>
            <h1>Recent Discussions</h1>
            {post.map(post => (
              <Posts key= {post._id} id= {post._id} title= {post.title} text={post.content}></Posts>
            ))}
          </div>
        </div>
        </Route>
        <Route path="/post/:id" exact component={Post}/>
        <Route path="/createPost" exact component={CreatePost}/>
        
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;