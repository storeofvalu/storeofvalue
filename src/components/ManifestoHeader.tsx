
import React from 'react';

const ManifestoHeader = () => {
  return (
    <header className="pt-28 pb-20 px-6 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-heading font-bold tracking-tight text-primary mb-12">
          Manifesto
        </h1>
        <p className="text-xl md:text-2xl text-primary/90 leading-relaxed">
          This manifesto outlines our principles for modern supervision - a framework for how we think about supervision in the age of AI systems.
        </p>
      </div>
    </header>
  );
};

export default ManifestoHeader;
