import { Search, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { categoriesData } from '../data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const majorCategories = Object.keys(categoriesData).slice(0, 8); // Top categories for desktop menu

  return (
    <header className="fixed top-0 w-full z-50 glass-panel border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="flex items-center gap-2">
              {/* Abstract M Logo */}
              <div className="w-10 h-10 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-500/20 rotate-45 rounded-sm"></div>
                <div className="absolute inset-2 border-2 border-blue-400 rotate-45 rounded-sm"></div>
                <div className="text-white font-bold text-xl relative z-10">M</div>
              </div>
              <span className="font-sans font-bold text-xl tracking-widest uppercase text-white ml-2 hidden sm:block">
                Montezuma<span className="text-blue-500">Motors</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div 
              className="relative group h-20 flex items-center"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <button className="text-slate-300 hover:text-white font-medium text-sm tracking-wide uppercase flex items-center gap-1 transition-colors">
                Parts Ecosystem <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Mega Menu */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] glass-panel border border-slate-700/50 p-6 rounded-b-xl shadow-2xl"
                  >
                    <div className="grid grid-cols-4 gap-6">
                      {majorCategories.map((category) => (
                        <div key={category} className="space-y-3">
                          <h3 className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-wider border-b border-slate-700/50 pb-2">
                            {category}
                          </h3>
                          <ul className="space-y-2">
                            {(categoriesData as any)[category].slice(0, 4).map((sub: string) => (
                              <li key={sub}>
                                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block transform duration-200">
                                  {sub}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <a href="#" className="text-slate-300 hover:text-white font-medium text-sm tracking-wide uppercase transition-colors">Performance</a>
            <a href="#" className="text-slate-300 hover:text-white font-medium text-sm tracking-wide uppercase transition-colors">Technology</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="text-slate-400 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-slate-400 hover:text-white transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="text-slate-400 hover:text-white transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-blue-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            
            {/* Mobile menu button */}
            <button className="md:hidden text-slate-400 hover:text-white transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
