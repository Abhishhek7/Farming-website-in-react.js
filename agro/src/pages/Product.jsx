import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const Products = [
  {
    image: "/Images/Fruits.jpg",
    title: "FRUITS",
    description: "Fruits at agro farm are fully nourished and fresh ",
    button: "Read More",
    heading: "Fruits",
    content: 'A deep dive into unique fruits from around the world, their flavors and how to incorporate them into your diet.',
           

  },

  {
    image: "/Images/Rice.jpg",
    title: "RICE",
    description: "Rice is the main products of agro farm",

    button: "Read More",
    content: "Rice, a staple food for billions worldwide, is a versatile grain with a rich history and diverse culinary applications.",
    heading: "Rice",
  },
  {
    image: "/Images/sugarcane.jpg",
    title: "Sugarcane",
    description: "Sugarcanes are being sold here too",
    button: "Read More",
    content: "Sugarcane has been an integral part of agro farm for centuries. Its versatility and economic importance continue to make it a valuable crop.",
    heading: "Sugarcane",
  },
  {
    image: "/Images/Pulses.jpg",
    title: " Pulses",
    description: "  Get direct source of protein (pulses) from us.  ",
    button: "Read More",
    content: "A complete protein source, making them a great alternative to meat.",

    heading: "Pulses",
  },
];

const Product = () => {
  useEffect(() => {
        AOS.init({
          duration:2000
        });
      }, []);
  
  const [open, setOpen] = useState(false);
  const [dialogIndex, setDialogIndex] = useState();

  const handleChange = (parameter) => (event) => {
    console.log(parameter);
    setDialogIndex(parameter);
    setOpen(true);
  };
  return (
    <React.Fragment>
      <div  className=" py-12 bg-gray-200">
      <div data-aos="fade-down" className='relative  bg-cover bg-center h-96' style={{backgroundImage: "url('/Images/Image5.jpg')"}}>
          <div  className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
      
      
  </div>
  

  </div>
        <div data-aos="fade-up-right" className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 ">Our Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Products.map((Products, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer"
              >
                <img
                  src={Products.image}
                  alt={Products.title}
                  className=" w-full h-48 p-1 object-cover transform transition duration-300 hover:scale-110"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2"> {Products.title}</h3>
                  <p className="text-gray-600">{Products.description}</p>
                  <button
                    onClick={handleChange(index)}
                    className=" font-bold py-2 px-6 border bg-gray-300 rounded-full"
                  >
                    {Products.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <ExclamationTriangleIcon
                      aria-hidden="true"
                      className="size-6 text-red-600"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      {Products[dialogIndex]?.heading}
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {Products[dialogIndex]?.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Buy
                </button>
                
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
};

export default Product;
