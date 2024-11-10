import React from 'react';
import { FaMapMarkerAlt, FaBell, FaEnvelope, FaUserFriends, FaPhoneAlt, FaExclamationTriangle } from "react-icons/fa";
import pic from "../../assets/images/images 1.jpeg";
import pics from "../../assets/images/images 2.jpeg";
import picss from "../../assets/images/images 3.jpeg";

const DashboardOverview = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-100 rounded-lg shadow-lg">
      
      {/* User Profile Summary */}
      <section className="flex items-center bg-white p-4 rounded-lg shadow-md space-x-4">
        <img src={pic} alt="User" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Welcome, Jackie</h2>
          <p className="text-gray-500">Last seen: 5 mins ago</p>
        </div>
      </section>

      {/* Friends Status Summary */}
      <section className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <FaUserFriends className="text-blue-500" /> Friends Nearby
        </h3>
        <div className="flex space-x-4 mt-2">
          <img src={pics} alt="Friend" className="w-10 h-10 rounded-full object-cover border-2 border-blue-500" />
          <img src={picss} alt="Friend" className="w-10 h-10 rounded-full object-cover border-2 border-green-500" />
        </div>
      </section>

      {/* Map Preview */}
      <section className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-500" /> Location Overview
        </h3>
        <div className="bg-gray-200 h-40 w-full rounded-md flex items-center justify-center text-gray-500 text-sm">
          [Mini Map Component]
        </div>
      </section>

      {/* Notifications and Messages Preview */}
      <section className="bg-white p-4 rounded-lg shadow-md">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <FaBell className="text-yellow-500" /> Notifications
          </h3>
          <p className="text-gray-500">No new notifications</p>

          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mt-4">
            <FaEnvelope className="text-blue-500" /> Messages
          </h3>
          <p className="text-gray-500">No new messages</p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800">Quick Actions</h3>
        <div className="flex gap-4 mt-3">
          <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-md">
            <FaPhoneAlt /> Emergency Contacts
          </button>
          <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow-md">
            <FaExclamationTriangle /> Send Panic Alert
          </button>
        </div>
      </section>
    </div>
  );
};

export default DashboardOverview;
