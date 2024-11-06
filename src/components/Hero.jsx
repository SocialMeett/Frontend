// import React from 'react'
// import pic from "../assets/images/image 10.png"

// const Hero = () => {
//   return (
//     <div>
//          <div>
//          <div className='flex flex-col items-center justify-center text-center pt-4 px-10 lg:flex-row lg:items-center lg:justify-between lg:space-x-20  -z-20 '>
//           <div className=''>
//          <div className='lg:max-w-lg lg:flex-1 ml-28  '>
//          <h1 className='text-black text-4xl font-extrabold text-center lg:text-left leading-tight mb-6'>Connect with Friends and Meet Up Safely.</h1>
//         <p className='text-gray-700 text-lg font-medium text-center lg:text-left leading-relaxed mb-6'> Real-time location sharing and emergency alerts to stay connected and safe.</p>
//             {/* <br />With Postiize, reaching your audience has never been easier. 
//             <br />Post your ads, find the best deals, and explore endless possibilities!
//             <span className='text-green-400 text-2xl font-semibold '>Post with ease! */}

//             <div className='mt-12 '>
//                         <button
//                             type='submit' 
//                             className="p-4  hover:bg-blue-800   text-white font-semibold text-xl w-34 bg-blue-800"
                            
//                         >
//                             GET STARTED
//                         </button>
//                     </div>
//                     {/* </span> */}
//     </div>
//     </div>

//     <div className='relative w-full  lg:w-1/2 lg:max-w-lg lg:h-auto mr-20  lg:mt-0'>
//       <div className='absolute '></div>
//       <img className='relative ' src={pic} alt="placeholder" />
//     </div>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Hero

import React from 'react';

function Hero() {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/07/21/57/96/360_F_721579671_jZZ2t12Sixbtwyu6uJKGomNGVn2PE96t.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Connect with Friends and Meet Up Safely
        </h1>
        <p className="text-lg md:text-xl mb-4">
          Real-time location sharing and emergency alerts to stay connected and safe.
        </p>
        <p className="text-lg md:text-xl mb-8 font-semibold italic">
          Where Connections meet Safety.
        </p>
        {/* <div className="flex justify-center space-x-4">
          <a href="#signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Sign Up
          </a> */}
          <a href="#learn-more" className="bg-transparent border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
            Get Started
          </a>
        </div>
      {/* </div> */}
    </section>
  );
}

export default Hero;
