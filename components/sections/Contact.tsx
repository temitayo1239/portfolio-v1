'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Dynamic endpoint resolution with environment variable fallback
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL || 'https://formspree.io/f/xnjezdwb';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        setErrorMessage(data.errors?.[0]?.message || 'Failed to transmit message. Please try again.');
        setStatus('error');
      }
    } catch (err) {
      setErrorMessage('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-12">
      <div className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-widest text-blue-500">// Secure Gateway</h2>
        <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 mt-1">Get In Touch</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Information Panel */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass-panel p-6 rounded-xl border border-slate-900/80 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-2.5 rounded-lg bg-blue-600/10 border border-blue-500/20 text-cyan-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400">Direct Communication</h4>
                <a 
                  href="mailto:temitayo.job@gmail.com" 
                  className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors mt-0.5 block"
                >
                  temitayo.job@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2.5 rounded-lg bg-blue-600/10 border border-blue-500/20 text-cyan-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400">Base Location</h4>
                <p className="text-sm font-semibold text-slate-200 mt-0.5">Ota, Ogun State, Nigeria</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Formspree Interactive Form Gateway */}
        <div className="lg:col-span-3">
          <Card className="glass-panel p-6 sm:p-8 rounded-xl border border-slate-900/80">
            {status === 'success' ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-slate-100">Message Transmitted</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Thank you for reaching out. I will review your payload and respond shortly.
                </p>
                <Button 
                  onClick={() => setStatus('idle')} 
                  variant="outline" 
                  className="text-xs font-mono border-slate-800 text-slate-300 mt-2"
                >
                  send_another_payload()
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[11px] font-mono text-slate-400">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      className="w-full bg-slate-950/60 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[11px] font-mono text-slate-400">Your Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="w-full bg-slate-950/60 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[11px] font-mono text-slate-400">Message Content</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe project requirements or opportunities..."
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center space-x-2 text-rose-400 text-xs bg-rose-950/20 border border-rose-500/20 p-3 rounded-lg">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs h-11 rounded-lg transition-all"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" /> transmitting...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="w-4 h-4 mr-2" /> send_message()
                    </span>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}