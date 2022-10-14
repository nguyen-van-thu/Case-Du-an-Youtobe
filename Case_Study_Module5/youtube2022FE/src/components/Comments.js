import React from "react";
import styled from "styled-components";
import { Comment } from "./Comment";
const Container = styled.div`

`;

const NewComment = styled.div`
    display: flex;
    align-item: center;
    gap: 10px
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.soft};
    backround-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
`;
export const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src="https://www.youtube.com/watch?v=yIaXoop8gl4"/>
                <Input placeholder="Bình luận"/>
            </NewComment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
        </Container>
    )
}
