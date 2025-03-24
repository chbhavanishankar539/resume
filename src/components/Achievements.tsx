
import React, { useEffect, useRef } from 'react';

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
    title: "Student Ambassador at LetsUpGrad",
    description: "Represented the platform and facilitated educational initiatives",
  },
  {
    title: "Campus Executive at SkillVertx",
    description: "Led skill development programs and workshops on campus",
  },
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

const bootcamps: string[] = [
  "ChatGpt",
  "FullWind CSS",
  "Python",
  "Java"
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
            Achievements & Participations
          </h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto reveal-item"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Achievements Section */}
          <div className="space-y-8 reveal-item">
            <h3 className="text-2xl font-bold text-primary mb-6">Achievements</h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 border-l-2 border-slate-200 pb-6 last:pb-0"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-primary">
                      {achievement.title}
                    </h4>
                    <p className="text-slate-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Links & Bootcamps Section */}
          <div className="space-y-10 reveal-item" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Profiles & Links</h3>
              <div className="space-y-4">
                {links.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100 transition-all hover:shadow-elevation hover:-translate-y-1"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-slate-700">{link.name}</span>
                    <svg className="ml-auto h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Bootcamps</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {bootcamps.map((bootcamp, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-slate-50 rounded-lg border border-slate-100 text-center"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-slate-700">{bootcamp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
