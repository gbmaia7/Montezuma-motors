import { Search, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';

export default function SearchBlock() {
  return (
    <section className="relative z-30 mt-4 md:-mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden group bg-slate-950/95 backdrop-blur-xl border border-slate-800 shadow-2xl"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31837]/0 via-[#E31837]/10 to-[#E31837]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#E31837] to-transparent opacity-50"></div>

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 gap-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E31837] animate-pulse"></span>
              Encontre a peça compatível
            </h3>
            <button className="text-slate-400 hover:text-white flex items-center gap-2 text-sm transition-colors self-start sm:self-auto">
              <SlidersHorizontal className="w-4 h-4" />
              Filtros Avançados
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Brand */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Montadora</label>
              <select className="w-full bg-slate-900/50 border border-slate-700 text-slate-300 text-sm rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer">
                <option value="">Selecione</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="volkswagen">Volkswagen</option>
                <option value="fiat">Fiat</option>
                <option value="ford">Ford</option>
                <option value="toyota">Toyota</option>
                <option value="honda">Honda</option>
              </select>
            </div>

            {/* Model */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Modelo</label>
              <select className="w-full bg-slate-900/50 border border-slate-700 text-slate-500 text-sm rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-not-allowed" disabled>
                <option value="">Selecione</option>
              </select>
            </div>

            {/* Year */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Ano</label>
              <select className="w-full bg-slate-900/50 border border-slate-700 text-slate-500 text-sm rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-not-allowed" disabled>
                <option value="">Selecione</option>
              </select>
            </div>

            {/* Version */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Motorização / Versão</label>
              <select className="w-full bg-slate-900/50 border border-slate-700 text-slate-500 text-sm rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-not-allowed" disabled>
                <option value="">Selecione</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="w-full sm:w-auto justify-center bg-[#E31837] hover:bg-red-700 text-white font-medium text-sm py-3 px-8 rounded-lg flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(227,24,55,0.3)] hover:shadow-[0_0_30px_rgba(227,24,55,0.5)]">
              <Search className="w-4 h-4" />
              Buscar Peças
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
