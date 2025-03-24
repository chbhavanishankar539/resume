
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, BookOpen, ListCheck, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Skill {
  name: string;
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
  { name: 'Python', category: 'programming' },
  { name: 'JavaScript', category: 'programming' },
  { name: 'Java', category: 'programming' },
  { name: 'React', category: 'programming' },
  { name: 'SQL', category: 'programming' },
  { name: 'MongoDB', category: 'tools' },
  { name: 'CSS', category: 'design' },
  { name: 'OpenCV', category: 'tools' },
  { name: 'Flask', category: 'programming' },
  { name: 'HTML', category: 'programming' },
];

const softSkills: Skill[] = [
  { name: 'Organizational and time-management skills', category: 'soft' },
  { name: 'Exceptional communication and interpersonal skills', category: 'soft' },
  { name: 'Ability to work independently and as part of a team', category: 'soft' },
  { name: 'Detail-oriented and able to handle multiple tasks simultaneously', category: 'soft' },
  { name: 'High tolerance of stress and enjoys responsibilities', category: 'soft' },
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
          {/* Technical Skills Section - Improved UI */}
          <div className="space-y-8 reveal-item">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <ListCheck className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Technical Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index}
                  className={cn(
                    "p-3 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-elevation",
                    skill.category === 'programming' ? 'bg-blue-50 text-blue-700' :
                    skill.category === 'tools' ? 'bg-purple-50 text-purple-700' : 
                    'bg-teal-50 text-teal-700'
                  )}
                >
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
            
            {/* Soft Skills Section */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Soft Skills</h3>
              </div>
              
              <Card className="border-0 shadow-subtle">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {softSkills.map((skill, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 mt-0.5 text-primary mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700">{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Languages Section */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-bold text-primary">Languages Known</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {languages.map((language, index) => (
                  <Badge 
                    key={index} 
                    variant="outline"
                    className="px-4 py-3 text-base font-medium border-2 border-slate-200"
                  >
                    {language.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {/* Education Section - Improved UI */}
          <div className="space-y-8 reveal-item" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className={cn(
                    "overflow-hidden transition-all duration-300 hover:shadow-elevation hover:-translate-y-1",
                    index === 0 ? "border-l-4 border-l-blue-500" :
                    index === 1 ? "border-l-4 border-l-purple-500" :
                    "border-l-4 border-l-teal-500"
                  )}
                >
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-semibold text-primary">
                          {edu.degree}
                        </h4>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                          {edu.period}
                        </span>
                      </div>
                      <div className="text-slate-700 font-medium">
                        {edu.institution}
                      </div>
                      <p className="text-slate-600">
                        {edu.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mt-10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-primary">
                  Certifications
                </h4>
                <a 
                  href="https://drive.google.com/drive/folders/1F-A-BJEuS-yUP4b9XWvc8EEl6On07vsh?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View all certificates <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start p-3 bg-white rounded-lg border border-slate-100">
                    <div className="h-5 w-5 flex-shrink-0 text-blue-500 mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{cert.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center">
                <Button 
                  asChild
                  variant="outline"
                  className="group"
                >
                  <a 
                    href="https://drive.google.com/drive/folders/1F-A-BJEuS-yUP4b9XWvc8EEl6On07vsh?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4 group-hover:text-primary" />
                    View Certificate Drive
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
