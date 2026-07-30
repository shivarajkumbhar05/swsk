// src/components/Footer.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Developer Info - Update with your details
  const developer = {
    name: "Shivaraj Shrishail Kumbhar",
    role: "Full Stack Developer",
    phone: "+91 9545089118",
    whatsappNumber: "9545089118",
    email: "shivarajkumbhar05@gmail.com",
    avatar: "👨‍💻"
  };

  const waLink = (number, message) => {
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Reviews", path: "/reviews" },
    { name: "How It Works", path: "/how-it-works" },
  ];

  const supportLinks = [
    { name: "FAQ", path: "/faq" },
    { name: "Support", path: "/support" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-navy-900 to-slate-900 text-white">
      {/* Decorative Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <h3 className="text-xl font-bold font-serif">Solapur Projects</h3>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Empowering students with quality projects, complete documentation, 
              and expert guidance for academic success.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">
                ✅ 500+ Projects
              </span>
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">
                ⭐ 4.9/5 Rating
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/50 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/50 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Developer
            </h4>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-wa/20 rounded-full flex items-center justify-center text-xl">
                  {developer.avatar}
                </div>
                <div>
                  <p className="font-medium text-white/90">{developer.name}</p>
                  <p className="text-xs text-white/40">{developer.role}</p>
                </div>
              </div>
              
              <a
                href={`mailto:${developer.email}`}
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-2"
              >
                <span>📧</span> {developer.email}
              </a>
              
              <a
                href={waLink(developer.whatsappNumber, `Hi ${developer.name}, I'd like to know more about projects.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:shadow-lg hover:shadow-wa/20 transition-all text-white px-4 py-2 rounded-lg text-sm font-medium w-full justify-center"
              >
                <span>💬</span> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              © {currentYear} Solapur Projects. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-white/30 hover:text-white/60 transition-colors text-xs"
              >
                Privacy
              </a>
              <span className="w-px h-3 bg-white/20" />
              <a
                href="#"
                className="text-white/30 hover:text-white/60 transition-colors text-xs"
              >
                Terms
              </a>
              <span className="w-px h-3 bg-white/20" />
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-white/30 hover:text-white/60 transition-colors text-xs flex items-center gap-1"
              >
                <span>↑</span> Back to Top
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[10px] text-white/20 uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✦</span> Verified Developers
            </span>
            <span className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✦</span> 24/7 Support
            </span>
            <span className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✦</span> Instant Delivery
            </span>
            <span className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400">✦</span> Money Back Guarantee
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
} 