import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Built With Purpose.</h2>
            <p className="text-muted text-xl leading-relaxed mb-6">
              Tech By Yug is a technology company focused on building practical software, AI solutions and digital systems that solve real business problems.
            </p>
            <p className="text-muted text-xl leading-relaxed mb-10">
              We believe technology should make businesses simpler, smarter and more capable—not more complicated.
            </p>
            
            <Link 
              to="/about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent hover:bg-surface border border-border text-text text-sm font-semibold transition-all rounded-full"
            >
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-square bg-surface border border-border flex items-center justify-center relative overflow-hidden group"
          >
            <img 
              src="/yug-patel.jpg" 
              alt="Yug Patel, Founder of Tech By Yug" 
              className="absolute inset-0 w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-700 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
