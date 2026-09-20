import React, { useEffect } from 'react';
import { legalConfig } from '../data/legal';

const DataProtection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Data Protection Policy — Tech By Yug";
  }, []);

  return (
    <div className="bg-background min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-8">Data Protection Policy</h1>
        
        <div className="prose prose-invert prose-lg text-muted max-w-none">
          <p className="text-xl text-text font-medium mb-12 leading-relaxed">
            Tech By Yug is committed to protecting digital personal data in accordance with the Digital Personal Data Protection (DPDP) Act of India and international best practices.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-text mb-4">1. Roles and Responsibilities</h2>
              <p>Under the DPDP Act, Tech By Yug operates in the following capacities depending on the context:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>As a Data Fiduciary:</strong> When we determine the purpose and means of processing personal data (e.g., our own employees' data, direct inquiries on our website).</li>
                <li><strong>As a Data Processor:</strong> When we build, host, or manage software systems on behalf of our clients. In these instances, our clients remain the Data Fiduciaries, and we process data strictly according to their instructions and valid contracts.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">2. Grounds for Processing Data</h2>
              <p>We process digital personal data only on lawful grounds:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>With the explicit, informed, and unambiguous consent of the Data Principal.</li>
                <li>For certain legitimate uses defined by law (e.g., to fulfill a contract, provide a requested service, or for security purposes).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">3. Data Accuracy and Retention</h2>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Accuracy:</strong> We take reasonable steps to ensure that personal data is complete, accurate, and consistent, especially when used to make decisions affecting the Data Principal.</li>
                <li><strong>Retention:</strong> We do not retain personal data indefinitely. Data is securely erased when the specific purpose for which it was collected is fulfilled, unless a longer retention period is mandated by law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">4. Reasonable Security Safeguards</h2>
              <p>We implement technical and organizational measures to prevent personal data breaches, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Encryption of sensitive data in transit and at rest.</li>
                <li>Strict Role-Based Access Controls (RBAC) limiting data access to authorized personnel only.</li>
                <li>Regular monitoring, logging, and automated backups.</li>
                <li>Security obligations enforced via contracts with third-party vendors and sub-processors.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">5. Personal Data Breach Management</h2>
              <p>In the unlikely event of a personal data breach, Tech By Yug has protocols to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Promptly investigate and mitigate the breach.</li>
                <li>Notify affected Data Principals without undue delay.</li>
                <li>Notify the Data Protection Board (or assist our clients in doing so) in accordance with the timelines mandated by the DPDP Rules.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">6. Rights of the Data Principal</h2>
              <p>Subject to the provisions of the DPDP Act, individuals have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Access a summary of personal data being processed and the identities of any Data Fiduciaries with whom it has been shared.</li>
                <li>Request correction, completion, updating, or erasure of their personal data.</li>
                <li>Nominate an individual to exercise their rights in the event of death or incapacity.</li>
                <li>Utilize a registered Consent Manager to manage, review, and withdraw consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">7. Children's Data</h2>
              <p>For individuals under 18 years of age, we mandate verifiable parental or lawful guardian consent prior to processing. Tech By Yug strictly prohibits tracking, behavioral monitoring, or targeted advertising directed at children on our direct platforms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">8. Grievance Redressal</h2>
              <p>We have established a dedicated grievance redressal mechanism to resolve inquiries or complaints regarding data processing. We aim to respond within the legally mandated period.</p>
              <div className="p-6 bg-surface border border-border mt-4">
                <p className="font-semibold text-text mb-2">Grievance Officer: {legalConfig.founder}</p>
                <p>Email: <a href={`mailto:${legalConfig.contactEmail}`} className="text-text underline hover:text-primary transition-colors">{legalConfig.contactEmail}</a></p>
                <p>Company: {legalConfig.companyName}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">9. Cross-Border Transfers</h2>
              <p>Personal data may be processed on secure cloud infrastructure located outside India, subject to restrictions enacted by the Central Government. We ensure all foreign processors maintain equivalent security standards via binding contracts.</p>
            </section>

            <section>
              <p className="mt-12 text-sm text-muted/70">Last updated: {legalConfig.lastUpdated}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProtection;
