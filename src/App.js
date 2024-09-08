import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import styled from 'styled-components';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<PostList posts={posts} />} />
          <Route path="/create" element={<CreatePost onCreate={addPost} />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;

// Styled-components
const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  min-height: 100vh;
  padding: 20px;
`;