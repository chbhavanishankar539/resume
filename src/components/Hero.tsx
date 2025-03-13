
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
              Student Portfolio
            </span>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-primary animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <span>Hello, I'm </span>
              <span className="text-gradient">Alex Chen</span>
            </h1>
            
            <p 
              className="text-lg md:text-xl text-slate-600 max-w-xl animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              Computer Science student passionate about creating elegant solutions to complex problems.
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
          </div>
          
          <div className="md:col-span-5 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl transform rotate-3 scale-105 opacity-70"></div>
              <div className="glass rounded-2xl shadow-elevation overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Student working on laptop"
                  className="w-full h-80 object-cover"
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
