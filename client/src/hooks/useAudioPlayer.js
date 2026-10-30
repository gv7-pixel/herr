import { useState, useRef, useEffect, useCallback } from 'react';
import { MUSIC_META } from '../utils/constants';

/**
 * useAudioPlayer Hook
 * Provides smooth, persistent, uninterrupted background music playback across section transitions.
 * Complies with strict non-forced autoplay policies (user gesture required).
 * Single shared audio element architecture across the entire application.
 */
export function useAudioPlayer(src = MUSIC_META.audioPath) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState(null);
  const prevVolumeRef = useRef(0.7);

  // Initialize single persistent audio element
  useEffect(() => {
    const audio = new Audio();
    audio.src = src;
    audio.loop = true;
    audio.preload = 'metadata';
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
      setIsLoaded(true);
    };

    const handleCanPlay = () => {
      setIsLoaded(true);
      setIsLoading(false);
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleWaiting = () => setIsLoading(true);
    const handlePlaying = () => {
      setIsPlaying(true);
      setIsLoading(false);
      setError(null);
    };
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    const handleError = () => {
      setError('Unable to load audio asset. Please check audio file.');
      setIsPlaying(false);
      setIsLoading(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audioRef.current = null;
    };
  }, [src]);

  // Sync volume & mute state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const play = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      setIsLoading(true);
      await audioRef.current.play();
      setIsPlaying(true);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setError(err.message || 'Playback interaction required');
      setIsPlaying(false);
      setIsLoading(false);
    }
  }, []);

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(async () => {
    if (isPlaying) {
      pause();
    } else {
      await play();
    }
  }, [isPlaying, play, pause]);

  const seek = useCallback((timeInSeconds) => {
    if (!audioRef.current) return;
    const clamped = Math.max(0, Math.min(timeInSeconds, audioRef.current.duration || 0));
    audioRef.current.currentTime = clamped;
    setCurrentTime(clamped);
  }, []);

  const seekPercent = useCallback((percent) => {
    if (!audioRef.current || !audioRef.current.duration) return;
    const targetTime = (percent / 100) * audioRef.current.duration;
    seek(targetTime);
  }, [seek]);

  const changeVolume = useCallback((val) => {
    const clamped = Math.max(0, Math.min(1, val));
    setVolume(clamped);
    if (clamped > 0 && isMuted) {
      setIsMuted(false);
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      if (!prev) {
        prevVolumeRef.current = volume;
        return true;
      } else {
        if (prevVolumeRef.current > 0) {
          setVolume(prevVolumeRef.current);
        } else {
          setVolume(0.7);
        }
        return false;
      }
    });
  }, [volume]);

  // Format progress percentage
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return {
    isPlaying,
    isLoaded,
    isLoading,
    currentTime,
    duration,
    progressPercent,
    volume,
    isMuted,
    error,
    play,
    pause,
    togglePlay,
    seek,
    seekPercent,
    changeVolume,
    toggleMute,
    trackInfo: MUSIC_META,
  };
}
