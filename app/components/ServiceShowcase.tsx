'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AudioPlayer from './AudioPlayer';
import { FadeIn } from './AnimatedElements';

interface ServiceSample {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  audioTitle: string;
  audioArtist: string;
  imageUrl: string;
}

interface ServiceShowcaseProps {
  title: string;
  description: string;
  serviceType: string;
  servicePath: string;
  samples: ServiceSample[];
  className?: string;
}

const ServiceShowcase: React.FC<ServiceShowcaseProps> = ({
  title,
  description,
  serviceType,
  servicePath,
  samples,
  className = '',
}) => {
  const [activeService, setActiveService] = useState(samples[0]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-light-DEFAULT rounded-lg shadow-lg overflow-hidden ${className}`}>
      <div className="p-8 pb-0">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-3 text-primary-DEFAULT">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${
                  viewMode === 'grid' ? 'bg-secondary-DEFAULT text-primary-dark' : 'bg-gray-200 text-gray-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${
                  viewMode === 'list' ? 'bg-secondary-DEFAULT text-primary-dark' : 'bg-gray-200 text-gray-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-secondary-DEFAULT hover:text-accent-DEFAULT font-medium text-sm flex items-center"
            >
              {isExpanded ? 'Show Less' : 'Show All'}
              <svg 
                className={`ml-1 w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </FadeIn>
      </div>
      
      {viewMode === 'grid' ? (
        <div className="p-8 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {samples.slice(0, isExpanded ? samples.length : 3).map((sample) => (
                <motion.div
                  key={sample.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden h-full"
                >
                  <div 
                    className="relative h-48 cursor-pointer"
                    onClick={() => setActiveService(sample)}
                  >
                    <Image
                      src={sample.imageUrl}
                      alt={sample.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-bold text-lg">{sample.title}</h3>
                      </div>
                    </div>
                    <motion.div 
                      className="absolute top-3 right-3 bg-secondary-DEFAULT text-primary-dark p-2 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        setActiveService(sample);
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </motion.div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-4">{sample.description}</p>
                    {activeService.id === sample.id && (
                      <AudioPlayer 
                        audioUrl={sample.audioUrl}
                        title={sample.audioTitle}
                        artist={sample.audioArtist}
                        compact={true}
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <div className="p-8 pt-0">
          <div className="space-y-4">
            <AnimatePresence>
              {samples.slice(0, isExpanded ? samples.length : 3).map((sample) => (
                <motion.div
                  key={sample.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div 
                      className="relative h-48 md:h-auto md:w-1/3 cursor-pointer"
                      onClick={() => setActiveService(sample)}
                    >
                      <Image
                        src={sample.imageUrl}
                        alt={sample.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <motion.div 
                        className="absolute top-3 right-3 bg-secondary-DEFAULT text-primary-dark p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          setActiveService(sample);
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="font-bold text-xl mb-2 text-primary-DEFAULT">{sample.title}</h3>
                      <p className="text-gray-600 mb-4">{sample.description}</p>
                      {activeService.id === sample.id && (
                        <AudioPlayer 
                          audioUrl={sample.audioUrl}
                          title={sample.audioTitle}
                          artist={sample.audioArtist}
                          compact={true}
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
      
      <div className="p-8 pt-0 flex justify-center">
        <Link href={servicePath}>
          <motion.span
            className="btn btn-primary inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore {serviceType} Services
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceShowcase; 