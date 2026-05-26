export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-slate-800 rotate-45 rounded-sm"></div>
                <div className="text-slate-300 font-bold text-sm relative z-10">M</div>
              </div>
              <span className="font-sans font-bold tracking-widest uppercase text-slate-300">
                Montezuma
              </span>
            </div>
            <p className="font-sans text-slate-500 text-sm leading-relaxed">
              Premium automotive technology platform focused on performance, precision, and modern automotive engineering.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-sans text-sm text-slate-400 hover:text-blue-400 transition-colors">Digital Ecosystem</a></li>
              <li><a href="#" className="font-sans text-sm text-slate-400 hover:text-blue-400 transition-colors">Compatibility Matrix</a></li>
              <li><a href="#" className="font-sans text-sm text-slate-400 hover:text-blue-400 transition-colors">API Access</a></li>
              <li><a href="#" className="font-sans text-sm text-slate-400 hover:text-blue-400 transition-colors">Procurement</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6">Engineering</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-sans text-sm text-slate-400 hover:text-blue-400 transition-colors">Performance Docs</a></li>
              <li><a href="#" className="font-sans text-sm text-slate-400 hover:text-blue-400 transition-colors">Installation Guides</a></li>
              <li><a href="#" className="font-sans text-sm text-slate-400 hover:text-blue-400 transition-colors">Telemetry</a></li>
              <li><a href="#" className="font-sans text-sm text-slate-400 hover:text-blue-400 transition-colors">Tolerances</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6">System Status</h4>
            <div className="glass-panel p-4 rounded-lg flex items-center justify-between border-slate-800">
              <span className="font-mono text-xs text-slate-400 uppercase">Core Systems</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-emerald-400 uppercase">Online</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Montezuma Motors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-mono text-[10px] text-slate-500 hover:text-slate-300 uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="font-mono text-[10px] text-slate-500 hover:text-slate-300 uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
