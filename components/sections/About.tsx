'use client';

import { motion } from 'framer-motion';
import { TIMELINE_DATA } from '../../data/portfolio';
import { Card } from '../ui/card';
import { GraduationCap, Code2, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-6 scroll-mt-12">
      <div className="mb-14 text-center md:text-left">
        <h2 className="text-xs font-mono uppercase tracking-widest text-blue-500">// Engineering Journey</h2>
        <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 mt-1">About & Milestone Path</p>
      </div>

      <div className="relative border-l border-slate-800/80 ml-4 md:ml-32 space-y-12">
        {TIMELINE_DATA.map((milestone, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Timeline Node Icon */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-blue-600/10 transition-all duration-300">
              <Terminal className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </div>

            {/* Year Tag on Left (Desktop) */}
            <div className="hidden md:block absolute -left-32 top-1.5 w-24 text-right">
              <span className="text-xs font-mono font-medium text-cyan-400/90">{milestone.year}</span>
            </div>

            <Card className="glass-panel p-6 rounded-xl border border-slate-900/80">
              <div className="md:hidden mb-2">
                <span className="text-xs font-mono text-cyan-400">{milestone.year}</span>
              </div>
              <h3 className="text-base font-semibold text-slate-100 tracking-tight">{milestone.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mt-2">{milestone.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {milestone.skillsAcquired.map((skill) => (
                  <span key={skill} className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/30 border border-blue-500/20 text-blue-300">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}