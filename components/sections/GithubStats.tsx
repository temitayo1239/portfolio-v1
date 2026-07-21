'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { Star, GitFork, BookOpen, Activity } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export default function GithubStats() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/temitayo1239/repos?sort=updated&per_page=4')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-12">
      <div className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-widest text-blue-500">// Open Source Telemetry</h2>
        <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 mt-1">GitHub Metrics & Repositories</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* GitHub Stats Card */}
        <Card className="glass-panel p-6 rounded-xl border border-slate-900/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <FaGithub className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-bold font-mono text-slate-200">@temitayo1239</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Active
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Track open-source commits, continuous delivery pipelines, and dynamic experimental builds directly from GitHub.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-900 space-y-3">
            <a
              href="https://github.com/temitayo1239"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-all"
            >
              <Activity className="w-4 h-4" />
              <span>Inspect Profile on GitHub</span>
            </a>
          </div>
        </Card>

        {/* Latest Active Repositories */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="glass-panel p-5 rounded-xl border border-slate-900 animate-pulse h-36" />
              ))
            : repos.map((repo) => (
                <motion.div key={repo.id} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Card className="glass-panel p-5 rounded-xl border border-slate-900 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-bold font-mono text-slate-200 hover:text-cyan-400 transition-colors flex items-center space-x-1.5"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span className="truncate">{repo.name}</span>
                        </a>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {repo.description || 'No description available for this repository.'}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-900 text-[10px] font-mono text-slate-500">
                      <span>{repo.language || 'Code'}</span>
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-amber-400" />
                          <span>{repo.stargazers_count}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <GitFork className="w-3 h-3 text-slate-400" />
                          <span>{repo.forks_count}</span>
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}