import "./FlipCard.css"; 
import contactImage from '../../assets/frame/contactlens.jpg'
import menFrameImage from '../../assets/frame/menframe.jpg'
import woman from '../../assets/frame/woman.jpg'
const cardData = [
  {
    front: contactImage,
    back: "This is the back of Card 1",
    desc: "Contact Lenses",
  },
  {
    front: woman,
    back: "This is the back of Card 2",
    desc: "Women's Frames",
  },
  {
    front: menFrameImage,
    back: "This is the back of Card 3",
    desc: "Men's Frames",
  },
];

const Frames = () => {
  return (
    <div className="py-16 md:pl-12 mb-14 mx-6 md:mx-0">
    <h1 className="text-3xl font-bold text-center"><span>Shop by</span><span className="text-red-600"> Category</span> </h1>
    <hr className="w-72 ml-127 mb-10 mt-2 border-black"></hr>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cardData.map((card, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front overflow-hidden">
                <img
                  src={card.front}
                  loading="lazy"
                  decoding="async"
                  alt="front"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="flip-card-back bg-red-600 text-white shadow-xl p-6 rounded-xl flex items-center justify-center font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
            </div>
            <div className="flex justify-center md:mb-0 mb-10 font-semibold text-4xl">
              {card.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frames;