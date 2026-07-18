import { SITE, PRICING, PRIMARY_WHATSAPP_NUMBER, waLink } from "../siteConfig";

export default function Hero() {
  return (
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-14">
        <span className="inline-block text-xs font-semibold tracking-wide uppercase text-gold bg-gold/10 border border-gold/30 px-3 py-1 rounded-full">
          Diploma Final Year Project Solutions
        </span>

        <h2 className="mt-5 font-serif text-4xl md:text-5xl font-extrabold text-navy-900 leading-tight max-w-3xl">
          Final Year Project Solutions for Diploma Students
        </h2>

        <p className="mt-5 text-lg text-navy-900/80 max-w-2xl">
          MERN Stack development with integrated Python AI modules — built,
          documented, and delivered end-to-end.
        </p>

        <p className="mt-3 text-navy-900/60 max-w-2xl">
          Browse 100+ ready project ideas across Website, Mobile/App, IoT, and
          Internship categories. Every project includes the latest AI
          integration and complete academic documentation — Final Year
          Projects at {PRICING.finalYear}, Internship Projects at{" "}
          {PRICING.internship}.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={waLink(PRIMARY_WHATSAPP_NUMBER, "Hi, I'd like to chat about a final year project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-wa hover:bg-wa/90 transition-colors text-white font-semibold px-5 py-3 rounded-md"
          >
            <ChatIcon />
            Chat on WhatsApp
          </a>
          <span className="flex items-center gap-2 bg-navy-900 text-white font-semibold px-5 py-3 rounded-md">
            <ShieldIcon />
            {PRICING.finalYear} Final Year — All Inclusive
          </span>
          <span className="flex items-center gap-2 bg-gold text-white font-semibold px-5 py-3 rounded-md">
            <ShieldIcon />
            {PRICING.internship} Internship — All Inclusive
          </span>
        </div>
      </div>
    </section>
  );
}

function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.03 2 11c0 2.02.73 3.88 1.96 5.4L3 22l5.79-1.9A10.9 10.9 0 0012 20c5.52 0 10-4.03 10-9S17.52 2 12 2z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5l8-3z" />
    </svg>
  );
}
