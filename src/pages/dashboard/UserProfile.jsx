// 


// import React, { useEffect, useState } from 'react';
// import { apiGetProfile, apiUpdateProfile } from '../../services/auth';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const UserProfile = ({ locationShared }) => {
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     latitude: '',
//     longitude: '',
//     role: '',
//     circle: '', // Circle should not be included in form submission
//   });

//   // Location state
//   const [userLocation, setUserLocation] = useState({
//     latitude: '',
//     longitude: ''
//   });

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem("token");  
//       if (token) {
//         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//         try {
//           const response = await apiGetProfile();
//           setProfile(response.data); 
//           setFormData({
//             fullName: response.data.fullName || '',
//             latitude: response.data.latitude || '',
//             longitude: response.data.longitude || '',
//             role: response.data.role || '',
//             circle: 'No circles available', // Default text if no circles exist
//           });
//           setUserLocation({
//             latitude: response.data.latitude || '',
//             longitude: response.data.longitude || ''
//           });
//           setError(null);  
//         } catch (error) {
//           console.error('Error fetching the profile data:', error?.response?.data || error.message);
//           setError('Failed to load profile. Please try again later.');
//           Swal.fire({
//             title: 'Error!',
//             text: 'Failed to fetch profile. Please try again later.',
//             icon: 'error',
//             confirmButtonText: 'OK',
//           });
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         console.error('No token found in localStorage!');
//         setError('You need to be logged in to view the profile.');
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);  

//   useEffect(() => {
//     if (locationShared) {
//       if (navigator.geolocation) {
//         const watchId = navigator.geolocation.watchPosition(async (position) => {
//           const { latitude, longitude } = position.coords;
//           console.log(latitude, longitude); // Log the correct location
          
//           // Only update location if it has changed
//           if (latitude !== userLocation.latitude || longitude !== userLocation.longitude) {
//             setUserLocation({ latitude, longitude });

//             // Ensure latitude and longitude are sent as top-level fields
//             const dataToUpdate = {
//               fullName: formData.fullName, // Include fullName
//               latitude: Number(latitude), // Ensure these are numbers
//               longitude: Number(longitude),
//               role: formData.role, // Include role explicitly
//             };

//             console.log("Data being sent to update profile:", dataToUpdate);

//             try {
//               const updatedProfile = await apiUpdateProfile(dataToUpdate); // Pass directly
//               console.log("Profile updated with new location:", updatedProfile);

//               // Update profile state directly with the response from the API
//               setProfile(prevProfile => ({
//                 ...prevProfile,
//                 latitude: updatedProfile.latitude,
//                 longitude: updatedProfile.longitude
//               }));

//               setFormData(prevData => ({
//                 ...prevData,
//                 latitude: updatedProfile.latitude,
//                 longitude: updatedProfile.longitude
//               }));
//             } catch (error) {
//               console.error('Error updating location:', error);
//             }
//           }
//         });

//         // Cleanup function to stop watching the position when the component unmounts
//         return () => {
//           navigator.geolocation.clearWatch(watchId);
//         };
//       } else {
//         console.error('Geolocation is not supported by this browser.');
//       }
//     }
//   }, [locationShared, userLocation.latitude, userLocation.longitude]); // Depend on locationShared and previous location

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error('No token found');
//       }

//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//       if (!profile?.id) {
//         setError('Profile ID is missing. Cannot update profile.');
//         return;
//       }

//       // Create a new data object including all required fields
//       const { circle, ...dataWithoutCircle } = formData; // Destructure and exclude circle

//       // Ensure all required fields are included
//       const dataToUpdate = {
//         ...dataWithoutCircle,
//         latitude: Number(dataWithoutCircle.latitude), // Ensure latitude is a number
//         longitude: Number(dataWithoutCircle.longitude), // Ensure longitude is a number
//       };

//       console.log("Data being sent to update profile:", dataToUpdate);

//       const updatedProfile = await apiUpdateProfile(dataToUpdate); // Pass updated profile without circle
//       setProfile(updatedProfile);
//       setError(null);
//       Swal.fire({
//         title: 'Profile Updated!',
//         text: 'Your profile has been updated successfully.',
//         icon: 'success',
//         confirmButtonText: 'OK',
//       });
//     } catch (error) {
//       console.error('Error updating profile:', error?.response?.data || error.message);
//       setError('Failed to update profile. Please try again later.');
//     }
//   };

//   if (loading) return <div>Loading...</div>; 
//   if (error) return <div className="text-red-500">{error}</div>;
//   if (!profile) return <div>No profile data available.</div>; 

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg space-y-4">
//       <h2 className="text-2xl font-semibold text-gray-800">{profile.fullName || 'N/A'}</h2>
//       <p className="text-gray-600">Email: {profile.email || 'N/A'}</p>
//       <p className="text-gray-600">Role: {profile.role || 'N/A'}</p>

