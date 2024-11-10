// import React from 'react';
// import img from "../assets/images/image 8.webp";

// function About() {
//   return (
//     <section className="py-20 bg-gray-100" id="about">
//       <div className="container mx-auto px-4 md:flex md:items-center">

//         {/* Image */}
//         <div className="mb-8 md:mb-0 md:w-1/2">
//           <img 
//             src={img} 
//             alt="About Us" 
//             className="w-80 h-full object-cover rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Content */}
//         <div className="md:w-1/2 md:pl-10">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             About Us
//           </h2>
//           <p className="text-gray-600 mb-6">
//             Welcome to Social Meet! We’re a team dedicated to helping people connect
//             effortlessly and safely. Our platform allows friends to share locations,
//             plan trips, and stay updated with real-time notifications, all while
//             prioritizing your safety with emergency alerts and proximity notifications.
//           </p>
//           <p className="text-gray-600 mb-6">
//             Our mission is to enhance social experiences by bridging the gap between 
//             physical and digital interactions. We believe that connecting with friends 
//             should be seamless and stress-free, and we're committed to delivering that 
//             with Social Meet.
//           </p>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;

// import React from 'react';
// import img from "../assets/images/image 9.webp";

// function About() {
//     return (
//         <section className="py-16 bg-gray-50" id="about">
//             <div className="container justify-center px-4 flex flex-col md:flex-row md:items-center space-y-8 md:space-y-0 md:space-x-10">

//                 {/* Image */}
//                 {/* <div className="md:w-1/3 flex justify-center md:justify-start">
//                     <img
//                         src={img}
//                         alt="About Us"
//                         className="w-80 h-80 object-cover shadow-md"
//                     />
//                 </div> */}

//                 {/* Content */}
//                 <div className="md:w-2/3 text-center md:text-left">
//                     <h2 className="text-3xl font-bold text-gray-800 mb-4">
//                         About Us
//                     </h2>
//                     <p className="text-gray-600 mb-6">
//                         Welcome to Social Meet! We’re a team dedicated to helping people connect effortlessly and safely. Our platform allows friends to share locations plan trips, and stay updated with real-time notifications, all while prioritizing your safety with emergency alerts and proximity notifications.
//                     </p>
//                     <p className="text-gray-600 mb-6">
//                         Our mission is to enhance social experiences by bridging the gap between
//                         physical and digital interactions. We believe that connecting with friends
//                         should be seamless and stress-free, and we're committed to delivering that with Social Meet.
//                     </p>

//                 </div>
//             </div>
//         </section>
//     );
// }

// export default About;

import React from 'react';

function About() {
    return (
        <section className="py-16 bg-gray-50" id="about">
            <div className="container mx-auto px-4 text-center md:text-left md:w-2/3 lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    About Us
                </h2>
                <p className="text-gray-600 mb-4">
                    Welcome to Social Meet! We’re a team dedicated to helping people connect effortlessly and safely. Our platform allows friends to share locations plan trips, and stay updated with real-time notifications, all while prioritizing your safety with emergency alerts and proximity notifications.
                </p>
                <p className="text-gray-600 mb-6">
                    Our mission is to enhance social experiences by bridging the gap between
                    physical and digital interactions. We believe that connecting with friend                     should be seamless and stress-free, and we're committed to delivering that with Social Meet.
                </p>

                
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                    Learn More
                </button>
            </div>
        </section>
    );
}

export default About;
