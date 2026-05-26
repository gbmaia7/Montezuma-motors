import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'motion/react';
import { useRef, useEffect } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefDesktop = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Trick to unlock scrubbing on mobile/iOS browsers
    // We attempt a brief play then pause to force the metadata/decoder to engage.
    const prepVideo = (video: HTMLVideoElement | null) => {
      if (video) {
        // Explicitly load
        video.load();
        // Attempt to play a fraction
        const p = video.play();
        if (p !== undefined) {
          p.then(() => {
            video.pause();
          }).catch(() => {
            // Autoplay blocked, it's okay, usually metadata is still fetched
          });
        }
      }
    };
    prepVideo(videoRefDesktop.current);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (videoRefDesktop.current && videoRefDesktop.current.duration) {
      videoRefDesktop.current.currentTime = latest * videoRefDesktop.current.duration;
    }
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  return (
    <section ref={containerRef} className="relative h-[calc(100vh-132px)] md:h-[400vh] w-full bg-slate-950">
      <div className="md:sticky md:top-36 h-full md:h-[calc(100vh-9rem)] w-full overflow-hidden flex items-center justify-center relative">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/80 to-slate-950 z-0 pointer-events-none"></div>
        
        {/* Scroll-controlled Video (Desktop) */}
        <video 
          ref={videoRefDesktop}
          src="/videos/video-carro.mp4" 
          className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen pointer-events-none"
          muted 
          playsInline
          preload="auto"
        />

        {/* Mobile static image background */}
        <div className="block md:hidden absolute inset-0 w-full h-full opacity-80 mix-blend-screen pointer-events-none">
          <img
            src="/carro-mobile-bg.png"
            alt="Car background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay Typography (Desktop) */}
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="hidden md:flex absolute inset-0 z-20 flex-col items-center justify-center pointer-events-none mt-10 px-4"
        >
          <div className="text-center">
            <h2 className="font-mono text-blue-400 text-sm tracking-[0.3em] uppercase mb-4">Tecnologia Automotiva</h2>
          </div>
          <div className="text-center">
            <h1 className="font-sans text-7xl font-bold text-white tracking-tighter mix-blend-plus-lighter leading-[1.1]">
              O FUTURO EM <br/> AUTOPEÇAS
            </h1>
            <p className="mt-6 text-white max-w-lg mx-auto font-sans text-xl leading-relaxed font-semibold drop-shadow-md px-2">
              O maior ecossistema de peças e performance desenhado para a melhoria do seu veículo.
            </p>
          </div>
        </motion.div>

        {/* Overlay Typography (Mobile) */}
        <div className="md:hidden flex absolute inset-0 z-20 flex-col pointer-events-none h-full">
          <div className="text-center w-full absolute top-[35%] px-4">
            <h2 className="font-mono text-blue-400 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold drop-shadow-md">Tecnologia Automotiva</h2>
          </div>
          <div className="text-center w-full absolute bottom-8 px-4">
            <h1 className="font-sans text-4xl font-bold text-white tracking-tighter mix-blend-plus-lighter leading-[1.1]">
              O FUTURO EM <br/> AUTOPEÇAS
            </h1>
            <p className="mt-3 text-white max-w-lg mx-auto font-sans text-sm leading-relaxed font-semibold drop-shadow-md px-2">
              O maior ecossistema de peças e performance desenhado para a melhoria do seu veículo.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="hidden md:flex absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 pointer-events-none z-20"
        >
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Role para Explorar</span>
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
        </motion.div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxSDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+CjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPgo8L3N2Zz4=')] opacity-50 pointer-events-none"></div>
      </div>
    </section>
  );
}
