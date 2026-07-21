'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, Download, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Button } from '../ui/button';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1] as const // <--- Adding 'as const' locks it to a tuple [0.16, 1, 0.3, 1]
      } 
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden px-6">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center z-10"
      >
        {/* Micro-pill tag indicator */}
        <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-wider uppercase text-blue-400 font-medium">Available for Strategic Roles</span>
        </motion.div>

        {/* Hero Headlines */}
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-100 max-w-4xl mx-auto leading-[1.1]">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Temitayo Job</span>
        </motion.h1>

        <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-slate-400 mt-4">
          Computer Science Student | Full-Stack Developer
        </motion.h2>

        <motion.p variants={itemVariants} className="mt-6 text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Building software that is simple, scalable, and meaningful. Specializing in highly performant frontend systems while engineering deterministic backends.
        </motion.p>

        {/* Action Controls */}
        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap justify-center gap-4">
          <Button 
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-5 rounded-lg text-xs tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-blue-600/20"
          >
            <a href="#projects">
              View Projects <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
          </Button>

          <Button 
            asChild
            variant="outline"
            className="border-slate-800 bg-slate-900/40 hover:bg-slate-800 hover:text-white text-slate-300 font-medium px-6 py-5 rounded-lg text-xs tracking-wide transition-all"
          >
            <a href="/resume.pdf" download="Temitayo_Job_Resume.pdf">
              Download Resume <Download className="w-4 h-4 ml-2" />
            </a>
          </Button>

          <Button 
            asChild
            variant="ghost"
            className="hover:bg-slate-900 text-slate-400 hover:text-slate-200 font-medium px-5 py-5 text-xs tracking-wide"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>

        {/* Anchor Social Networking Interface Layer */}
        <motion.div variants={itemVariants} className="mt-16 flex justify-center space-x-6 text-slate-500">
          {[
            { icon: FaGithub, href: 'https://github.com/temitayo1239', label: 'GitHub' },
            { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
            { icon: MessageSquare, href: '#', label: 'WhatsApp' }
          ].map((social, idx) => (
            <a 
              key={idx} 
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors duration-300 p-2 hover:bg-slate-900 rounded-lg"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}