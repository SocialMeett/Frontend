import React, { useState } from 'react';

const EmergencyContactForm = () => {
    const [contacts, setContacts] = useState([]);
    const [formData, setFormData] = useState({
        contactName: '',
        relationship: '',
        phoneNumber: '',
        email: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            // Update contact details if editing
            const updatedContacts = [...contacts];
            updatedContacts[editIndex] = formData;
            setContacts(updatedContacts);
            setIsEditing(false);
            setEditIndex(null);
        } else {
            // Add new contact
            setContacts([...contacts, formData]);
        }
        // Clear form
        setFormData({
            contactName: '',
            relationship: '',
            phoneNumber: '',
            email: ''
        });
    };

    // Handle edit action
    const handleEdit = (index) => {
        setIsEditing(true);
        setEditIndex(index);
        setFormData(contacts[index]);
    };

    // Handle delete action
    const handleDelete = (index) => {
        const updatedContacts = contacts.filter((_, i) => i !== index);
        setContacts(updatedContacts);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
                {isEditing ? "Edit Contact" : "Emergency Contact Form"}
            </h2>
            <form onSubmit={handleSubmit}>
                {/* Contact Name */}
                <div className="mb-4">
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Name
                    </label>
                    <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter full name"
                        required
                    />
                </div>

                {/* Relationship */}
                <div className="mb-4">
                    <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-1">
                        Relationship
                    </label>
                    <input
                        type="text"
                        id="relationship"
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="e.g., Parent, Sibling, Friend"
                        required
                    />
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter phone number"
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter email address"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        {isEditing ? "Update Contact" : "Submit"}
                    </button>
                </div>
            </form>

            {/* Display List of Contacts */}
            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Emergency Contacts</h3>
                <ul className="space-y-2">
                    {contacts.map((contact, index) => (
                        <li key={index} className="p-4 bg-gray-100 rounded-md shadow flex justify-between items-center">
                            <div>
                                <p><strong>Name:</strong> {contact.contactName}</p>
                                <p><strong>Relationship:</strong> {contact.relationship}</p>
                                <p><strong>Phone:</strong> {contact.phoneNumber}</p>
                                <p><strong>Email:</strong> {contact.email}</p>
                            </div>
                            <div className="space-x-2">
                                <button
                                    onClick={() => handleEdit(index)}
                                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default EmergencyContactForm;
