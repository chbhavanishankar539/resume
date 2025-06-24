import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  details: string[];
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Video Downloader and Chatbot Integration",
    description: "Developed a web application with YouTube data integration and chatbot functionality.",
    technologies: ["React", "JavaScript", "OpenAI API", "YouTube Data API", "Axios", "HTML", "CSS"],
    details: [
      "Developed a comprehensive using React to download and display YouTube videos across the YouTube platform",
      "Implemented a search functionality to fetch and display video results dynamically with an option to load more videos",
      "Created a chatbot using the OpenAI API, enabling the bot to answer user queries efficiently within the application",
      "Utilized Axios for handling API requests and managing state with React hooks for seamless user interactions",
      "Ensured responsive design throughout the app with customized layouts, including fixed search components and interactive elements",
      "Handled API errors and implemented feedback mechanisms to enhance the application's reliability and usability"
    ],
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Movie Recommendation System",
    description: "A web-based Movie Recommendation System using Python and Flask with NLP capabilities.",
    technologies: ["Python", "Flask", "NLP", "Machine Learning", "Pandas", "scikit-learn", "HTML", "CSS", "TF-IDF"],
    details: [
      "Developed a web-based Movie Recommendation System using Python and Flask, which provides users with personalized movie suggestions based on the genres of a given movie title",
      "The system leverages Natural Language Processing (NLP) techniques and the TF-IDF (Term Frequency-Inverse Document Frequency) vectorization method to analyze and compute the similarity between movie genres",
      "Technologies Used: Python, Flask, Pandas, scikit-learn, NLP, HTML, CSS",
      "Data Handling: Efficiently handled and processed a dataset containing multiple attributes of movies from a CSV file",
      "NLP Techniques: Applied various text processing techniques to clean and prepare the textual data for analysis",
      "Machine Learning: Employed the TF-IDF vectorizer to convert textual data into numerical form and used cosine similarity to compute the closeness of movie genres",
      "User Experience: Enhanced user interaction by providing additional movie details (rating and director) in the recommendation results"
    ],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "FealtyX Bug Tracker",
    description: "A modern bug and task tracking application with real-time updates, role-based access, and a beautiful dashboard.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Prisma (PostgreSQL)",
      "NextAuth.js",
      "Zustand",
      "Recharts",
      "Headless UI"
    ],
    details: [
      "User authentication with role-based access control (Developer and Manager roles)",
      "Task/Bug management with status tracking and priority levels",
      "Time tracking for tasks with start/stop and duration calculation",
      "Dashboard with task statistics, trends, and recent activity",
      "Responsive design for desktop and mobile",
      "Real-time updates for collaborative work",
      "Secure session management with NextAuth.js",
      "Data visualization with Recharts"
    ],
    image: "https://raw.githubusercontent.com/chbhavanishankar539/Bug/master/public/og-image.png",
    link: "https://bug-wheat.vercel.app/login"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
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

  const toggleProjectDetails = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="section-padding bg-slate-50" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-10">
        <div className="space-y-3 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary reveal-item">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto reveal-item"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto reveal-item">
            A selection of my technical projects showcasing my skills and expertise
          </p>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => {
            const cardContent = (
              <div 
                key={project.id}
                className={cn(
                  "group bg-white rounded-xl overflow-hidden shadow-subtle transition-all duration-300 hover:shadow-elevation reveal-item",
                  activeProject === project.id && "ring-2 ring-primary/20"
                )}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 image-loading"
                      loading="lazy"
                      onLoad={(e) => (e.target as HTMLImageElement).classList.remove('image-loading')}
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <button 
                      onClick={() => toggleProjectDetails(project.id)}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      {expandedProject === project.id ? 'Show Less' : 'View Details'}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={cn(
                          "ml-1 h-4 w-4 transition-transform",
                          expandedProject === project.id ? "rotate-180" : "group-hover:translate-x-1"
                        )} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        {expandedProject === project.id ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
                
                {expandedProject === project.id && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="w-full h-px bg-slate-200 mb-6"></div>
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-primary">Key Features & Implementation</h4>
                      <ul className="space-y-2">
                        {project.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <div className="h-5 w-5 flex-shrink-0 text-blue-500 mr-2 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-slate-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
            return project.link ? (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block' }}
              >
                {cardContent}
              </a>
            ) : cardContent;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
