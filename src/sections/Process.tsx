import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the business, users and problem.'
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Define the solution, technology and scope.'
  },
  {
    number: '03',
    title: 'Build',
    description: 'Design, develop, integrate and test.'
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Deploy, monitor and continue improving.'
  }
];

const Process = () => {
  return (
    <section className="py-32 bg-surface border-t border-border">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">How We Work</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col relative"
            >
              <div className="text-4xl font-light text-border mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-text mb-3">{step.title}</h3>
              <p className="text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
