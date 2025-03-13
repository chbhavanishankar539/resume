
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'tools' | 'design';
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const skills: Skill[] = [
  { name: 'JavaScript', level: 90, category: 'programming' },
  { name: 'Python', level: 85, category: 'programming' },
  { name: 'TypeScript', level: 80, category: 'programming' },
  { name: 'React.js', level: 87, category: 'programming' },
  { name: 'Node.js', level: 75, category: 'programming' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'AWS', level: 65, category: 'tools' },
  { name: 'Figma', level: 80, category: 'design' },
  { name: 'UI/UX', level: 75, category: 'design' },
];

const education: Education[] = [
  {
    degree: 'B.S. Computer Science',
    institution: 'Stanford University',
    period: '2021 - Present',
    description: 'Focusing on artificial intelligence and human-computer interaction. GPA: 3.8/4.0',
  },
  {
    degree: 'High School Diploma',
    institution: 'Westlake High School',
    period: '2017 - 2021',
    description: 'Graduated with honors. President of Computer Science Club and Math Team Captain.',
  },
];

const Skills = () => {
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
    <section id="skills" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-10">
        <div className="space-y-3 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary reveal-item">
            Skills & Education
          </h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto reveal-item"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills Section */}
          <div className="space-y-8 reveal-item">
            <h3 className="text-2xl font-bold text-primary">Technical Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full transition-all duration-1000 ease-out",
                        skill.category === 'programming' ? 'bg-blue-500' :
                        skill.category === 'tools' ? 'bg-purple-500' : 'bg-teal-500'
                      )}
                      style={{ 
                        width: '0%',
                        animation: 'progress 1.5s ease-out forwards',
                        animationDelay: `${0.1 * index}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <style jsx>{`
              @keyframes progress {
                from { width: 0%; }
                to { width: var(--level); }
              }
            `}</style>
            
            {skills.map((skill, index) => (
              <style key={index} jsx>{`
                div:nth-child(${index + 1}) > div:nth-child(2) > div {
                  --level: ${skill.level}%;
                }
              `}</style>
            ))}
          </div>
          
          {/* Education Section */}
          <div className="space-y-8 reveal-item" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-primary">Education</h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 border-l-2 border-slate-200 pb-8 last:pb-0"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-primary">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-wrap items-center text-slate-700">
                      <span className="font-medium">{edu.institution}</span>
                      <span className="mx-2 text-slate-400">•</span>
                      <span className="text-slate-500">{edu.period}</span>
                    </div>
                    <p className="text-slate-600">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Certifications
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 flex-shrink-0 text-blue-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">AWS Certified Developer Associate</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 flex-shrink-0 text-blue-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Google UX Design Professional Certificate</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 flex-shrink-0 text-blue-500 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Machine Learning Specialization – Stanford Online</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
