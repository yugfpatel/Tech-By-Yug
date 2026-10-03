import React, { createContext, useContext, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type CookiePreferences = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string | null;
};

interface CookieContextType {
  preferences: CookiePreferences;
  hasConsented: boolean;
  openSettings: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const useCookieConsent = () => {
  const context = useContext(CookieContext);
  if (!context) throw new Error('useCookieConsent must be used within CookieProvider');
  return context;
};

export const CookieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    timestamp: null,
  });
  const [hasConsented, setHasConsented] = useState<boolean>(true); // Default true to hide on first render, then check
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  // Settings modal local state
  const [localAnalytics, setLocalAnalytics] = useState(false);
  const [localMarketing, setLocalMarketing] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('techbyyug_cookie_consent');
    if (stored) {
      const parsed = JSON.parse(stored);
      setPreferences(parsed);
      setHasConsented(true);
    } else {
      setHasConsented(false);
      setIsBannerVisible(true);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    const updated = { ...prefs, essential: true, timestamp: new Date().toISOString() };
    localStorage.setItem('techbyyug_cookie_consent', JSON.stringify(updated));
    setPreferences(updated);
    setHasConsented(true);
    setIsBannerVisible(false);
    setIsSettingsOpen(false);
  };

  const handleAcceptAll = () => {
    savePreferences({ essential: true, analytics: true, marketing: true, timestamp: null });
  };

  const handleRejectNonEssential = () => {
    savePreferences({ essential: true, analytics: false, marketing: false, timestamp: null });
  };

  const handleSaveSettings = () => {
    savePreferences({ essential: true, analytics: localAnalytics, marketing: localMarketing, timestamp: null });
  };

  const openSettings = () => {
    setLocalAnalytics(preferences.analytics);
    setLocalMarketing(preferences.marketing);
    setIsSettingsOpen(true);
  };

  return (
    <CookieContext.Provider value={{ preferences, hasConsented, openSettings }}>
      {children}
      
      {/* BANNER */}
      <AnimatePresence>
        {isBannerVisible && !isSettingsOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="container mx-auto max-w-6xl">
              <div className="bg-surface border border-border p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text mb-2">We use cookies</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    We use essential cookies to make this website work. With your permission, we may also use optional cookies to understand how the website is used and improve your experience.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button onClick={openSettings} className="px-5 py-2.5 bg-background border border-border text-sm font-medium text-text hover:border-muted transition-colors whitespace-nowrap">
                    Manage Preferences
                  </button>
                  <button onClick={handleRejectNonEssential} className="px-5 py-2.5 bg-background border border-border text-sm font-medium text-text hover:border-muted transition-colors whitespace-nowrap">
                    Reject Non-Essential
                  </button>
                  <button onClick={handleAcceptAll} className="px-5 py-2.5 bg-primary text-black text-sm font-semibold hover:bg-primary-hover transition-colors whitespace-nowrap">
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SETTINGS MODAL */}
      <AnimatePresence>
        {isSettingsOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsSettingsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-surface border border-border w-full max-w-lg relative z-10 flex flex-col max-h-[90vh]"
            >
              <div className="p-6 border-b border-border flex justify-between items-center">
                <h3 className="text-xl font-bold text-text">Cookie Preferences</h3>
                <button onClick={() => setIsSettingsOpen(false)} className="text-muted hover:text-text transition-colors text-2xl leading-none">&times;</button>
              </div>
              
              <div className="p-6 overflow-y-auto flex flex-col gap-6">
                
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h4 className="text-text font-semibold">Essential</h4>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1">Always Active</span>
                  </div>
                  <p className="text-sm text-muted">Required for basic website functionality. This cannot be disabled.</p>
                </div>

                <div className="w-full h-px bg-border" />

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h4 className="text-text font-semibold">Analytics</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={localAnalytics} onChange={(e) => setLocalAnalytics(e.target.checked)} />
                      <div className="w-11 h-6 bg-background peer-focus:outline-none border border-border peer-checked:bg-primary peer-checked:border-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-muted peer-checked:after:bg-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                    </label>
                  </div>
                  <p className="text-sm text-muted">Helps us understand how visitors use the website.</p>
                </div>

                {/* Marketing disabled for now since no marketing scripts exist, but structure is ready */}

              </div>

              <div className="p-6 border-t border-border flex flex-col sm:flex-row gap-3">
                <button onClick={handleSaveSettings} className="flex-1 px-5 py-3 bg-background border border-border text-sm font-medium text-text hover:border-muted transition-colors">
                  Save Preferences
                </button>
                <button onClick={handleAcceptAll} className="flex-1 px-5 py-3 bg-primary text-black text-sm font-semibold hover:bg-primary-hover transition-colors">
                  Accept All
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </CookieContext.Provider>
  );
};
