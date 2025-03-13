
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const childElements = sectionRef.current?.querySelectorAll('.reveal-item');
    childElements?.forEach(el => {
      el.classList.remove('animate-fade-up');
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-3 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary reveal-item">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary/20 mx-auto reveal-item"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative reveal-item" style={{ transitionDelay: '0.2s' }}>
              <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-r from-slate-100 to-white blur-xl opacity-70"></div>
              <div className="glass rounded-2xl shadow-elevation overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Computer coding"
                  className="w-full h-full object-cover image-loading"
                  loading="lazy"
                  onLoad={(e) => (e.target as HTMLImageElement).classList.remove('image-loading')}
                />
              </div>
            </div>
            
            <div className="space-y-6 reveal-item" style={{ transitionDelay: '0.4s' }}>
              <p className="text-lg text-slate-700 leading-relaxed">
                I'm a third-year Computer Science student at Stanford University with a passion for software engineering, artificial intelligence, and user experience design.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                My journey in technology began when I built my first website at the age of 14. Since then, I've expanded my skills to include mobile development, machine learning, and full-stack web applications.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                When I'm not coding, you can find me playing basketball, reading science fiction, or exploring new hiking trails.
              </p>
              
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Current Focus
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Machine Learning', 'UI/UX Design'].map((item, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
