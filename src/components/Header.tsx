import { Search, ShoppingCart, User, Truck, Headset, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Subcategories strictly from user prompt
const subcategoriesData: Record<string, string[]> = {
  "Todas as categorias": [], // Special case, handled in render
  "Itens de revisão": [
    "Itens De Revisao",
    "Kits De Revisao",
    "Kits Manutencao Preventiva"
  ],
  "Filtros": [
    "Filtro Ar Condicionado",
    "Filtro De Ar Do Motor",
    "Filtro De Combustivel",
    "Filtro De Oleo"
  ],
  "Freio": [
    "Alavanca Freio De Mao E Cabos",
    "Cilindro",
    "Flexivel",
    "Oleo De Freio",
    "Pastilha E Disco De Freio Dianteiro",
    "Pastilha E Disco De Freio Traseiro",
    "Sapata Patim",
    "Sensor De Freio",
    "Servo Freio",
    "Tambor",
    "Valvula De Freio"
  ],
  "Suspensão": [
    "Amortecedor Dianteiro",
    "Amortecedor Traseiro",
    "Bandeja",
    "Batente",
    "Bieleta",
    "Bucha Suspensao Traseira",
    "Buchas",
    "Coifa",
    "Coxim",
    "Cubos E Rolamentos",
    "Junta Homocinetica",
    "Kit Amortecedor",
    "Mola",
    "Pivos Da Suspensao",
    "Suporte Morcego"
  ],
  "Fluidos/aditivos": [
    "Lubrificantes E Aditivos"
  ],
  "Motor": [
    "Aditivo De Motor",
    "Bomba De Oleo",
    "Bronzina",
    "Carter Peito De Aco",
    "Correia Dentada E Tensionador",
    "Coxim E Suporte Do Motor",
    "Juntas E Retentores",
    "Motor Parcial",
    "Oleo E Filtros Do Motor",
    "Pistao E Aneis",
    "Selos Do Bloco",
    "Semi Eixo",
    "Sensor",
    "Sensor Oxigenio Sonda Lambda",
    "Suporte Amortecedor Do Motor",
    "Valvula Aceleracao Tbi",
    "Valvula Escape",
    "Vareta Oleo Motor",
    "Virabrequim E Polia"
  ],
  "Embreagem": [
    "Atuador Rolamentos",
    "Cabo De Embreagem",
    "Cilindros",
    "Cruzeta",
    "Disco Da Embreagem",
    "Kit Embreagem",
    "Trambulador"
  ],
  "Arrefecimento Resf Motor": [
    "Aditivo E Agua Desmineralizada",
    "Bomba D Agua",
    "Compressor",
    "Condensador",
    "Correia Do Compressor",
    "Coxim E Suporte Do Raidador",
    "Filtro Ar Condicionado",
    "Mangueira",
    "Radiador",
    "Reservatorio E Tampa Do Radiador",
    "Sensor Temperatura",
    "Valvula Termostatica",
    "Ventoinha E Defletor"
  ],
  "Parabrisa E Limpador": [
    "Bomba Eletrica Do Parabrisa",
    "Braco Do Limpador",
    "Esguicho D Agua Do Limpador",
    "Limpa Vidro Optkleen",
    "Moldura Do Parabrisa",
    "Palheta Dianteira",
    "Palheta Traseira",
    "Reservatorio Do Limpador"
  ],
  "Sistema Eletrico": [
    "Alternador E Componentes",
    "Baterias",
    "Bico Injetor",
    "Bobina",
    "Buzina",
    "Interruptores",
    "Motor De Partida",
    "Sensor",
    "Suporte Chave De Seta",
    "Valvula Aceleracao Tbi",
    "Valvula Selenoide Reservatorio Partida A Frio",
    "Velas E Cabo De Vela"
  ],
  "Alimentacao Combustivel": [
    "Aditivo Combustivel",
    "Atuador Marcha Lenta",
    "Bico Injetor",
    "Boia Tanque Combustivel",
    "Bomba E Filtro De Combutivel",
    "Mangueiras",
    "Portinhola",
    "Reservatorio Partida A Frio",
    "Valvula Aceleracao Tbi"
  ],
  "Ar Condicionado": [
    "Compresor Condensador E Ventoinha",
    "Defletor",
    "Filtro Ar Condicionado",
    "Modulo Ventilacao",
    "Spray Higienizador A C"
  ],
  "Acessorios": [
    "Acendedor De Cigarro",
    "Aerofolio E Saia Spoiler",
    "Calha De Chuva",
    "Camera Sensor Estaciomento",
    "Capa Do Pedal",
    "Capa Estepe",
    "Emblemas E Grades",
    "Fan Store",
    "Farol De Milha Neblina",
    "Jogo Estribo",
    "Macaco",
    "Molduras Frisos",
    "Ponteira Esportiva",
    "Porta Oculos Porta Objetos",
    "Rack Santo Antonio Capotas",
    "Rodas E Calotas",
    "Sistema De Som",
    "Soleiras",
    "Tampao Bagageiro",
    "Tapete",
    "Trava Porta E Alarmes",
    "Vidro Eletrico"
  ],
  "Acabamento Interno": [
    "Alavanca Do Cambio E Coifas",
    "Chave Seta",
    "Difusores De Ar",
    "Iluminacao Interna",
    "Interruptor Do Farol",
    "Macaneta",
    "Macaneta E Alca",
    "Quebra Sol",
    "Retrovisor Interno",
    "Revestimento Porta",
    "Tampa Do Porta Luvas",
    "Volante Da Direcao"
  ],
  "Acabamento Externo": [
    "Emblema Gravata",
    "Espelho Retrovisor E Capa",
    "Grades",
    "Molduras Frisos"
  ],
  "Cabecote": [
    "Eixo Comando",
    "Gaiola Eixo Comando",
    "Juntas E Retentores",
    "Tampa De Valvula",
    "Tucho E Balancim"
  ],
  "Cambio": [
    "Anel Sicronizador",
    "Cabo Alavanca Cambio",
    "Coxins",
    "Juntas",
    "Kit Ajuste Alvanca De Cambio",
    "Oleo De Cambio",
    "Oleo Diferencial",
    "Retentores Retentor Semi Eixo",
    "Semi Eixo",
    "Trambulador Do Cambio"
  ],
  "Direcao": [
    "Barra Axial",
    "Barra De Direcao",
    "Bomba Hidraulica",
    "Braco Auxiliar",
    "Braco Pitman",
    "Buchas Barra Estabilizadora",
    "Caixa De Direcao E Componentes",
    "Coluna De Direcao",
    "Correia Da Direcao Hidraulica",
    "Oleo Diferencial",
    "Oleo Direcao",
    "Suporte Chave De Seta",
    "Terminal"
  ],
  "Exaustao": [
    "Escapamento",
    "Juntas",
    "Sensor Exigenio Sonda Labda",
    "Silencioso"
  ],
  "Iluminacao": [
    "Break Light",
    "Farol De Milha Neblina",
    "Farol Dianteiro",
    "Interruptores",
    "Lampada",
    "Lanterna De Placa",
    "Lanterna Do Porta Luvas",
    "Lanterna Do Porta Malas",
    "Lanterna Do Teto",
    "Lanterna Seta",
    "Lanterna Traseira"
  ],
  "Lataria": [
    "Absorvedor De Impacto",
    "Amortecedor Capo",
    "Amortecedor Tampa Traseira Capo",
    "Capo Do Motor Tampa Traseira",
    "Coxim Da Tampa Traseira",
    "Fechaduras Portinhola",
    "Grades",
    "Guarnicoes Borrachas",
    "Guia Do Parachoque E Vigas",
    "Macaneta Externa",
    "Molduras Frisos",
    "Paineis",
    "Para Lama",
    "Parabarro",
    "Parachoque Dianteiro",
    "Parachoque Traseiro",
    "Portas E Tampa Traseira",
    "Protetor De Carter Peito De Aco",
    "Silencioso"
  ],
  "Limpeza E Bem Estar": [
    "Limpeza E Bem Estar"
  ],
  "Pneus": [
    "Pneus",
    "Valvulas"
  ],
  "Roda": [
    "Cilindro",
    "Cubo Rolamento",
    "Rolamento"
  ],
  "Transmissao": [
    "Cabo De Cambio",
    "Diferencial"
  ]
};

const mainCategories = Object.keys(subcategoriesData);
const motorIndex = mainCategories.indexOf("Motor");
const topBarCategories = [...mainCategories.slice(0, motorIndex + 1)];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleInteraction = (category: string) => {
    setActiveMenu(activeMenu === category ? null : category);
  };

  const handleLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 font-sans shadow-xl" onMouseLeave={handleLeave}>
      {/* Top Row: Logo, Search, actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-24 gap-4 md:gap-8">
          
          {/* Menu Hamburger Mobile */}
          <button 
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="flex flex-col">
              <span className="font-extrabold text-lg md:text-2xl tracking-tight text-white uppercase">
                Montezuma
              </span>
              <span className="font-semibold text-[10px] md:text-sm tracking-widest text-[#E31837] uppercase">
                Motors
              </span>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <div className="relative">
              <input 
                type="text" 
                placeholder="O que deseja procurar?" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-2.5 px-4 text-sm text-white outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-shadow placeholder-slate-400"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8 flex-shrink-0">
            <button className="hidden sm:flex md:hidden text-slate-400 hover:text-blue-400 transition-colors">
              <Search className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button className="hidden lg:flex flex-col items-center gap-1 text-slate-400 hover:text-blue-400 transition-colors">
              <Truck className="w-6 h-6" />
              <span className="text-xs font-medium">Rastreio</span>
            </button>
            <button className="hidden lg:flex flex-col items-center gap-1 text-slate-400 hover:text-blue-400 transition-colors">
              <Headset className="w-6 h-6" />
              <span className="text-xs font-medium">Atendimento</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-blue-400 transition-colors">
              <User className="w-5 h-5 md:w-6 md:h-6" />
              <span className="hidden md:inline text-xs font-medium">Login</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-blue-400 transition-colors relative">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                <span className="absolute -top-2 -right-2 bg-[#E31837] text-white text-[10px] font-bold h-4 w-4 md:h-5 md:w-5 rounded-full flex items-center justify-center border-2 border-slate-900">
                  0
                </span>
              </div>
              <span className="hidden md:inline text-xs font-medium">Carrinho</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row: Categories (Desktop Only) */}
      <div className="hidden md:block bg-slate-900/40 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center gap-6 lg:gap-8 items-center h-12 relative w-full overflow-x-auto no-scrollbar">
            {topBarCategories.map((category) => (
              <div 
                key={category}
                className="h-full flex items-center px-2 cursor-pointer group"
                onMouseEnter={() => handleInteraction(category)}
                onClick={() => handleInteraction(category)}
              >
                <span className={`text-sm font-semibold whitespace-nowrap transition-colors ${activeMenu === category ? 'text-blue-400' : 'text-slate-300 group-hover:text-blue-400'}`}>
                  {category}
                </span>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Search Bar Output (only on very small screens, maybe below header logic) - for now just skipped or within menu if requested. Let's add a quick search directly under top row for mobile */}
      <div className="md:hidden border-t border-slate-800 p-3 px-4 bg-slate-950">
         <div className="relative">
            <input 
              type="text" 
              placeholder="O que deseja procurar?" 
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-2.5 px-4 text-sm text-white outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-shadow placeholder-slate-400"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
              <Search className="w-5 h-5" />
            </button>
          </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-800 bg-slate-950 overflow-y-auto max-h-[70vh]"
          >
            <div className="px-4 py-6 space-y-6">
              {mainCategories.filter(c => c !== "Todas as categorias").map(mainCat => (
                <div key={mainCat}>
                  <h3 className="font-bold text-white mb-3 pb-2 border-b border-slate-800/50">{mainCat}</h3>
                  <ul className="space-y-3">
                    {subcategoriesData[mainCat].map(sub => (
                      <li key={sub}>
                        <a href="#" className="text-sm text-slate-400 hover:text-blue-400 inline-block">
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

      {/* Dropdown overlay (Desktop) */}
      <AnimatePresence>
        {activeMenu && subcategoriesData[activeMenu]?.length > 0 && activeMenu !== "Todas as categorias" && (
          <motion.div 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="hidden md:block absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-8">
                {subcategoriesData[activeMenu].map((item) => (
                  <a key={item} href="#" className="text-sm text-slate-300 hover:text-blue-400 hover:translate-x-1 inline-block transform transition-all duration-200">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Special Dropdown for "Todas as categorias" (Desktop) */}
        {activeMenu === "Todas as categorias" && (
          <motion.div 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="hidden md:block absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 shadow-2xl max-h-[70vh] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-8">
                {mainCategories.filter(c => c !== "Todas as categorias" && subcategoriesData[c].length > 0).map(mainCat => (
                  <div key={mainCat}>
                    <h3 className="font-bold text-white mb-4 border-b border-slate-700/50 pb-2">{mainCat}</h3>
                    <ul className="space-y-2">
                      {subcategoriesData[mainCat].map(sub => (
                        <li key={sub}>
                          <a href="#" className="text-sm text-slate-400 hover:text-blue-400 hover:translate-x-1 inline-block transform transition-all duration-200">
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

