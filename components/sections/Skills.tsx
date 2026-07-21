'use client';

import { motion } from 'framer-motion';
import { SKILLS_DATA } from '@/data/portfolio';
import { Card } from '@/components/ui/card';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';

const getIconComponent = (iconName: string) => {
  if (iconName.startsWith('Si')) return (SiIcons as any)[iconName];
  if (iconName.startsWith('Fa')) return (FaIcons as any)[iconName];
  if (iconName.startsWith('Bi')) return (BiIcons as any)[iconName];
  return null;
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-12">
      <div className="mb-14">
        <h2 className="text-xs font-mono uppercase tracking-widest text-blue-500">Subsystem Repositories</h2>
        <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 mt-1">Tech Stack Matrix</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS_DATA.map((category, catIdx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
          >
            <Card className="glass-panel p-6 rounded-xl border border-slate-900/60 h-full">
              <h3 className="text-sm font-semibold tracking-wide text-slate-300 border-b border-slate-850 pb-3 mb-4 font-mono">
                // {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => {
                  const Icon = getIconComponent(skill.icon);
                  return (
                    <div 
                      key={skill.name}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-slate-950/40 border border-slate-900/40 hover:border-slate-800/80 transition-all group"
                    >
                      {Icon && <Icon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />}
                      <span className="text-xs font-medium text-slate-300 group-hover:text-slate-200 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}