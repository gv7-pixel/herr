import React, { useState, useCallback } from 'react';
import WaxSeal from '../components/WaxSeal';
import VintageDivider from '../components/VintageDivider';
import { INVITATION_COPY } from '../utils/constants';

/**
 * Section 1: Vintage Sealed Envelope
 * Features:
 * - 3D authentic opening envelope with back wall, front pocket, top triangular flap
 * - Interactive Burgundy wax seal with embossed heart and unsealing effect
 * - Inner parchment invitation card that rises upon opening
 * - Accessible keyboard & touch controls, preventing multiple accidental triggers
 */
export default function EnvelopeIntro({ onOpenSurprise }) {
  // Envelope states: 'sealed' | 'unsealing' | 'opened'
  const [envelopeState, setEnvelopeState] = useState('sealed');

  const handleSealClick = useCallback(() => {
    if (envelopeState !== 'sealed') return;

    // Trigger subtle wax-seal breaking micro-animation
    setEnvelopeState('unsealing');

    // After breaking animation (400ms), rotate flap open and rise card
    setTimeout(() => {
      setEnvelopeState('opened');
    }, 450);
  }, [envelopeState]);

  const handleCtaClick = () => {
    if (onOpenSurprise) {
      onOpenSurprise();
    } else {
      const welcomeSection = document.getElementById('section-countdown');
      if (welcomeSection) {
        welcomeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isFlapOpen = envelopeState === 'opened';
  const isCardRevealed = envelopeState === 'opened';
  const isBreaking = envelopeState === 'unsealing';
  const isBroken = envelopeState === 'opened';

  return (
    <section className="section-container anim-fade-in" id="section-envelope-intro">
      <span className="section-corner-flourish" aria-hidden="true">✦ 01</span>

      <div className="section-content">
        <span className="vintage-tag">Section 01</span>
        <h2 className="section-title">Vintage Sealed Envelope</h2>
        <p className="handwritten-subtext" style={{ margin: 'var(--space-1) auto var(--space-2) auto' }}>
          "{INVITATION_COPY.envelopeLabel}"
        </p>
        <VintageDivider />

        {/* 3D Envelope Stage */}
        <div className="interactive-envelope-stage">
          <div className="envelope-3d-box">
            {/* Back Wall */}
            <div className="envelope-back-wall" aria-hidden="true" />

            {/* Inner Invitation Card (slides out smoothly when unsealed) */}
            <div
              className={`envelope-invitation-card ${isCardRevealed ? 'card-revealed' : ''}`}
              role="region"
              aria-label="Invitation card"
              aria-hidden={!isCardRevealed}
            >
              <h3 className="invitation-greeting">{INVITATION_COPY.greeting}</h3>
              <p className="invitation-message">{INVITATION_COPY.message}</p>
              
              <button
                type="button"
                className="btn-primary invitation-open-btn interactive-lift"
                onClick={handleCtaClick}
                tabIndex={isCardRevealed ? 0 : -1}
              >
                <span>{INVITATION_COPY.ctaButton}</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>

            {/* Front Pocket Panels */}
            <div className="envelope-front-pocket" aria-hidden="true">
              <div className="envelope-fold-left" />
              <div className="envelope-fold-right" />
              <div className="envelope-fold-bottom" />
            </div>

            {/* Top Triangular Flap (rotates 180deg on open) */}
            <div
              className={`envelope-top-flap ${isFlapOpen ? 'flap-open' : ''}`}
              aria-hidden="true"
            />

            {/* Center Wax Seal Mount */}
            {!isBroken && (
              <div className="envelope-seal-mount">
                <WaxSeal
                  onClick={handleSealClick}
                  isBreaking={isBreaking}
                  isBroken={isBroken}
                  disabled={envelopeState !== 'sealed'}
                  label="Press wax seal to unseal envelope"
                />
                {!isBreaking && (
                  <span className="envelope-hint-text" aria-hidden="true">
                    {INVITATION_COPY.sealHint}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        <p className="vintage-detail-text" style={{ marginTop: 'var(--space-4)' }}>
          {isFlapOpen
            ? 'The envelope has been gently unsealed.'
            : 'A personal letter kept safe under burgundy wax.'}
        </p>
      </div>
    </section>
  );
}
