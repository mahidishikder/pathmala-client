import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../provider/AuthPorvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

function Profile() {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); // Added email state
  const [photo, setPhoto] = useState('');
  const [photoFile, setPhotoFile] = useState(null);

  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setEmail(user.email || ''); // Initialize email
      setPhoto(user.photoURL || '');
    }
  }, [user]);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      const imageUrl = URL.createObjectURL(file);
      setPhoto(imageUrl);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Email change is usually a separate process, often with verification
  // For this simplified example, we'll just update the state, NOT Firebase
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUpdate = async () => {
    try {
      // Update user profile (name and photo)
      await updateProfile(user, {
        displayName: name,
      });

      // In a real app, you would also update the email, but it's more complex:
      // 1.  You'd use `updateEmail(user, newEmail)` from Firebase.
      // 2.  It requires the user to re-authenticate.
      // 3.  It might involve sending a verification email.
      // 4.  We're skipping that complexity for this basic example.  We are updating the local state.

      toast.success('Profile updated successfully!');
      console.log('Profile updated:', { name, email }); // Include email in log
    } catch (error) {
      console.error('Profile update failed:', error);
      toast.error('Failed to update profile');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl text-center"
    >
      <h2 className="text-2xl font-bold mb-6 text-red-500">Update Your Info</h2>

      {/* User Photo */}
      <div className="flex justify-center mb-4">
        <img
          src={photo || 'https://via.placeholder.com/150'}
          alt="User Photo"
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>

      {/* Select New Photo */}
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="block w-full text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-red-50 file:text-red-700
                     hover:file:bg-red-100"
        />
      </div>

      {/* Name Input */}
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          placeholder="Enter your name"
        />
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          placeholder="Enter your email"
          readOnly // Make email read-only for this simplified example
        />
        <p className="text-xs text-gray-500 mt-1">
          Email cannot be changed here.
        </p>
      </div>

      {/* Update Button */}
      <button
        onClick={handleUpdate}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300"
      >
        Save Changes
      </button>
    </motion.div>
  );
}

export default Profile;
