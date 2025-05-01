import React from 'react';
import { motion } from 'framer-motion';

interface BitcoinLogoIconProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}

const BitcoinLogoIcon: React.FC<BitcoinLogoIconProps> = ({ 
  size = 'md',
  className = '',
  animated = false
}) => {
  // Map size prop to actual pixel values and padding
  const sizeMap = {
    xs: { container: 'h-5 w-5 p-1', logo: 12 },
    sm: { container: 'h-6 w-6 p-1.5', logo: 16 },
    md: { container: 'h-9 w-9 p-2', logo: 24 },
    lg: { container: 'h-14 w-14 p-3 md:p-3.5', logo: 40 }
  };
  
  const containerClass = sizeMap[size].container;
  const logoSize = sizeMap[size].logo;
  
  // The "B" should be 25% larger than the circle, so we'll scale it up
  const bScale = 1.25;
  const bOffsetX = -((bScale - 1) * 4030.06) / 2; // Center the scaled B horizontally
  const bOffsetY = -((bScale - 1) * 4030.06) / 2; // Center the scaled B vertically
  
  // Animation variants (only used when animated=true)
  const containerVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: '0 0 15px rgba(247, 147, 26, 0.5)'
    }
  };
  
  const circleVariants = {
    hover: { 
      filter: 'drop-shadow(0 0 3px rgba(247, 147, 26, 0.7))'
    }
  };
  
  const bVariants = {
    initial: {
      opacity: 0.7,
    },
    animate: {
      opacity: 1,
      filter: 'drop-shadow(0 0 2px rgba(247, 147, 26, 0.8))'
    },
    hover: { 
      filter: 'drop-shadow(0 0 5px rgba(247, 147, 26, 0.9))',
      opacity: 1
    }
  };
  
  const rotationVariants = {
    animate: {
      rotateZ: [0, 10, 0, -10, 0],
      transition: { 
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as const, 
        ease: "easeInOut"
      }
    }
  };
  
  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: { 
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse" as const, 
        ease: "easeInOut"
      }
    }
  };
  
  // Non-animated version
  if (!animated) {
    return (
      <div className={`inline-flex items-center justify-center ${containerClass} bg-muted rounded-full relative ${className}`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 4030.06 4030.06" 
          width={logoSize} 
          height={logoSize} 
          className="text-amber-500"
        >
          <defs>
            <linearGradient id="bitcoinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7931A" />
              <stop offset="100%" stopColor="#FF9A00" />
            </linearGradient>
          </defs>
          <g>
            <path 
              fill="hsl(var(--muted))" 
              fillRule="nonzero" 
              d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z"
            />
            <path 
              fill="url(#bitcoinGradient)" 
              fillRule="nonzero" 
              transform={`translate(${bOffsetX}, ${bOffsetY}) scale(${bScale})`}
              d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"
            />
          </g>
        </svg>
      </div>
    );
  }
  
  // Animated version (only used when animated=true)
  return (
    <motion.div 
      className={`inline-flex items-center justify-center ${containerClass} bg-muted/70 rounded-full relative shadow-md ${className}`}
      whileHover="hover"
      animate="animate"
      variants={containerVariants}
      initial={{ scale: 0.95 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div
        variants={pulseVariants}
        className="relative w-full h-full flex items-center justify-center"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 4030.06 4030.06" 
          width={logoSize} 
          height={logoSize} 
          className="relative z-10"
        >
          <defs>
            <filter id="bitcoinGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="bitcoinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7931A" />
              <stop offset="100%" stopColor="#FF9A00" />
            </linearGradient>
          </defs>
          <motion.g variants={rotationVariants}>
            <motion.path 
              fill="hsl(var(--muted))" 
              fillRule="nonzero" 
              d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z"
              variants={circleVariants}
            />
            <motion.path 
              fill="url(#bitcoinGradient)" 
              fillRule="nonzero" 
              transform={`translate(${bOffsetX}, ${bOffsetY}) scale(${bScale})`}
              d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"
              variants={bVariants}
              initial="initial"
              animate="animate"
              style={{ filter: 'drop-shadow(0 0 2px rgba(247, 147, 26, 0.6))' }}
            />
          </motion.g>
        </svg>
        
        {/* Glow effect */}
        {size === 'md' || size === 'lg' ? (
          <motion.div 
            className="absolute inset-0 rounded-full bg-orange-500/5 z-0"
            animate={{ 
              boxShadow: [
                '0 0 5px 2px rgba(247, 147, 26, 0.1)',
                '0 0 15px 5px rgba(247, 147, 26, 0.2)',
                '0 0 5px 2px rgba(247, 147, 26, 0.1)'
              ]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse", 
              ease: "easeInOut" 
            }}
          />
        ) : null}
      </motion.div>
    </motion.div>
  );
};

export default BitcoinLogoIcon; 