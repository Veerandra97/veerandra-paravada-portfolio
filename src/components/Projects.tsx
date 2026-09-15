import { motion } from "motion/react";
import { Wrench, Users, Clock, ArrowRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-cream-50 tracking-tight drop-shadow-lg"
          >
            Academic Projects
          </motion.h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-cream-50/85 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-white/40 transition-all duration-500 hover:-translate-y-1"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-[radial-gradient(ellipse_at_center,rgba(184,156,101,0.2),transparent_70%)] rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 relative z-10 items-center lg:items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white/60 backdrop-blur-sm rounded-3xl shadow-sm border border-sage-200/50 flex items-center justify-center text-forest-800 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-white">
                <Wrench size={40} strokeWidth={1.5} />
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-moss-700 bg-white/50 backdrop-blur-sm rounded-full border border-sage-200 shadow-sm">
                B.Tech Engineering Project
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-6 group-hover:text-forest-800 transition-colors drop-shadow-sm">
                Rice Threshing Machine
              </h3>
              
              <p className="text-lg text-forest-800 leading-relaxed font-light mb-10 max-w-2xl mx-auto lg:mx-0">
                Designed and developed a mechanical Rice Threshing Machine to address agricultural labor inefficiencies, optimizing traditional manual processes through engineered mechanical advantage.
              </p>
              
              {/* Efficiency Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {/* Workforce Metric */}
                <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/40 flex flex-col items-center justify-center text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-md hover:bg-white">
                  <div className="text-sage-500 mb-3"><Users size={28} strokeWidth={1.5} /></div>
                  <h4 className="text-sm font-medium text-forest-700 uppercase tracking-wider mb-2">Workforce Requirement</h4>
                  <div className="flex items-center gap-3 text-2xl font-bold font-serif text-forest-900">
                    <span className="opacity-50 line-through decoration-moss-500 decoration-2">10 People</span>
                    <ArrowRight className="text-gold-accent group-hover:translate-x-1 transition-transform duration-300" size={24} />
                    <span className="text-moss-600">1 Person</span>
                  </div>
                </div>

                {/* Time Metric */}
                <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/40 flex flex-col items-center justify-center text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-md hover:bg-white delay-100">
                  <div className="text-sage-500 mb-3"><Clock size={28} strokeWidth={1.5} /></div>
                  <h4 className="text-sm font-medium text-forest-700 uppercase tracking-wider mb-2">Processing Time</h4>
                  <div className="flex items-center gap-3 text-2xl font-bold font-serif text-forest-900">
                    <span className="opacity-50 line-through decoration-moss-500 decoration-2">3 Days</span>
                    <ArrowRight className="text-gold-accent group-hover:translate-x-1 transition-transform duration-300" size={24} />
                    <span className="text-moss-600">1 Day</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
