
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = x * 20 - 10; // -10 to 10px
      const moveY = y * 20 - 10; // -10 to 10px
      
      const elements = containerRef.current.querySelectorAll('[data-parallax]');
      elements.forEach(el => {
        const htmlEl = el as HTMLElement;
        const speed = parseFloat(htmlEl.dataset.parallax || "1");
        htmlEl.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-blue-100/40"
          data-parallax="0.5"
        />
        <div 
          className="absolute bottom-1/3 -left-24 w-72 h-72 rounded-full bg-pink-100/30"
          data-parallax="0.8"
        />
      </div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span 
              className="inline-block px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              Portfolio
            </span>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-primary animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <span>Hello, I'm </span>
              <span className="text-gradient">Chidella Bhavani Shankar</span>
            </h1>
            
            <p 
              className="text-lg md:text-xl text-slate-600 max-w-xl animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              A driven BTech student with a GPA of 8.5, passionate about leveraging academic excellence to contribute effectively to innovative projects and initiatives.
            </p>
            
            <div 
              className="flex flex-wrap gap-4 pt-3 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <a 
                href="#projects"
                className="px-6 py-3 text-sm font-medium text-white bg-primary rounded-lg transition-transform hover:-translate-y-0.5 shadow-subtle"
              >
                View My Work
              </a>
              <a 
                href="#contact"
                className="px-6 py-3 text-sm font-medium text-primary bg-white border border-slate-200 rounded-lg transition-transform hover:-translate-y-0.5 shadow-subtle"
              >
                Contact Me
              </a>
            </div>

            <div className="flex flex-col gap-2 pt-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-slate-700 font-medium">8919142172</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-slate-700 font-medium">ch.vnsshankar@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-slate-700 font-medium">Vinukonda</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl transform rotate-3 scale-105 opacity-70"></div>
              <div className="glass rounded-2xl shadow-elevation overflow-hidden relative">
                <img 
                  src="/lovable-uploads/7b18336b-bb93-4201-bf26-a6ba789f64d9.png"
                  alt="Profile image"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  onLoad={(e) => (e.target as HTMLImageElement).classList.remove('image-loading')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
