// import React, { useEffect, useState } from 'react';
// import { apiGetProfile } from '../../services/auth';  
// import axios from 'axios';

// const UserProfile = () => {
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState(null); 
//   const [loading, setLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     latitude: '',
//     longitude:'',
//     role: '',
//     circle: ''
//   });

  

//   useEffect(() => {
//     const token = localStorage.getItem("token");  

//     if (token) {
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//       apiGetProfile()
//         .then(response => {
//           setProfile(response.data); 
//           setFormData({
//             fullName: response.data.fullName,
//             email: response.data.email,
//             latitude: response.data.latitude,
//             longitude: response.data.lognitude,
//             circle: response.data.circle,
//             role: response.data.role
//           });
//           setError(null);  
//         })
//         .catch(error => {
//           console.error('Error fetching the profile data:', error);
//           setError('Failed to load profile. Please try again later.');
//         });
        
//     } else {
//       console.error('No token found in localStorage!');
//       setError('You need to be logged in to view the profile.');
//     }
//   }, []);  

 
//   if (error) return <div className="text-red-500">{error}</div>;
//   if (!profile) return <div>Loading...</div>;

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg space-y-4">
//       <h2 className="text-2xl font-semibold text-gray-800">{profile.fullName}</h2>
//       <p className="text-gray-600">Email: {profile.email}</p>
//       <p className="text-gray-600">Role: {profile.role}</p>
//       <p className="text-gray-600">Location: {profile.location || 'Not specified'}</p>

//       <p className="text-gray-500">
//         Profile Created At: {new Date(profile.createdAt).toLocaleString()}
//       </p>
//       <p className="text-gray-500">
//         Last Updated At: {new Date(profile.updatedAt).toLocaleString()}
//       </p>

//       <h3 className="text-xl font-semibold mt-4">Circle</h3>
//       <ul className="list-disc list-inside text-gray-700">
//         {profile.circle && profile.circle.length > 0 ? (
//           profile.circle.map(circle => (
//             <li key={circle.id} className="pl-2">{circle.name}</li>
//           ))
//         ) : (
//           <li className="text-gray-500">No Cirle</li>
//         )}
//       </ul> 
     
//       <h3 className="text-xl font-semibold mt-4">Friends</h3>
//       <ul className="list-disc list-inside text-gray-700">
//         {profile.friends && profile.friends.length > 0 ? (
//           profile.friends.map(friend => (
//             <li key={friend.id} className="pl-2">{friend.name}</li>
//           ))
//         ) : (
//           <li className="text-gray-500">No friends listed</li>
//         )}
//       </ul> 

      
//     </div>
//   );
// };

// export default UserProfile;
import React, { useEffect, useState } from 'react';
import { apiGetProfile, apiUpdateProfile } from '../../services/auth';  
import axios from 'axios';
import Swal from 'sweetalert2';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    latitude: '',
    longitude: '',
    role: '',
    circle: ''
  });

  useEffect(() => {
    const token = localStorage.getItem("token");  

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      apiGetProfile()
        .then(response => {
          setProfile(response.data); 
          setFormData({
            fullName: response.data.fullName,
            email: response.data.email,
            latitude: response.data.latitude || '',
            longitude: response.data.longitude || '',
            circle: response.data.circle,
            role: response.data.role
          });
          setError(null);  

          // If location is not available, request it
          if (!response.data.latitude || !response.data.longitude) {
            getCurrentLocation();
          }
        })
        .catch(error => {
          console.error('Error fetching the profile data:', error);
          setError('Failed to load profile. Please try again later.');
        });
        
    } else {
      console.error('No token found in localStorage!');
      setError('You need to be logged in to view the profile.');
    }
  }, []);  

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prevData => ({
            ...prevData,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }));
        },
        (error) => {
          console.error('Error getting location:', error);
          setError('Unable to retrieve your location.');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error('No token found');
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const updatedProfile = await apiUpdateProfile(profile.id, formData);
      setProfile(updatedProfile.data);
      setError(null);
      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "You have successfully updated your profile",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.response?.data?.message || "Something went wrong!",
        confirmButtonText: "Try Again",
      });
    }
  };

  if (error) return <div className="text-red-500">{error}</div>;
  if (!profile) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">{profile.fullName}</h2>
      <p className="text-gray-600">Email: {profile.email}</p>
      <p className="text-gray-600">Role: {profile.role}</p>
      <p className="text-gray-600">Circle: {profile.circle}</p>
      <p className="text-gray-600">Latitude: {formData.latitude || 'Not specified'}</p>
      <p className="text-gray-600">Longitude: {formData.longitude || 'Not specified'}</p>

      <p className="text-gray-500">
        Profile Created At: {new Date(profile.createdAt).toLocaleString()}
      </p>
      <p className="text-gray-500">
        Last Updated At: {new Date(profile.updatedAt).toLocaleString()}
      </p>

      <h3 className="text-xl font-semibold mt-4">Update Profile</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Circle</label>
          <input
            type="text"
            name="circle"
            value={formData.circle}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            
          />
        </div>
        <div>
          <label className="block text-gray-700">Latitude</label>
          <input
            type="number"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700">Longitude</label>
          <input
            type="number"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;


