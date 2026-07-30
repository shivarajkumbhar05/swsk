// src/components/user/UserProfile.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../../contexts/UserContext';

export default function UserProfile({ user }) {
  const { updateUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    college: user?.college || '',
    phone: user?.phone || '',
    bio: user?.bio || ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(formData);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-navy-900">Profile</h3>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-navy-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-navy-800 transition-colors"
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Avatar */}
        <div className="text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-navy-900 to-navy-700 rounded-full flex items-center justify-center mx-auto">
            <span className="text-4xl text-white">
              {user?.name?.charAt(0) || 'U'}
            </span>
          </div>
          <p className="mt-2 font-semibold text-navy-900">{user?.name}</p>
          <p className="text-sm text-gray-500">{user?.role}</p>
        </div>

        {/* Profile Details */}
        <div className="flex-1">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">College</label>
                <input
                  type="text"
                  value={formData.college}
                  onChange={(e) => setFormData({...formData, college: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                  rows="3"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900/20"
                  placeholder="Tell us about yourself"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-navy-900 text-white px-6 py-2 rounded-xl font-semibold"
              >
                Save Changes
              </motion.button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-500 w-24">Name:</span>
                <span className="font-medium text-navy-900">{user?.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 w-24">Email:</span>
                <span className="font-medium text-navy-900">{user?.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 w-24">College:</span>
                <span className="font-medium text-navy-900">{user?.college}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 w-24">Role:</span>
                <span className="font-medium text-navy-900 capitalize">{user?.role}</span>
              </div>
              {user?.phone && (
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 w-24">Phone:</span>
                  <span className="font-medium text-navy-900">{user?.phone}</span>
                </div>
              )}
              {user?.bio && (
                <div className="flex items-start gap-2">
                  <span className="text-gray-500 w-24">Bio:</span>
                  <span className="font-medium text-navy-900">{user?.bio}</span>
                </div>
              )}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-400">
                  Member since {new Date(user?.createdAt || Date.now()).toLocaleDateString()}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}