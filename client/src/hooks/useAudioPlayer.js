import { useState, useRef, useEffect, useCallback } from 'react';
import { MUSIC_META } from '../utils/constants';

/**
 * useAudioPlayer Hook
 * Provides smooth, uninterrupted background music playback across section transitions.
 * Complies with strict non-forced autoplay policies (user gesture required).
 */
export function useAudioPlayer(src = MUSIC_META.audioPath) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [error, setError] = useState(null);

  useEffect(() => {
    const audio = new Audio();
    audio.src = src;
    audio.loop = true;
    audio.preload = 'metadata';
    audioRef.current = audio;

    const handleCanPlay = () => setIsLoaded(true);
    const handleError = () => {
      // Audio file will be provided in later phases - handle gracefully without runtime exceptions
      setError('Audio asset pending upload in later phase.');
      setIsPlaying(false);
    };
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audioRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
        setError(null);
      }
    } catch (err) {
      // Browsers reject autoplay without gesture or missing file
      setError(err.message || 'Playback interaction required');
      setIsPlaying(false);
    }
  }, [isPlaying]);

  const changeVolume = useCallback((val) => {
    const clamped = Math.max(0, Math.min(1, val));
    setVolume(clamped);
  }, []);

  return {
    isPlaying,
    isLoaded,
    volume,
    error,
    togglePlay,
    changeVolume,
    trackInfo: MUSIC_META,
  };
}
