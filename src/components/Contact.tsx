import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Dark gradient to blend into the bottom of the page */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/90 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-forest-900/60 backdrop-blur-md border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-2xl"
        >
          <h2 className="text-4xl font-serif font-bold tracking-tight mb-4 text-cream-50 drop-shadow-md">Get In Touch</h2>
          <p className="text-lg text-sage-200 mb-10 max-w-2xl mx-auto font-light">
            Whether you have a question, an opportunity, or just want to say hi, feel free to connect with me.
          </p>

          <div className="flex justify-center gap-6 mb-16">
            <a
              href="https://www.linkedin.com/in/paravadaveerandravinay/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white hover:border-white transition-all duration-500 text-sage-200 hover:text-forest-900 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1 relative"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} className="transition-transform duration-500 group-hover:scale-110" />
            </a>
            <a
              href="https://github.com/veerandra97"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white hover:border-white transition-all duration-500 text-sage-200 hover:text-forest-900 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1 relative"
              aria-label="GitHub"
            >
              <Github size={28} className="transition-transform duration-500 group-hover:scale-110" />
            </a>
            <a
              href="mailto:vinayveerandra97@gmail.com"
              className="group p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white hover:border-white transition-all duration-500 text-sage-200 hover:text-forest-900 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1 relative"
              aria-label="Email"
            >
              <Mail size={28} className="transition-transform duration-500 group-hover:scale-110" />
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 text-sm text-sage-400 flex flex-col sm:flex-row justify-between items-center font-light">
            <p>© {new Date().getFullYear()} Veerandra Paravada. All rights reserved.</p>
            <p className="mt-2 sm:mt-0 tracking-wider">veerandraparavada.com</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
