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
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: linear-gradient(135deg, ${({ theme }) => theme.color.primary}, ${({ theme }) => theme.color.tertiary});
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: transform 0.3s ease;
    
    &::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        border-radius: 8px;
        background: linear-gradient(135deg, ${({ theme }) => theme.color.primary}, ${({ theme }) => theme.color.tertiary});
        opacity: 0.8;
    }
    
    &::after {
        content: 'A';
        position: relative;
        z-index: 1;
        color: white;
        font-weight: 700;
        font-size: 18px;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
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
