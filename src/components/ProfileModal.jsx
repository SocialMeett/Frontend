// ProfileModal.jsx
import React from 'react';

const ProfileModal = ({ user, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                <button onClick={onClose} className="float-right text-gray-500 hover:text-gray-700">
                    &times;
                </button>
                <h2 className="text-xl font-semibold mb-4">User Profile</h2>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Location:</strong> {user.location}</p>
                <p><strong>Settings:</strong> {user.location}</p>
                <p><strong>Emergency Contact List:</strong> {user.location}</p>
                {/* Add more profile fields as needed */}
            </div>
        </div>
    );
};

export default ProfileModal;
