import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const links = [
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = links.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? "py-3 bg-forest-900/40 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="group flex items-center gap-2">
              <span className="text-xl font-serif font-bold text-cream-50 tracking-tight transition-transform duration-300 group-hover:scale-105 drop-shadow-md">
                VP<span className="text-gold-accent">.</span>
              </span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-1 bg-white/5 backdrop-blur-md border border-white/10 px-2 py-1.5 rounded-full shadow-sm">
            {links.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full group"
                >
                  <span className={`relative z-10 ${isActive ? "text-cream-50" : "text-sage-200 group-hover:text-cream-50"}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full z-0 border border-white/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-full z-0 transition-colors duration-300" />
                </a>
              );
            })}
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-sage-200 hover:bg-white/10 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-forest-900/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {links.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-sage-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
