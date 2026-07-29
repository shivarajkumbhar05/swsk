import { SITE, PRICING, PRIMARY_WHATSAPP_NUMBER, waLink } from "../siteConfig";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  
  const words = ["Diploma Students", "Final Year Projects", "MERN Stack", "AI Integration"];

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentWord = words[wordIndex];
      if (!isDeleting) {
        if (typedText.length < currentWord.length) {
          setTypedText(currentWord.slice(0, typedText.length + 1));
        } else {
          setIsDeleting(true);
          setTimeout(() => setIsDeleting(false), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  return (
    <section className="relative bg-gradient-to-br from-cream via-white to-cream overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-wa/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-900/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 animate-float-slow">
          <div className="w-12 h-12 bg-wa/10 rounded-xl rotate-12 backdrop-blur-sm border border-wa/10" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-slower">
          <div className="w-16 h-16 bg-gold/10 rounded-full backdrop-blur-sm border border-gold/10" />
        </div>
        <div className="absolute top-1/2 left-5 animate-float-medium">
          <div className="w-8 h-8 bg-navy-900/5 rounded-lg rotate-45 backdrop-blur-sm border border-navy-900/5" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2"
        >
          <span className="inline-block text-xs font-mono font-semibold tracking-wider uppercase text-wa bg-wa/10 border border-wa/20 px-4 py-1.5 rounded-full">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-wa rounded-full animate-pulse" />
              Diploma Final Year Project Solutions
            </span>
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-[1.1] max-w-4xl">
            Final Year Project Solutions for{" "}
            <span className="text-wa relative inline-block">
              {typedText}
              <span className="absolute -right-1 top-0 w-0.5 h-full bg-wa animate-blink" />
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-2xl"
        >
          <p className="font-body text-lg text-navy-900/80 leading-relaxed">
            MERN Stack development with integrated Python AI modules — built,
            documented, and delivered end-to-end with complete academic support.
          </p>
        </motion.div>

        {/* Stats & Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 flex flex-wrap items-center gap-6 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <div>
              <span className="font-bold text-navy-900">500+</span>
              <span className="text-navy-900/60 ml-1">Projects</span>
            </div>
          </div>
          <div className="w-px h-6 bg-navy-900/10" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <div>
              <span className="font-bold text-navy-900">AI-Powered</span>
              <span className="text-navy-900/60 ml-1">Solutions</span>
            </div>
          </div>
          <div className="w-px h-6 bg-navy-900/10" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">📄</span>
            <div>
              <span className="font-bold text-navy-900">Complete</span>
              <span className="text-navy-900/60 ml-1">Documentation</span>
            </div>
          </div>
        </motion.div>

        {/* Description with pricing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 font-body text-navy-900/60 max-w-2xl leading-relaxed"
        >
          Browse 500+ ready project ideas across Website, Mobile/App, IoT, and
          Internship categories. Every project includes the latest AI
          integration and complete academic documentation —{" "}
          <span className="font-semibold text-navy-900">Final Year Projects</span>{" "}
          at <span className="font-bold text-wa">{PRICING.finalYear}</span>,{" "}
          <span className="font-semibold text-navy-900">Internship Projects</span>{" "}
          at <span className="font-bold text-gold">{PRICING.internship}</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          {/* Primary CTA - WhatsApp */}
          <motion.a
            href={waLink(PRIMARY_WHATSAPP_NUMBER, "Hi, I'd like to chat about a final year project.")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-wa to-wa/80 hover:from-wa/90 hover:to-wa text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-wa/20 hover:shadow-wa/40 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <ChatIcon />
            <span className="relative z-10 font-body text-sm">Chat on WhatsApp</span>
            <span className="relative z-10 text-xs bg-white/20 px-2 py-0.5 rounded-full">
              Quick Reply
            </span>
          </motion.a>

          {/* Secondary CTA - Browse Projects */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-navy-900/20 hover:shadow-navy-900/30"
          >
            <BrowseIcon />
            <span className="font-body text-sm">Browse All Projects</span>
          </motion.a>

          {/* Pricing Badges */}
          <div className="flex items-center gap-3 ml-0 md:ml-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 text-navy-900 font-semibold px-4 py-2 rounded-xl text-sm"
            >
              <ShieldIcon className="text-gold" />
              {PRICING.finalYear} Final Year
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-gradient-to-r from-wa/10 to-wa/5 border border-wa/20 text-navy-900 font-semibold px-4 py-2 rounded-xl text-sm"
            >
              <ShieldIcon className="text-wa" />
              {PRICING.internship} Internship
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center gap-6 text-xs text-navy-900/40 font-body"
        >
          <span className="flex items-center gap-2">
            <span className="text-green-500 text-base">✓</span>
            100% Satisfaction Guarantee
          </span>
          <span className="w-px h-4 bg-navy-900/10" />
          <span className="flex items-center gap-2">
            <span className="text-green-500 text-base">✓</span>
            Instant Digital Delivery
          </span>
          <span className="w-px h-4 bg-navy-900/10" />
          <span className="flex items-center gap-2">
            <span className="text-green-500 text-base">✓</span>
            Lifetime Technical Support
          </span>
          <span className="w-px h-4 bg-navy-900/10" />
          <span className="flex items-center gap-2">
            <span className="text-yellow-500 text-base">★</span>
            4.9/5 Rating (500+ Reviews)
          </span>
        </motion.div>
      </div>
    </section>
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

function ShieldIcon({ className = "" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5l8-3z" />
    </svg>
  );
}

function BrowseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}