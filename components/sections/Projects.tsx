'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '@/data/portfolio';
import { Project } from '@/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ExternalLink, ShieldAlert, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

type FilterCategory = 'all' | 'frontend' | 'fullstack' | 'system';

export default function Projects() {
    const [filter, setFilter] = useState<FilterCategory>('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = PROJECTS_DATA.filter(
        (project) => filter === 'all' || project.category === filter
    );

    return (
        <section id="projects" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                <div>
                    <h2 className="text-xs font-mono uppercase tracking-widest text-blue-500">Production Deployments</h2>
                    <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 mt-1">Featured Projects</p>
                </div>

                {/* Project Filter Controls */}
                <div className="flex flex-wrap gap-1.5 bg-slate-950/60 p-1 rounded-lg border border-slate-900 max-w-max">
                    {(['all', 'fullstack', 'frontend', 'system'] as FilterCategory[]).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-3 py-1.5 text-[11px] font-mono tracking-wider uppercase rounded-md transition-all ${filter === cat
                                    ? 'bg-blue-600/20 text-cyan-400 border border-blue-500/30 font-medium'
                                    : 'text-slate-400 hover:text-slate-200 border border-transparent'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid Canvas Architecture Layout */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Card className="glass-panel glass-card-hover p-5 rounded-xl h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-base font-bold text-slate-100 tracking-tight">{project.title}</h3>
                                        <div className="flex gap-1.5">
                                            {project.isCollaborative && (
                                                <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20 text-[10px] font-mono">
                                                    Team
                                                </Badge>
                                            )}
                                            <Badge
                                                variant="outline"
                                                className={`text-[10px] font-mono ${project.status === 'In Progress'
                                                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                                    }`}
                                            >
                                                {project.status}
                                            </Badge>
                                        </div>
                                    </div>

                                    <p className="text-xs text-slate-400 font-normal leading-relaxed mb-5">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-850 text-slate-400">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-2 border-t border-slate-900/60">
                                    <Button
                                        onClick={() => setSelectedProject(project)}
                                        variant="link"
                                        className="p-0 h-auto text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                        inspect_case_study() →
                                    </Button>

                                    <div className="flex space-x-2">
                                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-1.5 text-slate-400 hover:text-slate-100 bg-slate-950/40 rounded-md border border-slate-900">
                                            <FaGithub className="w-4 h-4" />
                                        </a>
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-1.5 text-slate-400 hover:text-slate-100 bg-slate-950/40 rounded-md border border-slate-900">
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Case Study Modals System Configuration */}
            <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
                <DialogContent className="glass-panel max-w-2xl border border-slate-800 text-slate-100 p-6 rounded-xl">
                    {selectedProject && (
                        <>
                            <DialogHeader>
                                <div className="flex items-center space-x-2 mb-1">
                                    <span className="text-[10px] font-mono tracking-widest text-blue-500 uppercase">{selectedProject.category} subsystem</span>
                                </div>
                                <DialogTitle className="text-xl font-bold tracking-tight text-slate-100">{selectedProject.title}</DialogTitle>
                                <DialogDescription className="text-slate-400 text-xs mt-2">
                                    {selectedProject.extendedDescription || selectedProject.description}
                                </DialogDescription>
                            </DialogHeader>

                            {/* Collaborative Contributions Module */}
                            {selectedProject.isCollaborative && selectedProject.contributions && (
                                <div className="mt-4 p-4 rounded-lg bg-purple-950/10 border border-purple-500/20">
                                    <div className="flex items-center space-x-2 text-purple-400 text-xs font-mono font-semibold mb-2">
                                        <Layers className="w-4 h-4" />
                                        <span>My Contributions // {selectedProject.contributions.role}</span>
                                    </div>
                                    <ul className="space-y-1.5 list-none">
                                        {selectedProject.contributions.tasks.map((task, i) => (
                                            <li key={i} className="text-xs text-slate-300 flex items-start">
                                                <span className="text-purple-500 mr-2 font-mono">•</span>
                                                {task}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Technical Architecture Specs */}
                            <div className="mt-4">
                                <h4 className="text-xs font-mono text-slate-400 mb-2">// Core Scope Features</h4>
                                <ul className="space-y-1.5">
                                    {selectedProject.features.map((feature, idx) => (
                                        <li key={idx} className="text-xs text-slate-300 flex items-center">
                                            <span className="w-1 h-1 rounded-full bg-cyan-400 mr-2.5 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-slate-850">
                                <Button asChild variant="outline" className="border-slate-800 text-slate-300 text-xs font-mono h-9">
                                    <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer">
                                        <FaGithub className="w-3.5 h-3.5 mr-2" /> source_code
                                    </a>
                                </Button>
                                {selectedProject.liveUrl && (
                                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono h-9">
                                        <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer">
                                            <ExternalLink className="w-3.5 h-3.5 mr-2" /> runtime_demo
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}