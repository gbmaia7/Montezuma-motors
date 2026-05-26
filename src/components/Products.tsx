import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Carbon Ceramic Brake Kit Config V8",
    category: "Freio",
    price: "$8,450.00",
    spec: "Performance",
  },
  {
    id: 2,
    name: "Titanium Exhaust System Gen 3",
    category: "Exaustao",
    price: "$4,200.00",
    spec: "Acoustics",
  },
  {
    id: 3,
    name: "Adaptive Air Suspension Module",
    category: "Suspensao",
    price: "$2,890.00",
    spec: "Dynamics",
  },
  {
    id: 4,
    name: "High-Flow Intake Plenum",
    category: "Motor",
    price: "$1,150.00",
    spec: "Powertrain",
  }
];

export default function Products() {
  return (
    <section className="py-24 relative bg-slate-950 border-t border-slate-900/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
             <h2 className="font-sans text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Featured Upgrades
            </h2>
            <p className="font-mono text-xs text-slate-400 uppercase tracking-widest max-w-2xl">
              Precision components for optimal output
            </p>
          </div>
          <a href="#" className="font-mono text-xs text-blue-400 hover:text-blue-300 uppercase tracking-widest py-2 border-b border-blue-500/30 hover:border-blue-400 transition-colors">
            View All Inventory -&gt;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-panel rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-slate-900 relative overflow-hidden flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors z-10"></div>
                
                {/* Abstract component visualization */}
                <div className="w-full h-full border border-slate-700/50 rounded-lg bg-slate-800/20 flex items-center justify-center relative">
                  <div className="w-16 h-16 rounded-full border-[4px] border-slate-700 group-hover:border-blue-500 transition-colors duration-500 relative">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-500 group-hover:bg-blue-400 rounded-full transition-colors duration-500"></div>
                  </div>
                  <div className="absolute bottom-2 right-2 flex gap-1">
                     <div className="w-1 h-3 bg-slate-600"></div>
                     <div className="w-1 h-4 bg-slate-500"></div>
                     <div className="w-1 h-5 bg-blue-500"></div>
                  </div>
                </div>

                {/* Specs label */}
                <div className="absolute top-3 left-3 z-20 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded font-mono text-[9px] uppercase tracking-wider text-slate-300 border border-slate-800">
                  {product.spec}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-mono text-[10px] text-blue-400 uppercase tracking-widest mb-2">{product.category}</p>
                  <h3 className="font-sans font-medium text-slate-200 text-sm leading-relaxed mb-4 group-hover:text-white transition-colors">
                    {product.name}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-mono text-slate-300 text-xs">{product.price}</span>
                  <button className="w-8 h-8 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all">
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
