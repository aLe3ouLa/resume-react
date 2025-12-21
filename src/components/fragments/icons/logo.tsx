import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    
    &:hover {
        transform: scale(1.05);
        
        .logo-text {
            color: ${({ theme }) => theme.color.secondary};
        }
        
        .logo-icon {
            transform: rotate(5deg);
        }
    }
    
    &:active {
        transform: scale(0.98);
    }
`;

const LogoIcon = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 16px;
    background: ${({ theme }) => theme.color.primary};
    border: 4px solid ${({ theme }) => theme.color.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
        0 4px 0 ${({ theme }) => theme.color.hoverPrimary},
        0 6px 12px rgba(0, 168, 168, 0.25);
    
    &::after {
        content: 'A';
        position: relative;
        z-index: 1;
        color: white;
        font-weight: 700;
        font-size: 20px;
        font-family: 'Fredoka', 'Comfortaa', sans-serif;
    }
    
    &:hover {
        background: ${({ theme }) => theme.color.secondary};
        border-color: ${({ theme }) => theme.color.secondary};
        transform: translateY(2px) rotate(5deg);
        box-shadow: 
            0 2px 0 ${({ theme }) => theme.color.hoverSecondary},
            0 4px 8px rgba(255, 107, 107, 0.3);
    }
    
    &:active {
        transform: translateY(4px) rotate(5deg);
        box-shadow: 
            0 0 0 ${({ theme }) => theme.color.hoverSecondary},
            0 2px 4px rgba(255, 107, 107, 0.2);
    }
`;


const Logo = () => {
    return (
        <LogoContainer>
            <LogoIcon className="logo-icon" />
        </LogoContainer>
    );
};

export default Logo;
