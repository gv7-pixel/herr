import React from 'react';
import WaxSeal from '../components/WaxSeal';
import VintageDivider from '../components/VintageDivider';
import { RECIPIENT_NAME } from '../utils/constants';

/**
 * Section 1: Vintage Sealed Envelope
 * Opening envelope visual foundation:
 * - Warm ivory parchment with subtle folded paper appearance
 * - Vintage burgundy wax seal with embossed heart detail
 * - Elegant handwritten note: "A little something for Neha."
 */
export default function EnvelopeIntro() {
  return (
    <section className="section-container anim-fade-in" id="section-envelope-intro">
      <span className="section-corner-flourish" aria-hidden="true">✦ 01</span>
      
      <div className="section-content">
        <span className="vintage-tag">Section 01</span>
        <h2 className="section-title">Vintage Sealed Envelope</h2>
        <VintageDivider />

        <div className="envelope-opening-wrapper">
          <div className="envelope-opening-card paper-card-inset">
            <p className="handwritten-subtext">A little something for {RECIPIENT_NAME}.</p>
            
            <div className="envelope-seal-container">
              <WaxSeal label={`Open sealed envelope for ${RECIPIENT_NAME}`} />
            </div>

            <p className="vintage-detail-text">
              Press the seal to unveil what lies within
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