// import React, { useEffect, useState } from 'react';
// import { apiGetProfile, apiUpdateProfile } from '../../services/auth';
// import axios from 'axios';

// const UserProfile = ({ userId }) => {
//     const [profile, setProfile] = useState(null);
//     const [error, setError] = useState(null);
//    const [locationSharing, setLocationSharing] = useState(false);

//     useEffect(() => {
//         const token = localStorage.getItem("token");

//         if (token) {
//             axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//             apiGetProfile()
//                 .then((response) => {
//                     setProfile(response.data);
//                     setError(null);
//                 })
//                 .catch((error) => {
//                     console.error("Error fetching the profile data:", error);
//                     setError("Failed to load profile. Please try again later.");
//                 });
//         } else {
//             console.error("No token found in localStorage!");
//             setError("You need to be logged in to view the profile.");
//         }
//     }, []);

//     const handleUpdateLocation = async () => {
//         if ("geolocation" in navigator) {
//             navigator.geolocation.getCurrentPosition(
//                 async (position) => {
//                     const { latitude, longitude } = position.coords;

//                     try {
//                         await apiUpdateProfile(userId, { latitude, longitude });
//                         console.log("Location updated successfully.");
//                     } catch (error) {
//                         console.error("Error updating location:", error.message);
//                     }
//                 },
//                 (error) => {
//                     console.error("Geolocation error:", error.message);
//                 }
//             );
//         } else {
//             console.error("Geolocation is not available.");
//         }
//     };

//     if (error) return <div className="text-red-500">{error}</div>;
//     if (!profile) return <div>Loading...</div>;

//     return (
//         <div className="p-6 bg-white rounded-lg shadow-lg space-y-4">
//             <h2 className="text-2xl font-semibold text-gray-800">{profile.fullName}</h2>
//             <p className="text-gray-600">Email: {profile.email}</p>
//             <p className="text-gray-600">Password: {profile.password}</p>
//             <p className="text-gray-600">Role: {profile.role}</p>
//             <p className="text-gray-600">
//                 Location: {profile.latitude && profile.longitude ? `${profile.latitude}, ${profile.longitude}` : "Not specified"}
//             </p>

//             <p className="text-gray-500">
//        Profile Created At: {new Date(profile.createdAt).toLocaleString()}
//        </p>
//        <p className="text-gray-500">
//          Last Updated At: {new Date(profile.updatedAt).toLocaleString()}
//       </p>

//        <h3 className="text-xl font-semibold mt-4">Circle</h3>
//       <ul className="list-disc list-inside text-gray-700">
//         {profile.circle && profile.circle.length > 0 ? (
//           profile.circle.map(circle => (
//             <li key={circle.id} className="pl-2">{circle.name}</li>
//           ))
//         ) : (
//           <li className="text-gray-500">No Cirle</li>
//         )}
//       </ul> 
     
//       <h3 className="text-xl font-semibold mt-4">Friends</h3>
//       <ul className="list-disc list-inside text-gray-700">
//         {profile.friends && profile.friends.length > 0 ? (
//           profile.friends.map(friend => (
//             <li key={friend.id} className="pl-2">{friend.name}</li>
//           ))
//         ) : (
//           <li className="text-gray-500">No friends listed</li>
//         )}
//       </ul> 
//             <button
//                 onClick={handleUpdateLocation}
//                 className="px-4 py-2 bg-blue-500 text-white rounded">
//                 Update Location
//             </button>
//         </div>
//     );
// };

