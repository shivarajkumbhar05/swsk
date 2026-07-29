import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    number: 1,
    title: "Choose a Project",
    description: "Browse our extensive catalog of 500+ projects and pick the one that matches your academic requirements.",
    icon: ClipboardIcon,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    details: [
      "Filter by category",
      "Search by technology",
      "Check pricing"
    ]
  },
  {
    number: 2,
    title: "Message on WhatsApp",
    description: "Connect with our expert team instantly via WhatsApp with your project selection.",
    icon: ChatBubbleIcon,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
    details: [
      "Quick response",
      "Personalized assistance",
      "24/7 availability"
    ]
  },
  {
    number: 3,
    title: "Requirement Discussion",
    description: "Discuss customization needs, timeline, and deliverables with our technical experts.",
    icon: TaskIcon,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    borderColor: "border-purple-200",
    details: [
      "Scope finalization",
      "Customization options",
      "Timeline planning"
    ]
  },
  {
    number: 4,
    title: "Receive Complete Package",
    description: "Get everything you need: Source code, documentation, presentations, and ongoing support.",
    icon: BoxIcon,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    borderColor: "border-orange-200",
    details: [
      "Complete source code",
      "Black Book documentation",
      "PPT & Report included",
      "Lifetime guidance"
    ]
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-cream via-white to-cream overflow-hidden py-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-navy-900/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-wa/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Connecting Line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-0.5 bg-gradient-to-r from-transparent via-navy-900/10 to-transparent hidden lg:block" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-navy-900/5 px-4 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-wa rounded-full animate-pulse" />
            <span className="text-xs font-mono text-navy-900/60 tracking-wider uppercase">
              Simple Process
            </span>
          </div>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-navy-900">
            How It <span className="text-wa">Works</span>
          </h3>
          <p className="mt-3 text-navy-900/60 text-lg max-w-2xl mx-auto font-body">
            Four simple steps from project selection to successful submission
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-navy-900/5 hover:border-navy-900/10">
                {/* Step Number Circle */}
                <div className="absolute -top-4 -left-4">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    bg-gradient-to-br ${step.color}
                    text-white font-display font-bold text-lg
                    shadow-lg shadow-${step.color.split(' ')[1]}/20
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className={`
                  w-14 h-14 rounded-xl flex items-center justify-center
                  ${step.bgColor} ${step.textColor}
                  group-hover:scale-110 transition-transform duration-300
                  mb-4
                `}>
                  <step.icon />
                </div>

                {/* Content */}
                <h4 className="font-display text-lg font-bold text-navy-900 mb-2">
                  {step.title}
                </h4>
                <p className="font-body text-sm text-navy-900/60 leading-relaxed">
                  {step.description}
                </p>

                {/* Details */}
                <div className={`
                  mt-4 pt-4 border-t ${step.borderColor}
                  overflow-hidden transition-all duration-300
                  ${activeStep === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <ul className="space-y-1.5">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-navy-900/50">
                        <span className="w-1 h-1 rounded-full bg-navy-900/20" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-wa to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-white rounded-full px-6 py-3 shadow-lg border border-navy-900/5">
            <span className="flex items-center gap-2 text-sm text-navy-900/60">
              <span className="text-2xl">🚀</span>
              Ready to start?
            </span>
            <span className="w-px h-6 bg-navy-900/10" />
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-wa to-wa/80 text-white font-semibold px-6 py-2 rounded-full text-sm shadow-lg shadow-wa/20 hover:shadow-wa/40 transition-all duration-300"
            >
              Browse Projects Now
            </motion.a>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-navy-900/40 font-body"
        >
          <span className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            500+ Projects
          </span>
          <span className="w-px h-4 bg-navy-900/10" />
          <span className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            100% Satisfaction
          </span>
          <span className="w-px h-4 bg-navy-900/10" />
          <span className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            Instant Delivery
          </span>
          <span className="w-px h-4 bg-navy-900/10" />
          <span className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            Lifetime Support
          </span>
        </motion.div>
      </div>
    </section>
  );
}

// ============ ICON COMPONENTS ============
function ClipboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="12" height="16" rx="1.5" />
      <path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1" />
      <path d="M9 9h6M9 13h6M9 17h4" />
    </svg>
  );
}

function ChatBubbleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.03 2 11c0 2.02.73 3.88 1.96 5.4L3 22l5.79-1.9A10.9 10.9 0 0012 20c5.52 0 10-4.03 10-9S17.52 2 12 2z" />
      <circle cx="12" cy="11" r="1" fill="white" />
      <circle cx="16" cy="11" r="1" fill="white" />
      <circle cx="8" cy="11" r="1" fill="white" />
    </svg>
  );
}

function TaskIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 8h6M9 12h6M9 16h4" />
      <path d="M14 3v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V3" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
      <path d="M12 13l-4.5-2.5" />
      <path d="M12 13l4.5-2.5" />
    </svg>
  );
}