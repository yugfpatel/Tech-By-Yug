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
            DPDP: What founders should know beyond the basics
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-12">
            You already know the usual three: ask for consent when needed, explain your data use, and handle deletion requests. Here are the other parts that can affect a real app.
          </p>
        </motion.div>

        <div className="prose prose-invert prose-lg text-muted max-w-none">
          <p>
            The Act calls your business a <strong>Data Fiduciary</strong> when it decides why and how personal data is used. The person whose data it is is the <strong>Data Principal</strong>.
          </p>
          <div className="p-6 bg-surface border border-border my-8">
            <h3 className="text-text font-bold mb-2 mt-0">Timing</h3>
            <p className="m-0 text-sm">India is bringing the law into force in stages. Most day-to-day duties below are scheduled for 13 May 2027. Some provisions started earlier. Read this as a build-now guide, not a claim that every duty applies today.</p>
          </div>

          <h2 className="text-3xl font-bold text-text mt-16 mb-8 border-b border-border pb-4">When can you use the data?</h2>

          <h3 className="text-xl font-bold text-text">1. Grounds for processing</h3>
          <p>You need a lawful ground to use digital personal data: consent or a use allowed by section 7. <br/><span className="text-text">Example:</span> A shopping app uses an address to deliver the order the customer placed.</p>
          
          <h3 className="text-xl font-bold text-text mt-8">2. Certain legitimate uses</h3>
          <p>The Act lists situations where consent is not the route. They are specific cases, not a general permission to use data however you like. <br/><span className="text-text">Example:</span> A customer gives an email to receive an order receipt.</p>

          <h3 className="text-xl font-bold text-text mt-8">3. General duties of the Data Fiduciary</h3>
          <p>Your business remains responsible for following the Act, even when another company processes data for you. <br/><span className="text-text">Example:</span> Your email vendor sends messages, but you still own the compliance decision.</p>

          <h3 className="text-xl font-bold text-text mt-8">4. Data processors and contracts</h3>
          <p>When a vendor processes personal data for you, use a valid contract and cover security in it. <br/><span className="text-text">Example:</span> Before sending customer records to a cloud provider, check the contract and access controls.</p>

          <h3 className="text-xl font-bold text-text mt-8">5. Data accuracy</h3>
          <p>Keep data accurate, complete and consistent when you use it to make a decision about a person or share it with another Data Fiduciary. <br/><span className="text-text">Example:</span> Fix a wrong address before using it for a credit or eligibility decision.</p>

          <h2 className="text-3xl font-bold text-text mt-16 mb-8 border-b border-border pb-4">Protect the data and prepare for incidents</h2>

          <h3 className="text-xl font-bold text-text">6. Reasonable security safeguards</h3>
          <p>Protect personal data against breaches. The Rules name measures such as encryption or masking, access controls, monitoring and backups. <br/><span className="text-text">Example:</span> Limit who can open your customer database and keep access logs.</p>

          <h3 className="text-xl font-bold text-text mt-8">7. Technical and organisational measures</h3>
          <p>Security needs people and processes as well as software. Decide who can access data, review that access and respond to problems. <br/><span className="text-text">Example:</span> Only support staff who need account details can see them.</p>

          <h3 className="text-xl font-bold text-text mt-8">8. Personal data breach notification</h3>
          <p>If a breach happens, tell affected people without delay and notify the Data Protection Board. The Rules call for a more detailed Board update within 72 hours, unless extended. <br/><span className="text-text">Example:</span> If a database is exposed, prepare user messages and a Board report while you investigate.</p>

          <h3 className="text-xl font-bold text-text mt-8">9. Retention and purpose</h3>
          <p>Do not keep personal data forever just because storage is cheap. Erase it when the purpose ends, subject to legal retention duties and the Rules. <br/><span className="text-text">Example:</span> After an order is complete, check what records you must keep and for how long.</p>

          <h2 className="text-3xl font-bold text-text mt-16 mb-8 border-b border-border pb-4">People, children and requests</h2>

          <h3 className="text-xl font-bold text-text">10. Children's personal data</h3>
          <p>A child is under 18 under this Act. Processing generally needs verifiable parental consent; tracking, behavioural monitoring and targeted ads to children face restrictions, with stated exemptions. <br/><span className="text-text">Example:</span> An app for teens needs an age and parent-consent flow before collecting their data.</p>

          <h3 className="text-xl font-bold text-text mt-8">11. Right to access information</h3>
          <p>A user can ask what personal data you process and for information about how it has been shared, subject to the Act. <br/><span className="text-text">Example:</span> A user asks which service providers received their profile details.</p>

          <h3 className="text-xl font-bold text-text mt-8">12. Grievance redressal</h3>
          <p>Give people a working way to raise data complaints and publish a response period. The Rules cap that published period at 90 days. <br/><span className="text-text">Example:</span> Put a clear privacy contact in the app and route requests to someone who can answer.</p>

          <h3 className="text-xl font-bold text-text mt-8">13. Right to nominate</h3>
          <p>A person can name someone to exercise their data rights if they die or become incapable of doing so. <br/><span className="text-text">Example:</span> An account settings page could let a user record a nominee.</p>

          <h3 className="text-xl font-bold text-text mt-8">14. Consent Manager</h3>
          <p>This is a registered service that helps people give, manage, review and withdraw consent. A normal startup does not become one just by showing a consent box. <br/><span className="text-text">Example:</span> A user may manage permissions through a registered Consent Manager.</p>

          <h2 className="text-3xl font-bold text-text mt-16 mb-8 border-b border-border pb-4">Growth, overseas services and oversight</h2>

          <h3 className="text-xl font-bold text-text">15. Processing outside India</h3>
          <p>Cross-border transfers are generally allowed, subject to government restrictions. Some data of Significant Data Fiduciaries may face extra transfer limits. <br/><span className="text-text">Example:</span> Check where a foreign analytics or cloud provider handles Indian user data.</p>

          <h3 className="text-xl font-bold text-text mt-8">16. Significant Data Fiduciary (SDF)</h3>
          <p>The government can notify certain businesses or classes as SDFs based on factors such as data volume and risk. Extra duties apply only if your business is covered. <br/><span className="text-text">Example:</span> A fast-growing platform should watch for an SDF notification before assuming the label fits.</p>

          <h3 className="text-xl font-bold text-text mt-8">17. Data Protection Officer (DPO)</h3>
          <p>An SDF must appoint an India-based DPO who is responsible to its board or governing body and is a contact for complaints. <br/><span className="text-text">Example:</span> If notified as an SDF, name the person who will own this role.</p>

          <h3 className="text-xl font-bold text-text mt-8">18. Data Protection Impact Assessment (DPIA)</h3>
          <p>An SDF must assess the risks of its personal-data processing. The Rules require this once every 12 months. <br/><span className="text-text">Example:</span> Before expanding a sensitive profiling feature, assess how it could affect users.</p>

          <h3 className="text-xl font-bold text-text mt-8">19. Independent data audit</h3>
          <p>An SDF must appoint an independent auditor. The Rules require an audit once every 12 months. <br/><span className="text-text">Example:</span> Have an outside auditor test whether your stated data controls work in practice.</p>

          <h3 className="text-xl font-bold text-text mt-8">20. Data Protection Board of India</h3>
          <p>The Board handles complaints and breaches under the Act and can decide penalties. The maximum for failing to take reasonable security safeguards is Rs 250 crore; the amount is not automatic. <br/><span className="text-text">Example:</span> Keep breach facts and decisions documented so you can explain what happened.</p>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted">
            Plain-English overview for founders. Check the Act, Rules and legal advice for your exact product and launch date.
          </p>
          <a href="/#contact" className="px-6 py-3 bg-primary text-black font-semibold hover:bg-primary-hover transition-colors whitespace-nowrap">
            Build Compliant Software
          </a>
        </div>
      </div>
    </div>
  );
};

export default DPDPGuide;
