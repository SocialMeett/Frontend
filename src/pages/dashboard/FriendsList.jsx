import React from 'react';

const EmergencyContactList = ({ contacts = [] }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Emergency Contact List</h2>
            {contacts.length > 0 ? (
                <ul className="space-y-4">
                    {contacts.map((contact, index) => (
                        <li
                            key={index}
                            className="p-4 border rounded-md shadow-sm bg-gray-50"
                        >
                            <p>
                                <strong>Name:</strong> {contact.contactName}
                            </p>
                            <p>
                                <strong>Relationship:</strong> {contact.relationship}
                            </p>
                            <p>
                                <strong>Phone:</strong> {contact.phoneNumber}
                            </p>
                            <p>
                                <strong>Email:</strong> {contact.email}
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No contacts added yet.</p>
            )}
        </div>
    );
};

export default EmergencyContactList;
