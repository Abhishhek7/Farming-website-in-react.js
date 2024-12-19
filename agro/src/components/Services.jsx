import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Services =[
{
   image:"/Images/Fruits.jpg",
   title:" Fruits",
   description:" We deal as the best fruits farmer in the business.  "

},

{
    image:"/Images/Rice.jpg",
    title:" Rice",
    description:" we  as a rice cultivator provide rice directly from the farm.  "
 
 },
 {
  image:"/Images/sugarcane.jpg",
  title:" Sugarcane",
  description:" Sugarcane at our farm will give natural sugar with proper taste.  "

},
{
  image:"/Images/Pulses.jpg",
  title:" Pulses",
  description:"  Get direct source of protein (pulses) from us.  "

},
 















];







const Service = () => {
  useEffect(() => {
        AOS.init({
          duration:2000
        });
      }, []);
  return (
    <div className=' py-12 bg-gray-200'>
      <div data-aos='fade-down' className='relative  bg-cover bg-center h-96' style={{backgroundImage: "url('/Images/service.jpg')"}}>
          <div  className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
      <h4 className='text-4xl md:text-6xl font-bold text-white'>
         Services
      </h4>
      
  </div>
  

  </div>
 
      <div data-aos="zoom-in" className='container mx-auto px-4'> 
      
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            { Services.map((Services, index)=>(
                 <div key={index} className='bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer'>
                    <img src={Services.image} alt={Services.title}  className=' w-full h-48 p-1 object-cover transform transition duration-300 hover:scale-110'/>
                    <div>
                        <h3 className='text-xl font-bold mb-2'> {Services.title}</h3>
                        <p className='text-gray-600'>{Services.description}</p>
                    </div>
                 </div>

            ))}
        </div>
        </div>
        </div>
  )
}

export default Service