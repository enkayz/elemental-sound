'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// FadeIn animation that triggers when element comes into view
export const FadeIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  duration?: number;
  once?: boolean;
}> = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '', 
  duration = 0.5, 
  once = true 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  // Set up directional animations
  const getVariants = (): Variants => {
    let initial = {};

    switch (direction) {
      case 'up':
        initial = { opacity: 0, y: 30 };
        break;
      case 'down':
        initial = { opacity: 0, y: -30 };
        break;
      case 'left':
        initial = { opacity: 0, x: 30 };
        break;
      case 'right':
        initial = { opacity: 0, x: -30 };
        break;
      case 'none':
      default:
        initial = { opacity: 0 };
    }

    return {
      hidden: initial,
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0], // Custom easing
        },
      },
    };
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered animation for lists/grids of elements
export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  once?: boolean;
}> = ({ 
  children, 
  className = '', 
  delay = 0, 
  staggerChildren = 0.1, 
  once = true 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Child item to be used inside a StaggerContainer
export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}> = ({ 
  children, 
  className = '',
  direction = 'up' 
}) => {
  // Set up directional animations
  const getVariants = (): Variants => {
    let initial = {};

    switch (direction) {
      case 'up':
        initial = { opacity: 0, y: 20 };
        break;
      case 'down':
        initial = { opacity: 0, y: -20 };
        break;
      case 'left':
        initial = { opacity: 0, x: 20 };
        break;
      case 'right':
        initial = { opacity: 0, x: -20 };
        break;
      case 'none':
      default:
        initial = { opacity: 0 };
    }

    return {
      hidden: initial,
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1.0], // Custom easing
        },
      },
    };
  };

  return (
    <motion.div
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Parallax effect for backgrounds or images
export const ParallaxElement: React.FC<{
  children: React.ReactNode;
  className?: string;
  speed?: number;
}> = ({ 
  children, 
  className = '', 
  speed = 0.2 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollY = window.scrollY;
      const elementTop = ref.current.offsetTop;
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when element is in view
      if (
        scrollY + windowHeight > elementTop &&
        scrollY < elementTop + ref.current.offsetHeight
      ) {
        const yPosition = (scrollY - elementTop) * speed;
        ref.current.style.transform = `translateY(${yPosition}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

// Audio waveform visualization component
export const WaveformVisualizer: React.FC<{
  audioUrl: string;
  className?: string;
  color?: string;
  progressColor?: string;
  height?: number;
  waveColor?: string;
  barWidth?: number;
}> = ({ 
  audioUrl, 
  className = '', 
  color = '#346473', 
  progressColor = '#0f3e49',
  height = 70,
  waveColor = '#eaeaea',
  barWidth = 2
}) => {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  
  useEffect(() => {
    const initWaveSurfer = async () => {
      const WaveSurfer = (await import('wavesurfer.js')).default;
      
      if (waveformRef.current && !wavesurferRef.current) {
        wavesurferRef.current = WaveSurfer.create({
          container: waveformRef.current,
          waveColor,
          progressColor,
          height,
          barWidth,
          barGap: 2,
          barRadius: 3,
          cursorWidth: 0,
          normalize: true,
        });
        
        wavesurferRef.current.load(audioUrl);
        
        wavesurferRef.current.on('play', () => setIsPlaying(true));
        wavesurferRef.current.on('pause', () => setIsPlaying(false));
        wavesurferRef.current.on('finish', () => setIsPlaying(false));
      }
    };
    
    initWaveSurfer();
    
    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };
  }, [audioUrl, height, progressColor, waveColor, barWidth]);
  
  const togglePlayPause = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
    }
  };
  
  return (
    <div className={className}>
      <div ref={waveformRef} />
      <button 
        onClick={togglePlayPause} 
        className="mt-2 px-4 py-2 bg-primary-DEFAULT text-white rounded hover:bg-primary-dark transition-colors"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

// Hover card with subtle animations
export const AnimatedCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
}> = ({ 
  children, 
  className = '', 
  hoverScale = 1.03 
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: hoverScale, 
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" 
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

// Page transition wrapper
export const PageTransition: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}; 