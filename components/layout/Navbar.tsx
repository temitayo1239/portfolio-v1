'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Architecture Identity */}
        <a href="#" className="flex items-center space-x-2.5 text-slate-100 group">
          <Terminal className="w-5 h-5 text-blue-500 group-hover:text-cyan-400 transition-colors" />
          <span className="font-semibold tracking-tight text-sm font-mono">
            temitayo<span className="text-cyan-400">.job()</span>
          </span>
        </a>

        {/* Desktop Interface Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-1 glass-panel px-1.5 py-1 rounded-full border border-slate-800/40 bg-slate-900/40">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className="relative px-4 py-1.5 text-xs font-medium tracking-wide text-slate-400 hover:text-slate-100 transition-colors rounded-full"
            >
              {activeItem === item.name && (
                <motion.span
                  layoutId="navActiveBg"
                  className="absolute inset-0 bg-blue-600/15 border border-blue-500/20 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.name}
            </a>
          ))}
        </nav>

        {/* Interaction Call-To-Action Area */}
        <div className="hidden md:flex items-center space-x-4">
          <kbd className="inline-flex h-6 select-none items-center gap-1 rounded border border-slate-800 bg-slate-950 px-2 font-mono text-[10px] text-slate-500">
            <span className="text-xs">⌘</span>K
          </kbd>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-md text-xs font-medium bg-slate-100 text-slate-950 hover:bg-slate-200 transition-all shadow-sm"
          >
            Connect
          </a>
        </div>

        {/* Mobile Controller Activation Layer */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-slate-100 focus:outline-none"
          aria-label="Toggle navigation interface"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Modal Drawer Layout */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 w-full bg-[#020617]/95 border-b border-slate-900 backdrop-blur-lg px-6 py-6 flex flex-col space-y-4 md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors py-1"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-xs font-medium bg-blue-600 text-slate-100 hover:bg-blue-700 transition-colors"
            >
              Connect
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}