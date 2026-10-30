import React from 'react';
import { TARGET_BIRTHDAY, RECIPIENT_NAME } from '../utils/constants';

/**
 * Section 2: Welcome screen + birthday countdown
 * Target Date: November 6, 2026
 * Dedicated countdown timer logic and aesthetics to be styled in Phase 2.
 */
export default function CountdownSection() {
  return (
    <section className="section-container" id="section-countdown">
      <div className="section-content">
        <span className="section-badge">Section 2</span>
        <h2 className="section-title">Welcome Screen & Birthday Countdown</h2>
        <p className="section-subtitle">Counting down every second until November 6, 2026 for {RECIPIENT_NAME}</p>
        <div className="section-placeholder">
          <p>Target Date: {new Date(TARGET_BIRTHDAY).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <div className="countdown-preview">
            <span>Days</span> : <span>Hours</span> : <span>Minutes</span> : <span>Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}
