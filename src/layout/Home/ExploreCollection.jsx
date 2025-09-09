import React from 'react';
import img1 from '../../assets/newcollection/eyeglasses.jpg'
import img2 from '../../assets/newcollection/power.jpg'
import img3 from '../../assets/newcollection/sports.jpg'
import img4 from '../../assets/newcollection/sunglass.jpg'
import img5 from '../../assets/newcollection/blueglasses.jpg'
import img6 from '../../assets/newcollection/kids.png'
const collections = [
    {
        title: 'Sunglasses',
        image: img4
    },
    {
        title: 'Eyeglasses',
        image: img1
    },
    {
        title: 'Blue Glasses',
        image: img5
    },
    {
        title: 'Kids Glasses',
        image: img6
    },
    {
        title: 'Power Sunglasses',
        image: img2
    },
    {
        title: 'Sports Glasses',
        image: img3
    }
];

const ExploreCollection = () => {
    return (
        <section className="py-16 md:px-26 px-6 bg-white text-center">
            <h2 className="text-3xl font-bold mb-2">Explore Our <span className="text-red-600">Collections</span></h2>
            <hr className='md:w-102 md:ml-92 mb-4 border-black'></hr>
            <p className="text-gray-600 mb-10">Hand-picked styles for every vision and personality.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 hover:cursor-pointer">
                {collections.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl shadow hover:shadow-lg transition-all">
                        <img
                            src={item.image}
                            alt={item.title}
                            loading='lazy'
                            decoding='async'
                            className="w-full h-78 object-cover transform group-hover:scale-105 transition duration-300"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-red-600 bg-opacity-50 text-white py-3 text-lg font-semibold">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExploreCollection;
