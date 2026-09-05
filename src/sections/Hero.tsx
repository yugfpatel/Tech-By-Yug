import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Scene } from '../components/Scene';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden bg-background">
      {/* Premium glow and grid */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_60%)] blur-[100px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl pt-12 lg:pt-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-muted tracking-wide uppercase">Available for projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8 text-text">
            Technology. <br />
            <span className="text-muted">Built for Business.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted mb-12 leading-relaxed">
            Tech By Yug builds software, AI solutions and digital systems that help businesses work smarter, automate operations and grow faster.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a href="#contact" className="px-8 py-4 bg-primary hover:bg-primary-hover text-black rounded-full font-medium flex items-center justify-center gap-2 transition-all">
              Start a Project
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="px-8 py-4 bg-transparent hover:bg-surface border border-border text-text rounded-full font-medium flex items-center justify-center transition-all">
              Explore Services
            </a>
          </div>
        </motion.div>

        {/* 3D Scene Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[50vh] lg:h-[80vh] w-full"
        >
          <div className="absolute inset-0 mask-image-radial-gradient">
            <Scene />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
