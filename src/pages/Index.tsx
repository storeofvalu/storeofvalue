
import React from 'react';
import ManifestoHeader from '../components/ManifestoHeader';
import ManifestoPoint from '../components/ManifestoPoint';
import Footer from '../components/Footer';

const manifestoPoints = [
  {
    number: '01',
    title: 'Scarcity defines value',
    content: "Throughout history, humans have valued scarce resources. From gold and silver to art and land, scarcity has always been the foundation of value storage. Bitcoin's mathematically enforced cap of 21 million coins creates digital scarcity that cannot be manipulated or inflated away."
  },
  {
    number: '02',
    title: 'Trust requires verification',
    content: "Traditional value systems rely on trusted third parties. Bitcoin eliminates this need through transparent code and a decentralized network where anyone can verify transactions and holdings without permission. This radical transparency builds a foundation of trust through mathematics rather than institutions."
  },
  {
    number: '03',
    title: 'Sovereignty is essential',
    content: "True ownership means complete control. Bitcoin enables unprecedented financial sovereignty by allowing individuals to secure their wealth with cryptographic keys. No entity—governmental or corporate—can confiscate or freeze properly secured bitcoin, returning financial autonomy to the individual."
  },
  {
    number: '04',
    title: 'Durability transcends the physical',
    content: "Physical stores of value degrade or require protection. Gold can be seized, art can burn, and property rights can be violated. Bitcoin exists as information secured by the largest computing network in human history, making it resilient against physical threats and potentially eternal in nature."
  },
  {
    number: '05',
    title: 'Adoption follows understanding',
    content: "The journey to a better money begins with education. As more people comprehend Bitcoin's fundamental properties and historical context, its adoption as a superior store of value becomes inevitable. Knowledge, not speculation, drives sustainable value preservation."
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
