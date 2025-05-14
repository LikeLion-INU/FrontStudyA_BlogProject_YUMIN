import React, { useState } from 'react';
import styled from 'styled-components';
import profileImage from '../assets/profile.jpg';

function Profile() {
    const nickname = "유민";
    const [intro, setIntro] = useState("집가고싶어요");
    const [editing, setEditing] = useState(false);

    const handleSave = () => {
        setEditing(false);
    };

    return (
    <ProfileContainer>
        <ProfileImage src={profileImage} alt="프로필 사진" />
        <ProfileInfo>
            <Nickname>{nickname}</Nickname>
            {editing ? (
                <IntroRow>
                    <IntroInput value={intro} onChange={(e) => setIntro(e.target.value)} />
                    <Button onClick={handleSave}>저장</Button>
                </IntroRow>
            ) : (
                <IntroRow>
                    <IntroText>{intro}</IntroText>
                    <Button onClick={() => setEditing(true)}>수정</Button>
                </IntroRow>
            )}
        </ProfileInfo>
    </ProfileContainer>
    );
}

export default Profile;


// styled-components
const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 50px 0 30px;
`;

const ProfileImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
`;

const ProfileInfo = styled.div`
    flex: 1;
`;

const Nickname = styled.h3`
    margin: 0 0 5px;
`;

const IntroRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px; 
`;

const IntroText = styled.p`
    margin: 0;
`;

const IntroInput = styled.input`
    flex: 1;
    padding: 5px;
`;

const Button = styled.button`
    padding: 6px 10px;
    font-size: 14px;
`;