//       {/* Circle Display Section */}
//       <p className="text-gray-600">
//         Circle:
//         {Array.isArray(profile.circle) && profile.circle.length > 0 ? (
//           <ul className="list-disc list-inside">
//             {profile.circle.map((circleItem, index) => (
//               <li key={circleItem.id || index}>
//                 <span className="font-semibold">Name:</span> {circleItem.name || 'N/A'},
//                 <span className="font-semibold">Admin:</span> {circleItem.admin || 'N/A'}
//                 <span className="font-semibold"> Invite Code:</span> {circleItem.inviteCode || 'N/A'}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           'No circles available'
//         )}
//       </p>

//       <p className="text-gray-600">Latitude: {userLocation.latitude || 'Not specified'}</p>
//       <p className="text-gray-600">Longitude: {userLocation.longitude || 'Not specified'}</p>
//       <p className="text-gray-500">
//         Profile Created At: {profile.createdAt ? new Date(profile.createdAt).toLocaleString() : 'Not available'}
//       </p>
//       <p className="text-gray-500">
//         Last Updated At: {profile.updatedAt ? new Date(profile.updatedAt).toLocaleString() : 'Not available'}
//       </p>

//       <h3 className="text-xl font-semibold mt-4">Update Profile</h3>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-700">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded w-full"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">Latitude</label>
//           <input
//             type="number"
//             name="latitude"
//             value={formData.latitude}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded w-full"
//             readOnly
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">Longitude</label>
//           <input
//             type="number"
//             name="longitude"
//             value={formData.longitude}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded w-full"
//             readOnly
//           />
//         </div>

//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UserProfile;


// import React, { useEffect, useState } from 'react';
// import { apiGetProfile, apiUpdateProfile } from '../../services/auth';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const UserProfile = ({ locationShared }) => {
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     latitude: '',
//     longitude: '',
//     role: '',
//     circle: '', // Circle should not be included in form submission
//   });

//   // Location state
//   const [userLocation, setUserLocation] = useState({
//     latitude: '',
//     longitude: ''
//   });

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem("token");  
//       if (token) {
//         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//         try {
//           const response = await apiGetProfile();
//           setProfile(response.data); 
//           setFormData({
//             fullName: response.data.fullName || '',
//             latitude: response.data.latitude || '',
//             longitude: response.data.longitude || '',
//             role: response.data.role || '',
//             circle: 'No circles available', // Default text if no circles exist
//           });
//           setUserLocation({
//             latitude: response.data.latitude || '',
//             longitude: response.data.longitude || ''
//           });
//           setError(null);  
//         } catch (error) {
//           console.error('Error fetching the profile data:', error?.response?.data || error.message);
//           setError('Failed to load profile. Please try again later.');
//           Swal.fire({
//             title: 'Error!',
//             text: 'Failed to fetch profile. Please try again later.',
//             icon: 'error',
//             confirmButtonText: 'OK',
//           });
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         console.error('No token found in localStorage!');
//         setError('You need to be logged in to view the profile.');
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);  

//   useEffect(() => {
//     if (locationShared) {
//       if (navigator.geolocation) {
//         const watchId = navigator.geolocation.watchPosition(async (position) => {
//           const { latitude, longitude } = position.coords;
//           console.log(latitude, longitude); // Log the correct location
          
//           // Only update location if it has changed
//           if (latitude !== userLocation.latitude || longitude !== userLocation.longitude) {
//             setUserLocation({ latitude, longitude });

//             // Ensure latitude and longitude are sent as top-level fields
//             const dataToUpdate = {
//               fullName: formData.fullName, // Include fullName
//               latitude: Number(latitude), // Ensure these are numbers
//               longitude: Number(longitude),
//               role: formData.role, // Include role explicitly
//             };

//             console.log("Data being sent to update profile:", dataToUpdate);

//             try {
//               const updatedProfile = await apiUpdateProfile(dataToUpdate); // Pass directly
//               console.log("Profile updated with new location:", updatedProfile);

//               // Update profile state directly with the response from the API
//               setProfile(prevProfile => ({
//                 ...prevProfile,
//                 latitude: updatedProfile.latitude,
//                 longitude: updatedProfile.longitude
//               }));

//               setFormData(prevData => ({
//                 ...prevData,
//                 latitude: updatedProfile.latitude,
//                 longitude: updatedProfile.longitude
//               }));
//             } catch (error) {
//               console.error('Error updating location:', error);
//             }
//           }
//         });

