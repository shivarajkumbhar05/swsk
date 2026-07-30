// src/components/user/UserDashboard.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../../contexts/UserContext';
import { mockProjects, mockPayments, mockUserStats } from '../../data/userData';
import UserProjects from './UserProjects';
import UserPayments from './UserPayments';
import UserProfile from './UserProfile';
import UserSettings from './UserSettings';

export default function UserDashboard() {
  const { user, logout } = useUser();
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '📊 Overview' },
    { id: 'projects', label: '📚 My Projects' },
    { id: 'payments', label: '💰 Payments' },
    { id: 'profile', label: '👤 Profile' },
    { id: 'settings', label: '⚙️ Settings' }
  ];

  const stats = mockUserStats;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cream/30 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-navy-900 to-navy-700 rounded-2xl p-8 mb-8 text-white"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold font-serif">
                Welcome back, {user?.name}! 👋
              </h1>
              <p className="text-white/70 mt-1">
                {user?.college} • {user?.role}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">
                🎓 Student ID: {user?.id || 'N/A'}
              </span>
              <button
                onClick={logout}
                className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-navy-900/5 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Projects</p>
                <p className="text-3xl font-bold text-navy-900">{stats.totalProjects}</p>
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl">
                📚
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm border border-navy-900/5 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Completed</p>
                <p className="text-3xl font-bold text-green-600">{stats.completedProjects}</p>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-2xl">
                ✅
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm border border-navy-900/5 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">In Progress</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.inProgressProjects}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-2xl">
                ⏳
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm border border-navy-900/5 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Spent</p>
                <p className="text-3xl font-bold text-purple-600">₹{stats.totalSpent}</p>
              </div>
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-2xl">
                💰
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-navy-900/10">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium text-sm transition-all ${
                activeTab === tab.id
                  ? 'text-navy-900 border-b-2 border-navy-900'
                  : 'text-gray-500 hover:text-navy-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-navy-900/5 p-6">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-navy-900">Recent Activity</h3>
              <div className="space-y-4">
                {mockProjects.slice(0, 3).map(project => (
                  <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-medium text-navy-900">{project.name}</p>
                      <p className="text-sm text-gray-500">{project.category} • {project.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-navy-900">₹{project.price}</p>
                      <p className="text-xs text-gray-400">{project.purchasedDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'projects' && <UserProjects projects={mockProjects} />}
          {activeTab === 'payments' && <UserPayments payments={mockPayments} />}
          {activeTab === 'profile' && <UserProfile user={user} />}
          {activeTab === 'settings' && <UserSettings user={user} />}
        </div>
      </div>
    </div>
  );
}