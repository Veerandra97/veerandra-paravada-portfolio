import { motion } from "motion/react";
import { User, Leaf } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-cream-50/85 backdrop-blur-xl border border-white/20 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative leaf */}
          <motion.div 
            initial={{ opacity: 0, rotate: -45 }}
            whileInView={{ opacity: 0.05, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-10 right-10 text-forest-900 pointer-events-none"
          >
            <Leaf size={300} strokeWidth={0.5} />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            {/* Left: Photo */}
            <div className="lg:col-span-5 relative group">
              {/* Subtle nature-inspired decorative frame */}
              <div className="absolute -inset-4 bg-sage-200/50 rounded-[2.5rem] transform rotate-[-3deg] transition-transform duration-500 group-hover:rotate-0" />
              <div className="absolute -inset-4 bg-white/60 backdrop-blur-sm rounded-[2.5rem] transform rotate-[3deg] border border-white/40 transition-transform duration-500 group-hover:rotate-0" />
              
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-forest-900 shadow-xl border border-white/20">
                {/* Photo Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-sage-200/50 bg-gradient-to-b from-forest-800 to-forest-900">
                  <img src="/IMG_20260903_123656.jpg" alt="Veerandra Paravada" className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                  {/* Fallback content in case image is missing */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center -z-10">
                    <User size={64} className="mb-4 opacity-50" />
                    <p className="text-sm font-medium tracking-wide uppercase">Professional Photo</p>
                    <p className="text-xs mt-2 font-light opacity-60">Upload to public folder</p>
                  </div>
                </div>
              </div>
              
              {/* Minimalist floating element */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/40 flex items-center gap-4"
              >
                <div className="w-3 h-3 rounded-full bg-moss-500 animate-pulse" />
                <p className="text-sm font-medium text-forest-800 pr-2">Currently learning DevOps</p>
              </motion.div>
            </div>
            
            {/* Right: Story */}
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-900 mb-8">About Me</h2>
              
              <div className="space-y-6 text-lg text-forest-700 leading-relaxed font-light">
                <p className="text-xl font-medium text-forest-800">
                  I am an <span className="text-moss-600">Associate Analyst at ConfirmIT</span> with 3 years of professional experience, focusing on precision, logic, and system validation.
                </p>
                
                <div className="pl-6 border-l-2 border-sage-300 py-2 space-y-4">
                  <p>
                    My journey into the technology sector began with a transition from <strong className="font-semibold text-forest-900">Mechanical Engineering</strong>. Driven by a passion for systematic problem-solving, I completed rigorous training in <strong className="font-semibold text-forest-900">Full Stack Java Development</strong>, building a solid foundation in Java, SQL, Spring Boot, and Angular.
                  </p>
                  <p>
                    In my current role, I specialize in creating, checking, and validating complex surveys, ensuring absolute logical consistency and seamless routing functionality. It requires an analytical mindset and a strong attention to detail.
                  </p>
                  <p>
                    As I continue to grow professionally, I am actively expanding my technical expertise by <strong className="font-semibold text-forest-900">learning DevOps</strong> methodologies. My aim is to bridge the gap between development and operations, embracing modern deployment pipelines and automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
