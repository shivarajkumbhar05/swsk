import { DEVELOPERS, COPYRIGHT_TEXT, waLink } from "../siteConfig";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-navy-900 to-slate-900 text-white overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Premium Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-wa/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-gold/10 to-transparent rounded-full blur-3xl" />
      
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-wa/50 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DEVELOPERS.map((dev, index) => (
            <motion.div
              key={dev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-wa/5">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-wa/5 via-transparent to-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Developer Header */}
                <div className="relative flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-display text-2xl font-bold tracking-tight text-white flex items-center gap-3">
                      {dev.name}
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-normal bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full tracking-wider uppercase">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        Available
                      </span>
                    </h4>
                    <p className="font-body text-white/50 text-sm mt-1.5 tracking-wide">
                      {dev.role}
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-wa/20 to-gold/20 flex items-center justify-center text-2xl ring-2 ring-white/10 group-hover:ring-white/20 transition-all duration-300">
                    {dev.avatar || '👨‍💻'}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="relative mt-6 space-y-4">
                  <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/5 group-hover:border-white/10 transition-all duration-300">
                    <PhoneIcon />
                    <span className="font-mono text-sm text-white/80 tracking-wider">
                      {dev.phoneDisplay}
                    </span>
                  </div>

                  {/* WhatsApp Button - Premium Style */}
                  <motion.a
                    href={waLink(dev.whatsappNumber, `Hi ${dev.name}, I'd like to know more about a final year project.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden group/btn inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] transition-all duration-300 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-wa/20 hover:shadow-wa/40 w-full"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                    <ChatIcon />
                    <span className="relative z-10 font-sans text-sm tracking-wide">
                      Connect on WhatsApp
                    </span>
                    <span className="relative z-10 ml-auto text-[10px] font-mono bg-white/20 px-2.5 py-1 rounded-full tracking-wider">
                      Quick Reply
                    </span>
                  </motion.a>
                </div>

                {/* Trust Indicators */}
                <div className="relative mt-5 flex flex-wrap items-center gap-4 text-xs text-white/30">
                  <span className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span>
                    <span className="font-body tracking-wide">Response within 5 min</span>
                  </span>
                  <span className="w-px h-3 bg-white/10" />
                  <span className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span>
                    <span className="font-body tracking-wide">24/7 Support</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Bottom - Premium Design */}
        <div className="relative mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-6">
              <span className="font-body text-sm text-white/40 tracking-wide">
                © {currentYear} {COPYRIGHT_TEXT}
              </span>
              <div className="hidden md:block w-px h-5 bg-white/10" />
              <span className="font-body text-xs text-white/30 flex items-center gap-2">
                <span className="text-rose-400 animate-pulse">✦</span>
                Crafted with precision
              </span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="font-body text-xs text-white/30 hover:text-white/60 transition-colors tracking-wide uppercase"
              >
                Privacy
              </a>
              <span className="w-px h-4 bg-white/10" />
              <a
                href="#"
                className="font-body text-xs text-white/30 hover:text-white/60 transition-colors tracking-wide uppercase"
              >
                Terms
              </a>
              <span className="w-px h-4 bg-white/10" />
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group/back flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
                aria-label="Back to top"
              >
                <span className="font-body text-xs tracking-wide uppercase">Back to Top</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="group-hover/back:-translate-y-1 transition-transform duration-300"
                >
                  <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[11px] text-white/20 font-body tracking-wide">
            <span className="flex items-center gap-2">
              <span className="text-emerald-400/60 text-base">✦</span>
              Verified Developers
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2">
              <span className="text-emerald-400/60 text-base">✦</span>
              500+ Projects Delivered
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2">
              <span className="text-emerald-400/60 text-base">✦</span>
              4.9/5 Rating
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2">
              <span className="text-emerald-400/60 text-base">✦</span>
              24/7 Support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-wa-light/60 group-hover:text-wa-light transition-colors duration-300">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="relative z-10">
      <path d="M12 2C6.48 2 2 6.03 2 11c0 2.02.73 3.88 1.96 5.4L3 22l5.79-1.9A10.9 10.9 0 0012 20c5.52 0 10-4.03 10-9S17.52 2 12 2z" />
    </svg>
  );
}