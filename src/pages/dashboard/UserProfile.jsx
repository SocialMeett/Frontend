import React, { useEffect, useState } from 'react';
import { apiGetProfile, apiUpdateProfile } from '../../services/auth';  
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    latitude: '',
    longitude: '',
    role: '',
    circle: []
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await apiGetProfile();
        console.log('Profile Response:', response.data); 
        
        if (response.data) {
          setProfile(response.data);
          setFormData({
            fullName: response.data.fullName || '',
            email: response.data.email || '',
            latitude: response.data.latitude || '',
            longitude: response.data.longitude || '',
            circle: response.data.circle || [],
            role: response.data.role || ''
          });
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        if (error.message === 'No token found' || error.response?.status === 401) {
          navigate('/login');
        } else {
          setError('Failed to load profile');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Include latitude and longitude in the update request, even though they are not editable
      const updateData = {
        fullName: formData.fullName,
        email: formData.email,
        latitude: formData.latitude,  // Send latitude even though it's not editable
        longitude: formData.longitude, // Send longitude even though it's not editable
        role: formData.role // If the role is part of the update
      };

      const response = await apiUpdateProfile(updateData);
      if (response.data) {
        setProfile(response.data);
        alert('Profile updated successfully!');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!profile) return <div>No profile data available</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">{profile.fullName}</h2>
      <p className="text-gray-600">Email: {profile.email}</p>
      <p className="text-gray-600">Role: {profile.role}</p>
      <p className="text-gray-600">Latitude: {formData.latitude || 'Not specified'}</p>
      <p className="text-gray-600">Longitude: {formData.longitude || 'Not specified'}</p>

      <p className="text-gray-500">
        Profile Created At: {new Date(profile.createdAt).toLocaleString()}
      </p>
      <p className="text-gray-500">
        Last Updated At: {new Date(profile.updatedAt).toLocaleString()}
      </p>

      {/* Display Circles */}
      <h3 className="text-xl font-semibold mt-4">Circles</h3>
      {formData.circle.length > 0 ? (
        <ul className="list-disc pl-6 space-y-2">
          {formData.circle.map((circle, index) => (
            <li key={index} className="text-gray-700">
              {typeof circle === 'string' ? circle : JSON.stringify(circle)}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No circles associated with this user.</p>
      )}

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

        {/* Read-only Latitude and Longitude */}
        <div>
          <label className="block text-gray-700">Latitude</label>
          <input
            type="text"
            name="latitude"
            value={formData.latitude}
            className="mt-1 p-2 border rounded w-full bg-gray-200"
            disabled // Make the field non-editable
          />
        </div>

        <div>
          <label className="block text-gray-700">Longitude</label>
          <input
            type="text"
            name="longitude"
            value={formData.longitude}
            className="mt-1 p-2 border rounded w-full bg-gray-200"
            disabled // Make the field non-editable
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
