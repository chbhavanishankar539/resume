
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Study Assistant",
    description: "An intelligent application that helps students organize study materials and provides personalized learning recommendations.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "Machine Learning"],
    link: "#",
  },
  {
    id: 2,
    title: "Eco-Track Mobile App",
    description: "A mobile application that tracks carbon footprint and suggests personalized ways to reduce environmental impact.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Firebase", "Charts"],
    link: "#",
  },
  {
    id: 3,
    title: "Smart Campus Map",
    description: "Interactive university campus map with real-time updates on classroom availability and events.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "Google Maps API", "Real-time"],
    link: "#",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
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
    <section id="projects" className="section-padding bg-slate-50" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-10">
        <div className="space-y-3 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary reveal-item">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto reveal-item"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto reveal-item">
            A selection of my academic and personal projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "group relative bg-white rounded-xl overflow-hidden shadow-subtle transition-all duration-300 hover:shadow-elevation reveal-item",
                activeProject === project.id && "ring-2 ring-primary/20"
              )}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 image-loading"
                  loading="lazy"
                  onLoad={(e) => (e.target as HTMLImageElement).classList.remove('image-loading')}
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                <p className="text-slate-600">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View Project
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
