'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WaveSurfer from 'wavesurfer.js';

interface AudioPlayerProps {
  audioUrl: string;
  title?: string;
  artist?: string;
  coverImage?: string;
  waveColor?: string;
  progressColor?: string;
  height?: number;
  compact?: boolean;
  autoPlay?: boolean;
  className?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioUrl,
  title = 'Audio Track',
  artist = 'Elemental Sound',
  coverImage = '/images/audio-default.jpg',
  waveColor = '#E8AA33', // Secondary color
  progressColor = '#346473', // Primary color
  height = 80,
  compact = false,
  autoPlay = false,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isVolumeOpen, setIsVolumeOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [peakData, setPeakData] = useState<number[]>([]);

  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const volumeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Format time in mm:ss
  const formatTime = (seconds: number): string => {
    if (isNaN(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
  };

  // Initialize WaveSurfer
  useEffect(() => {
    if (waveformRef.current && !wavesurfer.current) {
      const ws = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: waveColor,
        progressColor: progressColor,
        cursorColor: 'transparent',
        barWidth: 2,
        barGap: 2,
        barRadius: 3,
        height: height,
        normalize: true,
      });

      ws.load(audioUrl);

      ws.on('ready', () => {
        wavesurfer.current = ws;
        setDuration(ws.getDuration());
        setIsLoaded(true);
        ws.setVolume(volume);
        
        if (autoPlay) {
          ws.play();
          setIsPlaying(true);
        }
        
        // Generate peak data for mini visualization
        const peaks = ws.getDecodedData()?.getChannelData(0) || [];
        const peakSamples = [];
        const sampleSize = Math.floor(peaks.length / 100);
        for (let i = 0; i < 100; i++) {
          const start = i * sampleSize;
          const end = start + sampleSize;
          let max = 0;
          for (let j = start; j < end; j++) {
            const abs = Math.abs(peaks[j] || 0);
            if (abs > max) max = abs;
          }
          peakSamples.push(max);
        }
        setPeakData(peakSamples);
      });

      ws.on('audioprocess', () => {
        setCurrentTime(ws.getCurrentTime());
      });

      ws.on('finish', () => {
        setIsPlaying(false);
      });

      return () => {
        if (ws) {
          ws.destroy();
        }
      };
    }
  }, [audioUrl, waveColor, progressColor, height, autoPlay, volume]);

  // Handle play/pause
  const togglePlay = () => {
    if (!wavesurfer.current) return;
    
    if (isPlaying) {
      wavesurfer.current.pause();
    } else {
      wavesurfer.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (wavesurfer.current) {
      wavesurfer.current.setVolume(newVolume);
    }
  };

  // Toggle volume panel
  const toggleVolumePanel = () => {
    setIsVolumeOpen(!isVolumeOpen);
    
    if (volumeTimeout.current) {
      clearTimeout(volumeTimeout.current);
    }

    if (!isVolumeOpen) {
      volumeTimeout.current = setTimeout(() => {
        setIsVolumeOpen(false);
      }, 3000);
    }
  };

  // Handle seeking
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wavesurfer.current || !waveformRef.current) return;
    
    const rect = waveformRef.current.getBoundingClientRect();
    const position = (e.clientX - rect.left) / rect.width;
    wavesurfer.current.seekTo(position);
    setCurrentTime(position * duration);
  };

  // Mini visualization for compact mode
  const MiniVisualizer = () => (
    <div className="relative h-8 w-full bg-secondary-light rounded overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {peakData.map((peak, i) => (
          <motion.div
            key={i}
            className="w-[2px] mx-[1px] bg-secondary-DEFAULT"
            initial={{ height: 0 }}
            animate={{ 
              height: isPlaying 
                ? `${Math.max(3, peak * 30)}px` 
                : `${Math.max(2, peak * 20)}px`
            }}
            transition={{ 
              duration: isPlaying ? 0.2 : 0,
              delay: isPlaying ? i * 0.005 : 0
            }}
          />
        ))}
      </div>
      <motion.div 
        className="absolute h-full bg-primary-DEFAULT opacity-70"
        style={{ width: `${(currentTime / duration) * 100}%` }}
      />
    </div>
  );

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      {!compact && (
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-md overflow-hidden mr-3 flex-shrink-0">
            <img src={coverImage} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="flex-grow">
            <h3 className="font-semibold text-primary-DEFAULT truncate">{title}</h3>
            <p className="text-sm text-gray-600">{artist}</p>
          </div>
        </div>
      )}

      {compact ? (
        <div className="flex items-center space-x-2">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="bg-secondary-DEFAULT text-primary-dark rounded-full p-2 focus:outline-none"
            onClick={togglePlay}
            disabled={!isLoaded}
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </motion.button>
          
          <div className="flex-grow" onClick={handleSeek}>
            <MiniVisualizer />
          </div>
          
          <span className="text-xs text-gray-500 w-12 text-right">
            {isLoaded ? formatTime(currentTime) : '--:--'}
          </span>
        </div>
      ) : (
        <>
          <div 
            ref={waveformRef} 
            className="w-full cursor-pointer" 
            onClick={handleSeek}
          />
          
          <div className="flex items-center mt-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-secondary-DEFAULT text-primary-dark rounded-full p-2 focus:outline-none mr-4"
              onClick={togglePlay}
              disabled={!isLoaded}
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </motion.button>
            
            <div className="flex-grow flex items-center justify-between">
              <span className="text-sm text-gray-500 w-12">
                {isLoaded ? formatTime(currentTime) : '--:--'}
              </span>
              
              <span className="text-sm text-gray-500 w-12 text-right">
                {isLoaded ? formatTime(duration) : '--:--'}
              </span>
            </div>
            
            <div className="relative ml-4">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-primary-DEFAULT p-2 focus:outline-none"
                onClick={toggleVolumePanel}
              >
                {volume === 0 ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : volume < 0.5 ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.07 9.93a6 6 0 010 4.14" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.07 7.93a10 10 0 010 8.14" />
                  </svg>
                )}
              </motion.button>
              
              <AnimatePresence>
                {isVolumeOpen && (
                  <motion.div 
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 bg-white rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-24 h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AudioPlayer; 