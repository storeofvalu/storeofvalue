
import React from 'react';

const ManifestoHeader = () => {
  return (
    <header id="manifesto" className="pt-28 pb-16 px-6 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-8">
          The Manifesto
        </h2>
        <div className="h-1 w-16 bg-amber-500 rounded mb-10"></div>
        <p className="text-xl md:text-2xl text-primary/90 leading-relaxed">
          Throughout human history, we have sought reliable ways to <span className="text-amber-500 font-medium">preserve wealth</span> across time. Today, Bitcoin emerges as the <span className="text-amber-500 font-medium">digital answer</span> to a question asked for millennia: how do we protect value from the erosion of time?
        </p>
      </div>
    </header>
  );
};

export default ManifestoHeader;
