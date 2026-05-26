import { Search, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';

export default function SearchBlock() {
  return (
    <section className="relative z-30 -mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              System Compatibility Matrix
            </h3>
            <button className="text-slate-400 hover:text-white flex items-center gap-2 text-sm transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
              Advanced Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Brand */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Manufacturer</label>
              <select className="w-full bg-slate-950/50 border border-slate-700 text-slate-300 text-sm rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none">
                <option value="">Select Brand</option>
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes-Benz</option>
                <option value="porsche">Porsche</option>
                <option value="tesla">Tesla</option>
              </select>
            </div>

            {/* Model */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Chassis / Model</label>
              <select className="w-full bg-slate-950/50 border border-slate-700 text-slate-300 text-sm rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none" disabled>
                <option value="">Select Model</option>
              </select>
            </div>

            {/* Year */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Production Year</label>
              <select className="w-full bg-slate-950/50 border border-slate-700 text-slate-300 text-sm rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none" disabled>
                <option value="">Select Year</option>
              </select>
            </div>

            {/* Version */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Powertrain Spec</label>
              <select className="w-full bg-slate-950/50 border border-slate-700 text-slate-300 text-sm rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none" disabled>
                <option value="">Select Spec</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm py-3 px-8 rounded-lg flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              <Search className="w-4 h-4" />
              Initialize Search
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
