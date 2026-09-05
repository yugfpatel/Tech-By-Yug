import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pricingData } from '../data/pricing';
import { Check, ArrowRight, Zap, Info } from 'lucide-react';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pricing — Tech By Yug";
  }, []);

  return (
    <div className="bg-background min-h-screen pt-40 pb-20">
      
      {/* 1. PRICING HERO */}
      <section className="container mx-auto px-6 mb-32 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary border border-border bg-surface px-3 py-1 uppercase tracking-widest mb-6 inline-block">
            Premium technology. Startup-friendly pricing.
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-text">
            Simple Pricing. <br />
            <span className="text-muted">Serious Technology.</span>
          </h1>
          <p className="text-xl text-muted leading-relaxed mb-6">
            Powerful digital solutions without the traditional agency price tag.
          </p>
          <p className="text-lg text-muted/70 leading-relaxed mb-8">
            Choose a starting package or tell us what you need. Every custom project is scoped according to your requirements.
          </p>
          <p className="text-sm text-muted/50">
            * All prices are starting prices and may vary based on scope, complexity, integrations and timeline.
          </p>
        </motion.div>
      </section>

      {/* 2. MAIN PACKAGES */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {pricingData.mainPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative flex flex-col h-full bg-surface border ${pkg.isPopular ? 'border-primary/50 shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)]' : 'border-border'} p-8 md:p-10 transition-colors`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-xs font-bold uppercase tracking-widest py-1 px-4">
                  Popular
                </div>
              )}
              
              <div className="mb-8 border-b border-border pb-8">
                <h3 className="text-2xl font-semibold tracking-tight text-text mb-2">{pkg.name}</h3>
                <p className="text-muted text-sm leading-relaxed min-h-[40px] mb-6">
                  {pkg.description}
                </p>
                <div className="text-4xl md:text-5xl font-bold tracking-tighter text-text flex items-baseline gap-2 flex-wrap">
                  {pkg.price.replace('+ maintenance', '+')}
                  {pkg.price.includes('maintenance') && (
                    <span className="text-lg text-muted font-medium tracking-normal">maintenance</span>
                  )}
                </div>
              </div>

              <div className="flex-grow mb-8">
                <ul className="space-y-4">
                  {pkg.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                      <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {pkg.note && (
                  <div className="mt-6 p-4 bg-background border border-border text-xs text-muted/80 flex items-start gap-2">
                    <Info size={16} className="flex-shrink-0 mt-0.5" />
                    <span>{pkg.note}</span>
                  </div>
                )}
              </div>

              <a 
                href={`https://wa.me/919274277177?text=${encodeURIComponent(`Hi! I am interested in the ${pkg.name} package.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 px-6 text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                  pkg.isPopular 
                    ? 'bg-primary text-black hover:bg-primary-hover' 
                    : 'bg-background border border-border text-text hover:border-muted'
                }`}
              >
                {pkg.ctaText}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. AI SERVICES & MOBILE */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight text-text mb-4">AI & Automation</h2>
            <p className="text-muted mb-8">Add intelligence and automation to your existing business or software.</p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              {pricingData.aiServices.map((service, idx) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-surface border border-border p-6 hover:border-muted transition-colors"
                >
                  <h3 className="text-xl font-semibold text-text mb-2">{service.name}</h3>
                  <div className="text-2xl font-bold text-text mb-4 flex items-baseline gap-1.5 flex-wrap">
                    {service.price.replace('+ maintenance', '+')}
                    {service.price.includes('maintenance') && (
                      <span className="text-sm text-muted font-medium tracking-normal">maintenance</span>
                    )}
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-muted/60 bg-surface border border-border p-4">
              * AI API usage, infrastructure and third-party service charges are billed separately unless explicitly included in the project quotation.
            </p>
          </div>

          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight text-text mb-4">Mobile App Development</h2>
            <p className="text-muted mb-8">Custom Android, iOS or cross-platform applications built around your requirements.</p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface border border-border p-8 h-[calc(100%-104px)] flex flex-col"
            >
              <div className="text-3xl font-bold tracking-tight text-text mb-6 flex items-baseline gap-2 flex-wrap">
                {pricingData.mobile.price.replace('+ maintenance', '+')}
                {pricingData.mobile.price.includes('maintenance') && (
                  <span className="text-lg text-muted font-medium tracking-normal">maintenance</span>
                )}
              </div>
              <p className="text-muted leading-relaxed mb-6 flex-grow">{pricingData.mobile.description}</p>
              
              <div className="p-4 bg-background border border-border text-sm text-muted">
                {pricingData.mobile.note}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. MAINTENANCE & SUPPORT */}
      <section className="container mx-auto px-6 mb-32 border-t border-border pt-32">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-text mb-4">Keep It Running.</h2>
          <p className="text-lg text-muted">Optional ongoing support after your project launches.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {pricingData.maintenance.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface border border-border p-8 flex flex-col"
            >
              <h3 className="text-xl font-bold text-text mb-2 uppercase tracking-widest">{plan.name}</h3>
              <div className="text-3xl font-bold text-text mb-8">{plan.price}</div>
              <ul className="space-y-4">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                    <Zap size={16} className="text-muted flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <p className="text-sm text-center text-muted/60">
          * Monthly plans are optional unless included in a project agreement.
        </p>
      </section>

      {/* 5. PROCESS & THIRD-PARTY */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="bg-surface border border-border p-8 md:p-12">
            <h3 className="text-2xl font-bold tracking-tight text-text mb-4">Need Something Different?</h3>
            <p className="text-muted mb-8 leading-relaxed">
              Tell us what you're trying to build. We'll understand the requirement, define the scope and provide a custom quotation.
            </p>
            
            <div className="space-y-6 mb-10">
              {pricingData.process.map(step => (
                <div key={step.step} className="flex gap-4">
                  <span className="text-muted font-mono">{step.step}.</span>
                  <div>
                    <span className="font-semibold text-text">{step.name}</span>
                    <span className="text-muted"> → {step.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="/#contact" className="inline-flex py-4 px-8 bg-primary text-black font-semibold text-sm hover:bg-primary-hover transition-colors">
              Start a Project
            </a>
          </div>

          <div className="bg-background border border-border p-8 md:p-12">
            <h3 className="text-2xl font-bold tracking-tight text-text mb-4">What's not included by default?</h3>
            <p className="text-muted mb-8 leading-relaxed">
              Unless specifically included in the quotation, the following may be billed separately:
            </p>
            
            <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-8 text-sm text-muted">
              {pricingData.thirdPartyNotIncluded.map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-border rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="p-4 border-l-2 border-primary bg-surface text-sm text-muted">
              We will clearly identify third-party and recurring costs before development begins.
            </div>
          </div>

        </div>
      </section>

      {/* 6. DISCLAIMER */}
      <section className="container mx-auto px-6 border-t border-border pt-12">
        <p className="text-xs text-muted/50 leading-relaxed max-w-4xl">
          All prices displayed are starting prices in INR. Final pricing depends on project scope, technical complexity, integrations, content requirements, third-party services and delivery timeline. Taxes, domain, hosting and third-party service charges may apply separately where applicable.
        </p>
      </section>

    </div>
  );
};

export default Pricing;
