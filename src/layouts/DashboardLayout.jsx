import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar2 from '../components/Navbar2';
import UserProfile from '../pages/dashboard/UserProfile';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    const [showUserProfile, setShowUserProfile] = useState(false);
    const [userLocation, setUserLocation] = useState({ latitude: '', longitude: '' });

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
                    <Navbar2 setShowUserProfile={setShowUserProfile} setUserLocation={setUserLocation} />
                </div>

                {/* Scrollable Content Area */}
                <div className="pt-16 overflow-y-auto h-full p-4 bg-gray-100">
                    {showUserProfile ? (
                        <UserProfile userLocation={userLocation} />
                    ) : (
                        <Outlet />
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;