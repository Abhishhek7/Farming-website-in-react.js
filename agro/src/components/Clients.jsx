import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials =[
{
   image:"/Images/Bigbasket.jpeg",
   name:"BigBasket ",
   text:" Agro Farm has the quality product & they helped us a lot to grow our business.  "

},

{
    image:"/Images/indiamart.jpeg",
    name:"IndiaMart ",
    text:" Our customers needs quality and organic products & all are being fullfilled by Agro Farm.  "
 
 },
 {
  image:"/Images/Jiomart.jpeg",
  name:" JioMart",
  text:" We are pleased to have a bond with agro farm as our customers demand the products from them.  "

},
{
  image:"/Images/flipkart.jpeg", 
  name:" FlipKart",
  text:" Agro farm products gives us all the assurity about customers demand and to helps us to fulfill them within reuire period.  "

},
 















];







const Clients = () => {
   useEffect(() => {
          AOS.init({
            duration:2000
          });
        }, []);
  return (
    <div className=' py-12 bg-gray-200'>
      <div data-aos="fade-down" className='relative h-screen bg-cover bg-center' style={{backgroundImage: "url('/Images/Image13.jpg')"}}>
                  <div  className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
              <h1 className='text-4xl md:text-6xl font-bold text-white'>
                 Clients
              </h1>
             
              
              </div>
             
              </div>
      <div data-aos="zoom-in" className='container mx-auto px-4'> 
      
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {Testimonials .map((Testimonials, index)=>(
                 <div key={index} className='bg-white rounded-lg shadow-md text-center  items-center cursor-pointer'>
                    <img src={Testimonials.image} alt={Testimonials.name}  className=' w-full h-48 p-1 object-cover transform transition duration-300 hover:scale-110'/>
                    <div>
                        <h3 className='text-xl font-bold mb-2'> {Testimonials.name}</h3>
                        <p className='text-gray-600 italic'>{Testimonials.text}</p>
                    </div>
                 </div>

            ))}
        </div>
        </div>
        </div>
  )
}

export default Clients