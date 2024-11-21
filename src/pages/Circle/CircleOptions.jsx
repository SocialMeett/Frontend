import React from 'react';
import { useNavigate } from 'react-router-dom';

const CircleOptions = () => {
  const navigate = useNavigate();

  const handleNavigation = (action) => {
    if (action === 'join') {
      navigate('/join');
    } else if (action === 'create') {
      navigate('/create');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
      <p className="text-lg mb-6">Would you like to join a circle or create one?</p>
      <div className="space-x-4">
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => handleNavigation('join')}
        >
          Join a Circle
        </button>
        <button
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={() => handleNavigation('create')}
        >
          Create a Circle
        </button>
      </div>
    </div>
  );
};

export default CircleOptions;
