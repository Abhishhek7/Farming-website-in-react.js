import React, { useState } from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  '/Images/Image9.jpg',
  '/Images/Image10.jpg',
  '/Images/Image11.jpg',
  '/Images/Image12.jpg',
  '/Images/Image13.jpg',
  '/Images/Image14.jpeg',
  '/Images/Image16.jpg',
  '/Images/Image17.jpg',
  '/Images/Image18.jpg',
  '/Images/Image19.jpg',
  '/Images/Image20.jpg',
  '/Images/Image21.jpg'
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); 

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  const handleClick = (image) => {
    setSelectedImage(image); 
  };

  const handleCancel = () => {
    setSelectedImage(null); 
  };

  return (
    <>
      <div data-aos="fade-down">
        <div className='relative bg-cover bg-center h-96' style={{ backgroundImage: "url('/Images/Image15.jpg')" }}>
          <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-white'>
              Gallery
            </h1>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
          {images.map((image) => (
            <div key={image} className='rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105' onClick={() => handleClick(image)}>
              <img src={image} alt="" className='w-full h-full object-cover' />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && ( 
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={handleCancel}>
          <img src={selectedImage} alt="" className="w-auto h-auto max-w-2xl max-h-2xl object-contain" />
        </div>
      )}
    </>
  );
};

export default Gallery;