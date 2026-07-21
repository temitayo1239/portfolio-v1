'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setError('');

    // Replace with your EmailJS service, template, and public key credentials
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_id',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_id',
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key'
      )
      .then(
        () => {
          setIsSending(false);
          setIsSent(true);
          if (formRef.current) formRef.current.reset();
        },
        (err) => {
          setIsSending(false);
          setError('Failed to transmit message. Please contact directly via email.');
        }
      );
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-12">
      <div className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-widest text-blue-500">// Secure Gateway</h2>
        <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 mt-1">Get In Touch</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Metadata Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass-panel p-6 rounded-xl border border-slate-900/80 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-2.5 rounded-lg bg-blue-600/10 border border-blue-500/20 text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400">Direct Communication</h4>
                <p className="text-sm font-semibold text-slate-200 mt-0.5">temitayo.job@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2.5 rounded-lg bg-blue-600/10 border border-blue-500/20 text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400">Base Location</h4>
                <p className="text-sm font-semibold text-slate-200 mt-0.5">Ota, Ogun State, Nigeria</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Email Form Gateway */}
        <div className="lg:col-span-3">
          <Card className="glass-panel p-6 sm:p-8 rounded-xl border border-slate-900/80">
            {isSent ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-slate-100">Message Transmitted</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Thank you for reaching out. I will review your message and respond shortly.
                </p>
                <Button onClick={() => setIsSent(false)} variant="outline" className="text-xs font-mono border-slate-800">
                  send_another_payload()
                </Button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-slate-400">Your Name</label>
                    <Input
                      name="user_name"
                      required
                      placeholder="Alex Mercer"
                      className="bg-slate-950/60 border-slate-850 text-xs text-slate-100 placeholder:text-slate-600 focus:border-cyan-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-slate-400">Your Email</label>
                    <Input
                      type="email"
                      name="user_email"
                      required
                      placeholder="alex@company.com"
                      className="bg-slate-950/60 border-slate-850 text-xs text-slate-100 placeholder:text-slate-600 focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-400">Message Content</label>
                  <Textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe project requirements or opportunities..."
                    className="bg-slate-950/60 border-slate-850 text-xs text-slate-100 placeholder:text-slate-600 focus:border-cyan-500 resize-none"
                  />
                </div>

                {error && <p className="text-xs text-rose-400 font-mono">{error}</p>}

                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs h-11 rounded-lg transition-all"
                >
                  {isSending ? (
                    <span className="flex items-center"><Loader2 className="w-4 h-4 mr-2 animate-spin" /> transmitting...</span>
                  ) : (
                    <span className="flex items-center"><Send className="w-4 h-4 mr-2" /> send_message()</span>
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