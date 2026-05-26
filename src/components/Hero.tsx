import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && videoRef.current.duration) {
      // Small optimization: only update if the difference is noticeable
      videoRef.current.currentTime = latest * videoRef.current.duration;
    }
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  return (
    <section ref={containerRef} className="relative h-[400vh] w-full bg-slate-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/80 to-slate-950 z-0 pointer-events-none"></div>
        
        {/* Scroll-controlled Video */}
        <video 
          ref={videoRef}
          src="https://i.imgur.com/jWoVERp.mp4" 
          className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen pointer-events-none"
          muted 
          playsInline
          preload="auto"
        />

        {/* Overlay Typography */}
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none mt-20"
        >
          <div className="text-center">
            <h2 className="font-mono text-blue-400 text-sm tracking-[0.3em] uppercase mb-4">Precision Engineered</h2>
            <h1 className="font-sans text-5xl md:text-7xl font-bold text-white tracking-tighter mix-blend-plus-lighter">
              NEXT-GEN <br/> AUTOMOTIVE
            </h1>
            <p className="mt-6 text-slate-400 max-w-lg mx-auto font-sans text-xl">
              Modular performance parts ecosystem designed for the future of mobility.
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20"
        >
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Scroll to Explode</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
        </motion.div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxSDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+CjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPgo8L3N2Zz4=')] opacity-50 pointer-events-none"></div>
      </div>
    </section>
  );
}
