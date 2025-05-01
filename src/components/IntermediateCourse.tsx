import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Play, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import BitcoinLogoIcon from './BitcoinLogoIcon';
import { ModuleProps } from './BeginnerCourse';
import CourseLayout from './CourseLayout';

const Module: React.FC<ModuleProps> = ({ title, duration, description, status, number, path }) => {
  return (
    <Card className={`border ${status === 'completed' ? 'border-amber-500/50 bg-amber-500/5' : 'border-border bg-card'}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {status === 'completed' ? (
              <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2" />
            ) : status === 'available' ? (
              <div className="h-5 w-5 rounded-full bg-amber-500 text-amber-900 flex items-center justify-center text-xs font-medium mr-2">
                {number}
              </div>
            ) : (
              <Lock className="h-5 w-5 text-muted-foreground mr-2" />
            )}
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <CardDescription className="text-xs">{duration}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        {path ? (
          <Button 
            variant={status === 'locked' ? 'outline' : 'default'} 
            size="sm" 
            disabled={status === 'locked'}
            className={status === 'available' ? 'bg-amber-500 hover:bg-amber-600 text-white' : ''}
            asChild
          >
            <Link to={path}>
              {status === 'completed' ? 'Review' : status === 'available' ? 'Start' : 'Locked'}
              {status !== 'locked' && <Play className="ml-2 h-3 w-3" />}
            </Link>
          </Button>
        ) : (
          <Button 
            variant={status === 'locked' ? 'outline' : 'default'} 
            size="sm" 
            disabled={status === 'locked'}
            className={status === 'available' ? 'bg-amber-500 hover:bg-amber-600 text-white' : ''}
          >
            {status === 'completed' ? 'Review' : status === 'available' ? 'Start' : 'Locked'}
            {status !== 'locked' && <Play className="ml-2 h-3 w-3" />}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const IntermediateCourse = () => {
  const modules: ModuleProps[] = [
    {
      title: "Mining and Consensus",
      duration: "40 min",
      description: "Learn about Bitcoin's proof-of-work mining, consensus mechanisms, and how miners secure the network through economic incentives.",
      status: 'available',
      number: 1,
      path: '/learn/intermediate/consensus-mining'
    },
    {
      title: "Bitcoin Design Principles",
      duration: "35 min",
      description: "Explore the core design philosophy, cryptographic foundations, consensus mechanisms, and game theory that make Bitcoin unique.",
      status: 'available',
      number: 2,
      path: '/learn/intermediate/bitcoin-design'
    },
    {
      title: "Bitcoin Economics",
      duration: "40 min",
      description: "Analyze Bitcoin through the lens of Austrian economics, game theory, and network effects that drive its value proposition.",
      status: 'locked',
      number: 3
    },
    {
      title: "Understanding Bitcoin's Security Model",
      duration: "45 min",
      description: "Examine the cryptographic foundations, proof-of-work consensus, and game-theoretic incentives that secure the Bitcoin network.",
      status: 'locked',
      number: 4
    },
    {
      title: "Advanced Bitcoin Storage Techniques",
      duration: "30 min",
      description: "Learn about cold storage, hardware wallets, seed phrases, and best practices for long-term Bitcoin security.",
      status: 'locked',
      number: 5
    },
    {
      title: "Bitcoin's Monetary Policy & Inflation",
      duration: "35 min",
      description: "Compare Bitcoin's fixed supply schedule to traditional monetary policies and understand implications for inflation resistance.",
      status: 'locked',
      number: 6
    }
  ];

  return (
    <CourseLayout>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center mb-6 gap-2">
          <Link to="/learn" className="text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">
            Intermediate Course
          </h1>
        </div>

        <div className="bg-amber-500/10 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Course Overview</h2>
          <p className="text-muted-foreground mb-4">
            Deepen your understanding of Bitcoin's value proposition through economic principles, 
            technical architecture, and practical applications. This course builds on basic Bitcoin knowledge.
          </p>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-1 text-amber-500" />
              6 Modules
            </span>
            <span>~3 hours total</span>
            <span>Some prior Bitcoin knowledge recommended</span>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Course Modules</h2>
          {modules.map((module, index) => (
            <Module
              key={index}
              title={module.title}
              duration={module.duration}
              description={module.description}
              status={module.status}
              number={module.number}
              path={module.path}
            />
          ))}
        </div>

        <div className="flex justify-between pt-6">
          <Button variant="outline" asChild>
            <Link to="/learn">Learning Paths</Link>
          </Button>
          <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
            <Link to="/learn/intermediate/consensus-mining">Continue Learning</Link>
          </Button>
        </div>
      </div>
    </CourseLayout>
  );
};

export default IntermediateCourse; 