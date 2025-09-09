import React from 'react'
import ServicesContaineHead from './service-head-cont/ServicesContainerHead'
import { FaArrowRight } from "react-icons/fa";
import API from '../../API/Api';
import { useState } from 'react';
import { useEffect } from 'react';

const Image_Url = "http://localhost:4000/uploads/";



const ServicesContainer = () => {
  const [eyeServices, setEyeServices] = useState([])

  //Get API
  const fetchEyeServices = async () => {
    try {
      const response = await API.get("/getEyeService")
      setEyeServices(response.data.EyeServiceData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchEyeServices()
  }, [])



  return (
    <>
      {eyeServices.map((data, index) => (
        <ServicesContaineHead
          key={index}
          icon={Image_Url + data.image}
          headText={data.heading}
          content={data.description}
          arrow={<FaArrowRight />}
        />

      ))}

    </>
  )
}

export default ServicesContainer