//         // Cleanup function to stop watching the position when the component unmounts
//         return () => {
//           navigator.geolocation.clearWatch(watchId);
//         };
//       } else {
//         console.error('Geolocation is not supported by this browser.');
//       }
//     }
//   }, [locationShared, userLocation.latitude, userLocation.longitude]); // Depend on locationShared and previous location

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error('No token found');
//       }

//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//       if (!profile?.id) {
//         setError('Profile ID is missing. Cannot update profile.');
//         return;
//       }

//       // Create a new data object including all required fields
//       const { circle, ...dataWithoutCircle } = formData; // Destructure and exclude circle

//       // Ensure all required fields are included
//       const dataToUpdate = {
//         ...dataWithoutCircle,
//         latitude: Number(dataWithoutCircle.latitude), // Ensure latitude is a number
//         longitude: Number(dataWithoutCircle.longitude), // Ensure longitude is a number
//       };

//       console.log("Data being sent to update profile:", dataToUpdate);

//       const updatedProfile = await apiUpdateProfile(dataToUpdate); // Pass updated profile without circle
//       setProfile(updatedProfile);
//       setError(null);
//       Swal.fire({
//         title: 'Profile Updated!',
//         text: 'Your profile has been updated successfully.',
//         icon: 'success',
//         confirmButtonText: 'OK',
//       });
//     } catch (error) {
//       console.error('Error updating profile:', error?.response?.data || error.message);
//       setError('Failed to update profile. Please try again later.');
//     }
//   };

//   if (loading) return <div>Loading...</div>; 
//   if (error) return <div className="text-red-500">{error}</div>;
//   if (!profile) return <div>No profile data available.</div>; 

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg space-y-4">
//       <h2 className="text-2xl font-semibold text-gray-800">{profile.fullName || 'N/A'}</h2>
//       <p className="text-gray-600">Email: {profile.email || 'N/A'}</p>
//       <p className="text-gray-600">Role: {profile.role || 'N/A'}</p>

//       {/* Circle Display Section */}
//       <p className="text-gray-600">
//         Circle:
//         {Array.isArray(profile.circle) && profile.circle.length > 0 ? (
//           <ul className="list-disc list-inside">
//             {profile.circle.map((circleItem, index) => (
//               <li key={circleItem.id || index}>
//                 <span className="font-semibold">Name:</span> {circleItem.name || 'N/A'},
//                 <span className="font-semibold">Admin:</span> {circleItem.admin || 'N/A'}
//                 <span className="font-semibold"> Invite Code:</span> {circleItem.inviteCode || 'N/A'}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           'No circles available'
//         )}
//       </p>

//       <p className="text-gray-600">Latitude: {userLocation.latitude || 'Not specified'}</p>
//       <p className="text-gray-600">Longitude: {userLocation.longitude || 'Not specified'}</p>
//       <p className="text-gray-500">
//         Profile Created At: {profile.createdAt ? new Date(profile.createdAt).toLocaleString() : 'Not available'}
//       </p>
//       <p className="text-gray-500">
//         Last Updated At: {profile.updatedAt ? new Date(profile.updatedAt).toLocaleString() : 'Not available'}
//       </p>

//       <h3 className="text-xl font-semibold mt-4">Update Profile</h3>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-700">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded w-full"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">Latitude</label>
//           <input
//             type="number"
//             name="latitude"
//             value={formData.latitude}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded w-full"
//             readOnly
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">Longitude</label>
//           <input
//             type="number"
//             name="longitude"
//             value={formData.longitude}
//             onChange={handleChange}
//             className="mt-1 p-2 border rounded w-full"
//             readOnly
//           />
//         </div>

//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UserProfile;



import React, { useEffect, useState } from 'react';
import { apiGetProfile, apiUpdateProfile } from '../../services/auth';
import axios from 'axios';
import Swal from 'sweetalert2';

