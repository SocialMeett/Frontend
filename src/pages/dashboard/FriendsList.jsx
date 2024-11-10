import React from 'react';

const FriendsList = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Friends List</h2>
            {/* Placeholder content for the friends list */}
            <ul>
                <li className="border-b py-2">Friend 1 - Location: (40.7128, -74.0060)</li>
                <li className="border-b py-2">Friend 2 - Location: (34.0522, -118.2437)</li>
                {/* Add more friends as needed */}
            </ul>
        </div>
    );
};

export default FriendsList;
