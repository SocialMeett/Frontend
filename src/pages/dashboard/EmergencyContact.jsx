import React, { useState } from 'react';

const EmergencyContactForm = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    relationship: '',
    phoneNumber: '',
    email: ''
  });
  const [contacts, setContacts] = useState([]); // State to store the contacts
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data before adding to the list
    if (formData.contactName && formData.relationship && formData.phoneNumber && formData.email) {
      // Add new contact to the contacts list
      setContacts((prevContacts) => [...prevContacts, formData]);

      // Clear the form after submission
      setFormData({ contactName: '', relationship: '', phoneNumber: '', email: '' });
      setErrorMessage('');
    } else {
      setErrorMessage('Please fill in all fields.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-2xl font-bold">Add Emergency Contact</h2>

        <input
          name="contactName"
          value={formData.contactName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Name"
          required
        />
        <input
          name="relationship"
          value={formData.relationship}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Relationship"
          required
        />
        <input
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Phone Number"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Email"
          required
        />

        {/* Display error message if any */}
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Contact
        </button>
      </form>

      {/* Display the list of contacts */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Contacts List</h3>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index} className="border-b py-2">
              <strong>{contact.contactName}</strong> - {contact.relationship}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmergencyContactForm;
