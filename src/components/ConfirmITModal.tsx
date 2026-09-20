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
  Code2,
  Sparkles,
  ChevronDown,
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
  const [isFocused, setIsFocused] = useState(false);
  const [isManuallyExpanded, setIsManuallyExpanded] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Expanded when user focuses on search, types a query, or manually expands
  const isExpanded = isFocused || searchQuery.trim().length > 0 || isManuallyExpanded;

  // Reset state when closed
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setSelectedCategory("All");
      setIsFocused(false);
      setIsManuallyExpanded(false);
    }
  }, [isOpen]);

  // Collapse back to compact bottom-right widget
  const handleCollapse = () => {
    setIsFocused(false);
    setIsManuallyExpanded(false);
    setSearchQuery("");
    setSelectedCategory("All");
    inputRef.current?.blur();
  };

  // Close widget entirely
  const handleClose = () => {
    handleCollapse();
    onClose();
  };

  // Handle ESC key (if expanded, collapse first; if compact, close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isExpanded) {
          handleCollapse();
        } else {
          handleClose();
        }
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isExpanded]);

  // Click outside to collapse widget if expanded
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isExpanded && widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        // If clicking outside while expanded, collapse cleanly
        setIsFocused(false);
        setIsManuallyExpanded(false);
      }
    };

    if (isOpen && isExpanded) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, isExpanded]);

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
        return <FileCheck className="w-4 h-4 text-gold-light" />;
      case "logic":
        return <Code2 className="w-4 h-4 text-moss-400" />;
      case "routing":
        return <GitBranch className="w-4 h-4 text-sage-200" />;
      case "quality":
        return <ShieldCheck className="w-4 h-4 text-gold-accent" />;
      case "deployment":
        return <CheckCircle2 className="w-4 h-4 text-moss-400" />;
      case "role":
        return <BriefcaseBusiness className="w-4 h-4 text-cream-50" />;
      default:
        return <Sparkles className="w-4 h-4 text-gold-accent" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={widgetRef}
          layout
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{ opacity: 0, y: 30, scale: 0.92 }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 350,
            layout: { duration: 0.32, ease: "easeInOut" },
          }}
          className={`fixed bottom-6 right-6 z-50 bg-forest-900/95 backdrop-blur-2xl border border-white/20 rounded-[1.75rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_35px_rgba(184,156,101,0.15)] text-cream-50 overflow-hidden flex flex-col transition-[width,height] duration-300 ease-in-out ${
            isExpanded
              ? "w-[calc(100vw-3rem)] sm:w-[500px] h-[520px] max-h-[calc(100vh-5rem)]"
              : "w-[calc(100vw-3rem)] sm:w-[340px] h-[135px]"
          }`}
          role="region"
          aria-label="ConfirmIT Search Widget"
          id="confirmit-floating-widget"
        >
          {/* Subtle Ambient Background Radiance */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[radial-gradient(ellipse_at_center,rgba(184,156,101,0.18),transparent_70%)] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[radial-gradient(ellipse_at_center,rgba(92,106,88,0.18),transparent_70%)] pointer-events-none" />

          {/* Top Bar (Header) */}
          <div className="px-5 pt-3.5 pb-2 flex items-center justify-between relative z-10 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-gold-accent shadow-inner flex-shrink-0">
                <BriefcaseBusiness size={16} strokeWidth={2} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-serif font-bold text-cream-50 tracking-tight leading-tight">
                    ConfirmIT
                  </h2>
                  {isExpanded && (
                    <span className="text-[10px] font-sans font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold-accent/20 text-gold-light border border-gold-accent/30">
                      Analyst
                    </span>
                  )}
                </div>
                {isExpanded && (
                  <p className="text-[11px] text-sage-200 mt-0.5 font-light">
                    Survey logic, routing pathways & validation records
                  </p>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1">
              {isExpanded && (
                <button
                  type="button"
                  onClick={handleCollapse}
                  className="p-1.5 rounded-full text-sage-300 hover:text-cream-50 hover:bg-white/10 transition-colors focus:outline-none"
                  title="Collapse to compact view"
                  aria-label="Collapse view"
                  id="confirmit-collapse-button"
                >
                  <ChevronDown size={17} />
                </button>
              )}
              <button
                type="button"
                onClick={handleClose}
                className="p-1.5 rounded-full text-sage-300 hover:text-cream-50 hover:bg-white/10 transition-colors focus:outline-none"
                title="Close ConfirmIT"
                aria-label="Close ConfirmIT"
                id="confirmit-close-button"
              >
                <X size={17} />
              </button>
            </div>
          </div>

          {/* Search Input Container */}
          <div className="px-4 pt-3 pb-2 relative z-10">
            <div
              className={`relative flex items-center bg-white/5 border rounded-2xl transition-all duration-300 shadow-inner px-3 py-2.5 ${
                isFocused
                  ? "border-gold-accent/70 bg-white/10 ring-2 ring-gold-accent/20"
                  : "border-white/15 hover:border-white/25"
              }`}
            >
              <Search
                size={17}
                className={`transition-colors duration-200 flex-shrink-0 ${
                  isFocused ? "text-gold-accent" : "text-sage-300"
                }`}
              />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onFocus={() => {
                  setIsFocused(true);
                  setIsManuallyExpanded(true);
                }}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (!isManuallyExpanded) setIsManuallyExpanded(true);
                }}
                placeholder="Search ConfirmIT..."
                className="w-full bg-transparent border-none outline-none text-cream-50 placeholder-sage-300/60 text-xs sm:text-sm ml-2.5 pr-6 font-sans"
                id="confirmit-search-input"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    inputRef.current?.focus();
                  }}
                  className="p-1 rounded-full text-sage-300 hover:text-cream-50 hover:bg-white/10 transition-colors"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              ) : isExpanded ? (
                <kbd className="hidden sm:inline-flex items-center text-[9px] text-sage-300 bg-white/10 border border-white/10 px-1 py-0.5 rounded font-mono uppercase">
                  ESC
                </kbd>
              ) : null}
            </div>

            {/* In compact mode, show a small hint indicating it expands when typing */}
            {!isExpanded && (
              <p className="text-[10px] text-sage-300/80 mt-1.5 px-1 text-right font-light">
                Click or type to expand
              </p>
            )}
          </div>

          {/* Expanded Results Section */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col flex-1 min-h-0 relative z-10"
              >
                {/* Category Quick Filters */}
                <div className="px-4 pb-2 flex items-center gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
                  {CATEGORIES.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-2.5 py-0.5 rounded-full whitespace-nowrap transition-all duration-200 font-medium ${
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

                {/* Results Header Meta */}
                <div className="px-4 py-1.5 text-[11px] text-sage-300 flex items-center justify-between border-b border-white/5 bg-forest-900/40">
                  <span>
                    {filteredItems.length === 1
                      ? "1 record match"
                      : `${filteredItems.length} records available`}
                  </span>
                  {searchQuery && (
                    <span>
                      Query: <strong className="text-gold-light font-medium">"{searchQuery}"</strong>
                    </span>
                  )}
                </div>

                {/* Scrollable Results List */}
                <div className="px-4 py-2.5 overflow-y-auto flex-1 space-y-2.5 custom-scrollbar">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 group"
                      >
                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:scale-105 transition-all">
                            {renderIcon(item.iconType)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <h3 className="text-xs sm:text-sm font-semibold text-cream-50 group-hover:text-gold-light transition-colors">
                                {item.title}
                              </h3>
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-forest-800/80 text-sage-200 border border-white/10 flex-shrink-0">
                                {item.category}
                              </span>
                            </div>
                            <p className="text-xs text-sage-200 leading-relaxed font-light mb-2">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {item.highlights.map((h, i) => (
                                <span
                                  key={i}
                                  className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-sage-300 border border-white/5"
                                >
                                  {h}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    /* No Results State */
                    <div className="py-8 text-center flex flex-col items-center justify-center px-4">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sage-300 mb-3">
                        <SearchX size={22} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-sm font-semibold text-cream-50 mb-1">
                        No results found for "{searchQuery}"
                      </h4>
                      <p className="text-xs text-sage-300 max-w-xs font-light mb-4">
                        Try searching for terms like{" "}
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
                        className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-cream-50 text-xs font-medium border border-white/15 transition-colors"
                      >
                        Reset Search
                      </button>
                    </div>
                  )}
                </div>

                {/* Footer Bar */}
                <div className="px-4 py-2 bg-forest-900/90 border-t border-white/10 flex items-center justify-between text-[11px] text-sage-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-moss-500 animate-pulse" />
                    <span>ConfirmIT Hub</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCollapse}
                      className="hover:text-cream-50 underline text-[10px]"
                    >
                      Collapse widget
                    </button>
                    <span>•</span>
                    <span>ESC to close</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
