'use client';

import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { FileText, Download, ExternalLink, CheckCircle2 } from 'lucide-react';


export default function Resume() {
    return (
        <section id="resume" className="py-24 max-w-5xl mx-auto px-6 scroll-mt-12">
            <div className="mb-12">
                <h2 className="text-xs font-mono uppercase tracking-widest text-blue-500">// Curriculum Vitae</h2>
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 mt-1">Resume & Credentials</p>
            </div>

            <Card className="glass-panel p-8 rounded-xl border border-slate-900/80">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4 max-w-xl">
                        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[11px] font-mono text-emerald-400">Updated for 2026 Opportunities</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-100">Ready to contribute to software engineering teams.</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Download my complete technical resume detailing system architecture projects, full-stack competencies, and academic background in Computer Science.
                        </p>
                    </div>

                    <div className="flex flex-col w-full md:w-auto space-y-3 shrink-0">
                        <Button
                            asChild
                            className="bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs px-6 py-5 rounded-lg"
                        >
                            <a href="/resume.pdf" download="Temitayo_Job_Resume.pdf">
                                <Download className="w-4 h-4 mr-2" /> download_cv.pdf
                            </a>
                        </Button>

                        {/* Preview PDF in a new browser tab */}
                        <Button
                            asChild
                            variant="outline"
                            className="border-slate-800 bg-slate-900/40 text-slate-300 text-xs font-mono py-5"
                        >
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" /> preview_in_tab
                            </a>
                        </Button>
                    </div>
                </div>
            </Card>
        </section>
    );
}