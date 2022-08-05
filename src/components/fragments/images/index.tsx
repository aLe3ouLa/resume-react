import styled from 'styled-components';
import Wrapper from '../wrapper';

const ImageContainer = styled.div`
    padding: 50px;
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        padding: 0;
        flex-direction: column;
    }
`;

const Images = ({
    Img1,
    Img2,
    Img3,
}: {
    Img1: string;
    Img2: string;
    Img3: string;
}) => {
    return (
        <Wrapper>
            <ImageContainer>
                <img
                    src={Img1}
                    alt="Alexandra profile"
                    width="350"
                    height="350"
                />
                <img
                    src={Img2}
                    alt="Alexandra profile"
                    width="350"
                    height="350"
                />
                <img
                    src={Img3}
                    alt="Alexandra profile"
                    width="350"
                    height="350"
                />
            </ImageContainer>
        </Wrapper>
    );
};

export default Images;