const UserProfile = ({ locationShared }) => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    latitude: '',
    longitude: '',
    role: '',
    circle: '', // Circle should not be included in form submission
  });

  // Location state
  const [userLocation, setUserLocation] = useState({
    latitude: '',
    longitude: ''
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");  
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        try {
          const response = await apiGetProfile();
          setProfile(response.data); 
          setFormData({
            fullName: response.data.fullName || '',
            latitude: response.data.latitude || '',
            longitude: response.data.longitude || '',
            role: response.data.role || '',
            circle: 'No circles available', // Default text if no circles exist
          });
          setUserLocation({
            latitude: response.data.latitude || '',
            longitude: response.data.longitude || ''
          });
          setError(null);  
        } catch (error) {
          console.error('Error fetching the profile data:', error?.response?.data || error.message);
          setError('Failed to load profile. Please try again later.');
          Swal.fire({
            title: 'Error!',
            text: 'Failed to fetch profile. Please try again later.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        } finally {
          setLoading(false);
        }
      } else {
        console.error('No token found in localStorage!');
        setError('You need to be logged in to view the profile.');
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);  

  useEffect(() => {
    if (locationShared) {
      if (navigator.geolocation) {
        const watchId = navigator.geolocation.watchPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude); // Log the correct location
          
          // Only update location if it has changed
          if (latitude !== userLocation.latitude || longitude !== userLocation.longitude) {
            setUserLocation({ latitude, longitude });

            // Ensure latitude and longitude are sent as top-level fields
            const dataToUpdate = {
              fullName: formData.fullName, // Include fullName
              latitude: Number(latitude), // Ensure these are numbers
              longitude: Number(longitude),
              role: formData.role, // Include role explicitly
            };

            console.log("Data being sent to update profile:", dataToUpdate);

            try {
              const updatedProfile = await apiUpdateProfile(dataToUpdate); // Pass directly
              console.log("Profile updated with new location:", updatedProfile);

              // Update profile state directly with the response from the API
              setProfile(prevProfile => ({
                ...prevProfile,
                latitude: updatedProfile.latitude,
                longitude: updatedProfile.longitude
              }));

              setFormData(prevData => ({
                ...prevData,
                latitude: updatedProfile.latitude,
                longitude: updatedProfile.longitude
              }));

              // Also update userLocation with the new latitude and longitude
              setUserLocation({
                latitude: updatedProfile.latitude,
                longitude: updatedProfile.longitude
              });
            } catch (error) {
              console.error('Error updating location:', error);
            }
          }
        });

        // Cleanup function to stop watching the position when the component unmounts
        return () => {
          navigator.geolocation.clearWatch(watchId);
        };
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    }
  }, [locationShared, userLocation.latitude, userLocation.longitude]); // Depend on locationShared and previous location

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
      if (!token) {
        throw new Error('No token found');
      }

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      if (!profile?.id) {
        setError('Profile ID is missing. Cannot update profile.');
        return;
      }

      // Create a new data object including all required fields
      const { circle, ...dataWithoutCircle } = formData; // Destructure and exclude circle

      // Ensure all required fields are included
      const dataToUpdate = {
        ...dataWithoutCircle,
        latitude: Number(dataWithoutCircle.latitude), // Ensure latitude is a number
        longitude: Number(dataWithoutCircle.longitude), // Ensure longitude is a number
      };

      console.log("Data being sent to update profile:", dataToUpdate);

      const updatedProfile = await apiUpdateProfile(dataToUpdate); // Pass updated profile without circle
      setProfile(updatedProfile);
      setError(null);
      Swal.fire({
        title: 'Profile Updated!',
        text: 'Your profile has been updated successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } catch (error) {
      console.error('Error updating profile:', error?.response?.data || error.message);
      setError('Failed to update profile. Please try again later.');
    }
  };

  if (loading) return <div>Loading...</div>; 
  if (error) return <div className="text-red-500">{error}</div>;
  if (!profile) return <div>No profile data available.</div>; 

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">{profile.fullName || 'N/A'}</h2>
      <p className="text-gray-600">Email: {profile.email || 'N/A'}</p>
      <p className="text-gray-600">Role: {profile.role || 'N/A'}</p>

      {/* Circle Display Section */}
      <p className="text-gray-600">
        Circle:
        {Array.isArray(profile.circle) && profile.circle.length > 0 ? (
          <ul className="list-disc list-inside">
            {profile.circle.map((circleItem, index) => (
              <li key={circleItem.id || index}>
                <span className="font-semibold">Name:</span> {circleItem.name || 'N/A'},
                <span className="font-semibold">Admin:</span> {circleItem.admin || 'N/A'}
                <span className="font-semibold"> Invite Code:</span> {circleItem.inviteCode || 'N/A'}
              </li>
            ))}
          </ul>
        ) : (
          'No circles available'
        )}
      </p>

      <p className="text-gray-600">Latitude: {userLocation.latitude || 'Not specified'}</p>
      <p className="text-gray-600">Longitude: {userLocation.longitude || 'Not specified'}</p>
      <p className="text-gray-500">
        Profile Created At: {profile.createdAt ? new Date(profile.createdAt).toLocaleString() : 'Not available'}
      </p>
      <p className="text-gray-500">
        Last Updated At: {profile.updatedAt ? new Date(profile.updatedAt).toLocaleString() : 'Not available'}
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
          <label className="block text-gray-700">Latitude</label>
          <input
            type="number"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            readOnly
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
            readOnly
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
