import React from 'react';

/**
 * Section 1: Vintage sealed envelope
 * Header / Message: "A little something for Neha."
 * Full interactive wax seal and opening animations to be styled in Phase 2.
 */
export default function EnvelopeIntro() {
  return (
    <section className="section-container" id="section-envelope-intro">
      <div className="section-content">
        <span className="section-badge">Section 1</span>
        <h2 className="section-title">Vintage Sealed Envelope</h2>
        <p className="section-subtitle">"A little something for Neha."</p>
        <div className="section-placeholder">
          <p>Vintage envelope interactive opening and wax seal interaction container.</p>
        </div>
      </div>
    </section>
  );
}
