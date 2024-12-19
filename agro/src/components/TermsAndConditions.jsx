import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function TermsAndConditions() {
  useEffect(() => {
        AOS.init({
          duration:2000
        });
      }, []);
  return (
    <div className=" container bg-gray-100 mx-auto px-4 py-16">
      <div data-aos="fade-down" className='relative bg-cover bg-center h-96' style={{ backgroundImage: "url('/Images/termss.jpg')" }}>
          <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h2 data-aos="flip-down" className="text-3xl font-bold text-white  text-center mb-8">Terms and Conditions</h2>
          </div>
        </div>
      

      <p className="text-lg text-gray-700 mb-6">
        Please read these Terms and Conditions carefully before using our website.
      </p>

      

      <h3 className="text-2xl font-bold mb-4">User Conduct</h3>
      <p className="text-lg text-gray-700 mb-6">
        You agree not to:
        <ul className="list-disc list-inside mb-6">
          <li>Use the website for illegal purposes</li>
          <li>Post harmful or offensive content</li>
          <li>Interfere with the website's functionality</li>
        </ul>
      </p>

      <h3 className="text-2xl font-bold mb-4">Intellectual Property</h3>
      <p className="text-lg text-gray-700 mb-6">
        All content on this website is protected by copyright and trademark laws.
      </p>

      

      <p className="text-lg text-gray-700 mb-6">
        By using our website, you agree to these Terms and Conditions.
      </p>
    </div>
  );
}

export default TermsAndConditions;