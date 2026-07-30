// src/components/Header.jsx
import { useState, useRef, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { user, logout } = useUser();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const userMenuRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'How It Works', path: '/how-it-works' },
  ];

  const userMenuItems = [
    { icon: '📊', label: 'Dashboard', path: '/dashboard' },
    { icon: '📚', label: 'My Projects', path: '/my-projects' },
    { icon: '💰', label: 'Payments', path: '/payments' },
    { icon: '👤', label: 'Profile', path: '/profile' },
    { icon: '⚙️', label: 'Settings', path: '/settings' },
    { icon: '❓', label: 'Help & Support', path: '/support' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-navy-900 text-white shadow-xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-yellow-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
              🚀
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold font-serif tracking-tight">
                Solapur Projects
              </h1>
              <p className="text-[10px] text-white/50 -mt-0.5 tracking-wider">
                EMPOWERING STUDENTS
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* User Section */}
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-xl transition-all duration-200 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center text-sm font-bold text-navy-900">
                    {user.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div className="hidden lg:block text-left">
                    <p className="text-sm font-semibold leading-tight">{user.name}</p>
                    <p className="text-[10px] text-white/50 capitalize">{user.role || 'Student'}</p>
                  </div>
                  <svg
                    className={`w-4 h-4 text-white/50 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* User Dropdown Menu */}
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-navy-900/10 overflow-hidden"
                    >
                      {/* User Info */}
                      <div className="px-4 py-4 bg-gradient-to-r from-navy-50 to-cream/30 border-b border-navy-900/5">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-navy-900 to-navy-700 rounded-full flex items-center justify-center text-xl font-bold text-white">
                            {user.name?.charAt(0).toUpperCase() || 'U'}
                          </div>
                          <div>
                            <p className="font-semibold text-navy-900">{user.name}</p>
                            <p className="text-xs text-gray-500">{user.email}</p>
                            <p className="text-xs text-gray-400 mt-0.5">
                              {user.college || 'No college specified'}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        {userMenuItems.map((item) => (
                          <Link
                            key={item.label}
                            to={item.path}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-navy-50 transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <span className="text-lg">{item.icon}</span>
                            {item.label}
                          </Link>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="border-t border-navy-900/5"></div>

                      {/* Logout */}
                      <button
                        onClick={() => {
                          logout();
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <span className="text-lg">🚪</span>
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="hidden sm:block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-gold text-navy-900 font-semibold text-sm rounded-lg hover:bg-yellow-400 transition-all duration-200 shadow-lg shadow-gold/20"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-white/10"
              ref={menuRef}
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-2.5 rounded-lg transition-colors ${
                      isActive(link.path)
                        ? 'bg-white/20 text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile User Actions */}
                {!user && (
                  <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
                    <Link
                      to="/login"
                      className="block px-4 py-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/register"
                      className="block px-4 py-2.5 bg-gold text-navy-900 font-semibold rounded-lg text-center hover:bg-yellow-400 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}