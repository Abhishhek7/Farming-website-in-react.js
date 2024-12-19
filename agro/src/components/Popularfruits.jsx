import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const fruits =[
{
   image:"/Images/Image1.jpg",
   title:" MANGO",
   description:" We nurture the best mango without any acidic fertilizers.  "

},

{
    image:"/Images/Image2.jpg",
    title:" ORANGES",
    description:" Our oranges will suit your taste as it has zero soury effect.  "
 
 },
 {
  image:"/Images/Image3.jpg",
  title:" PINEAPPLE",
  description:" We have the best nourished pine-apple in the market.  "

},
{
  image:"/Images/Image4.jpg",
  title:" GRAPES",
  description:" we provide the sweetest grapes with sharp packaging.  "

},
{
  image:"/Images/Image5.jpg",
  title:"STRAWBERRY",
  description:" You will get extra 20% off, if you bought 2kg of it.  "

},
{
  image:"/Images/Image6.jpg",
  title:" RICE ",
  description:" We have expertise in rice cultivation too. It will be available through out the year.  "

},
{
  image:"/Images/Image7.jpg",
  title:" TEA LEAVES",
  description:" We deal with every types of tea leaves for our customer .  "

},
{
  image:"/Images/Image8.jpg",
  title:" WHEAT",
  description:" Wheat Cultivation is the main factor which are we focusing on from the starting days onwards.  "

},
 















];







const Popularfruits = () => {
  useEffect(() => {
        AOS.init({
          duration:2000
        });
      }, []); 
  return (
    <div data-aos="zoom-in-up" className=' py-12 bg-gray-200'>
      <div className='container mx-auto px-4'> 
      <h2 className='text-3xl font-bold text-center mb-8 '>

        We Produce
        
        </h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
            { fruits.map((fruits, index)=>(
                 <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'>
                    <img src={fruits.image} alt={fruits.title}  className=' w-full p-2 h-48 object-cover transform transition duration-300 hover:scale-110'/>
                    <div>
                        <h3 className='text-xl font-bold ml-4 mb-2 '> {fruits.title}</h3>
                        <p className='text-gray-600 p-2'>{fruits.description}</p>
                    </div>
                 </div>

            ))}
        </div>
        </div>
        </div>
  )
}

export default Popularfruits