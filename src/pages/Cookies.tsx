import React, { useEffect } from 'react';
import { useCookieConsent } from '../contexts/CookieConsentContext';

const CookiesPage = () => {
  const { openSettings } = useCookieConsent();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cookie Policy — Tech By Yug";
  }, []);

  return (
    <div className="bg-background min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-8">Cookie Policy</h1>
        
        <div className="prose prose-invert prose-lg text-muted max-w-none">
          <p className="text-xl text-text font-medium mb-12 leading-relaxed">
            This Cookie Policy explains what cookies are, how we use them on our website, and your choices regarding their use.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-text mb-4">What Are Cookies?</h2>
              <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-6">How We Use Cookies</h2>
              <p className="mb-6">We use cookies for the following purposes:</p>
              
              <div className="space-y-6">
                <div className="p-6 bg-surface border border-border">
                  <h3 className="text-xl font-bold text-text mb-2 flex items-center justify-between">
                    Essential Cookies
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1">Required</span>
                  </h3>
                  <p className="text-sm">Required for basic website functionality. These cannot be disabled.</p>
                </div>

                <div className="p-6 bg-surface border border-border">
                  <h3 className="text-xl font-bold text-text mb-2 flex items-center justify-between">
                    Analytics Cookies
                    <span className="text-xs font-mono text-muted border border-border px-2 py-1">Optional</span>
                  </h3>
                  <p className="text-sm">Used to understand website usage and improve the website.</p>
                </div>

                <div className="p-6 bg-surface border border-border">
                  <h3 className="text-xl font-bold text-text mb-2 flex items-center justify-between">
                    Preference Cookies
                    <span className="text-xs font-mono text-muted border border-border px-2 py-1">Optional</span>
                  </h3>
                  <p className="text-sm">Used to remember user choices where applicable.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text mb-4">Managing Your Preferences</h2>
              <p>You can manage your cookie preferences at any time by clicking the button below or using the "Cookie Settings" link in the footer.</p>
              <button 
                onClick={openSettings}
                className="mt-6 px-6 py-3 bg-primary text-black font-semibold hover:bg-primary-hover transition-colors"
              >
                Manage Cookie Preferences
              </button>
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

export default CookiesPage;
