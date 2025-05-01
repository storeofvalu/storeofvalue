import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle2, ListTodo, BookOpen, LightbulbIcon, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import BitcoinLogoIcon from './BitcoinLogoIcon';
import CourseLayout from './CourseLayout';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export interface ModuleSection {
  title: string;
  content: React.ReactNode;
  type: 'text' | 'video' | 'quiz' | 'exercise';
  estimatedMinutes: number;
}

export interface ModuleContentProps {
  title: string;
  courseTitle: string;
  courseSlug: string;
  moduleNumber: number;
  totalModules: number;
  objectives: string[];
  keypoints: string[];
  sections: ModuleSection[];
  next?: {
    title: string;
    path: string;
  };
  previous?: {
    title: string;
    path: string;
  };
}

const ModuleContent: React.FC<ModuleContentProps> = ({
  title,
  courseTitle,
  courseSlug,
  moduleNumber,
  totalModules,
  objectives,
  keypoints,
  sections,
  next,
  previous
}) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [accordionValue, setAccordionValue] = useState<string>(currentSection === 0 ? "objectives" : "");

  const totalMinutes = sections.reduce((total, section) => total + section.estimatedMinutes, 0);
  const progress = (completedSections.length / sections.length) * 100;

  useEffect(() => {
    setAccordionValue(currentSection === 0 ? "objectives" : "");
  }, [currentSection]);

  const markSectionComplete = (index: number) => {
    if (!completedSections.includes(index)) {
      setCompletedSections([...completedSections, index]);
    }
  };

  const navigateToSection = (index: number) => {
    setCurrentSection(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      markSectionComplete(currentSection);
      navigateToSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      navigateToSection(currentSection - 1);
    }
  };

  return (
    <CourseLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Link to={`/learn/${courseSlug}`} className="text-muted-foreground hover:text-primary flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              <span>{courseTitle}</span>
            </Link>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {title}
              </h1>
              <div className="flex items-center text-sm text-muted-foreground gap-3">
                <span>Module {moduleNumber} of {totalModules}</span>
                <span>•</span>
                <span>{totalMinutes} minutes</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm text-muted-foreground mb-1">Progress</span>
              <div className="w-32">
                <Progress value={progress} className="h-2" />
              </div>
              <span className="text-xs text-muted-foreground mt-1">{Math.round(progress)}% complete</span>
            </div>
          </div>
        </div>

        {/* Overview - Now as Accordion */}
        <Accordion 
          type="single" 
          collapsible 
          value={accordionValue} 
          onValueChange={setAccordionValue}
          className="border rounded-md"
        >
          <AccordionItem value="objectives" className="border-none">
            <AccordionTrigger className="p-4 hover:no-underline">
              <div className="flex items-center gap-2">
                <ListTodo className="h-5 w-5 text-amber-500" />
                <span className="font-semibold">Learning Objectives</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 px-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">By the end of this module, you will:</h3>
                  <ul className="space-y-2">
                    {objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mr-2 mt-0.5" />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Key Concepts:</h3>
                  <ul className="space-y-2">
                    {keypoints.map((keypoint, index) => (
                      <li key={index} className="flex items-start">
                        <LightbulbIcon className="h-5 w-5 text-amber-500 shrink-0 mr-2 mt-0.5" />
                        <span>{keypoint}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Current Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {currentSection + 1}. {sections[currentSection].title}
            </h2>
            <div className="flex items-center gap-2 text-sm">
              {completedSections.includes(currentSection) && (
                <div className="bg-green-50 text-green-600 text-xs font-medium py-1 px-2 rounded-full flex items-center">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Completed
                </div>
              )}
              <span className="text-muted-foreground">
                {sections[currentSection].type === 'text' && <BookOpen className="h-4 w-4 inline mr-1" />}
                {sections[currentSection].type === 'video' && <span className="i-lucide-video inline-block h-4 w-4 mr-1" />}
                {sections[currentSection].type === 'quiz' && <span className="i-lucide-check-circle-2 inline-block h-4 w-4 mr-1" />}
                {sections[currentSection].type === 'exercise' && <span className="i-lucide-edit-3 inline-block h-4 w-4 mr-1" />}
                {sections[currentSection].estimatedMinutes} min
              </span>
            </div>
          </div>

          <Card className="relative">
            <CardContent className="pt-6 pb-8">
              <div className="prose prose-amber max-w-none">
                {sections[currentSection].content}
              </div>
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <div className="flex justify-between pt-4">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentSection === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            
            {currentSection < sections.length - 1 ? (
              <Button 
                className="bg-amber-500 hover:bg-amber-600 text-white"
                onClick={handleNext}
              >
                Next
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            ) : (
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-white"
                onClick={() => markSectionComplete(currentSection)}
                asChild
              >
                <Link to={next?.path || `/learn/${courseSlug}`}>
                  {next ? 'Next Module' : 'Finish Course'}
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Section Navigation */}
        <div className="space-y-4">
          <h3 className="font-medium">Module Sections</h3>
          <div className="space-y-2">
            {sections.map((section, index) => (
              <div 
                key={index}
                className={`px-4 py-3 rounded-md flex items-center justify-between cursor-pointer ${
                  currentSection === index 
                    ? 'bg-amber-500/10 border border-amber-500/30' 
                    : 'hover:bg-muted/50'
                }`}
                onClick={() => navigateToSection(index)}
              >
                <div className="flex items-center">
                  <div className={`h-6 w-6 rounded-full mr-3 flex items-center justify-center text-xs ${
                    completedSections.includes(index)
                      ? 'bg-green-100 text-green-600'
                      : currentSection === index
                      ? 'bg-amber-100 text-amber-600'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {completedSections.includes(index) ? <CheckCircle2 className="h-4 w-4" /> : index + 1}
                  </div>
                  <span className={currentSection === index ? 'font-medium' : ''}>
                    {section.title}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {section.estimatedMinutes} min
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Module Navigation */}
        <div className="border-t border-border pt-6 mt-8">
          <div className="flex justify-between">
            {previous ? (
              <div>
                <div className="text-sm text-muted-foreground">Previous</div>
                <Link 
                  to={previous.path}
                  className="text-primary hover:underline"
                >
                  {previous.title}
                </Link>
              </div>
            ) : <div></div>}
            
            {next && (
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Next</div>
                <Link 
                  to={next.path}
                  className="text-primary hover:underline"
                >
                  {next.title}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </CourseLayout>
  );
};

export default ModuleContent; 