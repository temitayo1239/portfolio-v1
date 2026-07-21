import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';
import AnimatedBlobBackground from '@/components/ui/AnimatedBlobBackground';
import CommandMenu from '@/components/ui/CommandMenu';

export const metadata: Metadata = {
  title: 'Temitayo Job | Full-Stack Software Engineer Portfolio',
  description: 'Portfolio of Temitayo Job, Computer Science Student and Full-Stack Developer specializing in high-performance Next.js React, TypeScript, and robust backend architectures.',
  metadataBase: new URL('https://temitayojob.dev'), // Replace with your production domain
  openGraph: {
    title: 'Temitayo Job | Full-Stack Software Engineer',
    description: 'Building software that is simple, scalable, and meaningful.',
    url: 'https://temitayojob.dev',
    siteName: 'Temitayo Job Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Schema markup for SEO enhancement */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Temitayo Job",
              "jobTitle": "Full-Stack Software Engineer",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Bells University of Technology"
              },
              "knowsAbout": ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Tailwind CSS"]
            })
          }}
        />
      </head>
      <body className="antialiased selection:bg-blue-600/30 selection:text-cyan-400 relative">
        <CustomCursor />
        <AnimatedBlobBackground />
        <CommandMenu />
        {children}
      </body>
    </html>
  );
}