import React, { useState, useEffect } from 'react';
import VintageDivider from '../components/VintageDivider';
import { TARGET_BIRTHDAY, RECIPIENT_NAME } from '../utils/constants';

/**
 * Section 2: Welcome Screen & Birthday Countdown
 * Spacious romantic welcome screen with elegant serif typography
 * and minimal parchment countdown cards.
 */
export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(TARGET_BIRTHDAY) - new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-container anim-fade-in" id="section-countdown">
      <span className="section-corner-flourish" aria-hidden="true">✦ 02</span>

      <div className="section-content">
        <span className="vintage-tag">Section 02</span>
        <h2 className="section-title">Welcome Screen & Birthday Countdown</h2>
        <p className="section-subtitle">
          Counting down every heartbeat until November 6, 2026 for {RECIPIENT_NAME}
        </p>
        <VintageDivider />

        <div className="countdown-grid" role="timer" aria-label="Countdown to November 6, 2026">
          <div className="countdown-unit">
            <span className="countdown-num">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-unit">
            <span className="countdown-num">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-unit">
            <span className="countdown-num">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-unit">
            <span className="countdown-num">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>

        <p className="vintage-detail-text" style={{ marginTop: 'var(--space-4)' }}>
          November 6, 2026 &bull; A day written in the stars
        </p>
      </div>
    </section>
  );
}
