export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
             <div className="flex items-center cursor-pointer mb-6">
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-white uppercase">
                  Montezuma
                </span>
                <span className="font-semibold text-sm tracking-widest text-[#E31837] uppercase">
                  Motors
                </span>
              </div>
            </div>
            <p className="font-sans text-slate-500 text-sm leading-relaxed">
              Sua parceira de confiança para peças de alta qualidade. Oferecemos o melhor ecossistema de partes automotivas para a manutenção perfeita.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6">Institucional</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-sans text-sm text-slate-400 hover:text-[#E31837] transition-colors">Nossa História</a></li>
              <li><a href="#" className="font-sans text-sm text-slate-400 hover:text-[#E31837] transition-colors">Parcerias</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6">Atendimento</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-sans text-sm text-slate-400 hover:text-[#E31837] transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="font-sans text-sm text-slate-400 hover:text-[#E31837] transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="font-sans text-sm text-slate-400 hover:text-[#E31837] transition-colors">Política de Entregas</a></li>
              <li><a href="#" className="font-sans text-sm text-slate-400 hover:text-[#E31837] transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6">Suporte Online</h4>
            <div className="bg-slate-900/50 p-4 rounded-lg flex items-center justify-between border border-slate-800">
              <span className="font-mono text-xs text-slate-400 uppercase">Sistema</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-emerald-400 uppercase">Operacional</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Montezuma Motors. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-mono text-[10px] text-slate-500 hover:text-slate-300 uppercase tracking-widest transition-colors">Privacidade</a>
            <a href="#" className="font-mono text-[10px] text-slate-500 hover:text-slate-300 uppercase tracking-widest transition-colors">Termos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
