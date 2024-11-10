import React, { useState } from 'react';
import { FaBell, FaEnvelope, FaUserCircle, FaUser } from 'react-icons/fa';
import { CiLogout } from 'react-icons/ci';
import { IoMdSettings } from 'react-icons/io';

const Navbar2 = ({ setShowUserProfile }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    // Toggle profile dropdown visibility
    const toggleProfileDropdown = () => setIsProfileOpen(!isProfileOpen);

    // Handle "My Profile" click
    const handleProfileClick = () => {
        setShowUserProfile(true);  // Show profile view in DashboardLayout
        setIsProfileOpen(false);   // Close dropdown
    };

    return (
        <div className="bg-transparent p-4 shadow text-orange-600">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Dashboard</h1>
                <div className="flex space-x-4 relative">
                    <FaBell className="cursor-pointer" />
                    <FaEnvelope className="cursor-pointer" />
                    <FaUserCircle className="cursor-pointer" onClick={toggleProfileDropdown} />

                    {isProfileOpen && (
                        <div className="absolute top-10 right-0 bg-white p-8 shadow-lg rounded-lg w-48">
                            <div className="flex mb-4">
                                <button className="flex items-center gap-2" onClick={handleProfileClick}>
                                    <FaUser />
                                    <span>My Profile</span>
                                </button>
                            </div>
                            <div className="flex mb-4">
                                <button className="flex items-center gap-2">
                                    <IoMdSettings />
                                    <span>Settings</span>
                                </button>
                            </div>
                            <div className="flex">
                                <button className="flex items-center gap-2">
                                    <CiLogout />
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar2;
