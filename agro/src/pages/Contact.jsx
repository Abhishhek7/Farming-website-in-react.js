import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '', 
    message: '',
  });
  const [errors, setErrors] = useState({}); 

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(); 

    if (Object.keys(validationErrors).length === 0) {
        console.log('Form submitted successfully!', formData);
   
      setFormData({ name: '', email: '', password: '', message: '' }); 
    } else {
      setErrors(validationErrors); 
    }
  };

  const validateForm = () => {
    const validationErrors = {};

    const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;

    
    if (!nameRegex.test(formData.name)) {
      validationErrors.name = 'Only letters and spaces allowed in name';
    }

    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Please enter a valid email address.';
    }

    
    if (formData.password.length < 8) {
      validationErrors.password = 'Password must be at least 8 characters long.';
    }

    
    if (!formData.message.trim()) {
      validationErrors.message = 'Please enter your message.';
    }

    return validationErrors;
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <div className='bg-gray-100'>
        <div
          data-aos='fade-down'
          className='relative bg-cover bg-center h-96'
          style={{ backgroundImage: "url('/Images/Callus.jpg')" }}
        >
          <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
            <h4 className='text-4xl md:text-6xl font-bold text-white'>
              Contact Us
            </h4>
          </div>
        </div>

        <div className='container mx-auto px-4 py-12'>
          <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
            <div
              data-aos='zoom-in'
              className='bg-white rounded-lg shadow-md p-6'
            >
              <h3 className='text-xl font-bold mb-4'>
                Contact Details
              </h3>
              <div className='flex items-center mb-4'>
                <FaEnvelope className='text-blue-500 mr-2' />
                <p>info@agrofarm.com</p>
              </div>
              <div className='flex items-center mb-4'>
                <FaPhone className='text-blue-500 mr-2 mb-4' />
                <p>+123 456 789</p>
              </div>
              <div className='flex items-center'>
                <FaMapMarkedAlt className='text-blue-500 mr-2' />
                <p>404 Mumbai, Maharashtra</p>
              </div>
            </div>

            <div data-aos="zoom-out" className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-bold mb-4'>Get in Touch</h3>
              <form onSubmit={handleSubmit}>
                
                {Object.keys(errors).length > 0 && (
                  <div className="mb-4">
                    <div className="text-red-500 font-semibold">
                      {Object.entries(errors).map(([field, message]) => (
                        <p key={field}>{message}</p>
                      ))}
                    </div>
                  </div>
                )}

                <div className='mb-4'>
                  <label className='block text-gray-700 mb-2' >Name</label>
                  <input 
                    type="text" 
                    className={`w-full p-2 border border-gry-300 rounded ${errors.name ? 'border-red-500' : ''}`} 
                    placeholder='Enter Name' 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 mb-2' >Email</label>
                  <input 
                    type="email" 
                    className={`w-full p-2 border border-gray-300 rounded ${errors.email ? 'border-red-500' : ''}`} 
                    placeholder='Enter Email' 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div> 
                <div className='mb-4'>
                  <label className='block text-gray-700 mb-2' >Password</label>
                  <input 
                    type="password" 
                    className={`w-full p-2 border border-gry-300 rounded ${errors.password ? 'border-red-500' : ''}`} 
                    placeholder='Enter Password' 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                  )}
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 mb-2' >Message</label>
                  <textarea 
                    name="message" 
                    className={`w-full p-2 border border-gry-300 rounded ${errors.message ? 'border-red-500' : ''}`} 
                    placeholder='Write Message' 
                    value={formData.message} 
                    onChange={handleChange} 
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                <button type='submit' className='py-2 px-4 bg-blue-600 text-white rounded'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;