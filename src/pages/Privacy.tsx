import React, { useEffect } from 'react';
import { legalConfig } from '../data/legal';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy — Tech By Yug";
  }, []);

  return (
    <div className="bg-background min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-lg text-muted max-w-none">
          <p className="text-xl text-text font-medium mb-12 leading-relaxed">
            This Privacy Policy explains what personal information may be collected through the website and how it is used.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-text mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-text mt-8 mb-4">Information you provide</h3>
              <p>We may collect information you provide directly, such as:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                <li>Name</li>
                <li>Email</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Project requirements</li>
                <li>Information submitted through forms</li>
              </ul>

              <h3 className="text-xl font-semibold text-text mt-8 mb-4">Information collected automatically</h3>
              <p>We may collect certain information automatically when you visit, such as:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Technical information such as browser/device information where collected</li>
                <li>Cookie/analytics information where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">How We Use Information</h2>
              <p>We use the information we collect for purposes such as:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Responding to project inquiries</li>
                <li>Providing requested services</li>
                <li>Communicating with users</li>
                <li>Improving the website</li>
                <li>Security and fraud prevention</li>
                <li>Analytics where enabled</li>
                <li>Legal/compliance purposes where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">Sharing Information</h2>
              <p>Information may be shared with service providers when necessary to operate the website or deliver services.</p>
              <div className="p-4 bg-surface border border-border mt-4 font-medium text-text">
                Tech By Yug does not sell personal information to third parties.
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">Data Retention</h2>
              <p>Information is retained only for as long as reasonably necessary for the purpose for which it was collected, contractual requirements, legal obligations and legitimate business needs.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">Security</h2>
              <p>Reasonable technical and organizational measures are used to protect information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">User Rights</h2>
              <p>Depending on applicable law, you may have rights relating to access, correction, deletion, restriction, objection or other processing of your personal information.</p>
              <p className="mt-4">To make a request, contact us at <a href={`mailto:${legalConfig.contactEmail}`} className="text-text underline hover:text-primary transition-colors">{legalConfig.contactEmail}</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">Children's Privacy</h2>
              <p>The website is not intentionally directed toward children and Tech By Yug does not knowingly collect children's personal information through the website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">Policy Changes</h2>
              <p>Tech By Yug may update this policy from time to time.</p>
              <p className="mt-2 text-sm text-muted/70">Last updated: {legalConfig.lastUpdated}</p>
            </section>
          </div>
        </div>

        {/* Developer note */}
        <div className="mt-32 pt-8 border-t border-border opacity-30 hover:opacity-100 transition-opacity">
          <p className="text-xs font-mono text-muted">
            // Developer Note: Legal text should be reviewed by a qualified professional before relying on it for commercial operations or international users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
