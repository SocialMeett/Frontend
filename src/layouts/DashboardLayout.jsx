import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar2 from '../components/Navbar2';
import UserProfile from '../pages/dashboard/UserProfile';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    // State to manage whether user profile is visible
    const [showUserProfile, setShowUserProfile] = useState(false);

    // State to hold the user's location (latitude and longitude)
    const [userLocation, setUserLocation] = useState({ latitude: '', longitude: '' });

    // State to hold the user's profile location (if different)
    const [profileLocation, setProfileLocation] = useState({ latitude: '', longitude: '' });

    return (
        <div className="dashboard-layout flex h-screen overflow-hidden">
            {/* Sidebar - Fixed to the left */}
            <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-64">
                {/* Navbar - Fixed to the top */}
                <div className="fixed top-0 left-64 right-0 z-50 bg-white shadow-md">
                    {/* Pass `setShowUserProfile`, `setUserLocation`, and `setProfileLocation` to `Navbar2` */}
                    <Navbar2 
                        setShowUserProfile={setShowUserProfile} 
                        setUserLocation={setUserLocation} 
                        setProfileLocation={setProfileLocation}  // Pass this new prop
                        userLocation={userLocation}
                    />
                </div>

                {/* Scrollable Content Area */}
                <div className="pt-16 overflow-y-auto h-full p-4 bg-gray-100">
                    {/* Conditional rendering to show UserProfile or other content */}
                    {showUserProfile ? (
                        // Pass `profileLocation` to UserProfile component to display updated location
                        <UserProfile userLocation={profileLocation} />
                    ) : (
                        <Outlet />
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
