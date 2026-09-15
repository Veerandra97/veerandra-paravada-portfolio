import { motion } from "motion/react";
import { GraduationCap, Code2, Briefcase, Rocket } from "lucide-react";

export function Journey() {
  const timeline = [
    {
      year: "2019",
      title: "B.Tech in Mechanical Engineering",
      subtitle: "Raghu Engineering College (67%)",
      icon: <GraduationCap size={20} />,
      description: "Developed strong analytical and problem-solving skills, completing an innovative Rice Threshing Machine project.",
    },
    {
      year: "2022 – 2023",
      title: "Full Stack Java Development",
      subtitle: "TalentSprint (Certified)",
      icon: <Code2 size={20} />,
      description: "Successfully transitioned into IT through intensive training, mastering Java, SQL, Spring Boot, and Angular.",
    },
    {
      year: "2023 – Present",
      title: "Associate Analyst",
      subtitle: "ConfirmIT",
      icon: <Briefcase size={20} />,
      description: "Creating, checking, and validating complex surveys, ensuring robust logic and accurate routing paths.",
    },
    {
      year: "Currently",
      title: "Learning DevOps",
      subtitle: "Continuous Professional Development",
      icon: <Rocket size={20} />,
      description: "Expanding my skill set towards automation, deployment pipelines, and modern operational practices.",
    },
  ];

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-cream-50 tracking-tight drop-shadow-md"
          >
            My Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-sage-200 font-light drop-shadow-sm"
          >
            A path of continuous learning and evolution.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central organic "branch" line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-moss-400/50 via-sage-300/50 to-gold-accent/50 transform md:-translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline dot/icon */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-0 md:-translate-x-1/2 mt-1 md:mt-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-cream-50/90 backdrop-blur-sm border border-sage-300/50 shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center justify-center text-moss-600 z-10 transition-transform duration-300 hover:scale-110 hover:bg-white hover:text-moss-700 hover:border-moss-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`ml-20 md:ml-0 w-full md:w-[calc(50%-3rem)] ${isEven ? "md:pl-12" : "md:pr-12 text-left md:text-right"}`}>
                    <div className="group bg-cream-50/85 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 hover:bg-cream-50/95 hover:shadow-xl hover:border-white/40 transition-all duration-300 transform hover:-translate-y-1">
                      <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-forest-800 bg-sage-200/50 rounded-full group-hover:bg-moss-500 group-hover:text-white transition-colors duration-300">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-forest-900 mb-1">{item.title}</h3>
                      <h4 className="text-sm font-medium text-moss-600 mb-3">{item.subtitle}</h4>
                      <p className="text-forest-700 text-sm leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
