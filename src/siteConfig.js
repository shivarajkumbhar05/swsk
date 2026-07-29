// ============================================================
// SITE CONFIG — single source of truth for branding & contact
// Update phone numbers / WhatsApp numbers here only.
// ============================================================

export const SITE = {
  logoName: "Shivaraj Kumbhar",
  tagline: "MERN + Python AI Final Year Projects",
  year: 2026,
};

// Two separate price tiers
export const PRICING = {
  finalYear: "₹13,000",
  internship: "₹6,000",
};

// Replace 91XXXXXXXXXX with the real WhatsApp number(s), digits only,
// including country code (no +, no spaces, no dashes).
export const DEVELOPERS = [
  {
    id: "dev-1",
    name: "Shivaraj Kumbhar",
    role: "Full Stack MERN Developer",
    phoneDisplay: "+91 95450 89118",
    whatsappNumber: "919545089118",
  },
  {
    id: "dev-2",
    name: "Swarali Suryavanshi",
    role: "UI/UX Designer & Testing Engineer",
    phoneDisplay: "+91 99753 48701",
    whatsappNumber: "919975348701",
  },
];

// Primary WhatsApp used by the header / hero CTA buttons (defaults to Developer 1)
export const PRIMARY_WHATSAPP_NUMBER = DEVELOPERS[0].whatsappNumber;

export function waLink(number, message) {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const COPYRIGHT_TEXT = `© ${SITE.year} ${DEVELOPERS[0].name} & ${DEVELOPERS[1].name}. All Rights Reserved. All project deliverables include Black Book, Synopsis, Report, Presentations, and Guidance — ${PRICING.finalYear} for Final Year Projects, ${PRICING.internship} for Internship Projects.`;
