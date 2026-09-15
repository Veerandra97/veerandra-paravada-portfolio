import { motion } from "motion/react";
import { CheckCircle2, BriefcaseBusiness } from "lucide-react";

export function Experience() {
  const responsibilities = [
    "Creating complex surveys tailored to specific operational requirements.",
    "Implementing and meticulously testing survey logic to ensure accurate data collection.",
    "Configuring and validating survey routing paths for optimal and seamless user experience.",
    "Reviewing and thoroughly validating surveys created by other team members for quality assurance.",
    "Ensuring all deployed surveys function correctly without errors before final delivery.",
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-cream-50 tracking-tight drop-shadow-lg"
          >
            Professional Experience
          </motion.h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-cream-50/85 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-2xl border border-white/20 group transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:border-white/40 overflow-hidden hover:-translate-y-1"
        >
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,rgba(184,156,101,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm border border-sage-200/50 flex items-center justify-center text-forest-800 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white">
              <BriefcaseBusiness size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-forest-900 mb-1 drop-shadow-sm">Associate Analyst</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-forest-800">
                <span className="font-medium text-lg">ConfirmIT</span>
                <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-moss-500/50" />
                <span className="text-sm bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full border border-sage-300">3 Years Experience</span>
              </div>
            </div>
          </div>
          
          <div className="pl-2 md:pl-6 space-y-5">
            {responsibilities.map((item, index) => (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index} 
                className="flex items-start group/item"
              >
                <div className="mr-4 mt-1 text-moss-500/70 group-hover/item:text-moss-600 transition-colors duration-300">
                  <CheckCircle2 size={20} strokeWidth={2} />
                </div>
                <p className="text-forest-800 leading-relaxed font-light group-hover/item:text-forest-900 transition-colors duration-300">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
