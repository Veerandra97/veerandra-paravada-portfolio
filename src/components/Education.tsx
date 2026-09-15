import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-cream-50 tracking-tight drop-shadow-lg"
          >
            Education & Training
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cream-50/85 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl border border-white/20 flex flex-col h-full group hover:shadow-2xl hover:bg-cream-50/95 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="bg-white/60 backdrop-blur-sm shadow-sm border border-sage-200/50 p-4 rounded-2xl text-forest-800 mr-5 transition-transform duration-500 group-hover:-rotate-3 group-hover:bg-white">
                <GraduationCap size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-forest-900">Academic</h3>
            </div>
            
            <div className="flex-1">
              <h4 className="text-xl font-bold text-forest-800">B.Tech in Mechanical Engineering</h4>
              <p className="text-moss-600 font-medium mt-1 mb-4">Raghu Engineering College</p>
              
              <div className="flex justify-between items-center text-sm mb-6 border-y border-sage-200/50 py-3">
                <span className="text-forest-700 font-medium">Class of 2019</span>
                <span className="bg-white/50 backdrop-blur-sm border border-sage-200 text-forest-800 px-3 py-1 rounded-full font-semibold">67%</span>
              </div>
              
              <p className="text-forest-700 text-base leading-relaxed font-light">
                Completed undergraduate studies with a focus on engineering principles, analytical problem-solving, and system design, which laid the foundation for my transition into the technology sector.
              </p>
            </div>
          </motion.div>

          {/* Training */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-cream-50/85 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl border border-white/20 flex flex-col h-full group hover:shadow-2xl hover:bg-cream-50/95 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gold-light/20 backdrop-blur-sm border border-gold-light/30 p-4 rounded-2xl text-gold-accent mr-5 transition-transform duration-500 group-hover:rotate-3 group-hover:bg-gold-light/40">
                <Award size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-forest-900">Certification</h3>
            </div>
            
            <div className="flex-1">
              <h4 className="text-xl font-bold text-forest-800">Full Stack Java Development</h4>
              <p className="text-gold-accent font-medium mt-1 mb-4">TalentSprint</p>
              
              <div className="flex justify-between items-center text-sm mb-6 border-y border-sage-200/50 py-3">
                <span className="text-forest-700 font-medium">2022 – 2023</span>
                <span className="bg-white/50 backdrop-blur-sm text-forest-900 border border-gold-light/50 px-3 py-1 rounded-full font-semibold flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-accent" />
                  Certified
                </span>
              </div>
              
              <p className="text-forest-700 text-base leading-relaxed font-light">
                Completed an intensive training program focusing on modern Full-Stack Java development, mastering core technologies including Java, SQL, Spring Boot, and Angular.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
