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

const AdvancedCourse = () => {
  const modules: ModuleProps[] = [
    {
      title: "Bitcoin Scripting and Smart Contracts",
      duration: "45 min",
      description: "Dive deep into Bitcoin's scripting language, transaction types, and smart contract capabilities including multi-signature, timelocks, and Lightning Network.",
      status: 'available',
      number: 1,
      path: '/learn/advanced/bitcoin-scripting'
    },
    {
      title: "Bitcoin Security",
      duration: "40 min",
      description: "Explore advanced security techniques including key management, multi-signature wallets, timelocks, and collaborative custody solutions.",
      status: 'locked',
      number: 2
    },
    {
      title: "Layer 2 and Scaling Solutions",
      duration: "50 min",
      description: "Understand Lightning Network, sidechains, state channels, and other scaling approaches for Bitcoin's future growth.",
      status: 'locked',
      number: 3
    },
    {
      title: "Bitcoin's Role in Geopolitics",
      duration: "55 min",
      description: "Examine Bitcoin's impact on international monetary policy, reserve currencies, and geopolitical power dynamics.",
      status: 'locked',
      number: 4
    },
    {
      title: "Inheritance Planning and Legal Considerations",
      duration: "35 min",
      description: "Develop strategies for Bitcoin inheritance, tax planning, and navigating evolving regulatory landscapes.",
      status: 'locked',
      number: 5
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
            Advanced Course
          </h1>
        </div>

        <div className="bg-amber-500/10 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Course Overview</h2>
          <p className="text-muted-foreground mb-4">
            Explore complex Bitcoin topics including scripting, smart contracts, layer 2 solutions, and advanced 
            security techniques. This course is designed for those with a solid foundation in Bitcoin concepts.
          </p>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-1 text-amber-500" />
              5 Modules
            </span>
            <span>~3.5 hours total</span>
            <span>Strong Bitcoin fundamentals required</span>
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
            <Link to="/learn/advanced/bitcoin-scripting">Continue Learning</Link>
          </Button>
        </div>
      </div>
    </CourseLayout>
  );
};

export default AdvancedCourse; 