import React, { useState } from 'react';
import styled from 'styled-components';


function BlogDetail({ post, onBack, deletePost, addComment, deleteComment }) {
    const [comment, setComment] = useState('');

    const handleAddComment = () => {
    if (!comment.trim()) return;
    addComment(post.id, comment);
    setComment('');
    };

    return (
    <Box>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <button onClick={() => deletePost(post.id)}>글 삭제</button>
        <button onClick={onBack}>← 돌아가기</button>

        <h3>💬 댓글</h3>
        {post.comments.map((c) => (
        <CommentBox key={c.id}>
            {c.text}
            <button onClick={() => deleteComment(post.id, c.id)}>삭제</button>
        </CommentBox>
        ))}
        <div style={{ marginTop: '10px' }}>
        <CommentInput
            placeholder="댓글을 입력하세요"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
        />
        <CommentButton onClick={handleAddComment}>등록</CommentButton>
        </div>
    </Box>
    );
}

export default BlogDetail;


const Box = styled.div`
    padding: 20px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
`;

const CommentBox = styled.div`
    margin-top: 10px;
`;

const CommentInput = styled.input`
    padding: 6px;
    width: 80%;
    margin-right: 5px;
`;

const CommentButton = styled.button`
    padding: 6px 10px;
`;
