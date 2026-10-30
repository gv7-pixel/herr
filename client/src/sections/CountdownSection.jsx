import React, { useState } from 'react';
import VintageDivider from '../components/VintageDivider';
import { useCountdown } from '../hooks/useCountdown';
import {
  TARGET_BIRTHDAY,
  TARGET_BIRTHDAY_TIMEZONE,
  RECIPIENT_NAME,
  WELCOME_COPY,
  BIRTHDAY_GREETING_COPY,
} from '../utils/constants';

/**
 * Section 2: Birthday Welcome Screen & Live Countdown
 * Features:
 * - STEP 4: Intimate welcome experience ("Welcome to your little world, Neha.")
 * - STEP 5: Live dynamic countdown targeting November 6, 2026, 00:00:00 (Asia/Kolkata)
 * - Dynamic birthday celebration state: displays "Happy Birthday, Neha! ♡" once reached
 * - Controlled preview mode for testing birthday state without altering production target
 */
export default function CountdownSection({ testBirthday = false }) {
  const [previewBirthday, setPreviewBirthday] = useState(testBirthday);
  const { days, hours, minutes, seconds, isBirthday } = useCountdown(TARGET_BIRTHDAY, previewBirthday);

  return (
    <section className="section-container anim-fade-in" id="section-countdown">
      <span className="section-corner-flourish" aria-hidden="true">✦ 02</span>

      <div className="section-content">
        <span className="vintage-tag">Section 02</span>

        {/* STEP 4 — BIRTHDAY WELCOME SCREEN */}
        <h2 className="section-title">{WELCOME_COPY.headline}</h2>
        <p className="section-subtitle">{WELCOME_COPY.subtext}</p>
        <VintageDivider />

        {/* STEP 5 — LIVE BIRTHDAY COUNTDOWN OR BIRTHDAY CELEBRATION */}
        {isBirthday ? (
          <div className="birthday-celebration-card anim-birthday-glow" role="region" aria-label="Birthday Greeting">
            <h3 className="birthday-celebration-headline">{BIRTHDAY_GREETING_COPY.headline}</h3>
            <p className="birthday-celebration-subtext">{BIRTHDAY_GREETING_COPY.subtext}</p>
            <p className="birthday-celebration-message">{BIRTHDAY_GREETING_COPY.celebrationNote}</p>

            <div style={{ marginTop: 'var(--space-4)' }}>
              <span className="vintage-detail-text">
                Target date reached &bull; November 6, 2026 ({TARGET_BIRTHDAY_TIMEZONE})
              </span>
            </div>
          </div>
        ) : (
          <div className="countdown-container" style={{ width: '100%' }}>
            <div className="countdown-grid" role="timer" aria-label={`Countdown to ${RECIPIENT_NAME}'s birthday`}>
              <div className="countdown-unit">
                <span className="countdown-num">{String(days).padStart(2, '0')}</span>
                <span className="countdown-label">Days</span>
              </div>
              <div className="countdown-unit">
                <span className="countdown-num">{String(hours).padStart(2, '0')}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-unit">
                <span className="countdown-num">{String(minutes).padStart(2, '0')}</span>
                <span className="countdown-label">Minutes</span>
              </div>
              <div className="countdown-unit">
                <span className="countdown-num">{String(seconds).padStart(2, '0')}</span>
                <span className="countdown-label">Seconds</span>
              </div>
            </div>

            <p className="vintage-detail-text" style={{ marginTop: 'var(--space-3)' }}>
              Target: November 6, 2026 at 12:00 AM &bull; {TARGET_BIRTHDAY_TIMEZONE} (IST)
            </p>
          </div>
        )}

        {/* Discreet Test Mode Toggle for Verification without altering production target */}
        <div style={{ marginTop: 'var(--space-5)' }}>
          <button
            type="button"
            className="vintage-detail-text"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              textDecoration: 'underline',
              cursor: 'pointer',
              opacity: 0.7,
              fontSize: '0.65rem',
            }}
            onClick={() => setPreviewBirthday((prev) => !prev)}
            aria-label="Toggle preview of birthday greeting state"
          >
            {previewBirthday ? '↺ View Live Countdown' : 'Preview Birthday Greeting State'}
          </button>
        </div>
      </div>
    </section>
  );
}
