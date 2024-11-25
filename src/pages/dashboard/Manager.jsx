import React, { useState } from 'react';
import EmergencyContactForm from '../dashboard/EmergencyContact';
import EmergencyContactList from '../dashboard/FriendsList';

const ParentComponent = () => {
    const [contacts, setContacts] = useState([]); // Correct state initialization

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Emergency Contact Manager</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Passing both contacts and setContacts to EmergencyContactForm */}
                <EmergencyContactForm setContacts={setContacts} />
                {/* Passing contacts to EmergencyContactList */}
                <EmergencyContactList contacts={contacts} />
            </div>
        </div>
    );
};

export default ParentComponent;
