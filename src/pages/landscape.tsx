import React from 'react';
import Lisb1 from '../assets/photography/1_lisb.jpeg';
import Lisb2 from '../assets/photography/2_lisb.jpeg';
import Lisb3 from '../assets/photography/3_lisb.jpeg';
import Abu4 from '../assets/photography/1_abu.jpg';
import Lisb5 from '../assets/photography/5_lisb.jpeg';
import Lisb6 from '../assets/photography/6_lisb.jpeg';
import Bali1 from '../assets/photography/1_bali.jpg';
import Lisb8 from '../assets/photography/8_lisb.jpeg';
import NY9 from '../assets/photography/9_ny.jpg';

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

export default function Landscape() {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px] mt-[40px] tablet:grid-cols-2 tablet:gap-[40px] desktop:grid-cols-3 desktop:gap-[50px]">
            {imagesArray.map((image, index) => (
                <div
                    key={index}
                    className="group relative overflow-hidden rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out cursor-pointer hover:-translate-y-[8px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        aria-describedby={image.caption}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-[300px] object-cover transition-transform duration-300 ease-out group-hover:scale-105 tablet:h-[350px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 transition-opacity duration-300 ease-out flex flex-col justify-end p-[20px] group-hover:opacity-100">
                        <h3 className="text-white text-[1.1rem] font-semibold m-0 mb-[8px] [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                            {image.caption}
                        </h3>
                        <p className="text-white/90 text-[0.9rem] m-0 mb-[4px] [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                            {image.location}
                        </p>
                        <p className="text-white/70 text-[0.8rem] m-0 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                            {image.date}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
