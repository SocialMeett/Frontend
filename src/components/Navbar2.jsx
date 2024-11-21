import React, { useState } from 'react';
import { FaBell, FaEnvelope, FaUserCircle, FaUser } from 'react-icons/fa';
import { CiLogout } from 'react-icons/ci';
import { IoMdSettings } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../pages/dashboard/ConfirmModal';
import { apiUpdateProfile } from '../services/auth';
import axios from 'axios';

const Navbar2 = ({ setShowUserProfile, setUserLocation }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [locationSharing, setLocationSharing] = useState(false); 
    const toggleProfileDropdown = () => setIsProfileOpen(!isProfileOpen);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle location toggle change
    const handleLocationToggle = () => {
        setLocationSharing(prevState => !prevState);
        if (!locationSharing) { 
            startLocationWatching();
        }
    };

    const startLocationWatching = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.watchPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                console.log(latitude, longitude);
                setUserLocation({ latitude, longitude });  // Update the location state
                try {
                    const token = localStorage.getItem("token");
                    if (!token) throw new Error('Invalid token or user ID');
                    
                    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                    if (latitude && longitude) {
                        const locationData = {
                            location: {
                                latitude: latitude,
                                longitude: longitude
                            }
                        };
                        await apiUpdateProfile(locationData);
                        console.log("Location updated successfully");
                    } else {
                        console.error("Invalid coordinates");
                    }
                } catch (error) {
                    console.error("Error updating location:", error);
                }
            }, (error) => {
                console.error("Error getting location:", error);
            });
        } else {
            console.error("Geolocation is not available in this browser");
        }
    };

    // Logout handler
    const handleLogout = () => {
        localStorage.removeItem("token");
        // localStorage.removeItem("userProfile");
        navigate("/login");
    };

    // Handle "My Profile" click
    const handleProfileClick = () => {
        setShowUserProfile(true);
        setIsProfileOpen(false);
    };

    return (
        <div className="bg-transparent p-4 shadow text-orange-600">
            <div className="flex justify-between items-center">
                {/* Location Sharing Toggle */}
                <div className="flex items-center cursor-pointer space-x-2">
                    <label className="text-sm text-gray-700">Location Sharing</label>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="locationToggle"
                            className="hidden"
                            checked={locationSharing}
                            onChange={handleLocationToggle}
                        />
                        <div
                            className={`w-12 h-6 rounded-full ${locationSharing ? 'bg-blue-500' : 'bg-gray-300'} transition-all duration-300`}
                            onClick={handleLocationToggle}
                        >
                            <div
                                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 ${locationSharing ? 'translate-x-6' : 'translate-x-0'}`}
                            ></div>
                        </div>
                    </div>
                </div>

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
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="flex items-center gap-2">
                                    <CiLogout />
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <ConfirmModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={() => {
                    handleLogout();
                    setIsModalOpen(false);
                }}
            />
        </div>
    );
};

export default Navbar2;