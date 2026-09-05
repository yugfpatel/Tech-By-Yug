import React, { useEffect } from 'react';
import { ProjectHero } from '../components/portfolio/ProjectHero';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { CaseStudy } from '../components/portfolio/CaseStudy';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const Portfolio = () => {
  // Ensure page scroll starts at top and set title
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Projects — Tech By Yug";
  }, []);

  const flagshipProject = projects[0];

  return (
    <>
      <ProjectHero />
      <ProjectCard project={flagshipProject} />
      <CaseStudy project={flagshipProject} />
      
      {/* Future Projects Section */}
      <section className="py-32 border-t border-border bg-surface">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">More Work Coming</h2>
            <p className="text-xl text-muted">
              We're building new systems across AI, software, automation and digital infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {['AI Automation', 'Business Software', 'Mobile Applications'].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-64 border border-border bg-background p-8 flex flex-col items-start justify-between group"
              >
                <span className="text-xs font-mono px-3 py-1.5 bg-surface border border-border text-muted tracking-widest uppercase">
                  Coming Soon
                </span>
                
                <h3 className="text-2xl font-semibold tracking-tight text-text/50 group-hover:text-text transition-colors">
                  {category}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
