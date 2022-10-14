import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAllVideo, getDetailVideo } from "../redux/apis";

const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "270px"};
    margin-bottom: ${(props) => props.type === "sm" ? "10px" : "45px"};
    cursor: pointer;
    float: left;
    margin-left: 20px;
    width: 24,9999999%;
    gap: 10px
`

const Image = styled.img`
    width: 100%;
    height: ${(props) => props.type === "sm" ? "120px" : "170px"};
    background-color: #9999;
    flex: 1;
`
const Details = styled.div`
    display: flex;
    margin-top: ${(props) => props.type === "sm" && "16px"};
    gap: 12px;
    flex:
`

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
    display: ${(props) => props.type === "sm" && "none"}
`

const Texts = styled.div`

`;
const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`;
const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
    margin: 10px 0px
`;
const Info = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft}
`;

const Card = ({type}) => {
    const navigate = useNavigate();
    const dispath = useDispatch();
    useEffect(() => {
        dispath(getAllVideo());
    }, [])
    let videos = useSelector(state => state.videos.videos);
    const handleDetail = async (id) => {
        await dispath(getDetailVideo(id));
        navigate(`/video/${id}`)
    }
    return (
        <div>
            {
                videos.map((video, index) => (
                    <Link style={{textDecoration: "none"}}
                        onClick = {() =>handleDetail(video._id)}
                    ><Link/>
                    <Container type={type}>
                        <Image type={type} src={video.avatarVideo} />
                        <Details type={type}>
                            <ChannelImage type={type} src={video.idUser[0].imageUrl}/>
                            <Texts>
                                <Title>{video.title}</Title>
                                <ChannelName>{video.idUser[0].familyName}</ChannelName>
                                <Info>{video.view} views * 1 day ago</Info>
                            </Texts>
                        </Details>
                    </Container>
                    </Link>
                ))
            }
        </div>
    )
}

export default Card;