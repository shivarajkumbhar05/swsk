// src/components/user/UserSettings.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../../contexts/UserContext';

export default function UserSettings() {
  const { user, logout } = useUser();
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: true,
    darkMode: false,
    twoFactor: false
  });

  return (
    <div>
      <h3 className="text-xl font-bold text-navy-900 mb-6">Settings</h3>

      <div className="space-y-6">
        {/* Notifications */}
        <div className="border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-navy-900">Notifications</h4>
              <p className="text-sm text-gray-500">Receive updates about your projects</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={() => setSettings({...settings, notifications: !settings.notifications})}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy-900"></div>
            </label>
          </div>
        </div>

        {/* Email Updates */}
        <div className="border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-navy-900">Email Updates</h4>
              <p className="text-sm text-gray-500">Receive weekly project updates via email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.emailUpdates}
                onChange={() => setSettings({...settings, emailUpdates: !settings.emailUpdates})}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy-900"></div>
            </label>
          </div>
        </div>

        {/* Two Factor Auth */}
        <div className="border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-navy-900">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.twoFactor}
                onChange={() => setSettings({...settings, twoFactor: !settings.twoFactor})}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy-900"></div>
            </label>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="border-2 border-red-200 rounded-xl p-4 bg-red-50">
          <h4 className="font-semibold text-red-600">Danger Zone</h4>
          <p className="text-sm text-red-500 mb-4">Permanently delete your account</p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}