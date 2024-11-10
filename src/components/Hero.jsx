
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
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Connect with Friends and Meet Up Safely</h1>
        <p className="text-lg md:text-xl mb-4">Real-time location sharing and emergency alerts to stay connected and safe.</p>
        <p className="text-lg md:text-xl mb-8 font-semibold italic">Where Connections meet Safety.</p>
        </div>
    </section>
  );
};


export default Hero;
