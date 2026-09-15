import { motion } from "motion/react";
import { ArrowRight, FileText, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Content-Level Overlays for Hero Depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(163,177,155,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(184,156,101,0.05),transparent_50%)]" />
        
        {/* Abstract organic shapes using CSS gradients */}
        <motion.div 
          animate={{ 
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 10 }}
          className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-sage-200/5 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: mousePosition.x * 30,
            y: mousePosition.y * 30,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 10 }}
          className="absolute bottom-[0%] left-[0%] w-[50vw] h-[50vw] rounded-full bg-moss-400/5 blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900/40 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.2)] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-moss-400 animate-pulse" />
            <span className="text-sm font-medium text-sage-200 tracking-wide uppercase">Associate Analyst</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
            Veerandra Paravada
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg sm:text-xl text-sage-100 mx-auto mb-10 leading-relaxed font-light drop-shadow-md"
          >
            IT professional with a Java full-stack development background, 3 years of experience as an Associate Analyst, and a growing focus on DevOps.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          >
            <a
              href="#resume"
              className="group relative inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-xl text-forest-900 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(163,177,155,0.3)] hover:-translate-y-1 bg-cream-50"
            >
              <div className="absolute inset-0 bg-white group-hover:bg-cream-50 transition-colors" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(184,156,101,0.1)_0%,transparent_100%)] transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                <FileText className="w-5 h-5 transition-transform group-hover:scale-110" />
                View Resume
              </span>
            </a>
            
            <a
              href="#journey"
              className="group inline-flex justify-center items-center px-8 py-4 border border-white/20 text-base font-medium rounded-xl text-white bg-forest-900/30 backdrop-blur-md hover:bg-forest-900/50 hover:border-white/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Explore My Journey
            </a>

            <a
              href="#contact"
              className="group inline-flex justify-center items-center px-8 py-4 text-base font-medium text-sage-200 hover:text-white transition-all duration-300 drop-shadow-sm"
            >
              Contact Me
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sage-300"
      >
        <span className="text-xs tracking-widest uppercase font-medium drop-shadow-md">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
