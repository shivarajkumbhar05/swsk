import { useMemo, useState } from "react";
import { projects, CATEGORIES } from "../projectsData";
import { PRICING } from "../siteConfig";

const PAGE_SIZE = 20;

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesQuery = p.name
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const visible = filtered.slice(0, visibleCount);
  const remaining = filtered.length - visible.length;

  function handleCategoryChange(key) {
    setActiveCategory(key);
    setVisibleCount(PAGE_SIZE);
  }

  function handleSearchChange(e) {
    setQuery(e.target.value);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <section className="bg-white border-y border-navy-900/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="font-serif text-3xl font-bold text-navy-900">
          Browse All Projects
        </h3>
        <p className="mt-2 text-navy-900/60">
          {filtered.length} of {projects.length} projects —{" "}
          {PRICING.finalYear} for Final Year Projects, {PRICING.internship}{" "}
          for Internship Projects.
        </p>

        {/* Category tabs */}
        <div className="mt-6 flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleCategoryChange(cat.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold border transition-colors ${
                activeCategory === cat.key
                  ? "bg-navy-900 text-white border-navy-900"
                  : "bg-white text-navy-900 border-navy-900/15 hover:border-navy-900/40"
              }`}
            >
              {cat.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded ${
                  activeCategory === cat.key
                    ? "bg-white/20"
                    : "bg-navy-900/5"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mt-6 relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-900/40" />
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search projects by name..."
            className="w-full pl-11 pr-4 py-3 rounded-md border border-navy-900/15 bg-cream/60 focus:outline-none focus:ring-2 focus:ring-gold/50 text-navy-900 placeholder:text-navy-900/40"
          />
        </div>

        {/* List */}
        <ul className="mt-6 divide-y divide-navy-900/10 border border-navy-900/10 rounded-md overflow-hidden">
          {visible.map((p, idx) => (
            <ProjectRow key={p.id} index={idx + 1} project={p} />
          ))}
          {visible.length === 0 && (
            <li className="px-5 py-10 text-center text-navy-900/50">
              No projects match your search.
            </li>
          )}
        </ul>

        {remaining > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="bg-navy-900 hover:bg-navy-700 transition-colors text-white font-semibold px-6 py-3 rounded-md"
            >
              Load More ({remaining} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectRow({ index, project }) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-cream/60 transition-colors"
      >
        <span className="flex items-center gap-4 min-w-0">
          <span className="text-xs text-navy-900/40 font-mono w-6 shrink-0">
            {String(index).padStart(2, "0")}
          </span>
          <span className="font-semibold text-navy-900 truncate">
            {project.name}
          </span>
        </span>
        <span className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-medium text-navy-900/60">
            {project.category}
          </span>
          <span className="text-xs font-semibold text-gold">
            {project.price}
          </span>
          <Chevron open={open} />
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4 -mt-1 text-sm text-navy-900/60 pl-15">
          <p className="pl-10">
            Includes complete source code, Black Book documentation,
            synopsis, report, PPT presentation, and personal guidance —
            delivered as part of the {project.price} all-inclusive package.
          </p>
        </div>
      )}
    </li>
  );
}

function Chevron({ open }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`text-navy-900/50 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon({ className }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}
