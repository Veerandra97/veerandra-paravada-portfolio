import { motion } from "motion/react";
import { Code2, BookOpen, ChevronRight } from "lucide-react";

export function Skills() {
  const knownSkills = [
    { name: "Java", level: 90 },
    { name: "SQL", level: 85 },
    { name: "Spring Boot", level: 80 },
    { name: "Angular", level: 75 },
    { name: "Full-Stack Development", level: 85 },
  ];

  const learningSkills = [
    { name: "DevOps", level: 40 },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-cream-50 tracking-tight drop-shadow-lg"
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-sage-200 font-light drop-shadow-sm"
          >
            Established foundations and current learning frontiers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Known Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cream-50/85 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 shadow-xl border border-white/20 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,rgba(163,177,155,0.2),transparent_70%)] pointer-events-none" />
            
            <div className="flex items-center mb-8 relative z-10">
              <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-sage-200 flex items-center justify-center text-forest-800 mr-5 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white">
                <Code2 size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-forest-900">Core Background</h3>
            </div>
            
            <div className="space-y-6 relative z-10">
              {knownSkills.map((skill, index) => (
                <div key={skill.name} className="group/skill">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-forest-800 font-medium group-hover/skill:text-forest-900 transition-colors">{skill.name}</span>
                  </div>
                  <div className="h-2 w-full bg-sage-200/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                      className="h-full bg-moss-500 rounded-full relative shadow-[0_0_10px_rgba(105,133,92,0.5)]"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] transform -translate-x-full group-hover/skill:animate-[shimmer_1.5s_infinite]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Currently Learning */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-forest-900/80 backdrop-blur-xl text-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-white/10 relative overflow-hidden group hover:shadow-2xl hover:bg-forest-900/90 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,rgba(184,156,101,0.15),transparent_70%)] pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50" />
            
            <div className="flex items-center mb-8 relative z-10">
              <div className="w-14 h-14 bg-forest-800/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center text-gold-light mr-5 transition-transform duration-500 group-hover:scale-110 group-hover:bg-forest-800">
                <BookOpen size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-cream-50">Current Focus</h3>
            </div>
            
            <div className="space-y-6 relative z-10">
              {learningSkills.map((skill) => (
                <div key={skill.name} className="group/skill">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-cream-50 font-medium text-xl flex items-center gap-2">
                      {skill.name}
                      <ChevronRight size={18} className="text-gold-accent opacity-0 -translate-x-2 transition-all duration-300 group-hover/skill:opacity-100 group-hover/skill:translate-x-0" />
                    </span>
                    <span className="text-xs font-light text-sage-300 tracking-wider uppercase">In Progress</span>
                  </div>
                  <div className="h-2 w-full bg-forest-800/80 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-gold-accent rounded-full relative shadow-[0_0_10px_rgba(184,156,101,0.5)]"
                    >
                      {/* Animated pulse indicator for active learning */}
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full blur-[2px] animate-pulse" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 relative z-10 p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl group-hover:bg-white/10 transition-colors duration-500">
              <p className="text-sm text-sage-200 leading-relaxed font-light">
                Actively expanding my knowledge base in DevOps practices, tools, and methodologies to bridge the gap between development and operations, improving delivery pipelines and system reliability.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
