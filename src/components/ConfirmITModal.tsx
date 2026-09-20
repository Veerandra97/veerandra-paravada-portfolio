import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  X,
  CheckCircle2,
  BriefcaseBusiness,
  GitBranch,
  ShieldCheck,
  FileCheck,
  SearchX,
  GripHorizontal,
  Code2,
  Sparkles,
} from "lucide-react";

export interface ConfirmITItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  iconType: "survey" | "logic" | "routing" | "quality" | "deployment" | "role";
}

// Sourced directly from Veerandra's verified ConfirmIT experience in Experience.tsx, Resume.tsx, and About.tsx
const CONFIRMIT_DATA: ConfirmITItem[] = [
  {
    id: "survey-engineering",
    title: "Complex Survey Architecture & Engineering",
    category: "Survey Creation",
    description: "Designing and engineering complex survey structures tailored to specific operational requirements and bespoke client specifications.",
    highlights: ["Custom operational specifications", "Bespoke survey design", "Multi-branch questionnaires"],
    iconType: "survey",
  },
  {
    id: "logic-implementation",
    title: "Survey Logic Implementation & Testing",
    category: "Logic & Testing",
    description: "Implementing and meticulously testing survey logic, conditional rules, and data collection parameters to guarantee data integrity.",
    highlights: ["Conditional logic rules", "Meticulous test cases", "Data integrity validation"],
    iconType: "logic",
  },
  {
    id: "routing-validation",
    title: "Dynamic Routing Pathways & UX Optimization",
    category: "Routing & UX",
    description: "Configuring and validating survey routing paths for optimal and seamless user experience, minimizing respondent drop-offs.",
    highlights: ["Dynamic branching", "Drop-off rate reduction", "Seamless navigational flow"],
    iconType: "routing",
  },
  {
    id: "quality-assurance",
    title: "Peer Survey Auditing & Quality Assurance",
    category: "Quality Assurance",
    description: "Reviewing, auditing, and validating surveys engineered by other team members to enforce rigorous standards and zero-defect delivery.",
    highlights: ["Cross-team peer reviews", "Pre-deployment audits", "Zero-defect verification"],
    iconType: "quality",
  },
  {
    id: "production-delivery",
    title: "Production Deployment & Zero-Defect Release",
    category: "Deployment",
    description: "Ensuring all deployed surveys function flawlessly across varied devices and browsers before final sign-off and live release.",
    highlights: ["Production readiness checks", "Device compatibility testing", "Stakeholder sign-off"],
    iconType: "deployment",
  },
  {
    id: "associate-analyst-role",
    title: "Associate Analyst Role & Professional Scope",
    category: "Role Profile",
    description: "3 years of professional experience as an Associate Analyst at ConfirmIT (2023 – Present), focusing on precision, logic, and system validation.",
    highlights: ["3 Years Active Tenure", "System Validation Specialist", "Operational Survey Operations"],
    iconType: "role",
  },
];

const CATEGORIES = ["All", "Survey Creation", "Logic & Testing", "Routing & UX", "Quality Assurance", "Deployment"];

