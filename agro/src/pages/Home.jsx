import React from "react"
import { useEffect } from "react";

import { Link } from "react-router-dom"
import home from '../../public/Images/Home.jpg'
import AOS from "aos";
import "aos/dist/aos.css";




const Home = () => {
  useEffect(() => {
    AOS.init({
      duration:2000
    });
  }, []);
    return (
        <>
        <div className="bg-gray-100">
      <div className='relative h-screen bg-cover bg-center' style={{backgroundImage: "url('/Images/Image11.jpg')"}}>
          <div  className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
      <h1 data-aos="fade-right" className='text-4xl md:text-6xl font-bold text-white'>
         WELCOME TO AGROWORLD 
      </h1>
      <p data-aos="fade-left"  className='text-lg md:text-2xl text-white mb-8'>Raising Real Food.</p>
      
     <Link to='/popularfruits'> <button data-aos="fade-down" className='border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-gray-500 transform transition duration-300 hover:scale-105 '>
  Explore
      </button></Link>
      
      </div>
     
      </div>
      
      <div data-aos="fade-up" class="container mx-auto">
  <div class="flex flex-col md:flex-row gap-12 bg-gray-300 h-fit mt-12 ">
    <div class="md:w-1/2">
      <img src={home} alt="Fruits Image" class=" ml-11 md:ml-0 md:mt-0 h-96 w-full " />
    </div>
    <div class="md:w-1/2 flex flex-col items-center justify-center">
      <p class="text-2xl mt-8 font-serif text-center md:text-left">
        Cultivate your dreams with us! We're your partner in transforming barren land into lush orchards. Our expert guidance, premium seedlings, and sustainable practices ensure a bountiful harvest. Join our community of successful fruit farmers today.
      </p>
    </div>
  </div>
</div>
<div data-aos="fade-down-right" className='relative h-screen bg-cover bg-center mt-12' style={{backgroundImage: "url('/Images/Image22.jpg')"}}>
          <div  className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
      <h1 className='text-4xl md:text-6xl font-bold text-white'>
      Stay informed about our offers. 
      </h1>
      <p className='text-lg md:text-2xl text-white mb-8'>For Exclusive Deals, Coupons, News and More! </p>

      <form  className='flex items-center justify-center mt-8'>
                        <input
                         type=" email"
                        placeholder='Enter Your Email' className='w-full p-2 rounded-l-lg bg-white border border-gray-600' />
                        <button className='bg-gray-400 text-black px-4 py-2 rounded-r-lg border border-gra-300'>
                            Send
                        </button>
                    </form>
     
      
      </div>
     
      </div>
      </div>
      
    
      </>
    )
  }
  
  export default Home