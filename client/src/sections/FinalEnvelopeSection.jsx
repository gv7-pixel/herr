import React from 'react';
import WaxSeal from '../components/WaxSeal';
import VintageDivider from '../components/VintageDivider';
import { RECIPIENT_NAME } from '../utils/constants';

/**
 * Section 7: Final Sealed Envelope
 * Closing envelope visual foundation:
 * - Aged-parchment textured envelope with delicate double border
 * - Burgundy wax seal with embossed heart detail
 * - Lined handwritten-style letter presentation designed for heartfelt birthday wishes
 */
export default function FinalEnvelopeSection() {
  return (
    <section className="section-container anim-fade-in" id="section-final-envelope">
      <span className="section-corner-flourish" aria-hidden="true">✦ 07</span>

      <div className="section-content">
        <span className="vintage-tag">Section 07</span>
        <h2 className="section-title">Final Sealed Envelope</h2>
        <p className="section-subtitle">
          The words saved for the very end, written from the deepest corner of my heart.
        </p>
        <VintageDivider />

        <div className="envelope-final-wrapper" style={{ width: '100%' }}>
          <div className="envelope-final-card">
            <div className="envelope-seal-container">
              <WaxSeal label={`Unseal final birthday letter for ${RECIPIENT_NAME}`} />
            </div>

            <div className="letter-sheet">
              <p className="font-handwritten" style={{ color: 'var(--color-burgundy)', marginBottom: 'var(--space-3)' }}>
                Dearest {RECIPIENT_NAME},
              </p>
              <p className="font-handwritten" style={{ fontSize: '1.25rem', lineHeight: '1.7' }}>
                On November 6, a truly special light entered this world. Every moment with you feels like an answered prayer, and every year spent loving you is my greatest gift...
              </p>
              <p className="font-handwritten" style={{ textAlign: 'right', marginTop: 'var(--space-4)', color: 'var(--color-burgundy)' }}>
                Forever yours, &hearts;
              </p>
            </div>

            <p className="vintage-detail-text" style={{ textAlign: 'center', marginTop: 'var(--space-4)' }}>
              Handwritten keepsake &bull; Full letter reveal to be interactively opened in final development phase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
