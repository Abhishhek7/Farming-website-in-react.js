import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import farmhouse from '../../public/Images/farmhouse.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

 const About=()=> {
  useEffect(() => {
      AOS.init({
        duration:2000
      });
    }, []);

  return (
    <section id="about-us" class="bg-gray-100 py-16">
    <div  class="container mx-auto px-4">
        <div data-aos="fade-down" className='relative h-screen bg-cover bg-center' style={{backgroundImage: "url('/Images/Image23.jpg')"}}>
                  <div  className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
              <h1 className='text-4xl md:text-6xl font-bold text-white'>
                 About Us
              </h1>
             
              
              </div>
             
              </div>
        <p class="text-3xl text-gray-700 text-center mb-10" data-aos="fade-down">
            We are passionate about sustainable farming and providing high-quality, fresh produce. Our mission is to nourish communities and protect the environment. 
        </p>
        <div class="flex flex-col md:flex-row justify-center items-center">
            <div class="md:w-1/2">
                <  img src={farmhouse} data-aos="fade-right" alt=""  className="w-full rounded-lg shadow-md mb-6 md:mb-0"/> 
            </div>
            <div class="md:w-1/2 md:pl-10">
                <h3 class="text-2xl font-bold mb-4"data-aos="fade-down">Our Story</h3>
                <p class="text-lg text-gray-700" data-aos="fade-up" >
                Over the years, our farm has grown, evolving with each season. We've faced challenges, celebrated triumphs, and always remained committed to our core values: quality, sustainability, and community. Today, we're proud to share our harvest with you, knowing that every bite supports our mission of nurturing the land and nourishing lives.


                </p>
            </div>
        </div>
    </div>
</section>
  );
}

export default About;