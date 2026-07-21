'use client';

import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 max-w-5xl mx-auto px-6 scroll-mt-12">
      <div className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-widest text-blue-500">// Academic Qualifications</h2>
        <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 mt-1">Education & Background</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="glass-panel p-8 rounded-xl border border-slate-900/80 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>B.Sc Computer Science</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 tracking-tight">Bells University of Technology</h3>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500" /> Ota, Ogun State, Nigeria
              </p>
            </div>

            <div className="flex flex-col md:items-end space-y-1 font-mono text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-blue-500" /> Oct 2024 – Present
              </span>
              <span className="text-[11px] text-cyan-400/90 font-medium bg-blue-950/40 border border-blue-500/20 px-2.5 py-1 rounded-full mt-2">
                300 Level Undergraduate
              </span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-900/80">
            <h4 className="text-xs font-mono text-slate-400 mb-3 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-amber-400" /> Focus Areas & Core Discipline
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono text-slate-300">
              {['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems'].map((subject) => (
                <div key={subject} className="p-2 rounded bg-slate-950/40 border border-slate-900 text-center">
                  {subject}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}