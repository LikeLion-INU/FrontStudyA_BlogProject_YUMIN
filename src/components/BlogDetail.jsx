import React, { useState } from 'react';
import styled from 'styled-components';

const BlogDetail = ({ post, onBack, deletePost, addComment, deleteComment }) => {
    const [comment, setComment] = useState('');

    const handleAddComment = () => {
        if (!comment.trim()) return;
        addComment(post.id, comment);
        setComment('');
    };

    return (
        <DetailWrapper>
        <BackButton onClick={onBack}>← 돌아가기</BackButton>

        <PostCard>
            <Header>
            <Title>{post.title}</Title>
            <DeleteButton onClick={() => deletePost(post.id)}>삭제</DeleteButton>
            </Header>
            <Content>{post.content}</Content>
        </PostCard>

        <CommentSection>
            <h3>댓글</h3>
            <CommentList>
            {post.comments.map((c) => (
                <CommentItem key={c.id}>
                {c.text}
                <SmallDelete onClick={() => deleteComment(post.id, c.id)}>삭제</SmallDelete>
                </CommentItem>
            ))}
            </CommentList>
            <CommentInputRow>
            <CommentInput
                placeholder="댓글을 입력하세요"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <SubmitButton onClick={handleAddComment}>등록</SubmitButton>
            </CommentInputRow>
        </CommentSection>
        </DetailWrapper>
    );
};

export default BlogDetail;



// styled-components
const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const BackButton = styled.button`
    background: none;
    border: none;
    font-size: 14px;
    cursor: pointer;
    align-self: flex-start;
    margin-bottom: 10px;
`;

const PostCard = styled.div`
    background-color: #fff;
    min-height: 200px;
    padding: 24px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: 30px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h2`
    font-size: 24px;
    margin: 0;
    flex: 1;
`;

const DeleteButton = styled.button`
    background: none;
    border: none;
    color: red;
    font-size: 14px;
    cursor: pointer;
`;

const Content = styled.p`
    font-size: 16px;
    line-height: 1.6;
    white-space: pre-line;
    margin-top: 20px;
`;

const CommentSection = styled.div`
    margin-top: 10px;
`;

const CommentList = styled.ul`
    list-style: none;
    padding: 0;
`;

const CommentItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #ddd;
`;

const SmallDelete = styled.button`
    font-size: 12px;
    color: red;
    background: none;
    border: none;
    cursor: pointer;
`;

const CommentInputRow = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 10px;
`;

const CommentInput = styled.input`
    flex: 1;
    padding: 8px;
`;

const SubmitButton = styled.button`
    padding: 8px 16px;
    font-size: 14px;
`;
