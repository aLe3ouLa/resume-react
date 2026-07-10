import React from 'react';
import Portraits1 from '../assets/portraits/1_portraits.jpg';
import Portraits3 from '../assets/portraits/3_portraits.jpg';
import Portraits4 from '../assets/portraits/4_portraits.jpg';
import Portraits5 from '../assets/portraits/5_portraits.jpg';
import Portraits6 from '../assets/portraits/6_portraits.jpg';
import Portraits7 from '../assets/portraits/7_portraits.jpg';

const imagesArray = [
    {
        alt: 'Portraits',
        caption: 'Portraits',
        location: 'Petra, Jordan',
        date: '2025',
        src: Portraits1,
    },
    {
        alt: 'Portraits',
        caption: 'Portraits',
        location: 'Amsterdam, Netherlands',
        date: '2025',
        src: Portraits3,
    },
    {
        alt: 'Portraits',
        caption: 'Portraits',
        location: 'Amsterdam, Netherlands',
        date: '2025',
        src: Portraits4,
    },
    {
        alt: 'Portraits',
        caption: 'Portraits',
        location: 'Amsterdam, Netherlands',
        date: '2025',
        src: Portraits5,
    },
    {
        alt: 'Portraits',
        caption: 'Portraits',
        location: 'Amsterdam, Netherlands',
        date: '2025',
        src: Portraits6,
    },
    {
        alt: 'Portraits',
        caption: 'Portraits',
        location: 'Abu Dhabi, UAE',
        date: '2025',
        src: Portraits7,
    },
];

export default function Portraits() {
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
