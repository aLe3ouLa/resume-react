import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
        transform: translate(-1px, -1px);

        .logo-icon {
            transform: rotate(-4deg);
            box-shadow: 5px 5px 0 ${({ theme }) => theme.color.black};
        }
    }

    &:active {
        transform: translate(1px, 1px);
    }
`;

const LogoIcon = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: ${({ theme }) => theme.color.primary};
    border: 3px solid ${({ theme }) => theme.color.black};
    box-shadow: 3px 3px 0 ${({ theme }) => theme.color.black};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &::after {
        content: 'A';
        color: ${({ theme }) => theme.color.white};
        font-weight: 800;
        font-size: 22px;
        line-height: 1;
        font-family: 'Fredoka', 'Comfortaa', sans-serif;
    }
`;

const LogoText = styled.span`
    font-weight: 800;
    font-size: 1.8rem;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.color.text};
    font-family: 'Fredoka', 'Comfortaa', sans-serif;

    @media (max-width: ${({ theme }) => theme.breakpoint.upToTablet}) {
        display: none;
    }
`;

const Logo = () => {
    return (
        <LogoContainer>
            <LogoIcon className="logo-icon" />
            <LogoText className="logo-text">alexandra</LogoText>
        </LogoContainer>
    );
};

export default Logo;
