import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Globe, Smartphone, Cloud, Shield, Layout, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Tech By Yug — Technology. Built With Purpose.";
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } }
  };

  return (
    <div className="bg-background min-h-screen pt-40 pb-20 overflow-hidden">
      
      {/* 1. ABOUT HERO */}
      <section className="container mx-auto px-6 mb-40">
        <div className="max-w-4xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="text-xs font-mono text-muted uppercase tracking-widest mb-6 inline-block">
              ABOUT TECH BY YUG
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-text leading-[1.1]">
              Technology.<br />
              <span className="text-muted">Built With Purpose.</span>
            </h1>
            <p className="text-xl md:text-2xl text-text leading-relaxed mb-6 font-medium max-w-3xl">
              Tech By Yug is a technology company focused on building practical software, AI solutions and digital systems that solve real business problems.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-10 max-w-2xl">
              We believe technology should make businesses simpler, smarter and more capable—not more complicated.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="/#contact" className="px-8 py-4 bg-primary text-black font-semibold hover:bg-primary-hover transition-colors">
                Work With Us
              </a>
              <Link to="/projects" className="px-8 py-4 bg-surface border border-border text-text font-semibold hover:border-muted transition-colors">
                Explore Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE STORY */}
      <section className="container mx-auto px-6 mb-40">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-text">Why Tech By Yug Exists</h2>
          </div>
          <div className="lg:col-span-8 max-w-3xl">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="prose prose-invert prose-lg"
            >
              <p className="text-2xl text-text font-medium leading-relaxed mb-6">
                Technology is everywhere. Good technology is not.
              </p>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Many businesses know they need better digital systems, automation or software, but technology can often feel expensive, complicated or disconnected from the actual problem.
              </p>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Tech By Yug exists to close that gap.
              </p>
              <p className="text-lg text-muted leading-relaxed mb-6">
                We build practical technology around the needs of the people and businesses using it—from websites and software to AI-powered automation and connected digital systems.
              </p>
              <p className="text-lg text-text font-medium leading-relaxed">
                The goal is simple: understand the problem first, then build technology that actually helps.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE BELIEVE */}
      <section className="py-32 bg-surface border-y border-border mb-40">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-20 text-center">Our Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            
            {[
              { num: '01', title: 'Problem First', desc: 'We don’t start with technology. We start by understanding the problem.' },
              { num: '02', title: 'Build With Purpose', desc: 'Every feature should have a reason to exist. We value useful technology over unnecessary complexity.' },
              { num: '03', title: 'Make Technology Accessible', desc: 'Powerful technology shouldn’t be limited to companies with massive budgets. We aim to deliver professional solutions at startup-friendly prices.' },
              { num: '04', title: 'Keep Learning', desc: 'Technology changes constantly. We continuously explore new tools, architectures and ideas to build better solutions.' }
            ].map((belief, idx) => (
              <motion.div 
                key={belief.num}
                initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: idx * 0.1 }} variants={fadeInUp}
                className="flex flex-col gap-4"
              >
                <span className="text-sm font-mono text-muted uppercase tracking-widest">{belief.num} — {belief.title}</span>
                <p className="text-xl text-text leading-relaxed">{belief.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. WHAT WE BUILD */}
      <section className="container mx-auto px-6 mb-40">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-4">From Ideas to Systems</h2>
          <p className="text-xl text-muted">Tech By Yug works across multiple areas of modern technology.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Cpu, name: 'AI & Automation', desc: 'AI assistants, agents, intelligent workflows and business automation.' },
            { icon: Code, name: 'Software Engineering', desc: 'Custom software, SaaS platforms, dashboards, APIs and backend systems.' },
            { icon: Globe, name: 'Web Development', desc: 'Business websites, web applications and e-commerce experiences.' },
            { icon: Smartphone, name: 'Mobile Applications', desc: 'Android, iOS and cross-platform applications.' },
            { icon: Cloud, name: 'Cloud & Infrastructure', desc: 'Deployment, databases, integrations and cloud infrastructure.' },
            { icon: Shield, name: 'Cybersecurity', desc: 'Security-conscious application architecture, assessments and remediation.' },
            { icon: Layout, name: 'UI/UX', desc: 'Interfaces and digital experiences designed around users.' },
            { icon: Database, name: 'Data & APIs', desc: 'Data systems, API architecture, integrations and connected services.' }
          ].map((area, idx) => (
            <motion.div
              key={area.name}
              initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: idx * 0.05 }} variants={fadeInUp}
              className="bg-surface border border-border p-8 hover:border-muted transition-colors flex flex-col h-full"
            >
              <area.icon className="text-primary mb-6" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-text mb-3">{area.name}</h3>
              <p className="text-sm text-muted leading-relaxed flex-grow">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. HOW WE THINK */}
      <section className="py-32 mb-40 bg-[radial-gradient(ellipse_at_center,_var(--color-surface)_0%,_var(--color-background)_100%)] border-y border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-sm font-mono text-muted uppercase tracking-widest mb-8 inline-block">
            We Don’t Believe in Technology for Technology’s Sake.
          </span>
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight mb-16"
          >
            The best technology is the technology that makes something better.
          </motion.h2>

          <div className="flex flex-col gap-8 text-xl md:text-2xl text-muted font-light items-center">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}>A website should help a business communicate.</motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}>An application should make a process easier.</motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}>AI should reduce meaningful work.</motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}>Automation should eliminate repetitive work.</motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}>Data should help people make better decisions.</motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}>Security should protect the systems people depend on.</motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="text-text font-medium mt-8">
              That’s the standard we want Tech By Yug to build toward.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 6. FOUNDER */}
      <section className="container mx-auto px-6 mb-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span className="text-sm font-mono text-muted uppercase tracking-widest mb-6 inline-block">Meet the Founder</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-4">Yug Patel</h2>
            <h3 className="text-xl text-primary font-medium mb-8">Founder — Tech By Yug</h3>
            <div className="prose prose-invert prose-lg text-muted">
              <p>
                Yug Patel is the founder of Tech By Yug, a technology initiative focused on building software, AI solutions and digital systems for real-world problems.
              </p>
              <p>
                With a hands-on approach to development, Yug works across software engineering, AI, APIs, databases, automation and emerging technologies.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="aspect-square bg-surface border border-border relative overflow-hidden flex items-center justify-center group"
          >
            <img 
              src="/yug-patel.jpg" 
              alt="Yug Patel, Founder of Tech By Yug" 
              className="absolute inset-0 w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Subtle overlay to blend with dark theme */}
            <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-700 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* 7. THE TECHNOLOGY MINDSET */}
      <section className="py-32 mb-40 bg-surface border-y border-border overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-6">Curious by Default.</h2>
          <p className="text-xl text-muted leading-relaxed mb-16">
            Technology moves fast. We believe the ability to learn, experiment and adapt matters as much as the technology itself.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['AI', 'APIs', 'Cloud', 'Databases', 'Automation', 'IoT', 'Blockchain', 'Cybersecurity', 'Mobile', 'Web'].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -5, borderColor: 'var(--color-text)' }}
                className="px-6 py-3 bg-background border border-border text-text font-medium cursor-default transition-all"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FLAGSHIP PROJECT */}
      <section className="container mx-auto px-6 mb-40">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="bg-surface border border-border p-12 lg:p-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,_var(--color-primary)_0%,_transparent_60%)] opacity-10 pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <span className="text-sm font-mono text-muted uppercase tracking-widest mb-4 inline-block">Our First Flagship</span>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-text">APIS AI</h2>
              <span className="text-xs font-mono px-3 py-1.5 bg-background border border-border text-primary uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                FLAGSHIP PROJECT
              </span>
            </div>
            
            <p className="text-2xl text-text font-medium mb-6 leading-relaxed">
              APIS AI is a technology platform combining intelligent business automation, connected data and secure digital workflows.
            </p>
            <p className="text-lg text-muted mb-10 leading-relaxed">
              The project brings together capabilities developed across MSMEAssist and HoneyChain, exploring how AI, APIs, IoT, blockchain and business automation can work together as one connected system.
            </p>
            
            <Link to="/projects" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-semibold hover:bg-primary-hover transition-colors">
              Explore APIS AI <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 9. OUR APPROACH */}
      <section className="container mx-auto px-6 mb-40">
        <h2 className="text-3xl font-bold tracking-tight text-text mb-16 text-center">Our Approach</h2>
        <div className="flex flex-col lg:flex-row gap-6 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 z-0" />
          
          {[
            { step: 'DISCOVER', desc: 'Understand the people, business and problem.' },
            { step: 'DESIGN', desc: 'Define the user experience and technical approach.' },
            { step: 'ENGINEER', desc: 'Build the system with maintainability and scalability in mind.' },
            { step: 'TEST', desc: 'Validate functionality, reliability and user experience.' },
            { step: 'DEPLOY', desc: 'Launch and support the solution.' }
          ].map((item, idx) => (
            <motion.div
              key={item.step}
              initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: idx * 0.1 }} variants={fadeInUp}
              className="flex-1 bg-surface border border-border p-8 relative z-10 flex flex-col items-center text-center group hover:border-muted transition-colors"
            >
              <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center text-primary font-mono text-sm mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold tracking-tight text-text mb-4">{item.step}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 10. WHAT MAKES US DIFFERENT */}
      <section className="container mx-auto px-6 mb-40">
        <h2 className="text-3xl font-bold tracking-tight text-text mb-12">Why Tech By Yug?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Startup Mindset', desc: 'We move quickly, experiment and stay adaptable.' },
            { title: 'Business Focus', desc: 'We care about the problem behind the technology.' },
            { title: 'Modern Engineering', desc: 'We use modern development tools and architectures where they make sense.' },
            { title: 'Accessible Pricing', desc: 'We aim to make professional technology more accessible to growing businesses.' }
          ].map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: idx * 0.1 }} variants={fadeInUp}
              className="bg-background border border-border p-10 hover:bg-surface transition-colors"
            >
              <h3 className="text-2xl font-semibold text-text mb-4">{feature.title}</h3>
              <p className="text-lg text-muted">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 11 & 12. OUR VISION & FUTURE */}
      <section className="py-32 bg-surface border-y border-border mb-40">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span className="text-sm font-mono text-muted uppercase tracking-widest mb-6 inline-block">Where We're Going</span>
            <p className="text-2xl md:text-3xl text-text font-medium leading-relaxed mb-8">
              Tech By Yug starts small, but the ambition is not small.
            </p>
            <p className="text-xl text-muted leading-relaxed mb-8">
              The goal is to grow from a technology services company into a company that builds products, platforms and systems used by businesses around the world.
            </p>
            <p className="text-xl text-muted leading-relaxed mb-20">
              Today, that means learning from every project, building strong engineering foundations and creating technology that people genuinely find useful.
            </p>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-text mb-32">
              Build. Learn. Improve. Repeat.
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative"
          >
            <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 hidden md:block" />
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-xs font-mono text-muted tracking-widest uppercase bg-surface px-4">Our Direction</span>
            
            <div className="bg-background border border-border p-6 relative z-10 w-full md:w-auto">
              <span className="text-xs font-mono text-muted uppercase block mb-2">Today</span>
              <span className="text-lg font-semibold text-text">Technology Services</span>
            </div>
            
            <div className="text-muted md:hidden">↓</div>
            
            <div className="bg-surface border border-border p-6 relative z-10 w-full md:w-auto">
              <span className="text-xs font-mono text-muted uppercase block mb-2">Next</span>
              <span className="text-lg font-semibold text-text">Products & SaaS</span>
            </div>
            
            <div className="text-muted md:hidden">↓</div>
            
            <div className="bg-surface border border-border p-6 relative z-10 w-full md:w-auto">
              <span className="text-xs font-mono text-muted uppercase block mb-2">Future</span>
              <span className="text-lg font-semibold text-text">Technology Platforms</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 13. CTA */}
      <section className="container mx-auto px-6 text-center max-w-3xl mb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-text mb-6">Let's Build Something Useful.</h2>
          <p className="text-xl text-muted mb-10">
            Have an idea, a business problem or a system that needs to be built? Tell us about it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#contact" className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-semibold hover:bg-primary-hover transition-colors">
              Start a Project
            </a>
            <Link to="/#services" className="w-full sm:w-auto px-8 py-4 bg-surface border border-border text-text font-semibold hover:border-muted transition-colors">
              View Our Services
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default About;
