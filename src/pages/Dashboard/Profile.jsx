import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Profile() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [success, setSuccess] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Name:', name);
    console.log('Updated Email:', email);
    console.log('Selected Image:', image);

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <motion.div
      className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Edit Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload Section */}
        <div className="text-center">
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-28 h-28 rounded-full overflow-hidden border-2 border-blue-500 shadow-md"
            >
              {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                  No Image
                </div>
              )}
            </motion.div>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-4 block w-full text-sm text-gray-500"
          />
        </div>

        {/* Name Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Full Name</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email Address</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter your email"
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition shadow"
          >
            Save Changes
          </motion.button>
        </div>
      </form>

      {/* Success Message */}
      <AnimatePresence>
        {success && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="mt-6 bg-green-100 text-green-800 font-medium p-3 rounded-lg text-center"
          >
            ✅ Profile updated successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Profile;
