import React from 'react';
import Lisb1 from '../assets/photography/1_lisb.jpeg';
import Lisb2 from '../assets/photography/2_lisb.jpeg';
import Lisb3 from '../assets/photography/3_lisb.jpeg';
import Lisb4 from '../assets/photography/4_lisb.jpeg';
import Lisb5 from '../assets/photography/5_lisb.jpeg';
import Lisb6 from '../assets/photography/6_lisb.jpeg';
import Lisb7 from '../assets/photography/7_lisb.jpeg';
import Lisb8 from '../assets/photography/8_lisb.jpeg';

import NY9 from '../assets/photography/9_ny.jpeg';
import styled from 'styled-components';

const imagesArray = [
    {
        alt: 'Brooklyn streets',
        caption: 'Brooklyn streets',
        src: NY9,
    },
    {
        alt: 'Lisbon streets',
        caption: 'Lisbon streets',
        src: Lisb1,
    },
    {
        alt: 'Sintra City',
        caption: 'Lisbon streets',
        src: Lisb2,
    },
    {
        alt: 'Sintra palace',
        caption: 'Lisbon streets',
        src: Lisb3,
    },
    {
        alt: 'Sintra City',
        caption: 'Sintra City',
        src: Lisb4,
    },
    {
        alt: 'Lisbon streets',
        caption: 'Lisbon streets',
        src: Lisb5,
    },
    {
        alt: 'Lisbon streets',
        caption: 'Lisbon streets',
        src: Lisb6,
    },
    {
        alt: 'Lisbon streets',
        caption: 'Lisbon streets',
        src: Lisb7,
    },
    {
        alt: 'Lisbon streets',
        caption: 'Lisbon streets',
        src: Lisb8,
    },
];

const Gallery = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
    padding: 0 140px;
    margin-top: 120px;
`;

export default function Landscape() {
    return (
        <Gallery>
            {imagesArray.map((image) => (
                <img
                    height={400}
                    src={image.src}
                    alt={image.alt}
                    aria-describedby={image.caption}
                />
            ))}
        </Gallery>
    );
}
