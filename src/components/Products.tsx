import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Kit Pastilha e Disco de Freio Dianteiro Cerâmica",
    category: "Freio",
    price: "R$ 485,90",
    spec: "Performance",
  },
  {
    id: 2,
    name: "Kit Amortecedor Dianteiro e Traseiro",
    category: "Suspensão",
    price: "R$ 1.250,00",
    spec: "Dinâmica",
  },
  {
    id: 3,
    name: "Kit Troca de Óleo 10w40 c/ Filtros",
    category: "Motor",
    price: "R$ 289,90",
    spec: "Revisão",
  },
  {
    id: 4,
    name: "Bomba de Água Completa",
    category: "Arrefecimento",
    price: "R$ 315,50",
    spec: "Original",
  }
];

export default function Products() {
  return (
    <section className="py-24 relative bg-slate-950 border-t border-slate-900/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/5 via-slate-950 to-slate-950 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
             <h2 className="font-sans text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Ofertas em Destaque
            </h2>
            <p className="font-mono text-xs text-slate-400 uppercase tracking-widest max-w-2xl">
              As peças mais procuradas da Montezuma Motors
            </p>
          </div>
          <a href="#" className="font-mono text-xs text-blue-400 hover:text-[#E31837] uppercase tracking-widest py-2 border-b border-blue-500/30 hover:border-[#E31837] transition-colors">
            Ver Todo Estoque -&gt;
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
              className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden flex flex-col hover:border-slate-700 transition-colors shadow-lg"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-slate-900 relative overflow-hidden flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10"></div>
                
                {/* Abstract component visualization */}
                <div className="w-full h-full border border-slate-700/50 rounded-lg bg-slate-800/20 flex items-center justify-center relative">
                  <div className="w-16 h-16 rounded-full border-[4px] border-slate-700 group-hover:border-[#E31837] transition-colors duration-500 relative">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-500 group-hover:bg-[#E31837] rounded-full transition-colors duration-500"></div>
                  </div>
                  <div className="absolute bottom-2 right-2 flex gap-1">
                     <div className="w-1 h-3 bg-slate-600"></div>
                     <div className="w-1 h-4 bg-slate-500"></div>
                     <div className="w-1 h-5 bg-[#E31837] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                {/* Specs label */}
                <div className="absolute top-3 left-3 z-20 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded font-mono text-[9px] uppercase tracking-wider text-slate-300 border border-slate-800">
                  {product.spec}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-2">{product.category}</p>
                  <h3 className="font-sans font-medium text-slate-200 text-sm leading-relaxed mb-4 group-hover:text-[#E31837] transition-colors">
                    {product.name}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-mono font-bold text-white text-sm">{product.price}</span>
                  <button className="w-8 h-8 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:bg-[#E31837] group-hover:text-white group-hover:border-[#E31837] transition-all">
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
