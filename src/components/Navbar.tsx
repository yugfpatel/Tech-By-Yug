import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tighter text-text">
          Tech By Yug
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith('/#');
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-text transition-colors"
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          <a href="/#contact" className="px-5 py-2.5 bg-primary text-black hover:bg-primary-hover rounded-full text-sm font-medium transition-all">
            Start a Project
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text p-2 -mr-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-muted hover:text-text transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/#contact" 
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full text-center px-6 py-4 bg-primary text-black rounded-lg text-base font-medium transition-colors"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
