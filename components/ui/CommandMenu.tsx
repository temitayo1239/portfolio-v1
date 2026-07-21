'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, Folder, GraduationCap, Mail, FileText } from 'lucide-react';

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigateTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-start justify-center pt-[15vh] px-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl glass-panel rounded-xl overflow-hidden shadow-2xl border border-slate-800 z-10"
          >
            <div className="flex items-center px-4 border-b border-slate-850 py-3.5">
              <Search className="w-5 h-5 text-slate-400 mr-3" />
              <input
                type="text"
                placeholder="Search engine navigation system..."
                className="w-full bg-transparent border-none text-slate-100 placeholder-slate-500 focus:outline-none text-sm"
                autoFocus
              />
              <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-0.5 rounded border border-slate-700 bg-slate-800 px-1.5 font-mono text-[10px] font-medium text-slate-400 opacity-100">
                ESC
              </kbd>
            </div>

            <div className="p-2 max-h-[320px] overflow-y-auto">
              <div className="px-2 py-1.5 text-[11px] font-medium text-slate-500 tracking-wider uppercase">
                Navigation Options
              </div>
              
              {[
                { label: 'Featured Projects', target: 'projects', icon: Folder },
                { label: 'Tech Stack Matrix', target: 'skills', icon: Terminal },
                { label: 'Academic Journey', target: 'education', icon: GraduationCap },
                { label: 'Download Curriculum Vitae', target: 'resume', icon: FileText },
                { label: 'Establish Secure Connection', target: 'contact', icon: Mail },
              ].map((item) => (
                <button
                  key={item.target}
                  onClick={() => navigateTo(item.target)}
                  className="w-full flex items-center px-3 py-2.5 text-sm rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors text-left"
                >
                  <item.icon className="w-4 h-4 mr-3 text-slate-400" />
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}