import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Use Routes instead of Switch */}
        <Routes>
          <Route exact path="/" element={<PostList posts={posts} />} />
          <Route path="/create" element={<CreatePost onCreate={addPost} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;