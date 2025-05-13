// App.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import BlogDetail from './components/BlogDetail';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

function App() {
  // 초기 더미 게시글 데이터
  const initialPosts = [
    {
      id: 1,
      title: '첫 번째 글',
      content: '이것은 첫 번째 블로그 글입니다.',
      comments: [
        { id: 1, text: '좋은 글이에요!' },
        { id: 2, text: '잘 읽었습니다.' }
      ]
    },
    {
      id: 2,
      title: '두 번째 글',
      content: '두 번째 글 내용이에요.',
      comments: []
    }
  ];

  const [posts, setPosts] = useState(initialPosts); // 게시글 목록 상태
  const [selectedPost, setSelectedPost] = useState(null); // 선택된 글 상세보기용

  // 글 작성 함수
  const addPost = (title, content) => {
    const newPost = {
      id: Date.now(),
      title,
      content,
      comments: []
    };
    setPosts([newPost, ...posts]);
  };

  // 글 삭제 함수
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
    setSelectedPost(null);
  };

  // 댓글 추가 함수
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

  // 댓글 삭제 함수
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
    <Container>
      <h1>📝 미니 블로그</h1>
      <BlogForm addPost={addPost} />
      {selectedPost ? (
        <BlogDetail
          post={selectedPost}
          onBack={() => setSelectedPost(null)}
          deletePost={deletePost}
          addComment={addComment}
          deleteComment={deleteComment}
        />
      ) : (
        <BlogList posts={posts} onSelectPost={setSelectedPost} />
      )}
    </Container>
  );
}

export default App;
