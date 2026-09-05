import React from 'react';
import { motion } from 'framer-motion';

const principles = [
  {
    title: 'Understand First',
    description: 'We understand the business problem before choosing the technology.'
  },
  {
    title: 'Build Smart',
    description: 'We focus on practical, scalable solutions instead of unnecessary complexity.'
  },
  {
    title: 'AI When It Makes Sense',
    description: 'We use AI where it creates genuine business value—not simply because AI is trending.'
  },
  {
    title: 'Built to Grow',
    description: 'Solutions should be able to evolve as the business grows.'
  }
];

const WhyUs = () => {
  return (
    <section className="py-32 bg-surface border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Technology Should Solve Problems. <br/>
              <span className="text-muted">Not Create More.</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              At Tech By Yug, we believe that the best software is built with a clear purpose. We don't just write code; we architect solutions that address real operational bottlenecks, drive efficiency, and prepare your business for the future.
            </p>
          </motion.div>

          <div className="lg:col-span-6 lg:col-start-7 grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                <div className="h-px w-full bg-border mb-6" />
                <h3 className="text-lg font-semibold tracking-tight text-text mb-3">{principle.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
