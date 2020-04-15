import React from "react";
import styled from "styled-components";
import Img1 from "../../../assets/2.png";
import Img2 from "../../../assets/3.png";
import Img3 from "../../../assets/4.png";

import Wrapper from "../wrapper";

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

const Images = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <img src={Img1} alt="Alexandra profile" width="350" height="350" />
        <img src={Img2} alt="Alexandra profile" width="350" height="350" />
        <img src={Img3} alt="Alexandra profile" width="350" height="350" />
      </ImageContainer>
    </Wrapper>
  );
};

export default Images;
