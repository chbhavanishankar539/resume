
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Link as LinkIcon } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
}

interface Link {
  name: string;
  url: string;
}

const achievements: Achievement[] = [
  {
    title: "Volunteering for ACM Events",
    description: "Actively participated in organizing and supporting ACM events",
  },
  {
    title: "Participated in Codingcontest",
    description: "Competed in coding challenges demonstrating problem-solving skills",
  },
  {
    title: "Volunteering for KVR Events",
    description: "Contributed to the success of various campus events",
  },
  {
    title: "Participated in KVR Hackathon",
    description: "Collaborated in a team to develop innovative solutions under time constraints",
  },
];

const links: Link[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chidella-bhavani-shankar-b76979ac/",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/ch_vnshankar",
  },
  {
    name: "GoogleCloud",
    url: "https://www.cloudskillsboost.google/public_profiles/986dcc1-0c553-49d-87a6-5c850738a7fa",
  },
];

const Achievements = () => {
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
    <section id="achievements" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-10">
        <div className="space-y-3 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary reveal-item">
            Achievements & Profiles
          </h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto reveal-item"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Achievements Section */}
          <div className="space-y-8 reveal-item">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Achievements</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden transition-all duration-300 hover:shadow-elevation hover:-translate-y-1 border-t-4 border-t-amber-400"
                >
                  <CardContent className="p-5">
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-primary">
                        {achievement.title}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Links Section */}
          <div className="space-y-8 reveal-item" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <LinkIcon className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Profiles & Links</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {links.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-5 bg-slate-50 rounded-lg border border-slate-100 transition-all hover:shadow-elevation hover:-translate-y-1 hover:bg-white"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-700">{link.name}</h4>
                    <p className="text-sm text-slate-500 truncate max-w-xs">{link.url}</p>
                  </div>
                  <svg className="ml-auto h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
