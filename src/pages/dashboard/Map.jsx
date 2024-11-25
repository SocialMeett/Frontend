// import React, { useEffect, useState } from 'react';
// import { apiGetCircles } from '../../services/product';  // Assuming this path
// import { APIProvider, Map as GoogleMap } from '@vis.gl/react-google-maps';

// const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// const Map = () => {
//     const [circle, setCircle] = useState(null);  // State to store circle data
//     const [error, setError] = useState(null);    // Error state for handling any issues
    
//     useEffect(() => {
//         // Fetching the circle data when the component mounts
//         const fetchCircle = async () => {
//             try {
//                 const circleData = await apiGetCircles('674065f45c3806d0a91e8eb5');
//                 setCircle(circleData);  // Storing the circle data in state
//             } catch (err) {
//                 setError('Failed to fetch circle data');
//             }
//         };

//         fetchCircle();  // Call fetchCircle function
//     }, []);  // Empty dependency array, so it runs once when the component mounts

//     return (
//         <div className="flex">
//             <div className="bg-white p-6 rounded-lg shadow w-1/4">
//                 <h2 className="text-2xl font-bold mb-4">Circle Details</h2>
//                 {error && <p className="text-red-500">{error}</p>}  {/* Error message */}
//                 {circle ? (
//                     <div>
//                         <p><strong>Name:</strong> {circle.name}</p>
//                         <p><strong>Admin:</strong> {circle.admin.fullName}</p>
//                         <p><strong>Members:</strong></p>
//                         <ul>
//                             {circle.members.map(member => (
//                                 <li key={member.id}>
//                                     {member.fullName} ({member.email})
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ) : (
//                     <p>Loading circle data...</p>
//                 )}
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow w-3/4 ml-4">
//                 <h2 className="text-2xl font-bold mb-4">Map</h2>
//                 <div className="h-screen bg-gray-300 rounded-lg flex items-center justify-center">
//                     <APIProvider apiKey={API_KEY} solutionChannel="GMP_devsite_samples_v3_rgmautocomplete">
//                         <GoogleMap
//                             mapId={"bf51a910020fa25a"}
//                             defaultZoom={3}
//                             defaultCenter={{ lat: 22.54992, lng: 0 }}
//                             gestureHandling={"greedy"}
//                             disableDefaultUI={true}
//                         />
//                     </APIProvider>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Map;


// import React, { useEffect, useState } from 'react';
// import { apiGetCircles } from '../../services/product';  // Assuming this path
// import { APIProvider, Map as GoogleMap } from '@vis.gl/react-google-maps';

// const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// const Map = () => {
//     const [circle, setCircle] = useState(null);  // State to store circle data
//     const [error, setError] = useState(null);    // Error state for handling any issues
    
//     useEffect(() => {
//         // Fetching the circle data when the component mounts
//         const fetchCircle = async () => {
//             try {
//                 const circleData = await apiGetCircles('674065f45c3806d0a91e8eb5');
//                 setCircle(circleData);  // Storing the circle data in state
//             } catch (err) {
//                 setError('Failed to fetch circle data');
//             }
//         };

//         fetchCircle();  // Call fetchCircle function
//     }, []);  // Empty dependency array, so it runs once when the component mounts

//     return (
//         <div className="flex">
//             <div className="bg-white p-6 rounded-lg shadow w-1/4">
//                 <h2 className="text-2xl font-bold mb-4">Circle Details</h2>
//                 {error && <p className="text-red-500">{error}</p>}  {/* Error message */}
//                 {circle ? (
//                     <div>
//                         <p><strong>Name:</strong> {circle.name}</p>
//                         <p><strong>Admin:</strong> {circle.admin.fullName}</p>
//                         <p><strong>Members:</strong></p>
//                         <ul>
//                             {circle.members.map(member => (
//                                 <li key={member.id}>
//                                     <p><strong>Full Name:</strong> {member.fullName}</p>
//                                     <p><strong>Email:</strong> {member.email}</p>
//                                     <p><strong>Latitude:</strong> {member.latitude}</p>
//                                     <p><strong>Longitude:</strong> {member.longitude}</p>
//                                     <p><strong>Member ID:</strong> {member.id}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ) : (
//                     <p>Loading circle data...</p>
//                 )}
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow w-3/4 ml-4">
//                 <h2 className="text-2xl font-bold mb-4">Map</h2>
//                 <div className="h-screen bg-gray-300 rounded-lg flex items-center justify-center">
//                     <APIProvider apiKey={API_KEY} solutionChannel="GMP_devsite_samples_v3_rgmautocomplete">
//                         <GoogleMap
//                             mapId={"bf51a910020fa25a"}
//                             defaultZoom={3}
//                             defaultCenter={{ lat: 22.54992, lng: 0 }}
//                             gestureHandling={"greedy"}
//                             disableDefaultUI={true}
//                         />
//                     </APIProvider>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Map;

// import React, { useEffect, useState } from 'react';
// import { apiGetCircles } from '../../services/product'; // Replace with actual path
// import { APIProvider, Map as GoogleMap, Marker } from '@vis.gl/react-google-maps';

// const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// const Map = () => {
//     const [circle, setCircle] = useState(null); // Circle data
//     const [userLocation, setUserLocation] = useState(null); // User's location
//     const [error, setError] = useState(null); // Error state
//     const [mapCenter, setMapCenter] = useState(null); // Map center
//     const [mapZoom, setMapZoom] = useState(12); // Default zoom level

//     useEffect(() => {
//         // Fetching circle data
//         const fetchCircle = async () => {
//             try {
//                 const circleData = await apiGetCircles('674065f45c3806d0a91e8eb5'); // Replace with actual circle ID
//                 setCircle(circleData);
//             } catch (err) {
//                 setError('Failed to fetch circle data');
//                 console.error('Error fetching circle data:', err);
//             }
//         };

//         // Fetch user location
//         const fetchUserLocation = () => {
//             if (navigator.geolocation) {
//                 console.log('Fetching user location...');
//                 navigator.geolocation.getCurrentPosition(
//                     (position) => {
//                         const { latitude, longitude } = position.coords;
//                         console.log('User location found:', { latitude, longitude });
//                         setUserLocation({ lat: latitude, lng: longitude });
//                         setMapCenter({ lat: latitude, lng: longitude }); // Center map on user's location
//                         setMapZoom(14); // Zoom in closer to user's location
//                     },
//                     (error) => {
//                         setError('Unable to retrieve your location');
//                         console.error('Geolocation error:', error);
//                     }
//                 );
//             } else {
//                 setError('Geolocation is not supported by this browser.');
//                 console.error('Geolocation is not supported by this browser.');
//             }
//         };

//         fetchCircle();
//         fetchUserLocation();
//     }, []); // Run only once when the component mounts

//     // Set default map center if user location is unavailable
//     useEffect(() => {
//         if (!userLocation && circle) {
//             console.log('Using admin location as fallback...');
//             setMapCenter({ lat: circle.admin.latitude, lng: circle.admin.longitude });
//         }
//     }, [circle, userLocation]);

//     return (
//         <div className="flex">
//             <div className="bg-white p-6 rounded-lg shadow w-1/4">
//                 <h2 className="text-2xl font-bold mb-4">Circle Details</h2>
//                 {error && <p className="text-red-500">{error}</p>} {/* Error message */}
//                 {circle ? (
//                     <div>
//                         <p><strong>Name:</strong> {circle.name}</p>
//                         <p><strong>Admin:</strong> {circle.admin.fullName}</p>
//                         <p><strong>Members:</strong></p>
//                         <ul>
//                             {circle.members.map(member => (
//                                 <li key={member.id}>
//                                     <p><strong>Full Name:</strong> {member.fullName}</p>
//                                     <p><strong>Email:</strong> {member.email}</p>
//                                     <p><strong>Latitude:</strong> {member.latitude}</p>
//                                     <p><strong>Longitude:</strong> {member.longitude}</p>
//                                     <p><strong>Member ID:</strong> {member.id}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ) : (
//                     <p>Loading circle data...</p>
//                 )}
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow w-3/4 ml-4">
//                 <h2 className="text-2xl font-bold mb-4">Map</h2>
//                 <div className="h-screen bg-gray-300 rounded-lg flex items-center justify-center">
//                     <APIProvider apiKey={API_KEY} solutionChannel="GMP_devsite_samples_v3_rgmautocomplete">
//                         {mapCenter ? (
//                             <GoogleMap
//                                 mapId={"bf51a910020fa25a"} // Replace with your actual map ID
//                                 center={mapCenter} // Set the center to the user's or admin's location
//                                 zoom={mapZoom} // Adjust zoom level dynamically
//                                 gestureHandling={"greedy"}
//                                 disableDefaultUI={true}
//                             >
//                                 {/* Marker for User Location */}
//                                 {userLocation && (
//                                     <Marker
//                                         position={userLocation}
//                                         label="You"
//                                         icon={{
//                                             url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
//                                         }}
//                                     />
//                                 )}

//                                 {/* Marker for Admin */}
//                                 {circle && circle.admin && (
//                                     <Marker
//                                         position={{
//                                             lat: circle.admin.latitude,
//                                             lng: circle.admin.longitude,
//                                         }}
//                                         label="Admin"
//                                     />
//                                 )}

//                                 {/* Markers for Circle Members */}
//                                 {circle && circle.members.map(member => (
//                                     <Marker
//                                         key={member.id}
//                                         position={{
//                                             lat: member.latitude,
//                                             lng: member.longitude,
//                                         }}
//                                         label={member.fullName}
//                                     />
//                                 ))}
//                             </GoogleMap>
//                         ) : (
//                             <p>Loading map...</p>
//                         )}
//                     </APIProvider>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Map;

// import React, { useEffect, useState } from 'react';
// import { apiGetCircles } from '../../services/product'; // Replace with actual path
// import { APIProvider, Map as GoogleMap, Marker } from '@vis.gl/react-google-maps';

// const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// const Map = () => {
//     const [circle, setCircle] = useState(null); // Circle data
//     const [userLocation, setUserLocation] = useState(null); // User's location
//     const [error, setError] = useState(null); // Error state
//     const [mapCenter, setMapCenter] = useState(null); // Map center
//     const [mapZoom, setMapZoom] = useState(12); // Default zoom level

//     useEffect(() => {
//         // Fetching circle data
//         const fetchCircle = async () => {
//             try {
//                 const circleData = await apiGetCircles('674065f45c3806d0a91e8eb5'); // Replace with actual circle ID
//                 setCircle(circleData);
//             } catch (err) {
//                 setError('Failed to fetch circle data');
//                 console.error('Error fetching circle data:', err);
//             }
//         };

//         // Fetch user location
//         const fetchUserLocation = () => {
//             if (navigator.geolocation) {
//                 console.log('Fetching user location...');
//                 navigator.geolocation.getCurrentPosition(
//                     (position) => {
//                         const { latitude, longitude } = position.coords;
//                         console.log('User location found:', { latitude, longitude });
//                         setUserLocation({ lat: latitude, lng: longitude });
//                         setMapCenter({ lat: latitude, lng: longitude }); // Center map on user's location
//                         setMapZoom(14); // Zoom in closer to user's location
//                     },
//                     (error) => {
//                         setError('Unable to retrieve your location');
//                         console.error('Geolocation error:', error);
//                     }
//                 );
//             } else {
//                 setError('Geolocation is not supported by this browser.');
//                 console.error('Geolocation is not supported by this browser.');
//             }
//         };

//         fetchCircle();
//         fetchUserLocation();
//     }, []); // Run only once when the component mounts

//     // Set default map center if user location is unavailable
//     useEffect(() => {
//         if (!userLocation && circle) {
//             console.log('Using admin location as fallback...');
//             setMapCenter({ lat: circle.admin.latitude, lng: circle.admin.longitude });
//         }
//     }, [circle, userLocation]);

//     return (
//         <div className="flex">
//             <div className="bg-white p-6 rounded-lg shadow w-1/4">
//                 <h2 className="text-2xl font-bold mb-4">Circle Details</h2>
//                 {error && <p className="text-red-500">{error}</p>} {/* Error message */}
//                 {circle ? (
//                     <div>
//                         <p><strong>Name:</strong> {circle.name}</p>
//                         <p><strong>Admin:</strong> {circle.admin.fullName}</p>
//                         <p><strong>Members:</strong></p>
//                         <ul>
//                             {circle.members.map(member => (
//                                 <li key={member.id}>
//                                     <p><strong>Full Name:</strong> {member.fullName}</p>
//                                     <p><strong>Email:</strong> {member.email}</p>
//                                     <p><strong>Latitude:</strong> {member.latitude}</p>
//                                     <p><strong>Longitude:</strong> {member.longitude}</p>
//                                     <p><strong>Member ID:</strong> {member.id}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ) : (
//                     <p>Loading circle data...</p>
//                 )}
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow w-3/4 ml-4">
//                 <h2 className="text-2xl font-bold mb-4">Map</h2>
//                 <div className="h-screen bg-gray-300 rounded-lg flex items-center justify-center">
//                     <APIProvider apiKey={API_KEY} solutionChannel="GMP_devsite_samples_v3_rgmautocomplete">
//                         {mapCenter ? (
//                             <GoogleMap
//                                 mapId={"bf51a910020fa25a"} // Replace with your actual map ID
//                                 center={mapCenter} // Set the center to the user's or admin's location
//                                 zoom={mapZoom} // Adjust zoom level dynamically
//                                 gestureHandling={"greedy"}
//                                 disableDefaultUI={true}
//                             >
//                                 {/* Marker for User Location */}
//                                 {userLocation && (
//                                     <Marker
//                                     position={userLocation}
//                                     label="You"
//                                     icon={{
//                                         url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // Use a red marker
//                                     }}
//                                 />
                                
//                                 )}

//                                 {/* Marker for Admin */}
//                                 {circle && circle.admin && (
//                                     <Marker
//                                         position={{
//                                             lat: circle.admin.latitude,
//                                             lng: circle.admin.longitude,
//                                         }}
//                                         label="Admin"
//                                     />
//                                 )}

//                                 {/* Markers for Circle Members */}
//                                 {circle && circle.members.map(member => (
//                                     <Marker
//                                         key={member.id}
//                                         position={{
//                                             lat: member.latitude,
//                                             lng: member.longitude,
//                                         }}
//                                         label={member.fullName}
//                                     />
//                                 ))}
//                             </GoogleMap>
//                         ) : (
//                             <p>Loading map...</p>
//                         )}
//                     </APIProvider>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Map;
import React, { useState, useEffect } from "react";
import {
    APIProvider,
    Map as GoogleMap
} from "@vis.gl/react-google-maps";
import { apiGetProfile } from "../../services/auth";
import { apiGetCircles } from "../../services/product";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const Map = () => {
    const [circleId, setCircleId] = useState(""); // Dynamic circle ID
    const [circle, setCircle] = useState(null); // Circle data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch user profile to get the first circle ID
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                console.log("Fetching user profile...");
                const profileResponse = await apiGetProfile();
                console.log("User profile data:", profileResponse.data);

                // Extract the first circle from the circle array
                const userCircles = profileResponse.data.circle;
                if (userCircles && userCircles.length > 0) {
                    setCircleId(userCircles[0].id); // Use the first circle's ID
                } else {
                    throw new Error("No circles found in user profile.");
                }
            } catch (err) {
                setError("Failed to load user profile: " + err.message);
                console.error("Error fetching user profile:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    // Fetch circle data using the circle ID
    useEffect(() => {
        const fetchCircle = async () => {
            try {
                if (!circleId) {
                    console.log("No circleId available yet");
                    return;
                }

                setLoading(true);
                console.log("Fetching circle data for ID:", circleId);
                const response = await apiGetCircles(circleId);
                console.log("Response from API:", response);

                if (response && response.data) {
                    setCircle(response.data);
                    console.log("Circle data fetched:", response.data);
                } else {
                    console.log("No data received for circle.");
                }
            } catch (err) {
                setError("Failed to load circle data: " + err.message);
                console.error("Error fetching circle:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCircle();
    }, [circleId]);

    return (
        <div className="flex">
            {/* Sidebar for Circle Details */}
            <div className="w-1/3 bg-gray-100 p-4">
                <h2 className="text-2xl font-bold mb-4">Circle Details</h2>
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {circle ? (
                    <div>
                        <p><strong>Name:</strong> {circle.name}</p>
                        <p><strong>Admin:</strong> {circle.admin.fullName}</p>
                        <p><strong>Invite Code:</strong> {circle.inviteCode}</p>
                        <h3 className="font-semibold mt-4">Members:</h3>
                        <ul>
                            {circle.members.map((member) => (
                                <li key={member.id}>
                                    {member.fullName} ({member.email})
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>No circle data available</p>
                )}
            </div>

            {/* Map Component */}
            <div className="w-2/3 h-screen">
                <APIProvider apiKey={API_KEY}>
                    <GoogleMap
                        mapId={"bf51a910020fa25a"}
                        defaultZoom={3}
                        defaultCenter={{ lat: 22.54992, lng: 0 }}
                        gestureHandling={"greedy"}
                        disableDefaultUI={true}
                    >
                        {/* Additional map features go here */}
                    </GoogleMap>
                </APIProvider>
            </div>
        </div>
    );
};

export default Map;
