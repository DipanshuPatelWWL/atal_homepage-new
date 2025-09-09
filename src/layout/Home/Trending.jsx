import React from 'react';
import Slider from 'react-slick';
import { FiArrowRight } from 'react-icons/fi';
import {Link} from 'react-router-dom'
import PASTEL from '../../assets/trending/PASTEL.jpg';
import PRINCELY from '../../assets/trending/PRINCELY.jpg';
import REGAL from '../../assets/trending/REGAL.jpg';
import ROBYN from '../../assets/trending/ROBYN.jpg';
import SLICK from '../../assets/trending/slick.jpg';

const trendingItems = [
    {
        name: 'PASTEL',
        image: PASTEL,
    },
    {
        name: 'PRINCELY',
        image: PRINCELY,
    },
    {
        name: 'REGAL',
        image: REGAL,
    },
    {
        name: 'ROBYN',
        image: ROBYN,
    },
    {
        name: 'SLICK',
        image: SLICK,
    },
];

const Trending = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="py-12 md:px-24 px-6 bg-white">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-black ml-2">Currently Trending</h2>
                <button className="flex items-center gap-4 text-white font-medium bg-red-600 px-4 py-2 rounded mr-1 hover:bg-black transition-colors duration-300">
                    FIND MORE
                    <span className="bg-white text-black p-1 rounded-full">
                        <FiArrowRight size={16} className='hover:rotate-[-40deg]' />
                    </span>
                </button>
            </div>

            <Slider {...settings}>
                {trendingItems.map((item, index) => (
                    <div key={index} className="px-2 mb-4">
                    <Link to='/cart'>
                        <div className="border border-red-600 rounded-lg shadow-xl shadow-white hover:shadow-red-500 transition-all text-center p-4 h-full hover:cursor-pointer ">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-36 object-contain mb-4 hover:scale-120"
                                loading='lazy' 
                                decoding='async'
                            />
                            <p className="text-xl font-semibold tracking-wide text-red-600">{item.name}</p>
                        </div>
                    </Link>    
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Trending;
