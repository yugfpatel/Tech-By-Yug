import React from 'react';
import { motion } from 'framer-motion';

export const CapabilityCard = ({ name, description }: { name: string, description: string }) => (
  <div className="bg-background border border-border p-6 hover:border-muted transition-colors">
    <h4 className="text-lg font-semibold text-text mb-2">{name}</h4>
    <p className="text-muted text-sm leading-relaxed">{description}</p>
  </div>
);

export const TechStack = ({ technologies }: { technologies: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {technologies.map(tech => (
      <span key={tech} className="text-sm font-mono px-4 py-2 bg-surface text-muted border border-border">
        {tech}
      </span>
    ))}
  </div>
);

export const ArchitectureDiagram = () => (
  <div className="flex flex-col lg:flex-row gap-8">
    <div className="flex-1 bg-surface border border-border p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      <h4 className="text-lg font-semibold text-text mb-8 relative z-10">Application Architecture</h4>
      <div className="flex flex-col items-center gap-4 relative z-10 max-w-sm mx-auto">
        <div className="w-full bg-background border border-border p-4 text-center font-medium text-text">Frontend</div>
        <div className="w-px h-6 bg-border" />
        <div className="w-full bg-background border border-border p-4 text-center font-medium text-text">Backend API</div>
        <div className="w-px h-6 bg-border" />
        <div className="w-full bg-background border border-primary/50 p-4 text-center font-medium text-primary">AI Services</div>
        <div className="w-px h-6 bg-border" />
        <div className="w-full bg-background border border-border p-4 text-center font-medium text-text">Database</div>
        <div className="w-px h-6 bg-border" />
        <div className="w-full bg-background border border-border p-4 text-center font-medium text-text">External Integrations</div>
      </div>
    </div>
    
    <div className="flex-1 bg-surface border border-border p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      <h4 className="text-lg font-semibold text-text mb-8 relative z-10">Data & IoT Architecture</h4>
      <div className="flex flex-col items-center gap-4 relative z-10 max-w-sm mx-auto">
        <div className="w-full bg-background border border-border p-4 text-center font-medium text-text">IoT Devices</div>
        <div className="w-px h-6 bg-border" />
        <div className="w-full bg-background border border-border p-4 text-center font-medium text-text">Data Collection</div>
        <div className="w-px h-6 bg-border" />
        <div className="w-full bg-background border border-primary/50 p-4 text-center font-medium text-primary">AI Analysis</div>
        <div className="w-px h-6 bg-border" />
        <div className="w-full bg-background border border-border p-4 text-center font-medium text-text">Blockchain / Integrity Layer</div>
        <div className="w-px h-6 bg-border" />
        <div className="w-full bg-background border border-border p-4 text-center font-medium text-text">Business Dashboard</div>
      </div>
    </div>
  </div>
);

export const CaseStudy = ({ project }: { project: any }) => {
  return (
    <section id="case-study" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-24">
          
          {/* Conceptual Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full aspect-video bg-surface border border-border flex items-center justify-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-border)_0%,_transparent_60%)] opacity-50" />
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 relative z-10">
              <div className="px-6 py-3 bg-background border border-border text-text font-medium tracking-wide">AI</div>
              <div className="hidden md:block w-8 h-px bg-border" />
              <div className="px-6 py-3 bg-background border border-border text-text font-medium tracking-wide">APIs</div>
              <div className="hidden md:block w-8 h-px bg-border" />
              <div className="px-6 py-3 bg-background border border-border text-text font-medium tracking-wide">Data</div>
              <div className="hidden md:block w-8 h-px bg-border" />
              <div className="px-6 py-3 bg-background border border-border text-text font-medium tracking-wide">Automation</div>
              <div className="hidden md:block w-8 h-px bg-border" />
              <div className="px-6 py-3 bg-background border border-border text-text font-medium tracking-wide text-center">Business<br/>Operations</div>
            </div>
          </motion.div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-sm font-mono text-muted uppercase tracking-widest mb-6">The Problem</h3>
              <p className="text-xl text-text leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-mono text-muted uppercase tracking-widest mb-6">The Solution</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-muted w-24 flex-shrink-0">Input</span>
                  <span className="text-text">→ customer/business/IoT data</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-muted w-24 flex-shrink-0">Processing</span>
                  <span className="text-text">→ APIs + backend</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-muted w-24 flex-shrink-0">Intelligence</span>
                  <span className="text-text">→ AI processing</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-muted w-24 flex-shrink-0">Data</span>
                  <span className="text-text">→ structured database</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-muted w-24 flex-shrink-0">Automation</span>
                  <span className="text-text">→ automated business workflows</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-muted w-24 flex-shrink-0">Security</span>
                  <span className="text-text">→ blockchain/hash-based verification</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-muted w-24 flex-shrink-0">Output</span>
                  <span className="text-text">→ dashboards, notifications, business actions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-sm font-mono text-muted uppercase tracking-widest mb-8">Capabilities</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {project.capabilities.map((cap: any) => (
                <CapabilityCard key={cap.name} name={cap.name} description={cap.description} />
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div>
            <h3 className="text-sm font-mono text-muted uppercase tracking-widest mb-8">How It's Built</h3>
            <ArchitectureDiagram />
          </div>

          {/* Case Study Story */}
          <div>
            <h3 className="text-sm font-mono text-muted uppercase tracking-widest mb-8">Case Study</h3>
            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <span className="text-muted font-mono text-sm mb-2 block">01 — Challenge</span>
                <p className="text-text text-lg">{project.caseStudy.challenge}</p>
              </div>
              <div>
                <span className="text-muted font-mono text-sm mb-2 block">02 — Approach</span>
                <p className="text-text text-lg">{project.caseStudy.approach}</p>
              </div>
              <div>
                <span className="text-muted font-mono text-sm mb-2 block">03 — Technology</span>
                <p className="text-text text-lg">{project.caseStudy.technology}</p>
              </div>
              <div>
                <span className="text-muted font-mono text-sm mb-2 block">04 — Result</span>
                <p className="text-text text-lg">{project.caseStudy.result}</p>
              </div>
            </div>
          </div>

          {/* Built With */}
          <div>
            <h3 className="text-sm font-mono text-muted uppercase tracking-widest mb-8">Built With</h3>
            <TechStack technologies={project.technologies} />
          </div>

        </div>
      </div>
    </section>
  );
};
