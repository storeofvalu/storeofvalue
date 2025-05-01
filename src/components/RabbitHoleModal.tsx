import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { motion } from "framer-motion";

const RabbitHoleModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has already seen the modal
    const hasSeenModal = localStorage.getItem('rabbitHoleModalSeen');
    
    if (!hasSeenModal) {
      // Set a timeout to show the modal after 30 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 30000); // 30 seconds
      
      // Clean up the timer when component unmounts
      return () => clearTimeout(timer);
    }
  }, []);

  const handleYesClick = () => {
    // Remember that user has seen the modal
    localStorage.setItem('rabbitHoleModalSeen', 'true');
    setIsOpen(false);
    
    // Navigate to the rabbit hole page with startCardId=1
    navigate('/rabbit-hole', { state: { startCardId: 1 } });
  };

  const handleNoClick = () => {
    // Remember that user has seen the modal
    localStorage.setItem('rabbitHoleModalSeen', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border-0 rounded-2xl overflow-hidden p-0 shadow-[0_0_50px_rgba(128,0,255,0.3)]">
        <div className="bg-gradient-to-br from-purple-900 to-black text-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
            <motion.div 
              className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-amber-500/5"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.3, 0.5] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-purple-500/5"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>

          <DialogHeader className="p-6 pt-10 space-y-8 relative z-10">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="h-28 w-28 sm:h-32 sm:w-32 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600/20 to-black/30 backdrop-blur-md shadow-lg border border-white/10">
                <div className="text-center text-6xl sm:text-7xl tracking-tighter leading-none">
                  <span className="inline-block transform translate-y-1">🕳️</span>
                  <span className="inline-block transform -translate-y-1">🐇</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative z-10"
            >
              <DialogTitle className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-300">
                  Down the Rabbit Hole
                </span>
              </DialogTitle>
              <DialogDescription className="text-center text-lg sm:text-xl text-white/90 leading-relaxed">
                Once you start learning about Bitcoin, there's no turning back. The journey will transform how you understand money, value, and freedom.
              </DialogDescription>
            </motion.div>
          </DialogHeader>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative z-10"
          >
            <DialogFooter className="flex flex-col sm:flex-row gap-4 justify-center p-6 pt-2 pb-10">
              <Button 
                variant="default" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black text-lg py-7 px-8 rounded-full w-full sm:w-auto font-medium flex items-center gap-2 transition-all transform hover:scale-105 hover:shadow-lg shadow-md"
                onClick={handleYesClick}
              >
                Take the red pill <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white/40 hover:border-white/60 text-white hover:bg-white/10 text-lg py-7 px-8 rounded-full w-full sm:w-auto font-medium transition-all duration-300"
                onClick={handleNoClick}
              >
                Not today
              </Button>
            </DialogFooter>
          </motion.div>
          
          <Button 
            className="absolute top-4 right-4 h-8 w-8 rounded-full p-0 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RabbitHoleModal; 