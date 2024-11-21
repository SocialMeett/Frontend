import React from 'react';
import pics from "../assets/images/image 17.jpeg";
import img from "../assets/images/image 21.jpeg";
import picss from "../assets/images/image 14.webp";
import picsss from "../assets/images/image 20.jpeg";
import { BsFill1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { BsFill3CircleFill } from "react-icons/bs";
import { BsFill4CircleFill } from "react-icons/bs";

function Steps() {
  return (
    <section className="py-20 bg-gray-50" id="steps">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F2944] mb-12">
          Connect with Friends in 4 easy steps
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 text-center">

          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <h1 className=' mb-4 text-3xl  '><BsFill1CircleFill /></h1>
            <img
              src={img}
              alt="Connect with Friends"
              className="w-24 h-36 object-cover mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Sign up and Create/Join A Circle
            </h3>
            <p className="text-gray-600">
              If you are an admin or a member, create or join a circle.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <h1 className='mb-4 text-3xl'><Bs2CircleFill /></h1>
            <img
              src={picsss}
              alt="Share Your Location"
              className="w-38 h-36 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Share Your Location
            </h3>
            <p className="text-gray-600">
              Turn on your Locations and Share real-time location updates for an easier meetup experience.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <h1 className=' mb-4 text-3xl'><BsFill3CircleFill /></h1>
            <img
              src={picss}
              alt="Receive Notifications"
              className="w-24 h-36 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Receive Notifications
            </h3>
            <p className="text-gray-600">
              Toggle the notifications to get alerts, traffic updates, and proximity notifications on the go.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <h1 className=' mb-4 text-3xl'><BsFill4CircleFill /></h1>
            <img
              src={pics}
              alt="Emergency Alerts"
              className="w-24 h-36 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Emergency Alerts
            </h3>
            <p className="text-gray-600">
              Add an emergengy contact list and send a panic alert to your circle in case of an emergency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
