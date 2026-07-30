// src/components/user/UserLogin.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../../contexts/UserContext';

export default function UserLogin({ onSwitchToRegister }) {
  const { login, isLoading, error } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      // Error is handled in context
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cream/30 py-16 flex items-center">
      <div className="max-w-md mx-auto w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl border border-navy-900/5 p-8"
        >
          {/* Logo/Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🚀</span>
            </div>
            <h2 className="text-2xl font-bold text-navy-900">Welcome Back</h2>
            <p className="text-gray-500 text-sm mt-1">Sign in to access your dashboard</p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition"
                placeholder="student@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="rounded border-gray-300" />
                Remember me
              </label>
              <a href="#" className="text-navy-600 hover:text-navy-800 font-medium">
                Forgot password?
              </a>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-navy-900 hover:bg-navy-800 text-white py-3 rounded-xl font-semibold shadow-lg shadow-navy-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⟳</span>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={onSwitchToRegister}
                className="text-navy-600 hover:text-navy-800 font-semibold"
              >
                Create Account
              </button>
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-xs text-gray-500 text-center">Demo Credentials</p>
            <div className="flex justify-center gap-4 mt-2 text-xs">
              <div>
                <span className="font-semibold">Email:</span> rahul@example.com
              </div>
              <div>
                <span className="font-semibold">Pass:</span> password123
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}