import React from 'react'
import API from '../../API/Api';
import { useState } from 'react';
import { useEffect } from 'react';

const Image_Url = "http://localhost:4000/uploads/";

const Frameshape = () => {
  const [frame, setframe] = useState([])
  const [desc, setDesc] = useState([])

  //Get Api
  const fetchFrameShape = async () => {
    try {
      const response = await API.get("/getFrameShapes")

      setframe(response.data.frameShapesData)
    } catch (error) {
      console.log(error)
    }
  }

  const fecthDescById = async () => {
    try {
      const fetchDesc = await API.get("/getDesc/68b92688e15485b7928aea7a")
      setDesc(fetchDesc.data.descData.description)
      console.log(fetchDesc);

    } catch (error) {
      console.log(error);

    }
  }
  // console.log(frame);


  useEffect(() => {
    fetchFrameShape()
    fecthDescById()
  }, [])

  return (
    <div>
      <div className="bg-ray text-center py-10">
        <h2 className="text-3xl font-semibold">Shop by Frame Shape</h2>
        <hr className="md:w-86 mt-2 mb-4 md:ml-126 mx-12 border-black"></hr>
        <p className="text-gray-700 text-xl mx-6">
          {/* Choose the perfect frames for your face or your style. */}
          {desc}
        </p>
        <div className="flex justify-between md:mx-26 mt-6 flex-wrap gap-y-4 mx-12">
          {frame.map((data, idx) => (
            <div key={idx}>

              <img src={Image_Url + data.image} className='hover:scale-120 hover:cursor-pointer' loading='lazy' decoding='async' alt="frameName" />
              <h1 className='mt-2'>{data.frameName}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Frameshape