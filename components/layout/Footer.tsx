export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-900/80 bg-slate-950/40 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-slate-500">
          Designed & Engineered by <span className="text-slate-300 font-medium">Temitayo Job</span> © {new Date().getFullYear()}
        </p>
        <p className="text-[11px] font-mono text-slate-600">
          Built with Next.js, React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}