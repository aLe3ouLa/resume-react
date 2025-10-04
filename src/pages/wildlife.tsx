import React from 'react';
import Wildlife1 from '../assets/wildlife/wildlife_1.jpg';
import Wildlife2 from '../assets/wildlife/wildlife_2.jpg';
import Wildlife3 from '../assets/wildlife/wildlife_3.jpg';
import Wildlife4 from '../assets/wildlife/wildlife_4.jpg';
import Wildlife5 from '../assets/wildlife/wildlife_5.jpg';
import Wildlife6 from '../assets/wildlife/wildlife_6.jpg';

import styled from 'styled-components';

const imagesArray = [
    {
        alt: 'Waterfall in Bali',
        caption: 'Waterfall in Bali',
        location: 'Bali, Indonesia',
        date: '2025',
        src: Wildlife1,
    },
    {
        alt: 'Wadi Rum in Jordan',
        caption: 'Wadi Rum in Jordan',
        location: 'Wadi Rum, Jordan',
        date: '2025',
        src: Wildlife2,
    },
    {
        alt: 'Nafplion in Greece',
        caption: 'Nafplion in Greece',
        location: 'Nafplion, Greece',
        date: '2024',
        src: Wildlife3,
    },
    {
        alt: 'Glacier in Iceland',
        caption: 'Glacier in Iceland',
        location: 'Glacier, Iceland',
        date: '2024',
        src: Wildlife4,
    },
    {
        alt: 'Cat Paw in Athens',
        caption: 'Cat Paw in Athens',
        location: 'Athens, Greece',
        date: '2025',
        src: Wildlife5,
    },
    {
        alt: 'Pinguin',
        caption: 'Pinguin',
        location: 'Amsterdam, Netherlands',
        date: '2023',
        src: Wildlife6,
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

export default function Wildlife() {
    return (
        <Gallery>
            {imagesArray.map((image, index) => (
                <PhotoCard key={index}>
                    <PhotoImage
                        src={image.src}
                        alt={image.alt}
                        aria-describedby={image.caption}
                        loading="lazy"
                        decoding="async"
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