interface ConfirmITModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConfirmITModal({ isOpen, onClose }: ConfirmITModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setSearchQuery("");
      setSelectedCategory("All");
    }
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Lock body scroll while modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Filter items dynamically based on search query and category
  const filteredItems = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return CONFIRMIT_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category.toLowerCase() === selectedCategory.toLowerCase();

      if (!matchesCategory) return false;

      if (!query) return true;

      const inTitle = item.title.toLowerCase().includes(query);
      const inDescription = item.description.toLowerCase().includes(query);
      const inCategory = item.category.toLowerCase().includes(query);
      const inHighlights = item.highlights.some((h) => h.toLowerCase().includes(query));

      return inTitle || inDescription || inCategory || inHighlights;
    });
  }, [searchQuery, selectedCategory]);

  const renderIcon = (type: ConfirmITItem["iconType"]) => {
    switch (type) {
      case "survey":
        return <FileCheck className="w-5 h-5 text-gold-light" />;
      case "logic":
        return <Code2 className="w-5 h-5 text-moss-400" />;
      case "routing":
        return <GitBranch className="w-5 h-5 text-sage-200" />;
      case "quality":
        return <ShieldCheck className="w-5 h-5 text-gold-accent" />;
      case "deployment":
        return <CheckCircle2 className="w-5 h-5 text-moss-400" />;
      case "role":
        return <BriefcaseBusiness className="w-5 h-5 text-cream-50" />;
      default:
        return <Sparkles className="w-5 h-5 text-gold-accent" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="confirmit-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-forest-900/60 backdrop-blur-md transition-all duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirmit-modal-title"
        >
          {/* Floating Glassmorphic Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: "spring", damping: 28, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-forest-900/90 sm:bg-forest-900/85 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(184,156,101,0.12)] text-cream-50 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
            id="confirmit-floating-window"
          >
            {/* Ambient background glows */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[radial-gradient(ellipse_at_center,rgba(184,156,101,0.2),transparent_70%)] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[radial-gradient(ellipse_at_center,rgba(92,106,88,0.2),transparent_70%)] pointer-events-none" />

            {/* Mobile drag / visual indicator */}
            <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <div className="w-12 h-1 bg-white/20 rounded-full" />
            </div>

            {/* Top Window Header */}
            <div className="px-6 sm:px-8 pt-4 sm:pt-6 pb-4 border-b border-white/10 flex items-start justify-between relative z-10">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-gold-accent shadow-inner backdrop-blur-sm">
                  <BriefcaseBusiness size={22} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2
                      id="confirmit-modal-title"
                      className="text-2xl sm:text-3xl font-serif font-bold text-cream-50 tracking-tight"
                    >
                      ConfirmIT
                    </h2>
                    <span className="text-[11px] font-sans font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gold-accent/20 text-gold-light border border-gold-accent/30">
                      Associate Analyst
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-sage-200 mt-0.5 font-light">
                    Survey engineering, data logic, routing pathways & quality assurance records
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full text-sage-200 hover:text-cream-50 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-accent/50 group"
                aria-label="Close ConfirmIT window"
                id="confirmit-close-button"
              >
                <X size={20} className="transition-transform duration-200 group-hover:scale-110" />
              </button>
            </div>

            {/* Search Input Section */}
            <div className="px-6 sm:px-8 pt-5 pb-3 relative z-10 space-y-3">
              <div className="relative flex items-center bg-white/5 border border-white/15 rounded-2xl focus-within:border-gold-accent/70 focus-within:bg-white/10 focus-within:ring-2 focus-within:ring-gold-accent/25 transition-all duration-300 shadow-inner px-4 py-3">
                <Search
                  size={20}
                  className="text-sage-300 transition-colors duration-200 flex-shrink-0"
                />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search ConfirmIT..."
                  className="w-full bg-transparent border-none outline-none text-cream-50 placeholder-sage-300/60 text-sm sm:text-base ml-3 pr-8 font-sans"
                  id="confirmit-search-input"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      inputRef.current?.focus();
                    }}
                    className="p-1 rounded-full text-sage-300 hover:text-cream-50 hover:bg-white/10 transition-colors mr-1"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
                <kbd className="hidden sm:inline-flex items-center text-[10px] text-sage-300 bg-white/10 border border-white/10 px-1.5 py-0.5 rounded font-mono uppercase">
                  ESC
                </kbd>
              </div>

              {/* Category Quick Filter Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1 rounded-full whitespace-nowrap transition-all duration-200 text-xs font-medium ${
                        isSelected
                          ? "bg-gold-accent text-forest-900 shadow-sm font-semibold"
                          : "bg-white/5 text-sage-200 hover:bg-white/10 hover:text-cream-50 border border-white/10"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results Header Meta */}
            <div className="px-6 sm:px-8 py-2 text-xs text-sage-300 flex items-center justify-between border-b border-white/5">
              <span>
                {filteredItems.length === 1
                  ? "1 record found"
                  : `${filteredItems.length} records available`}
              </span>
              {searchQuery && (
                <span>
                  Query: <strong className="text-gold-light">"{searchQuery}"</strong>
                </span>
              )}
            </div>

            {/* Search Results List */}
            <div className="px-6 sm:px-8 py-4 overflow-y-auto flex-1 space-y-3.5 custom-scrollbar relative z-10">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.25 }}
                    className="p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-white/10 transition-all duration-300">
                        {renderIcon(item.iconType)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <h3 className="text-base sm:text-lg font-semibold text-cream-50 group-hover:text-gold-light transition-colors">
                            {item.title}
                          </h3>
                          <span className="inline-block self-start sm:self-auto text-[11px] px-2.5 py-0.5 rounded-full bg-forest-800/80 text-sage-200 border border-white/10">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-sm text-sage-200 leading-relaxed font-light mb-3">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 text-sage-300 border border-white/5 group-hover:border-white/10"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                /* No Results State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center justify-center px-4"
                >
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sage-300 mb-4">
                    <SearchX size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-semibold text-cream-50 mb-1">
                    No results found for "{searchQuery}"
                  </h4>
                  <p className="text-sm text-sage-300 max-w-sm font-light mb-5">
                    No ConfirmIT records matched your query. Try searching for terms like{" "}
                    <span className="text-gold-light">survey</span>,{" "}
                    <span className="text-gold-light">logic</span>,{" "}
                    <span className="text-gold-light">routing</span>, or{" "}
                    <span className="text-gold-light">quality</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                      inputRef.current?.focus();
                    }}
                    className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-cream-50 text-xs font-medium border border-white/15 transition-colors"
                  >
                    Reset Search
                  </button>
                </motion.div>
              )}
            </div>

            {/* Window Footer */}
            <div className="px-6 sm:px-8 py-3 bg-forest-900/70 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-sage-300 gap-2 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-moss-500 animate-pulse" />
                <span>ConfirmIT Analytics & Engineering Hub</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline">Press <kbd className="font-mono bg-white/10 px-1 py-0.5 rounded text-[10px]">Esc</kbd> to close</span>
                <span>Click outside to dismiss</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