// export default UserProfile;


// import React, { useEffect, useState } from 'react';
// import { apiGetProfile, apiUpdateProfile } from '../../services/auth';  
// import axios from 'axios';

// const UserProfile = () => {
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState(null);  
//   const [locationSharing, setLocationSharing] = useState(false); // Track location sharing toggle state
//   const [watchID, setWatchID] = useState(null);  // Store the watch ID for clearing the watch when needed

//   useEffect(() => {
//     const token = localStorage.getItem("token");  

//     if (token) {
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//       apiGetProfile()
//         .then(response => {
//           setProfile(response.data); 
//           setError(null);  
//         })
//         .catch(error => {
//           console.error('Error fetching the profile data:', error);
//           setError('Failed to load profile. Please try again later.');
//         });
//     } else {
//       console.error('No token found in localStorage!');
//       setError('You need to be logged in to view the profile.');
//     }

//     // Cleanup on component unmount
//     return () => {
//       if (watchID) {
//         navigator.geolocation.clearWatch(watchID); // Clear the watch when the component is unmounted
//       }
//     };
//   }, []);  

//   // Handle location toggle change
//   const handleLocationToggle = () => {
//     setLocationSharing(prevState => !prevState);

//     if (!locationSharing) {
//       // When location sharing is toggled on, start tracking the location
//       if ("geolocation" in navigator) {
//         const id = navigator.geolocation.watchPosition((position) => {
//           const { latitude, longitude } = position.coords;
//           console.log(latitude, longitude);  // Log the coordinates

//           // Update the user profile with the new location
//           if (profile) {
//             apiUpdateProfile(profile.id, { latitude, longitude })
//               .then(response => {
//                 console.log("Profile updated with new location:", response.data);
//               })
//               .catch(error => {
//                 console.error("Failed to update profile location:", error);
//               });
//           }
//         }, (error) => {
//           console.error("Error watching geolocation:", error);
//         }, {
//           enableHighAccuracy: true, // Optional: Use high accuracy if available
//           timeout: 10000,            // Optional: Set a timeout for location fetching
//           maximumAge: 0             // Optional: Don't use cached location
//         });

//         setWatchID(id); // Save the watch ID to clear it later
//       } else {
//         console.log("Geolocation is not supported by this browser.");
//       }
//     } else {
//       // If location sharing is turned off, stop watching the location
//       if (watchID) {
//         navigator.geolocation.clearWatch(watchID);  // Stop watching location
//         setWatchID(null);  // Reset the watch ID
//       }
//     }
//   };

//   if (error) return <div className="text-red-500">{error}</div>;
//   if (!profile) return <div>Loading...</div>;

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg space-y-4">
//       <h2 className="text-2xl font-semibold text-gray-800">{profile.fullName}</h2>
//       <p className="text-gray-600">Email: {profile.email}</p>
//       <p className="text-gray-600">Role: {profile.role}</p>

//       {/* Display the user's location */}
//       <p className="text-gray-600">
//         Location: {profile.latitude && profile.longitude ? `${profile.latitude}, ${profile.longitude}` : 'Not available'}
//       </p>

//       <p className="text-gray-500">
//         Profile Created At: {new Date(profile.createdAt).toLocaleString()}
//       </p>
//       <p className="text-gray-500">
//         Last Updated At: {new Date(profile.updatedAt).toLocaleString()}
//       </p>

//       <h3 className="text-xl font-semibold mt-4">Circle</h3>
//       <ul className="list-disc list-inside text-gray-700">
//         {profile.circle && profile.circle.length > 0 ? (
//           profile.circle.map(circle => (
//             <li key={circle.id} className="pl-2">{circle.name}</li>
//           ))
//         ) : (
//           <li className="text-gray-500">No Circle</li>
//         )}
//       </ul> 

//       <h3 className="text-xl font-semibold mt-4">Friends</h3>
//       <ul className="list-disc list-inside text-gray-700">
//         {profile.friends && profile.friends.length > 0 ? (
//           profile.friends.map(friend => (
//             <li key={friend.id} className="pl-2">{friend.name}</li>
//           ))
//         ) : (
//           <li className="text-gray-500">No friends listed</li>
//         )}
//       </ul>

//       {/* Location Sharing Toggle */}
     
//     </div>
//   );
// };

// export default UserProfile;
