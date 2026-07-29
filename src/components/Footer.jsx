import { DEVELOPERS, COPYRIGHT_TEXT, waLink } from "../siteConfig";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {DEVELOPERS.map((dev) => (
            <div key={dev.id}>
              <h4 className="text-lg font-bold">{dev.name}</h4>
              <p className="text-white/60 text-sm mt-1">{dev.role}</p>
              <p className="flex items-center gap-2 text-white/80 text-sm mt-3">
                <PhoneIcon />
                {dev.phoneDisplay}
              </p>
              <a
                href={waLink(dev.whatsappNumber, `Hi ${dev.name}, I'd like to know more about a final year project.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-wa hover:bg-wa/90 transition-colors text-white text-sm font-semibold px-4 py-2.5 rounded-md"
              >
                <ChatIcon />
                WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/50">
          {COPYRIGHT_TEXT}
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.03 2 11c0 2.02.73 3.88 1.96 5.4L3 22l5.79-1.9A10.9 10.9 0 0012 20c5.52 0 10-4.03 10-9S17.52 2 12 2z" />
    </svg>
  );
}
