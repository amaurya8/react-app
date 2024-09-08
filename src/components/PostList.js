import React from 'react';
import styled from 'styled-components';

const PostList = ({ posts }) => {
  return (
    <PostContainer>
      <h2>Available Posts</h2>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <Post key={index}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>Price: ${post.price}</p>
          </Post>
        ))
      ) : (
        <p>No posts available. Add some posts!</p>
      )}
    </PostContainer>
  );
};

export default PostList;

const PostContainer = styled.div`
  margin-top: 20px;
`;

const Post = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;