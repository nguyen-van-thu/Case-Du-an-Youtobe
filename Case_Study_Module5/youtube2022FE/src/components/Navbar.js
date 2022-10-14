import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LoginGG } from "../redux/slice";
import {gapi} from "gapi-script";
import {Avatar} from "@mui/material";
import GoogleLogin from "react-google-login";

const Container = styled.div`
    position: sticky;
    top: 0;
    backround-color: ${({theme}) => theme.bgLighter};
    height: 56px;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    padding: 0px 20px;
    position: relative;
`
const Search = styled.div`
    width: 40%;
    position: absolute;
    left: 0px;
    right: 0px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px
`
const Input = styled.input`
    border: none;
    background-color: transparent;
    width: 100%
`

const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`
export const Navbar = () =>{
    let dispatch = useDispatch();
    const navigate = useNavigate()
    let user = useSelector(state => state.videos.user.currentUser)
    console.log(user)
    const clientId = '703313981953-fh1s05g3g9aaf7qqkls8ei2jmddal5pn.apps.googleusercontent.com'
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });
    const onSuccess = async (response) => {
        console.log(response)
        await dispatch(LoginGG(response.profileObj))
        navigate('')
    }

    const onFailure = (response) => {
        console.log(response);
    }
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="Search"></Input>
                    <SearchIcon></SearchIcon>
                </Search>
                {
                    user?
                        <Avatar src={user.imageUrl}/>:
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Sign in"
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                        />
                }
            </Wrapper>
        </Container>
    )
}