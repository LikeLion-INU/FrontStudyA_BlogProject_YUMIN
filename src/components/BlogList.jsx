import React from 'react';
import styled from 'styled-components';



function BlogList({ posts, onSelectPost }) {
    return (
    <div>
        <h2>글 목록</h2>
        {posts.map(post => (
        <PostItem key={post.id} onClick={() => onSelectPost(post)}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 50)}...</p>
        </PostItem>
        ))}
    </div>
    );
}

export default BlogList;


// styled-components
const PostItem = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;

    &:hover {
        background-color: #f4f4f4;
    }
`;