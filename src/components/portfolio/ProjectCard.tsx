import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface ProjectCardProps {
  project: any;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const scrollToCaseStudy = () => {
    document.getElementById('case-study')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 border-b border-border bg-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {project.featured && (
                <span className="text-xs font-mono px-3 py-1.5 bg-background border border-border text-primary uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Flagship Project
                </span>
              )}
              <span className="text-xs font-mono px-3 py-1.5 bg-background border border-border text-muted uppercase">
                {project.status}
              </span>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-3">
                {project.name}
              </h2>
              <p className="text-xl text-muted font-medium">
                {project.subtitle}
              </p>
            </div>
            
            <button 
              onClick={scrollToCaseStudy}
              className="mt-4 inline-flex items-center gap-3 text-sm font-semibold px-6 py-3 bg-primary text-black hover:bg-primary-hover transition-colors rounded-none"
            >
              View Case Study
              <ArrowDown size={18} />
            </button>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-2xl text-text font-light leading-relaxed">
              {project.description}
            </p>
            <p className="text-lg text-muted leading-relaxed">
              {project.longDescription}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
