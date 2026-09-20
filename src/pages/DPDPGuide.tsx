import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const DPDPGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "DPDP Act: A Guide for Founders — Tech By Yug Insights";
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-background min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-6 inline-block">
            Tech By Yug Insights
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-text mb-8 leading-[1.1]">
            DPDP: What Founders Should Know Beyond the Basics
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-12">
            When we build custom software and AI platforms at Tech By Yug, one of the first conversations we have with founders is about data compliance. You already know the basics—ask for consent, explain data use, and handle deletions. But here is how India's new Digital Personal Data Protection (DPDP) Act actually affects the real-world apps we build for you.
          </p>
        </motion.div>

        <div className="prose prose-invert prose-lg text-muted max-w-none">
          <p>
            Under the Act, your business acts as a <strong>Data Fiduciary</strong> when deciding why and how personal data is used. The person whose data it is is the <strong>Data Principal</strong>. As your engineering partner, Tech By Yug acts as a <strong>Data Processor</strong> when handling data on your behalf.
          </p>
          <div className="p-6 bg-surface border border-border my-8">
            <h3 className="text-text font-bold mb-2 mt-0">The Implementation Timeline</h3>
            <p className="m-0 text-sm">India is bringing the law into force in stages, with most day-to-day duties scheduled for May 2027. At Tech By Yug, we treat this as a "build-now" guide, architecting your systems to be compliant from day one so you aren't forced into expensive rewrites later.</p>
          </div>

          <h2 className="text-3xl font-bold text-text mt-16 mb-8 border-b border-border pb-4">Architecting for Data Usage</h2>

          <h3 className="text-xl font-bold text-text">1. Grounds for processing</h3>
          <p>We ensure your applications only collect data when there is a lawful ground: either explicit consent or a legitimate use allowed by section 7. <br/><span className="text-text">How we build it:</span> If we build an e-commerce flow for you, we only capture the shipping address necessary to fulfill the order.</p>
          
          <h3 className="text-xl font-bold text-text mt-8">2. Data Processors and Contracts</h3>
          <p>When we process personal data for your business, we operate under a strict, valid contract that prioritizes security. <br/><span className="text-text">How we build it:</span> We ensure our cloud architecture and any third-party APIs we integrate into your system have the correct access controls mapped out.</p>

          <h3 className="text-xl font-bold text-text mt-8">3. Data Accuracy</h3>
          <p>If your system uses data to make decisions about a user (like credit eligibility), that data must be accurate and consistent. <br/><span className="text-text">How we build it:</span> We implement robust backend validation and data-cleaning pipelines to prevent corrupted or outdated records from affecting user decisions.</p>

          <h2 className="text-3xl font-bold text-text mt-16 mb-8 border-b border-border pb-4">Security and Incident Readiness</h2>

          <h3 className="text-xl font-bold text-text">4. Reasonable Security Safeguards</h3>
          <p>Protecting personal data against breaches is non-negotiable. <br/><span className="text-text">How we build it:</span> Tech By Yug implements modern encryption, data masking, strict access controls, and automated database backups into the foundation of your software.</p>

          <h3 className="text-xl font-bold text-text mt-8">5. Technical and Organisational Measures</h3>
          <p>Security is about processes as much as code. <br/><span className="text-text">How we build it:</span> We design admin dashboards with Role-Based Access Control (RBAC), meaning your customer support staff can only see the data they absolutely need to do their jobs.</p>

          <h3 className="text-xl font-bold text-text mt-8">6. Data Retention and Purpose</h3>
          <p>Storing data forever just because cloud storage is cheap is no longer legal. <br/><span className="text-text">How we build it:</span> We can design automated cron jobs and data lifecycle policies that automatically securely erase user data once its purpose ends, keeping you compliant without manual effort.</p>

          <h2 className="text-3xl font-bold text-text mt-16 mb-8 border-b border-border pb-4">User Rights and Consent</h2>

          <h3 className="text-xl font-bold text-text">7. Handling Children's Data</h3>
          <p>Under the Act, a child is anyone under 18. Targeted ads and behavioral tracking for minors face heavy restrictions. <br/><span className="text-text">How we build it:</span> If your app targets younger demographics, we build dedicated age-verification and verifiable parental-consent flows before any data collection begins.</p>

          <h3 className="text-xl font-bold text-text mt-8">8. Right to Access and Grievance Redressal</h3>
          <p>Users have the right to know what data you process and who you share it with. They also need a way to raise complaints. <br/><span className="text-text">How we build it:</span> We can build self-service privacy portals into your user profiles, allowing users to export their data, nominate representatives, and contact your Grievance Officer directly through the app.</p>

          <h2 className="text-3xl font-bold text-text mt-16 mb-8 border-b border-border pb-4">Scaling and Oversight</h2>

          <h3 className="text-xl font-bold text-text">9. Processing Outside India</h3>
          <p>Cross-border data transfers are generally allowed, but you must be aware of where your data lives. <br/><span className="text-text">How we build it:</span> We help you select cloud providers (like AWS or GCP) with local Indian data centers when necessary, ensuring sensitive data doesn't cross borders unintentionally.</p>

          <h3 className="text-xl font-bold text-text mt-8">10. The Data Protection Board of India</h3>
          <p>The Board handles complaints and can issue penalties up to ₹250 crore for failing to implement reasonable security safeguards. <br/><span className="text-text">How we build it:</span> We ensure your application maintains comprehensive access and breach logs, so if an incident occurs, you have the exact documentation needed to investigate and report it cleanly.</p>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted">
            This is a technical overview of how we approach DPDP compliance during software development. Always consult with legal counsel for compliance regarding your specific business operations.
          </p>
          <a href="/#contact" className="px-6 py-3 bg-primary text-black font-semibold hover:bg-primary-hover transition-colors whitespace-nowrap">
            Build Compliant Software With Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default DPDPGuide;
