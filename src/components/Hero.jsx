
import React from 'react';
import video from "../assets/images/video 4.mp4"

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-black z-10"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Where Every Connection Counts.</h1>
        <p className="text-lg md:text-xl mb-4">Your ultimate platform for real-time location sharing, safety, and seamless team collaboration.</p>
        <p className="text-lg md:text-xl mb-8 font-semibold italic">Stay Informed, Stay Safe!</p>
        </div>
    </section>
  );
};


export default Hero;
