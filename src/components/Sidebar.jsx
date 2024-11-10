import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserFriends, FaMapMarkedAlt, FaExclamationCircle, FaBell, FaEnvelope, FaUserCircle, FaBars } from 'react-icons/fa';
import { CiLogout } from "react-icons/ci";
import logo from "../assets/images/image 25.png";
import { MdContactEmergency } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`relative w-64 text-white p-6 flex flex-col h-screen bg-gray-800 ${isOpen ? 'block' : 'hidden'} md:block`}>
            
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/08/75/99/97/360_F_875999718_eBJG3omMa9FZJCN6h58PO8iGXgP917w1.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-70"></div>

            
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-center border-red-300 border-b-2 space-x-3 mb-8">
                    <img src={logo} alt="logo" className="w-24 h-24" />
                </div>

                
                <ul className="flex-grow leading-6 p-4">
                    <li className="mb-8">
                        <NavLink to="/dashboard" className="flex items-center space-x-2 hover:text-blue-300" activeClassName="text-blue-300">
                            <FaUserCircle />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="mb-8">
                        <NavLink to="/dashboard/friends" className="flex items-center space-x-2 hover:text-blue-300" activeClassName="text-blue-300">
                            <FaUserFriends />
                            <span>Friends List</span>
                        </NavLink>
                    </li>
                    <li className="mb-8">
                        <NavLink to="/dashboard/notify" className="flex items-center space-x-2 hover:text-blue-300" activeClassName="text-blue-300">
                            <FaBell />
                            <span>Notifications</span>
                        </NavLink>
                    </li>
                    <li className="mb-8">
                        <NavLink to="/dashboard/message" className="flex items-center space-x-2 hover:text-blue-300" activeClassName="text-blue-300">
                            <FaEnvelope />
                            <span>Messages</span>
                        </NavLink>
                    </li>
                    <li className="mb-8">
                        <NavLink to="/dashboard/map" className="flex items-center space-x-2 hover:text-blue-300" activeClassName="text-blue-300">
                            <FaMapMarkedAlt />
                            <span>Map</span>
                        </NavLink>
                    </li>
                    <li className="mb-8">
                        <NavLink to="/dashboard/emergency" className="flex items-center space-x-2 hover:text-blue-300" activeClassName="text-blue-300">
                            <MdContactEmergency />
                            <span>Emergency Contacts</span>
                        </NavLink>
                    </li>
                    <li className="mb-8">
                        <NavLink to="/dashboard/panic" className="flex items-center space-x-2 hover:text-blue-300" activeClassName="text-blue-300">
                            <FaExclamationCircle />
                            <span>Panic Button</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

        
            <button 
                className="absolute top-4 right-4 md:hidden p-2 bg-gray-700 rounded" 
                onClick={() => setIsOpen(!isOpen)} 
                aria-label="Toggle sidebar">
                <FaBars />
            </button>
        </div>
    );
};

export default Sidebar;
