import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Play, Lock, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import BitcoinLogoIcon from './BitcoinLogoIcon';
import CourseLayout from './CourseLayout';

export interface ModuleProps {
  title: string;
  duration: string;
  description: string;
  status: 'completed' | 'available' | 'locked';
  number: number;
  path?: string;
}

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

const BeginnerCourse = () => {
  const modules: ModuleProps[] = [
    {
      title: "What is Money?",
      duration: "20 min",
      description: "Explore the fundamental concept of money, its functions, and historical evolution from barter to modern currency systems.",
      status: 'available',
      number: 1,
      path: '/learn/beginner/what-is-money'
    },
    {
      title: "Store of Value Explained",
      duration: "25 min",
      description: "Understand how 'store of value' is one of the primary functions of money and why it's crucial for wealth preservation.",
      status: 'available',
      number: 2,
      path: '/learn/beginner/store-of-value'
    },
    {
      title: "Bitcoin Fundamentals",
      duration: "30 min",
      description: "Learn about Bitcoin's core features: decentralization, fixed supply, and cryptographic security.",
      status: 'available',
      number: 3,
      path: '/learn/beginner/bitcoin-fundamentals'
    },
    {
      title: "Bitcoin Wallets & Security",
      duration: "22 min",
      description: "A practical guide to securely storing and managing your Bitcoin with emphasis on security best practices.",
      status: 'locked',
      number: 4
    },
    {
      title: "Buying & Using Bitcoin",
      duration: "18 min",
      description: "Learn how to acquire Bitcoin and start using it in practice while understanding the transaction process.",
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
            Beginner's Course
          </h1>
        </div>

        <div className="bg-amber-500/10 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Course Overview</h2>
          <p className="text-muted-foreground mb-4">
            A comprehensive introduction to Bitcoin's role as a store of value. This course requires no prior knowledge
            and will guide you through fundamental concepts of money, value storage, and Bitcoin basics.
          </p>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-1 text-amber-500" />
              5 Modules
            </span>
            <span>~2 hours total</span>
            <span>Beginner-friendly</span>
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
            <Link to="/learn/beginner/what-is-money">Continue Learning</Link>
          </Button>
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Network className="h-10 w-10 text-amber-500" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Bitcoin: The Networked Revolution</h3>
              <p className="text-muted-foreground mb-4">
                Explore how Bitcoin follows the same growth pattern as history's most transformative networks — 
                but with an unprecedented economic twist. Understand where we are on the adoption curve.
              </p>
              <Button 
                variant="outline" 
                className="border-amber-500/30 hover:bg-amber-500/10"
                asChild
              >
                <Link to="/networked-revolution">
                  Discover the Network Effect
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CourseLayout>
  );
};

export default BeginnerCourse; 