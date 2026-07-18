const steps = [
  {
    number: 1,
    title: "Choose a Project",
    description: "Pick a project from the catalog above that fits your interest.",
    icon: ClipboardIcon,
  },
  {
    number: 2,
    title: "Message on WhatsApp",
    description: "Send the project name to Shivaraj on WhatsApp to start the conversation.",
    icon: ChatBubbleIcon,
  },
  {
    number: 3,
    title: "Requirement Discussion",
    description: "Discuss your requirements and confirm the scope and deliverables.",
    icon: TaskIcon,
  },
  {
    number: 4,
    title: "Receive Complete Package",
    description:
      "Get the project + Black Book + Report + Presentations + personal guidance.",
    icon: BoxIcon,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="font-serif text-3xl font-bold text-navy-900">
          How It Works
        </h3>
        <p className="mt-2 text-navy-900/60">
          Four simple steps from selection to submission.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-navy-900 text-white">
                  <step.icon />
                </span>
                <span className="font-serif text-2xl font-bold text-navy-900">
                  {step.number}
                </span>
              </div>
              <h4 className="mt-4 font-bold text-navy-900">{step.title}</h4>
              <p className="mt-1 text-sm text-navy-900/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClipboardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="6" y="4" width="12" height="16" rx="1.5" />
      <path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1" />
    </svg>
  );
}
function ChatBubbleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.03 2 11c0 2.02.73 3.88 1.96 5.4L3 22l5.79-1.9A10.9 10.9 0 0012 20c5.52 0 10-4.03 10-9S17.52 2 12 2z" />
    </svg>
  );
}
function TaskIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 8h6M9 12h6M9 16h4" strokeLinecap="round" />
    </svg>
  );
}
function BoxIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8M12 13v8" />
    </svg>
  );
}
