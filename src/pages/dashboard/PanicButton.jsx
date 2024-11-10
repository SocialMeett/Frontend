import React from 'react';

const PanicButton = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Panic Button</h2>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Trigger Panic Alert
            </button>
        </div>
    );
};

export default PanicButton;
