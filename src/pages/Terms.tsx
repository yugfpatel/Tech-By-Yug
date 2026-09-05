import React, { useEffect } from 'react';
import { legalConfig } from '../data/legal';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms & Conditions — Tech By Yug";
  }, []);

  return (
    <div className="bg-background min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-invert prose-lg text-muted max-w-none">
          <p className="text-xl text-text font-medium mb-12 leading-relaxed">
            These Terms & Conditions govern the use of the Tech By Yug website and the services provided by Tech By Yug. By accessing this website or engaging our services, you agree to these terms.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-text mb-4">1. About Tech By Yug</h2>
              <p>Tech By Yug is a technology services brand focused on software development, AI, automation, web development, mobile applications and IT solutions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">2. Website Use</h2>
              <p>Users may use the website for lawful purposes and must not:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Attempt unauthorized access</li>
                <li>Interfere with website operation</li>
                <li>Upload malicious code</li>
                <li>Abuse forms or services</li>
                <li>Copy website content for unauthorized commercial use</li>
                <li>Misrepresent their identity or relationship with Tech By Yug</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">3. Services</h2>
              <p>Services may include:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                <li>Web development</li>
                <li>Software development</li>
                <li>AI and automation</li>
                <li>Mobile applications</li>
                <li>APIs and backend systems</li>
                <li>Databases</li>
                <li>Cloud/deployment</li>
                <li>UI/UX</li>
                <li>IT solutions</li>
                <li>Cybersecurity-related services</li>
              </ul>
              <p className="text-text font-medium p-4 bg-surface border border-border">Specific project scope, deliverables, timelines, pricing and support obligations will be defined in an individual proposal, quotation, statement of work or agreement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">4. Project Agreements</h2>
              <p>A project may require:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                <li>Written scope</li>
                <li>Payment schedule</li>
                <li>Milestones</li>
                <li>Client responsibilities</li>
                <li>Revision limits</li>
                <li>Delivery requirements</li>
                <li>Acceptance criteria</li>
                <li>Support period</li>
              </ul>
              <p>The individual project agreement takes precedence over general website information where applicable.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">5. Pricing & Payments</h2>
              <p>Prices displayed on the website are starting prices unless explicitly stated otherwise. Final pricing depends on project requirements, scope, complexity, integrations, third-party services and timeline.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Taxes may apply where legally applicable.</li>
                <li>Third-party services may incur separate charges.</li>
                <li>Payment schedules are agreed before development begins.</li>
                <li>Work may be paused for overdue payments where permitted by the applicable agreement.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">6. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Tech By Yug retains ownership of its pre-existing tools, reusable frameworks, libraries and internal systems unless agreed otherwise.</li>
                <li>Client ownership/licensing of project deliverables will be defined in the applicable project agreement.</li>
                <li>Third-party software remains subject to its own licenses.</li>
                <li>Open-source components remain subject to their respective licenses.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">7. AI Services</h2>
              <p>AI-powered systems may depend on third-party AI models, APIs or infrastructure. AI-generated output may not always be accurate and should be reviewed where appropriate.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">8. Third-Party Services</h2>
              <p>Projects may integrate third-party services such as:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                <li>Payment providers</li>
                <li>Cloud platforms</li>
                <li>AI providers</li>
                <li>Messaging platforms</li>
                <li>Analytics tools</li>
                <li>Hosting providers</li>
              </ul>
              <p>Their own terms and privacy policies may apply.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">9. Availability</h2>
              <p>Tech By Yug does not guarantee that the website will always be available, uninterrupted or error-free.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">10. Limitation of Liability</h2>
              <p>Tech By Yug is not responsible for losses arising from circumstances outside its reasonable control, subject to applicable law and any signed project agreement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">11. Changes</h2>
              <p>Tech By Yug may update these terms from time to time.</p>
              <p className="mt-2 text-sm text-muted/70">Last updated: {legalConfig.lastUpdated}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">12. Contact</h2>
              <p>{legalConfig.companyName}</p>
              <p>Founder: {legalConfig.founder}</p>
              <p>Email: <a href={`mailto:${legalConfig.contactEmail}`} className="text-text underline hover:text-primary transition-colors">{legalConfig.contactEmail}</a></p>
            </section>
          </div>
        </div>

        {/* Developer note - not visible to general users in an alarming way */}
        <div className="mt-32 pt-8 border-t border-border opacity-30 hover:opacity-100 transition-opacity">
          <p className="text-xs font-mono text-muted">
            // Developer Note: Legal text should be reviewed by a qualified professional before relying on it for commercial operations or international users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
