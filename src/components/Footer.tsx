import React from 'react';
import { ArrowUpRight, Link, Mail, Camera } from 'lucide-react';
import { useCookieConsent } from '../contexts/CookieConsentContext';

const Footer = () => {
  const { openSettings } = useCookieConsent();

  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold tracking-tighter text-text mb-6">Tech By Yug</h3>
            <p className="text-muted leading-relaxed mb-8">
              Technology. Built for Business.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 flex items-center justify-center text-muted hover:text-text border border-border hover:border-text transition-colors">
                <Link size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center text-muted hover:text-text border border-border hover:border-text transition-colors">
                <Mail size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center text-muted hover:text-text border border-border hover:border-text transition-colors">
                <Camera size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-text font-medium mb-6">Contact</h4>
            <ul className="space-y-4 text-muted">
              <li>
                <a href="mailto:yugfpatel@gmail.com" className="hover:text-text transition-colors">
                  yugfpatel@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/919274277177" target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">
                  WhatsApp: +91 92742 77177
                </a>
              </li>
              <li>Available for new projects.</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-text font-medium mb-6">Legal</h4>
            <ul className="space-y-4 text-muted">
              <li>
                <a href="/terms" className="hover:text-text transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-text transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/data-protection" className="hover:text-text transition-colors">Data Protection Policy</a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-text transition-colors">Cookie Policy</a>
              </li>
              <li>
                <button onClick={openSettings} className="hover:text-text transition-colors">Cookie Settings</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted">
          <p>© {new Date().getFullYear()} Tech By Yug. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
