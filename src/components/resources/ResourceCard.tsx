import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookMarked } from 'lucide-react';

export interface ResourceCardProps {
  title: string;
  author: string;
  description: string;
  link: string;
  index: number;
  icon?: React.ReactNode;
  color?: string;
  gradientFrom?: string;
  gradientTo?: string;
  buttonText?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  author, 
  description, 
  link, 
  index,
  icon = <BookMarked className="h-5 w-5 text-amber-500" />,
  color = "amber",
  gradientFrom = "from-amber-500",
  gradientTo = "to-amber-600",
  buttonText = "View Resource"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorMap: Record<string, { bg: string, border: string, text: string, hover: string }> = {
    amber: {
      bg: "bg-amber-500/10",
      border: "border-amber-500/30",
      text: "text-amber-600 hover:text-amber-700",
      hover: "bg-amber-500/5"
    },
    blue: {
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      text: "text-blue-600 hover:text-blue-700",
      hover: "bg-blue-500/5"
    },
    red: {
      bg: "bg-red-500/10",
      border: "border-red-500/30",
      text: "text-red-600 hover:text-red-700",
      hover: "bg-red-500/5"
    },
    green: {
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      text: "text-green-600 hover:text-green-700",
      hover: "bg-green-500/5"
    },
    purple: {
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      text: "text-purple-600 hover:text-purple-700",
      hover: "bg-purple-500/5"
    }
  };

  const colors = colorMap[color] || colorMap.amber;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card 
        className={`h-full flex flex-col overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-lg transform -translate-y-1' : 'shadow-sm'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`h-1 w-full bg-gradient-to-r ${gradientFrom} ${gradientTo}`}></div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="mt-1">by {author}</CardDescription>
            </div>
            <div className={`${colors.bg} rounded-full p-2 hidden md:block`}>
              {icon}
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" asChild className={`w-full ${colors.border} ${isHovered ? colors.hover : ''}`}>
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center justify-center gap-2 ${colors.text}`}
            >
              {buttonText}
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink size={16} />
              </motion.div>
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ResourceCard; 