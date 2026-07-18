import { SITE, PRIMARY_WHATSAPP_NUMBER, waLink } from "../siteConfig";

export default function Header() {
  return (
    <header className="bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold leading-tight">{SITE.logoName}</h1>
          <p className="text-sm text-white/70">{SITE.tagline}</p>
        </div>
        <a
          href={waLink(PRIMARY_WHATSAPP_NUMBER, "Hi, I'm interested in a final year project.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-wa hover:bg-wa/90 transition-colors text-white text-sm font-semibold px-4 py-2.5 rounded-md"
        >
          <ChatIcon />
          Contact on WhatsApp
        </a>
      </div>
    </header>
  );
}

function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.03 2 11c0 2.02.73 3.88 1.96 5.4L3 22l5.79-1.9A10.9 10.9 0 0012 20c5.52 0 10-4.03 10-9S17.52 2 12 2z" />
    </svg>
  );
}
