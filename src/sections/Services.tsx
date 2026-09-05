import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI & Automation',
    description: 'Build AI-powered assistants, agents and automated workflows that reduce repetitive business work.'
  },
  {
    title: 'Software Development',
    description: 'Custom web applications, dashboards, SaaS platforms, APIs and business software.'
  },
  {
    title: 'Web Development',
    description: 'Professional business websites, e-commerce platforms and modern web experiences.'
  },
  {
    title: 'Mobile Applications',
    description: 'Cross-platform and native mobile applications designed around real user requirements.'
  },
  {
    title: 'IT Solutions',
    description: 'Databases, integrations, cloud infrastructure, deployment and technical systems.'
  },
  {
    title: 'Business Automation',
    description: 'Connect tools, automate workflows and turn manual processes into efficient digital systems.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">What We Build</h2>
            <p className="text-lg text-muted leading-relaxed">
              From intelligent automation to custom software, we build technology around real business needs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="pb-6 border-b border-border mb-6 group-hover:border-primary/30 transition-colors duration-300">
                <span className="text-sm font-mono text-muted mb-4 block">0{index + 1}</span>
                <h3 className="text-2xl font-semibold tracking-tight text-text">{service.title}</h3>
              </div>
              <p className="text-muted leading-relaxed text-[15px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a 
            href="/pricing"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent hover:bg-surface border border-border text-text text-sm font-semibold transition-all rounded-full"
          >
            View Pricing Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
