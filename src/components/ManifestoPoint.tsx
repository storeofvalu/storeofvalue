
import React from 'react';

interface ManifestoPointProps {
  number: string;
  title: string;
  content: string;
}

const ManifestoPoint: React.FC<ManifestoPointProps> = ({ number, title, content }) => {
  return (
    <div className="py-24 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 text-sm font-medium text-primary/60">{number}</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-primary tracking-tight">{title}</h2>
        <p className="text-lg md:text-xl text-primary/90 leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default ManifestoPoint;
