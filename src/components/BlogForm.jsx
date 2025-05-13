import React, { useState } from 'react';
import styled from 'styled-components';


function BlogForm({ addPost }) {
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
    <Form onSubmit={handleSubmit}>
        <h2>✍ 글 작성</h2>
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
        <Button type="submit">작성</Button>
    </Form>
    );
}

export default BlogForm;


const Form = styled.form`
    margin-bottom: 20px;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
`;

const TextArea = styled.textarea`
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
    height: 100px;
`;

const Button = styled.button`
    padding: 10px 15px;
`;