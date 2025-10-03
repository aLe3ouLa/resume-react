import React from 'react';
import Lisb1 from '../assets/photography/1_lisb.jpeg';
import Lisb2 from '../assets/photography/2_lisb.jpeg';
import Lisb3 from '../assets/photography/3_lisb.jpeg';
import Abu4 from '../assets/photography/1_abu.jpg';
import Lisb5 from '../assets/photography/5_lisb.jpeg';
import Lisb6 from '../assets/photography/6_lisb.jpeg';
import Bali1 from '../assets/photography/1_bali.jpg';
import Lisb8 from '../assets/photography/8_lisb.jpeg';
import NY9 from '../assets/photography/9_ny.jpeg';
import styled from 'styled-components';

const imagesArray = [
    {
        alt: 'Brooklyn streets',
        caption: 'Brooklyn streets',
        location: 'Brooklyn, New York',
        date: '2023',
        src: NY9,
    },
    {
        alt: 'Lisbon streets',
        caption: 'Lisbon streets',
        location: 'Lisbon, Portugal',
        date: '2024',
        src: Lisb1,
    },
    {
        alt: 'Sintra City',
        caption: 'Sintra Palace',
        location: 'Sintra, Portugal',
        date: '2024',
        src: Lisb2,
    },
    {
        alt: 'Sintra palace',
        caption: 'Palácio Nacional de Sintra',
        location: 'Sintra, Portugal',
        date: '2024',
        src: Lisb3,
    },
    {
        alt: 'Sheikh Zayed Grand Mosque in Abu Dhabi',
        caption: 'Sheikh Zayed Grand Mosque',
        location: 'Abu Dhabi, UAE',
        date: '2025',
        src: Abu4,
    },
    {
        alt: 'Lisbon streets',
        caption: 'Lisbon streets',
        location: 'Lisbon, Portugal',
        date: '2024',
        src: Lisb5,
    },
    {
        alt: 'Lisbon streets',
        caption: 'Lisbon streets',
        location: 'Lisbon, Portugal',
        date: '2024',
        src: Lisb6,
    },
    {
        alt: 'Ulun Danu Temple in Bali',
        caption: 'Ulun Danu Temple',
        location: 'Bali, Indonesia',
        date: '2025',
        src: Bali1,
    },
    {
        alt: 'Lisbon streets',
        caption: 'Lisbon streets',
        location: 'Lisbon, Portugal',
        date: '2024',
        src: Lisb8,
    },
];

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
    
    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
        grid-template-columns: repeat(3, 1fr);
        gap: 50px;
    }
`;

const PhotoCard = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        
        img {
            transform: scale(1.05);
        }
        
        .photo-overlay {
            opacity: 1;
        }
    }
`;

const PhotoImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
        height: 350px;
    }
`;

const PhotoOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(0, 0, 0, 0.7) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
`;

const PhotoCaption = styled.h3`
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 8px 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const PhotoLocation = styled.p`
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
    margin: 0 0 4px 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

const PhotoDate = styled.p`
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
    margin: 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

export default function Landscape() {
    return (
        <Gallery>
            {imagesArray.map((image, index) => (
                <PhotoCard key={index}>
                    <PhotoImage
                        src={image.src}
                        alt={image.alt}
                        aria-describedby={image.caption}
                    />
                    <PhotoOverlay className="photo-overlay">
                        <PhotoCaption>{image.caption}</PhotoCaption>
                        <PhotoLocation>{image.location}</PhotoLocation>
                        <PhotoDate>{image.date}</PhotoDate>
                    </PhotoOverlay>
                </PhotoCard>
            ))}
        </Gallery>
    );
}
