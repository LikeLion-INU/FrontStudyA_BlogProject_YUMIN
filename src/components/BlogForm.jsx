import React, { useState } from 'react';
import styled from 'styled-components';

function BlogForm({ addPost, onBack }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) return;
        addPost(title, content);
        setTitle('');
        setContent('');
    };

    return (
        <FormContainer>
        <BackButton onClick={onBack}>← 돌아가기</BackButton>
        <form onSubmit={handleSubmit}>
            <InputWrapper>
            <Input
                type="text"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextArea
                placeholder="내용을 입력하세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            </InputWrapper>
            <SubmitButton type="submit">작성</SubmitButton>
        </form>
        </FormContainer>
    );
}

export default BlogForm;



// styled-components
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const BackButton = styled.button`
    align-self: flex-start;
    background: none;
    border: none;
    font-size: 14px;
    cursor: pointer;
`;

const InputWrapper = styled.div`
    background-color: #fff;
    padding: 24px;
    padding-bottom: 150px;
    margin-bottom: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Input = styled.input`
    width: 95%;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #ccc;
    padding: 10px;
    font-size: 18px;
    outline: none;
    margin: 0 auto; 
`;


const TextArea = styled.textarea`
    width: 100%;
    height: 160px;
    background-color: transparent;
    border: none;
    padding: 12px 0;
    font-size: 16px;
    resize: none;
    outline: none;
    margin-top: 24px;
        margin-left: 10px;
    box-sizing: border-box;
`;

const SubmitButton = styled.button`
    padding: 10px 16px;
    font-size: 16px;
    cursor: pointer;
`;
