import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar2 from '../components/Navbar2';
import UserProfile from '../pages/dashboard/UserProfile';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    const [showUserProfile, setShowUserProfile] = useState(false);

    return (
        <div className="dashboard-layout flex">
            <Sidebar />
            
            <div className="w-full">
                {/* Pass the setShowUserProfile function to the Navbar to control when the profile is shown */}
                <Navbar2 setShowUserProfile={setShowUserProfile} />

                <div className="p-4">
                    {showUserProfile ? (
                        <UserProfile />  // Display UserProfile if showUserProfile is true
                    ) : (
                        <Outlet />  // Display routed content if showUserProfile is false
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
