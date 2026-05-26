import { motion } from 'motion/react';
import { categoriesData } from '../data';
import { Settings, Zap, Shield, Fan, PenTool, Database, Radio, Wrench } from 'lucide-react';

const iconMap: Record<string, any> = {
  "Motor": Settings,
  "Sistema Eletrico": Zap,
  "Freio": Shield,
  "Arrefecimento Resf Motor": Fan,
  "Suspensao": PenTool,
  "Cambio": Database,
  "Iluminacao": Radio,
  "Filtros": Wrench
};

export default function Categories() {
  // Select top categories to display based on icon mapping
  const selectedCategories = Object.keys(iconMap);

  return (
    <section className="py-32 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Component Modules
          </h2>
          <p className="font-mono text-xs text-slate-400 uppercase tracking-widest max-w-2xl">
            Select an engineering subsystem to browse certified precision modules
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {selectedCategories.map((cat, index) => {
            const Icon = iconMap[cat] || Settings;
            const subCount = (categoriesData as any)[cat]?.length || 0;
            
            return (
              <motion.a
                href={`#category-${index}`}
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative glass-panel p-6 rounded-2xl overflow-hidden block"
              >
                {/* Background Tech Accent */}
                <div className="absolute right-0 bottom-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 scale-150 translate-x-4 translate-y-4">
                  <Icon className="w-40 h-40" strokeWidth={1} />
                </div>
                
                <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                  <div className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-900/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors" />
                  </div>
                  
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-white mb-1 group-hover:text-blue-300 transition-colors">
                      {cat}
                    </h3>
                    <p className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                      {subCount} System Parts
                    </p>
                  </div>
                </div>
                
                {/* Hover line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
