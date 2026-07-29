import { SITE, PRIMARY_WHATSAPP_NUMBER, waLink } from "../siteConfig";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-in-out
        ${isScrolled 
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-navy-900 py-5'
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-wa/20 to-gold/20 border border-white/10">
            <span className="text-lg">🚀</span>
          </div>
          <div>
            <h1 className="font-display text-xl font-bold leading-tight text-white">
              {SITE.logoName}
              <span className="ml-1.5 text-xs font-mono font-normal text-wa-light/60 bg-wa/10 px-2 py-0.5 rounded-full">
                v2.0
              </span>
            </h1>
            <p className="font-body text-xs text-white/60 tracking-wide">
              {SITE.tagline}
            </p>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Navigation Links */}
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <a href="#projects" className="hover:text-white transition-colors font-body tracking-wide">
              Projects
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors font-body tracking-wide">
              How It Works
            </a>
            <a href="#contact" className="hover:text-white transition-colors font-body tracking-wide">
              Contact
            </a>
          </nav>

          {/* WhatsApp Button */}
          <motion.a
            href={waLink(PRIMARY_WHATSAPP_NUMBER, "Hi, I'm interested in a final year project.")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              group relative inline-flex items-center gap-2
              bg-gradient-to-r from-wa to-wa/80 hover:from-wa/90 hover:to-wa
              text-white text-sm font-semibold 
              px-5 py-2.5 rounded-xl
              shadow-lg shadow-wa/20 hover:shadow-wa/40
              transition-all duration-300
              overflow-hidden
            "
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <ChatIcon />
            <span className="relative z-10 font-body">Contact on WhatsApp</span>
            <span className="relative z-10 text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded-full">
              Quick Reply
            </span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white/70 hover:text-white transition-colors p-2"
          aria-label="Toggle menu"
        >
          <MenuIcon open={isMobileMenuOpen} />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-navy-900/95 backdrop-blur-md border-t border-white/5"
      >
        <div className="px-6 py-4 space-y-4">
          <nav className="flex flex-col gap-3">
            <a 
              href="#projects" 
              className="text-white/70 hover:text-white transition-colors font-body text-sm tracking-wide py-2 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#how-it-works" 
              className="text-white/70 hover:text-white transition-colors font-body text-sm tracking-wide py-2 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#contact" 
              className="text-white/70 hover:text-white transition-colors font-body text-sm tracking-wide py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
          
          <motion.a
            href={waLink(PRIMARY_WHATSAPP_NUMBER, "Hi, I'm interested in a final year project.")}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="
              inline-flex items-center justify-center gap-2 w-full
              bg-gradient-to-r from-wa to-wa/80
              text-white text-sm font-semibold 
              px-5 py-3 rounded-xl
              shadow-lg shadow-wa/20
              transition-all duration-300
            "
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <ChatIcon />
            Contact on WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
}

// ============ ICON COMPONENTS ============
function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="relative z-10">
      <path d="M12 2C6.48 2 2 6.03 2 11c0 2.02.73 3.88 1.96 5.4L3 22l5.79-1.9A10.9 10.9 0 0012 20c5.52 0 10-4.03 10-9S17.52 2 12 2z" />
      <circle cx="8" cy="11" r="1.5" fill="white" />
      <circle cx="12" cy="11" r="1.5" fill="white" />
      <circle cx="16" cy="11" r="1.5" fill="white" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path 
        d="M3 6h18" 
        className={`transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}
      />
      <path 
        d="M3 12h18" 
        className={`transition-all duration-300 ${open ? 'opacity-0' : ''}`}
      />
      <path 
        d="M3 18h18" 
        className={`transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}
      />
    </svg>
  );
}