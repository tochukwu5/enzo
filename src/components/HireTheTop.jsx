import image1 from "../assets/img/image1.png";
import map from "../assets/img/map.png";
import logo from '../assets/img/logo.png';
import image2 from "../assets/img/image2.png";
import image3 from "../assets/img/image3.png";
import image4 from "../assets/img/image4.png";
import image5 from "../assets/img/image5.png";
import image6 from "../assets/img/image6.png";
import { useState, useEffect } from "react";

function HireTheTop() {
  const divStyle = {
    clipPath: "polygon(100% 1%, 100% 100%, 12% 100%, 0 90%, 0 0)",
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: image1,
      name: "Paul E.",
      role: "Founder & Growth Strategist",
    },
    {
      image: image2,
      name: "David E.",
      role: "Certified Web Developer",
   
    },
    {
      image: image3,
      name: "Julius U.",
      role: "Certified Solidity Developer",
  
    },
    {
      image: image4,
      name: "Ezekiel E.",
      role: "Certified Graphic Designer",
    },
    {
      image: image5,
      name: " Mark I.",
      role:  (
    <>
      Global Business Development <br />Leader 
      (Co-founder)
    </>
  ),
     
    },
     {
      image: image6,
      name: "Collins E.",
      role: "Digital Marketer",
     
    }
  ];
// ===========================flip function===================
  const [flip, setFlip] = useState(false);

useEffect(() => {
  setFlip(true);

  const timer = setTimeout(() => {
    setFlip(false);
  }, 600); // same duration as animation

  return () => clearTimeout(timer);
}, [currentIndex]);

// ===============================ends=========================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-[#d2d6e2] flex justify-center items-center py-16 lg:py-0 px-11 overflow-hidden">
      <div className="max-w-[1200px] grid grid-cols-1 md:grid-cols-2 relative">
        <div className="mb-5 flex flex-col justify-center items-center z-10">
          <h1 className=" text-2xl lg:text-3xl lg:leading-normal leading-normal text-center font-medium text-gray-800 lg:text-left">
            Build, Scale, and Grow Your Business with On-Demand Expert Teams
          </h1>
          <p className=" mt-5 text-center mb-11 text-gray-500 lg:text-left ">
            We connect businesses with carefully vetted professionals across sales, technology, marketing, and operations 
            managed by experienced business leaders.

          </p>
          <a
            href="#"
            className="bg-green-400 px-11 py-4 my-5 w-fit text-white text-center text-xl font-bold">
           Start Your Project
          </a>
        </div>
        <div className="relative hidden md:block  h-[500px]">

 {slides.map((slide, index) => (
  <div
    key={index}
    className={`flex justify-center items-center absolute ml-5 bottom-0 left-0 w-full transition-opacity duration-1000 ${
      index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-0  " 
    }`}
  >

    {/* IMAGE SECTION */}
    <div className="absolute bottom-32 md:-right-32 xl:-left-6 w-[400px] h-[330px]   lg:w-[350px] xl:w-[400px]">
      <img
        src={slide.image}
        alt={slide.name}
        className="object-contain w-full h-full z-0 p-1"
      />
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-gray-300 to-transparent"></div>
    </div>


    {/* INFO CARD */}
    <div
  className="relative mb-10 md:left-20 lg:left-28 xl:left-36 bottom-11
  w-[400px] lg:w-[460px] xl:w-[500px]
  min-h-[340px] min-w-[290px]
  flip-card"
  style={divStyle}
>
      <div className={`flip-card-inner ${flip ? "flip" : ""}`}>

        {/* FRONT SIDE */}
        <div className="flip-card-front grid text-sm p-5 bg-white justify-center items-center min-h-[360px]  ">

          <img src={map} alt="Map" />

          {/* Animated Dot */}
           <div className="absolute top-[28%] left-[46%] w-3 h-3">
    <div className="absolute w-full h-full rounded-full bg-blue-700 animate-ping"></div>
    <div className="absolute top-[35%] left-[35%] w-1 h-1 rounded-full bg-blue-700"></div>
  </div>

          <div className="mt-3 mr-14">

            {/* NAME */}
            <h3 className="text-blue-700 font-semibold hover:cursor-pointer hover:underline p-1">
              {slide.name}
            </h3>

            {/* VERIFIED */}
            <div className="flex gap-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="green">
                <path
                  fill="green"
                  d="m2.3438,5.6562l-2.3438,2.3438,2.3438,2.3438v3.3137h3.3137l2.3425,2.3425 2.3425-2.3425h3.315v-3.315l2.3425-2.3425-2.3425-2.3425v-3.3137h-3.3138l-2.3437-2.3438-2.3438 2.3438h-3.3125v3.3125Z"
                />
              </svg>

              <h3 className="text-green-800 whitespace-nowrap text-sm">
                <span className="font-semibold">  {slide.role} </span>
                {slide.specialization}
              </h3>
            </div>

            {/* ROLE */}
            <div className="flex gap-1 mb-4 mt-1">
              {/* <svg width="16" height="16">
                <path
                  fill="#204ECF"
                  d="M10.1 1.125 6.875 15.1l-.975-.225L9.125.9l.975.225Z"
                />
              </svg>

              <h3 className="text-sm">{slide.role}</h3> */}
            </div>

            {/* COMPANY */}
            <h3 className="text-green-900 mt-6 text-sm">Currently Working At</h3>
            <img src={logo}
            className="w-36"
             alt="Company logo" />

          </div>
        </div>

      </div>
    </div>

  </div>
))}

</div>

       
      </div>
    </div>
  );
}

export default HireTheTop;
