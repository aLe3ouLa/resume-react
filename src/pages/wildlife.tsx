import React from 'react';
import Wildlife1 from '../assets/wildlife/wildlife_1.jpg';
import Wildlife2 from '../assets/wildlife/wildlife_2.jpg';
import Wildlife3 from '../assets/wildlife/wildlife_3.jpg';
import Wildlife4 from '../assets/wildlife/wildlife_4.jpg';
import Wildlife5 from '../assets/wildlife/wildlife_5.jpg';
import Wildlife6 from '../assets/wildlife/wildlife_6.jpg';

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

export default function Wildlife() {
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
