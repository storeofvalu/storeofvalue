
import React, { useEffect, useRef } from 'react';

interface ManifestoPointProps {
  number: string;
  title: string;
  content: string;
  index: number;
}

const ManifestoPoint: React.FC<ManifestoPointProps> = ({ number, title, content, index }) => {
  const pointRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (pointRef.current) {
      observer.observe(pointRef.current);
    }
    
    return () => {
      if (pointRef.current) {
        observer.unobserve(pointRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={pointRef} 
      className={`py-24 border-t border-border opacity-0 translate-y-10 transition-all duration-700 ease-out`} 
      style={{ transitionDelay: `${index * 100}ms` }}
      id="principles"
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <div className="text-sm font-medium text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full">{number}</div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-primary tracking-tight">{title}</h2>
        <p className="text-lg md:text-xl text-primary/90 leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default ManifestoPoint;
