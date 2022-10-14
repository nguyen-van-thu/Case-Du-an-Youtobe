import React from 'react';
import styled from 'styled-components';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Comments } from '../components/Comments';
import Card from './Card';
import { useSelector } from 'react-redux';

const Container = styled.div`
    display: flex;
    gap: 24px;
`

const Content = styled.div`
    flex: 5
`

const VideoWrapper = styled.div`

`

const Title = styled.h1`
    font-size: 18px;
    fint-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({theme}) => theme.text};
`

const Details = styled.div`
    display: flex;
    align-item: center;
    justify-content: space-between;
`

const Info = styled.span`
    color: ${({theme}) => theme.textSoft};
`

const Buttons = styled.div`
    display: flex;
    gap: 20px
`

const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    color: ${({theme}) => theme.text};
`

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5 solid ${({theme}) => theme.soft}
`

const Recommendation = styled.div`
    flex: 2
`

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`

const ChannelInfo = styled.div`
    display: flex;
    gap: 20px
`

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%
`

const ChannelDetail = styled.span`
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.text};
`

const ChannelName = styled.span`
    font-weight: 500;
`

const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({theme}) => theme.textSoft};
    font-size: 12px
`

const Description = styled.p`
    font-size: 14px;
`

const Subscribe = styled.button`
    background-color: red;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
`

const Video = () => {
    let video = useSelector(state => state.videos.video);
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe width="100%" height="420px" src={`https://www.youtube.com/embed/${video.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </VideoWrapper>
                <Title>{video.title}</Title>
                <Details>
                    <Info>{video.view} lượt xem - {video.dateCreate} </Info>
                    <Buttons>
                        <Button><ThumbUpAltIcon/> {video.like}</Button>
                        <Button><ThumbDownAltIcon/> Dislike</Button>
                        <Button><ReplyIcon/> Share</Button>
                        <Button><PlaylistAddIcon/> Save</Button>
                    </Buttons>
                </Details>
                <Hr/>
                <Channel>
                    <ChannelInfo>
                        <Image src="https://didongviet.vn/dchannel/wp-content/uploads/2022/01/hoi-tu-didongviet.jpg"/>
                        <ChannelDetail>
                            <ChannelName>Duy Dev</ChannelName>
                            <ChannelCounter>200k subcribers</ChannelCounter>
                            <Description>Video uploading app design using React and Styled Components. Youtube clone design with hooks and functional component. React video player.</Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>Subscribe</Subscribe>
                </Channel>
                <Hr/>
                <Comments></Comments>
            </Content>
            <Recommendation>
                <Card type="sm"/>
            </Recommendation>
        </Container>
    )
}

export default Video;