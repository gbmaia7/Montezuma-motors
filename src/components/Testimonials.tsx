import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Eduardo",
    role: "Oficina São José",
    content: "A qualidade das peças e a rapidez na entrega da Montezuma Motors transformaram a rotina da nossa oficina. Confiança total em toda manutenção.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mariana Souza",
    role: "Cliente Final",
    content: "Encontrei facilmente o que precisava para a revisão do meu carro. O filtro de compatibilidade do site funcionou perfeitamente.",
    rating: 5,
  },
  {
    id: 3,
    name: "Roberto Almeida",
    role: "Gestor de Frota",
    content: "Trabalhamos com a Montezuma há bastante tempo. A diversidade de itens, óleos originais e peças de suspensão garantem durabilidade aos veículos.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-slate-950 border-t border-slate-900/50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950 to-slate-950 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            A opinião de quem confia
          </h2>
          <p className="font-mono text-xs text-slate-400 uppercase tracking-widest max-w-2xl mx-auto">
            Depoimentos dos nossos clientes sobre a Montezuma Motors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl relative group hover:border-slate-700 transition-colors shadow-lg flex flex-col"
            >
              <Quote className="w-10 h-10 text-slate-800 absolute top-6 right-6 group-hover:text-slate-700 transition-colors" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-[#E31837] text-[#E31837]" />
                ))}
              </div>
              
              <p className="font-sans text-slate-300 text-sm leading-relaxed mb-8 flex-1">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto">
                <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
