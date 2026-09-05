import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects" className="py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Featured Work</h2>
        </div>

        <div className="flex flex-col gap-12">
          {/* FLAGSHIP PROJECT: APIS AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group grid md:grid-cols-12 gap-8 lg:gap-12 items-start border border-border bg-surface p-8 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,_var(--color-border)_0%,_transparent_70%)] opacity-30 pointer-events-none" />

            <div className="md:col-span-5 flex flex-col items-start gap-6 relative z-10">
              <span className="text-xs font-mono px-3 py-1.5 bg-background border border-border text-primary tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Flagship Project
              </span>
              
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-text">
                APIS AI
              </h3>
              
              <Link 
                to="/projects"
                className="mt-4 inline-flex items-center gap-3 text-sm font-semibold px-6 py-3 bg-primary text-black hover:bg-primary-hover transition-colors rounded-none"
              >
                View Case Study
                <ArrowUpRight size={18} />
              </Link>
            </div>
            
            <div className="md:col-span-7 flex flex-col gap-8 relative z-10 h-full justify-between">
              <p className="text-muted text-xl leading-relaxed">
                An AI-powered technology platform combining intelligent business automation, connected data, and secure digital workflows.
              </p>
              
              <div className="flex flex-wrap gap-2.5">
                {['AI', 'Automation', 'IoT', 'Blockchain', 'APIs', 'Database', 'Payments', 'Analytics'].map(tag => (
                  <span key={tag} className="text-xs font-medium px-4 py-2 bg-background text-muted border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
