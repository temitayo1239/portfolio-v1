'use client';

import { Mail, MapPin } from 'lucide-react';
import { Card } from '../ui/card';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 max-w-5xl mx-auto px-6 scroll-mt-12"
    >
      <div className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-widest text-blue-500">
          // Secure Gateway
        </h2>

        <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 mt-1">
          Get In Touch
        </p>
      </div>

      {/* Contact Information Panel */}
          <Card className="glass-panel p-6 rounded-xl border border-slate-900/80 space-y-6">
            
            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="p-2.5 rounded-lg bg-blue-600/10 border border-blue-500/20 text-cyan-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400">
                  Direct Communication
                </h4>

                <a
                  href="mailto:temitayo.job@gmail.com"
                  className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors mt-0.5 block"
                >
                  temitayo.job@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="p-2.5 rounded-lg bg-blue-600/10 border border-blue-500/20 text-cyan-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400">
                  Base Location
                </h4>

                <p className="text-sm font-semibold text-slate-200 mt-0.5">
                  Ota, Ogun State, Nigeria
                </p>
              </div>
            </div>

          </Card>


      {/*
        ============================================================
        CONTACT FORM — COMMENTED OUT FOR NOW
        ============================================================

        <div className="lg:col-span-3">
          <Card className="glass-panel p-6 sm:p-8 rounded-xl border border-slate-900/80">
            ...contact form...
          </Card>
        </div>

        ============================================================
      */}
    </section>
  );
}