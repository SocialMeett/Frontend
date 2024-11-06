import React from 'react';
import logo from "../../assets/images/image 25.png";
import { FaHome, FaMap, FaUserFriends, FaBell, FaExclamationTriangle, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { FaMessage } from "react-icons/fa6";

const Dashboard = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-600 text-white flex flex-col">
                <div >Social Meet</div>
                <nav className="flex flex-col mt-4 space-y-4">
                    <a href="#dashboard" className="flex items-center px-4 py-2 hover:bg-blue-700 transition">
                        <FaHome className="mr-3" /> Dashboard
                    </a>
                    <a href="#map" className="flex items-center px-4 py-2 hover:bg-blue-700 transition">
                        <FaMap className="mr-3" /> Map
                    </a>
                    <a href="#friendlist" className="flex items-center px-4 py-2 hover:bg-blue-700 transition">
                        <FaUserFriends className="mr-3" /> Friend List
                    </a>
                    <a href="#panic" className="flex items-center px-4 py-2 hover:bg-blue-700 transition">
                        <FaExclamationTriangle className="mr-3" /> Panic Button
                    </a>
                    <a href="#logout" className="flex items-center px-4 py-2 hover:bg-blue-700 transition">
                        <FaSignOutAlt className="mr-3" /> Logout
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <header className="flex items-center justify-between p-4 bg-white shadow">
                <div className=" text-2xl font-bold">
                    <img src={logo} alt="logo" className='h-16 w-16 mr-3 ' />
                </div>
                    <div className="flex items-center space-x-4">
                        <FaBell className="text-gray-600 text-xl cursor-pointer" />
                        <FaMessage className="text-gray-600 text-xl cursor-pointer" />
                        <FaUser className="text-gray-600 text-xl cursor-pointer" />
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="p-6">
                    <h2 className="text-3xl font-semibold text-gray-800">Welcome to the Dashboard</h2>
                    {/* Insert the main content of your dashboard here */}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
