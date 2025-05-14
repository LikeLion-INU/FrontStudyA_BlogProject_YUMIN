import React, { useState } from 'react';
import styled from 'styled-components';

import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import BlogDetail from './components/BlogDetail';
import Profile from './components/Profile';
import GlobalStyle from './GlobalStyle';

function App() {
  const initialPosts = [
    {
      id: 1,
      title: '집가고 싶다',
      content: '36시간 자고싶네...',
      comments: [
        { id: 1, text: '저도요' },
        { id: 2, text: '힘내세요 ^^' }
      ]
    },
    {
      id: 2,
      title: '저메추',
      content: '저녁 뭐 먹을까요 추천해주세요',
      comments: []
    }
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isWriting, setIsWriting] = useState(false);

  const addPost = (title, content) => {
    const newPost = {
      id: Date.now(),
      title,
      content,
      comments: []
    };
    setPosts([newPost, ...posts]);
    setIsWriting(false);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
    setSelectedPost(null);
  };

  const addComment = (postId, text) => {
    setPosts(
      posts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, { id: Date.now(), text }]
            }
          : post
      )
    );
  };

  const deleteComment = (postId, commentId) => {
    setPosts(
      posts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.filter(comment => comment.id !== commentId)
            }
          : post
      )
    );
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>멋쟁이사자처럼 13th 미니 블로그</Title>
        <div style={{ marginTop: '30px' }}>
          <Profile />
        </div>

        {isWriting ? (
          <BlogForm addPost={addPost} onBack={() => setIsWriting(false)} />
        ) : selectedPost ? (
          <BlogDetail
            post={posts.find(p => p.id === selectedPost.id)} // 최신 상태 반영!
            onBack={() => setSelectedPost(null)}
            deletePost={deletePost}
            addComment={addComment}
            deleteComment={deleteComment}
          />
        ) : (
          <>
            <WriteButton onClick={() => setIsWriting(true)}>새 글 작성</WriteButton>
            <BlogList posts={posts} onSelectPost={setSelectedPost} />
          </>
        )}
      </Container>
    </>
  );
}

export default App;


// styled-components
const Container = styled.div`
  padding: 50px 200px 0 200px;
  max-width: 800px;
  height: 100vh;
  margin: auto;
  background-color: #FFFBDE;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-bottom: 30px;
`;

const WriteButton = styled.button`
  padding: 10px 15px;
  margin: 20px 0;
`;