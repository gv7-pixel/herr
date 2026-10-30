import { useState, useEffect, useCallback } from 'react';
import { TARGET_BIRTHDAY } from '../utils/constants';

/**
 * useCountdown Hook
 * Calculates dynamic time remaining until target date in Asia/Kolkata timezone.
 * Handles countdown completion (birthday state) and avoids negative values.
 * Allows optional preview override for testing birthday mode without altering production target.
 */
export function useCountdown(targetIso = TARGET_BIRTHDAY, forceBirthdayPreview = false) {
  const calculateRemaining = useCallback(() => {
    if (forceBirthdayPreview) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isBirthday: true };
    }
    const targetEpoch = new Date(targetIso).getTime();
    const difference = targetEpoch - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isBirthday: true };
    }

    const totalSeconds = Math.floor(difference / 1000);
    return {
      days: Math.floor(totalSeconds / (3600 * 24)),
      hours: Math.floor((totalSeconds % (3600 * 24)) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
      isBirthday: false,
    };
  }, [targetIso, forceBirthdayPreview]);

  const [timeLeft, setTimeLeft] = useState(calculateRemaining);

  useEffect(() => {
    if (forceBirthdayPreview) {
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(calculateRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateRemaining, forceBirthdayPreview]);

  if (forceBirthdayPreview) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isBirthday: true };
  }

  return timeLeft;
}
