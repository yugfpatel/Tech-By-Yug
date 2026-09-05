import React from 'react';
import { motion } from 'framer-motion';

export const ProjectHero = () => {
  return (
    <section className="pt-40 pb-20 border-b border-border bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-text">
            Selected Work
          </h1>
          <p className="text-2xl text-muted font-light mb-8">
            Technology built to solve real problems.
          </p>
          <p className="text-lg text-muted/70">
            Explore selected systems, experiments and products developed by Tech By Yug.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
