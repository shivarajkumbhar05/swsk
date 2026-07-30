// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, useUser } from './contexts/UserContext';
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import HowItWorks from "./components/HowItWorks";
import ReviewSection from "./components/ReviewSection";
import Footer from "./components/Footer";
import UserLogin from "./components/user/UserLogin";
import UserRegister from "./components/user/UserRegister";
import UserLayout from "./components/user/UserLayout";
import UserDashboard from "./components/user/UserDashboard";
import UserProjects from "./components/user/UserProjects";
import UserPayments from "./components/user/UserPayments";
import UserProfile from "./components/user/UserProfile";
import UserSettings from "./components/user/UserSettings";

// Import mock data
import { mockProjects, mockPayments } from './data/userData';

// Layout Component
function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-cream/30">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

// Home Component
function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <ReviewSection />
      <HowItWorks />
    </>
  );
}

// Protected Route Component
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useUser();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// Main App
export default function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
          
          <Route path="/login" element={
            <Layout>
              <UserLogin />
            </Layout>
          } />
          
          <Route path="/register" element={
            <Layout>
              <UserRegister />
            </Layout>
          } />
          
          {/* Protected User Routes with Layout */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <UserLayout />
            </ProtectedRoute>
          }>
            <Route index element={<UserDashboard />} />
          </Route>
          
          <Route path="/my-projects" element={
            <ProtectedRoute>
              <UserLayout />
            </ProtectedRoute>
          }>
            <Route index element={<UserProjects projects={mockProjects} />} />
          </Route>
          
          <Route path="/payments" element={
            <ProtectedRoute>
              <UserLayout />
            </ProtectedRoute>
          }>
            <Route index element={<UserPayments payments={mockPayments} />} />
          </Route>
          
          <Route path="/profile" element={
            <ProtectedRoute>
              <UserLayout />
            </ProtectedRoute>
          }>
            <Route index element={<UserProfile />} />
          </Route>
          
          <Route path="/settings" element={
            <ProtectedRoute>
              <UserLayout />
            </ProtectedRoute>
          }>
            <Route index element={<UserSettings />} />
          </Route>
          
          {/* Support Route */}
          <Route path="/support" element={
            <ProtectedRoute>
              <UserLayout />
            </ProtectedRoute>
          }>
            <Route index element={
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Help & Support</h2>
                <div className="bg-white rounded-xl shadow-sm border border-navy-900/5 p-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold text-blue-900">📚 FAQ</h3>
                      <p className="text-sm text-blue-700 mt-1">Find answers to common questions</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h3 className="font-semibold text-green-900">💬 Live Chat</h3>
                      <p className="text-sm text-green-700 mt-1">Chat with our support team</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h3 className="font-semibold text-purple-900">📧 Email Support</h3>
                      <p className="text-sm text-purple-700 mt-1">support@solapurprojects.com</p>
                    </div>
                  </div>
                </div>
              </div>
            } />
          </Route>
          
          {/* Catch all - 404 */}
          <Route path="*" element={
            <Layout>
              <div className="text-center py-20">
                <h1 className="text-4xl font-bold text-navy-900">404</h1>
                <p className="text-gray-500 mt-2">Page not found</p>
                <a href="/" className="text-navy-600 hover:text-navy-800 mt-4 inline-block">
                  Go Home
                </a>
              </div>
            </Layout>
          } />
        </Routes>
      </Router>
    </UserProvider>
  );
}