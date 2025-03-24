
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
              Summary
            </h2>
            <div className="w-20 h-1 bg-primary/20 mx-auto reveal-item"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative reveal-item" style={{ transitionDelay: '0.2s' }}>
              <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-r from-slate-100 to-white blur-xl opacity-70"></div>
              <div className="glass rounded-2xl shadow-elevation overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Computer coding"
                  className="w-full h-full object-cover image-loading"
                  loading="lazy"
                  onLoad={(e) => (e.target as HTMLImageElement).classList.remove('image-loading')}
                />
              </div>
            </div>
            
            <div className="space-y-6 reveal-item" style={{ transitionDelay: '0.4s' }}>
              <p className="text-lg text-slate-700 leading-relaxed">
                A driven BTech student, boasting an impressive GPA of 8.5, waiting for a great platform for the application of my knowledge and skills.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                Passionate about leveraging academic excellence to contribute effectively to innovative projects and initiatives, I am committed to continuous learning and growth in new technologies.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                With a strong foundation in computer science and a keen interest in software development, I'm eager to apply my skills to real-world challenges.
              </p>
              
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Technical Focus
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java', 'JavaScript', 'React', 'SQL', 'MongoDB'].map((item, index) => (
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
