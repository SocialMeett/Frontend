import React from "react";
import Swal from "sweetalert2";

// Mock Emergency Contact List (replace with actual fetched data)
const emergencyContacts = [
    { id: 1, name: "John Doe", phone: "1234567890", email: "john@example.com" },
    { id: 2, name: "Jane Smith", phone: "0987654321", email: "jane@example.com" },
];

// Function to simulate sending alerts
const sendAlertToContacts = (contacts, userLocation) => {
    contacts.forEach(contact => {
        // Simulate alert logic - in real case, this should be an API request
        console.log(`Sending alert to ${contact.name}`);
        console.log(`Phone: ${contact.phone}`);
        console.log(`Email: ${contact.email}`);
        console.log(`User Location: ${JSON.stringify(userLocation)}`);
    });
};

const PanicButton = ({ userLocation }) => {
    const handlePanicClick = () => {
        if (emergencyContacts && emergencyContacts.length > 0) {
            // Call the alert function to simulate sending alerts
            sendAlertToContacts(emergencyContacts, userLocation);

            // SweetAlert success message
            Swal.fire({
                icon: 'success',
                title: 'Alert Sent!',
                text: 'Your emergency contacts have been notified.',
                confirmButtonText: 'Okay',
                confirmButtonColor: '#3085d6', // Customize button color
            });
        } else {
            // SweetAlert error message
            Swal.fire({
                icon: 'error',
                title: 'No Emergency Contacts!',
                text: 'Please add emergency contacts before using the panic button.',
                confirmButtonText: 'Okay',
                confirmButtonColor: '#d33', // Customize button color
            });
        }
    };

    return (
        <button
            className="bg-red-500 text-white p-4 rounded-lg shadow-lg hover:bg-red-700"
            onClick={handlePanicClick}
        >
            Panic Button
        </button>
    );
};

export default PanicButton;
