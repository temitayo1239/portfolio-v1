import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import GithubStats from '../components/sections/GithubStats';
import Education from '../components/sections/Education';
import Resume from '../components/sections/Resume';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Temitayo Job | Full-Stack Software Engineer</title>
        <meta name="description" content="Portfolio of Temitayo Job, CS Student & Full-Stack Developer specializing in Next.js, TypeScript, and modern backend architectures." />
      </Head>

      <Navbar />
      <main className="relative z-10 space-y-12">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <GithubStats />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}