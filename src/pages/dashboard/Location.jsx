// import React, { useState, useEffect } from 'react';

// const LocationSharingToggle = () => {
//   const [isSharing, setIsSharing] = useState(false);
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     // Check if the user has previously opted to share their location (optional)
//     const savedLocationSharing = localStorage.getItem('locationSharing');
//     if (savedLocationSharing === 'true') {
//       setIsSharing(true);
//       getUserLocation();
//     }
//   }, []);

//   const getUserLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setLocation({ latitude, longitude });
//           // Send this location to the backend to store
//           console.log('Location:', { latitude, longitude });
//           // Optionally, save it in localStorage or call an API to store
//         },
//         (error) => {
//           console.error('Error getting location:', error);
//           alert('Location permission denied. Please allow location access.');
//         }
//       );
//     } else {
//       alert('Geolocation is not supported by this browser.');
//     }
//   };

//   const toggleLocationSharing = () => {
//     if (isSharing) {
//       // Turn off location sharing
//       setIsSharing(false);
//       setLocation(null);
//       localStorage.setItem('locationSharing', 'false');
//       // Optionally, inform backend to stop sharing the location
//       console.log('Stopped sharing location');
//     } else {
//       // Turn on location sharing
//       setIsSharing(true);
//       localStorage.setItem('locationSharing', 'true');
//       getUserLocation();
//     }
//   };

//   return (
//     <div className="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg mb-6">
//       <div className="flex items-center">
//         <span className="mr-4 text-lg font-semibold">Share my location:</span>
//         <label className="switch">
//           <input
//             type="checkbox"
//             checked={isSharing}
//             onChange={toggleLocationSharing}
//           />
//           <span className="slider"></span>
//         </label>
//       </div>
//       {location && isSharing && (
//         <div className="text-sm text-gray-500">
//           <p>Latitude: {location.latitude}</p>
//           <p>Longitude: {location.longitude}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LocationSharingToggle;
