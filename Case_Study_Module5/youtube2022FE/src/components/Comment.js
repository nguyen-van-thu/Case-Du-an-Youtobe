import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin 30px 0px;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap 10px;
`

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`
const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.textSoft};
    margin-left: 5px
`
const Text = styled.span`
    font-size: 14px;
    color: ${({theme}) => theme.text};
`

export const Comment = () => {
    return (
        <Container>
            <Avatar src="https://tinhte.vn/thread/anh-phong-canh-ban-huong-dan-chup-anh-phong-canh-dep-hon.336884"/>
            <Details>
                <Name>Duy DB <Date>1 ngày trước</Date></Name>
                <Text>Video uploading app design using React and Styled Components. Youtube clone design with hooks and functional component. React video player.</Text>
            </Details>
        </Container>
    )
}