import React from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


const Privacy =[
  {
     image:"/Images/sign.jpg",
     title:"Sign In",
     
  
  },
  
  {
      image:"/Images/sharing.jpg",
      title:" Data Sharing ",
      
   },
   {
    image:"/Images/data.jpg",
    title:" Data Capture",
    
  
  },
  {
    image:"/Images/third.jpg",
    title:"Third-Party Access",
    
  },
   

]



















function PrivacyPolicy() {
  useEffect(() => {
          AOS.init({
            duration:2000
          });
        }, []);
  return (


    <div className="container mx-auto bg-gray-300 px-4 py-16">
      <div data-aos='fade-down'  className='relative  bg-cover bg-center h-96' style={{backgroundImage: "url('/Images/privacy.jpg')"}}>
          <div  className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
      
      <p  data-aos=' flip-down'className="  text-xl text-gray-200 ">
        Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information.
      </p>
  </div>
  

  </div>
      

      
      <h3 data-aos="flip-down" className="flex items-center justify-center text-2xl font-bold mb-4">Information We Collect</h3>
      <p data-aos="flip-up" className="text-lg text-gray-900 mb-6">
        We may collect personal information such as your name, email address, and other relevant information when you:
      </p>
      <div data-aos="zoom-in" className='container mx-auto px-4'> 
      
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            { Privacy.map((Privacy, index)=>(
                 <div key={index} className='bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer'>
                    <img src={Privacy.image} alt={Privacy.title}  className=' w-full h-48 p-1 object-cover transform transition duration-300 hover:scale-110'/>
                    <div>
                        <h3 className='text-xl font-bold mb-2'> {Privacy.title}</h3>
                        
                    </div>
                 </div>

            ))}
        </div>
        </div>

      

      <p className="flex items-center justify-center text-lg text-black mt-10">
        By using our website, you consent to our Privacy Policy.
      </p>
    </div>
  );
}

export default PrivacyPolicy;