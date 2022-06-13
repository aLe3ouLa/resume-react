import React from "react";
import styled from "styled-components";

import PDF from "../../../assets/cv.pdf";

const CustomButtonCtn = styled.a`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: 1.4rem;
  font-weight: 900;
  text-transform: uppercase;
  border-radius: 5px;
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.sm};

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
    border: 3px wavy ${({ theme }) => theme.color.tertiary};
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
  }
`;

const CustomButton = ({ children }) => {
  return (
    <CustomButtonCtn type="button" href={PDF} target="_blank">
      {children}
    </CustomButtonCtn>
  );
};

export default CustomButton;
