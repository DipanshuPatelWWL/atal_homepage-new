import React from "react";
import { CiHeart } from "react-icons/ci";
import lens1 from "../../assets/cart/bluereflect-plus.avif";
import lens2 from "../../assets/cart/progressive-lens.avif";
import frame from "../../assets/cart/frame.avif";
import frame1 from "../../assets/cart/frame-(1).avif";
import frame2 from "../../assets/cart/frame-(2).avif";
import frame3 from "../../assets/cart/frame-(3).avif";
import frame4 from "../../assets/cart/frame-(4).avif";
import frame5 from "../../assets/cart/frame-(5).avif";
import frame6 from "../../assets/cart/frame-(6).avif";
import frame7 from "../../assets/cart/frame-(7).avif";
import OurPromise from "./OurPromise";
const Cartpage = () => {
  const colors = ["#d4b9a5", "#ffffff", "#e1e1e1", "#000000"];
  const sizes = ["S", "M", "L"];
  const lensData = [
    {
      title: "Blue-violet light filtering lenses",
      image: lens1,
      description:
        "Blue-violet light lenses filter out the bad while letting in the good. They protect your eyes from UV and blue-violet light*. Wear them inside and outside, while working or relaxing.",
    },
    {
      title: "Progressive lenses",
      image: lens2,
      description:
        "See clearly during routine activities without constantly switching between pairs. Progressive lenses provide near, intermediate, and far vision correction within one lens, with no visible line.",
    },
  ];
  return (
    <>
      <div className="mt-14">
        {/* Product Top Section */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: Product Image */}
          <div className="flex flex-col ml-10 gap-2">
            <button>
              <img
                src={frame1}
                loading="lazy"
                decoding="async"
                alt="frame"
                className="w-[100px] hover:cursor-pointer"
              />
            </button>
            <button>
              <img
                src={frame7}
                loading="lazy"
                decoding="async"
                alt="frame"
                className="w-[100px] hover:cursor-pointer"
              />
            </button>
            <button>
              <img
                src={frame6}
                loading="lazy"
                decoding="async"
                alt="frame"
                className="w-[100px] hover:cursor-pointer"
              />
            </button>
            <button>
              <img
                src={frame3}
                loading="lazy"
                decoding="async"
                alt="frame"
                className="w-[100px] hover:cursor-pointer"
              />
            </button>
            <button>
              <img
                src={frame5}
                loading="lazy"
                decoding="async"
                alt="frame"
                className="w-[100px] hover:cursor-pointer"
              />
            </button>
            <button>
              <img
                src={frame4}
                loading="lazy"
                decoding="async"
                alt="frame"
                className="w-[100px] hover:cursor-pointer"
              />
            </button>
            <button>
              <img
                src={frame2}
                loading="lazy"
                decoding="async"
                alt="frame"
                className="w-[100px] hover:cursor-pointer"
              />
            </button>
          </div>
          <div className="flex-1 border-r-1 border-black  ">
            <img
              src={frame}
              loading="lazy"
              decoding="async"
              alt="Ray-Ban Glasses"
              className="w-full mx-auto mt-10 hover:cursor-pointer"
            />
          </div>

          {/* Right: Product Info */}
          <div className="flex-1 space-y-4 mr-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-semibold">RAY-BAN</h2>
                <p className="text text-gray-600">RB7140 OPTICS</p>
              </div>
              <div className="text-3xl font-semibold">
                <CiHeart />
              </div>
            </div>
            {/* Size */}
            <div>
              <label className="text-xl font-medium">Size</label>
              <p>
                This model is <strong>Adjustable Nosepads</strong>
              </p>
              <div className="flex space-x-2 mt-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className="border px-3 py-1 rounded text-sm hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <label className="font-medium text-xl">5 Colours Available</label>
              <div className="flex space-x-2 mt-1">
                {colors.map((color, index) => (
                  <span
                    key={index}
                    className="w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
            <div>
              <label className="text-lg font-semibold">Select your Insurance company : </label>
              <select className="text-lg focus:outlin-none focus:border-black">
                <option>Select your Insurance company</option>
                <option>ABC PVT LTD</option>
                <option>XYZ PVT LTD</option>
                <option>TATA PVT LTD</option>
                <option>KLM PVT LTD</option>
                <option>ABC PVT LTD</option>
              </select>
            </div>
            {/* Price and Button */}
            <div className="space-y-2 mt-4 bg-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold m-5">FRAME</p>
                <p className="text-lg font-bold mr-8">$280.00</p>
              </div>
              <button className="bg-green-700 text-white px-42 py-3 mb-4 rounded hover:bg-green-800 ml-10 text-xl border-1 border-black">
                ADD TO CART
              </button>
            </div>

            {/* Discount Info */}
            <div className="bg-blue-200 p-3 font-semibold">
              COMPLETE YOUR RAY-BAN WITH 50% OFF ALL LENSES
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="mt-6 ml-10">
        <h3 className="text-2xl font-semibold mb-6">ABOUT THIS PRODUCT</h3>
        <ul className="text-lg space-y-1">
          <li>
            <strong>Frame Material:</strong> Injected
          </li>
          <li>
            <strong>Frame Shape:</strong> Round
          </li>
          <li>
            <strong>Frame Colour:</strong> Havana
          </li>
          <li>
            <strong>Fit:</strong> Regular
          </li>
          <li>
            <strong>Gender:</strong> Women
          </li>
        </ul>
        <p className="mt-4 text-lg ">
          Sophisticated, chic and ready to work with any look. Get ready to turn
          heads in round frames with contrasting metal temples.Filter out the
          bad while letting in the good. They protect your eyes from UV and
          blue-violet light.
        </p>
      </div>
      <div className="py-12">
        <div className="mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          {lensData.map((lens, index) => (
            <div key={index} className="text-center">
              <img
                src={lens.image}
                alt={lens.title}
                className="mx-auto mb-6 object-cover hover:scale-105"
              />
              <h3 className="text-3xl font-semibold mb-4">{lens.title}</h3>
              <p className="">{lens.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-stone-900"></div>
      <OurPromise/>
    </>
  );
};

export default Cartpage;
