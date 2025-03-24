
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'tools' | 'design' | 'soft';
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

interface Certification {
  name: string;
}

interface Language {
  name: string;
}

const technicalSkills: Skill[] = [
  { name: 'Python', level: 90, category: 'programming' },
  { name: 'JavaScript', level: 85, category: 'programming' },
  { name: 'Java', level: 80, category: 'programming' },
  { name: 'React', level: 85, category: 'programming' },
  { name: 'SQL', level: 80, category: 'programming' },
  { name: 'MongoDB', level: 75, category: 'tools' },
  { name: 'CSS', level: 85, category: 'design' },
  { name: 'OpenCV', level: 70, category: 'tools' },
  { name: 'Flask', level: 85, category: 'programming' },
  { name: 'HTML', level: 90, category: 'programming' },
];

const softSkills: Skill[] = [
  { name: 'Organizational and time-management skills', level: 90, category: 'soft' },
  { name: 'Exceptional communication and interpersonal skills', level: 85, category: 'soft' },
  { name: 'Ability to work independently and as part of a team', level: 90, category: 'soft' },
  { name: 'Detail-oriented and able to handle multiple tasks simultaneously', level: 80, category: 'soft' },
  { name: 'High tolerance of stress and enjoys responsibilities', level: 85, category: 'soft' },
];

const education: Education[] = [
  {
    degree: 'B.Tech (Computer Science)',
    institution: 'Vasireddy Venkatadri Institute of Technology',
    period: '2021-2025',
    description: 'Guntur, GPA: 8.5',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College',
    period: '2019-2021',
    description: 'Vijayawada, percentage (98%)',
  },
  {
    degree: 'SSC',
    institution: 'Geethanjali English Medium High School',
    period: '2019',
    description: 'Vijayawada, percentage (95%)',
  },
];

const certifications: Certification[] = [
  { name: 'Springboard: Python Intermediate, Step-by-Step Machine Learning with Python' },
  { name: 'Hacker Rank: Python, Java, SQL, CSS, Problem Solving' },
  { name: 'Coursera: Foundations of Cybersecurity, Play It Safe: Manage Security Risks' },
  { name: 'Google: Google Cloud Computing Foundations' },
  { name: 'GreatLearning: DataScience, DevOps' },
  { name: 'Solo Learn: HTML, Learning C, CSS, JAVASCRIPT, PYTHON, SQL' },
  { name: 'ChatGPT, UI/UX design' },
];

const languages: Language[] = [
  { name: 'English' },
  { name: 'Telugu' },
  { name: 'Hindi' },
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
          {/* Technical Skills Section */}
          <div className="space-y-8 reveal-item">
            <h3 className="text-2xl font-bold text-primary">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
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
                        width: `${skill.level}%`,
                        animation: 'progress 1.5s ease-out forwards',
                        animationDelay: `${0.1 * index}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <style>
              {`
                @keyframes progress {
                  from { width: 0%; }
                  to { width: 100%; }
                }
              `}
            </style>

            {/* Soft Skills Section */}
            <h3 className="text-2xl font-bold text-primary mt-10">Soft Skills</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              {softSkills.map((skill, index) => (
                <li key={index}>{skill.name}</li>
              ))}
            </ul>

            {/* Languages Section */}
            <h3 className="text-2xl font-bold text-primary mt-10">Languages Known</h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((language, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium"
                >
                  {language.name}
                </span>
              ))}
            </div>
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
            
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mt-10">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Certifications
              </h4>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 flex-shrink-0 text-blue-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{cert.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
