import { useMemo, useState, useRef, useEffect } from "react";
import { projects, CATEGORIES } from "../projectsData";
import { PRICING } from "../siteConfig";
import { motion, AnimatePresence } from "framer-motion";

const PAGE_SIZE = 20;

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef(null);

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
    // Scroll to top of list on category change
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function handleSearchChange(e) {
    setQuery(e.target.value);
    setVisibleCount(PAGE_SIZE);
  }

  function handleLoadMore() {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((c) => c + PAGE_SIZE);
      setIsLoading(false);
    }, 500);
  }

  return (
    <section className="bg-gradient-to-b from-white to-cream/30 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h3 className="font-serif text-4xl font-bold text-navy-900 flex items-center gap-3">
            <span>Browse All Projects</span>
            <span className="text-sm font-sans font-normal text-navy-900/40 bg-navy-900/5 px-3 py-1 rounded-full">
              {filtered.length} available
            </span>
          </h3>
          <p className="mt-2 text-navy-900/60 flex flex-wrap items-center gap-2">
            <span>📚 {projects.length} total projects</span>
            <span className="w-1 h-1 rounded-full bg-navy-900/20" />
            <span className="flex items-center gap-1">
              <span className="font-semibold text-navy-900">₹{PRICING.finalYear}</span>
              <span>for Final Year</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-navy-900/20" />
            <span className="flex items-center gap-1">
              <span className="font-semibold text-navy-900">₹{PRICING.internship}</span>
              <span>for Internship</span>
            </span>
          </p>
        </div>

        {/* Category tabs with animation */}
        <div className="mt-6 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => handleCategoryChange(cat.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-navy-900 text-white border-navy-900 shadow-lg shadow-navy-900/20"
                  : "bg-white text-navy-900 border-navy-900/10 hover:border-navy-900/30 hover:shadow-md"
              }`}
            >
              {cat.icon && <span className="text-base">{cat.icon}</span>}
              {cat.label}
              <span
                className={`text-xs px-2 py-0.5 rounded-full transition-colors ${
                  activeCategory === cat.key
                    ? "bg-white/20"
                    : "bg-navy-900/5"
                }`}
              >
                {cat.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Search with clear button */}
        <div className="mt-6 relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-900/40" />
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search projects by name, technology, or domain..."
            className="w-full pl-11 pr-12 py-3.5 rounded-xl border-2 border-navy-900/10 bg-white/80 backdrop-blur-sm focus:outline-none focus:border-navy-900/30 focus:ring-4 focus:ring-navy-900/5 transition-all duration-200 text-navy-900 placeholder:text-navy-900/40"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-navy-900/30 hover:text-navy-900/60 transition-colors"
            >
              ✕
            </button>
          )}
        </div>

        {/* Results count */}
        <div className="mt-4 flex items-center justify-between text-sm text-navy-900/50">
          <span>
            Showing {visible.length} of {filtered.length} projects
            {query && ` matching "${query}"`}
          </span>
          {activeCategory !== "All" && (
            <button
              onClick={() => handleCategoryChange("All")}
              className="text-navy-900/40 hover:text-navy-900 transition-colors"
            >
              Clear filter ✕
            </button>
          )}
        </div>

        {/* Project List */}
        <div ref={listRef} className="mt-4">
          <AnimatePresence mode="wait">
            {visible.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-16 bg-white/50 rounded-2xl border-2 border-dashed border-navy-900/10"
              >
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-navy-900/60 font-medium">
                  No projects match your search.
                </p>
                <p className="text-navy-900/40 text-sm mt-1">
                  Try adjusting your filters or search terms
                </p>
              </motion.div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-navy-900/5 overflow-hidden">
                {visible.map((p, idx) => (
                  <ProjectRow key={p.id} index={idx + 1} project={p} />
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {remaining > 0 && (
          <div className="mt-8 flex flex-col items-center gap-3">
            <motion.button
              onClick={handleLoadMore}
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden bg-navy-900 hover:bg-navy-800 transition-all text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-navy-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin">⟳</span>
                  Loading...
                </span>
              ) : (
                <>
                  <span className="relative z-10">Load More</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
                </>
              )}
            </motion.button>
            <span className="text-sm text-navy-900/40">
              {remaining} more projects available
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectRow({ index, project }) {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.02 }}
      className="border-b border-navy-900/5 last:border-0"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-cream/50 transition-all duration-200 group"
      >
        <span className="flex items-center gap-4 min-w-0 flex-1">
          <span className="text-xs text-navy-900/30 font-mono w-6 shrink-0 group-hover:text-navy-900/60 transition-colors">
            {String(index).padStart(2, "0")}
          </span>
          <span className="font-semibold text-navy-900 truncate group-hover:text-navy-700 transition-colors">
            {project.name}
          </span>
          {project.tech && (
            <span className="hidden md:inline-flex gap-1 ml-2">
              {project.tech.split(',').slice(0, 2).map((tech, i) => (
                <span key={i} className="text-[10px] font-medium bg-navy-900/5 text-navy-900/40 px-2 py-0.5 rounded-full">
                  {tech.trim()}
                </span>
              ))}
            </span>
          )}
        </span>
        <span className="flex items-center gap-4 shrink-0">
          <span className="text-xs font-medium text-navy-900/40 bg-navy-900/5 px-2.5 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-xs font-bold text-gold bg-gold/5 px-2.5 py-1 rounded-full">
            ₹{project.price}
          </span>
          <Chevron open={open} isHovered={isHovered} />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 pt-1">
              <div className="pl-10 text-sm text-navy-900/60 space-y-3">
                <p>
                  Includes complete source code, Black Book documentation,
                  synopsis, report, PPT presentation, and personal guidance —
                  delivered as part of the <span className="font-semibold text-gold">₹{project.price}</span> all-inclusive package.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full font-medium">
                    ✅ Instant Delivery
                  </span>
                  <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">
                    💬 24/7 Support
                  </span>
                  <span className="text-xs bg-purple-50 text-purple-600 px-3 py-1 rounded-full font-medium">
                    📚 Documentation Included
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Chevron({ open, isHovered }) {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={`text-navy-900/30 transition-colors ${isHovered ? "text-navy-900/60" : ""}`}
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
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