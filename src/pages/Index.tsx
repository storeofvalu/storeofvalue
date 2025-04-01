
import React from 'react';
import ManifestoHeader from '../components/ManifestoHeader';
import ManifestoPoint from '../components/ManifestoPoint';
import Footer from '../components/Footer';

const manifestoPoints = [
  {
    number: '01',
    title: 'Safety is the foundation of supervision',
    content: 'The most important responsibility of supervision is ensuring safety. Systems must be designed and monitored with safety as the utmost priority, protecting users from harm and preventing misuse.'
  },
  {
    number: '02',
    title: 'Supervision requires transparency',
    content: 'Effective supervision demands complete transparency about how systems work, what data they use, and how decisions are made. This transparency builds trust and enables proper oversight.'
  },
  {
    number: '03',
    title: 'Human judgment remains essential',
    content: 'Even as AI systems become more autonomous, human judgment remains irreplaceable. The human perspective provides ethical consideration, contextual understanding, and accountability that automated systems cannot.'
  },
  {
    number: '04',
    title: 'Continuous improvement is necessary',
    content: 'The landscape of technology constantly evolves, and so must our supervision frameworks. We commit to continuously learning, iterating, and improving supervision methods to address new challenges.'
  },
  {
    number: '05',
    title: 'Supervision must be inclusive',
    content: 'Effective supervision considers diverse perspectives and ensures systems work well for all users. We must actively work to identify and mitigate biases and ensure our systems serve everyone fairly.'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <ManifestoHeader />
        
        <main>
          {manifestoPoints.map((point, index) => (
            <ManifestoPoint 
              key={index}
              number={point.number}
              title={point.title}
              content={point.content}
            />
          ))}
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
