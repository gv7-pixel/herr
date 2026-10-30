import React, { useState, useRef, useEffect, useCallback } from 'react';
import WaxSeal from '../components/WaxSeal';
import VintageDivider from '../components/VintageDivider';
import VintageStamp from '../components/VintageStamp';
import { FINAL_LETTER_DATA } from '../utils/finalLetterData';
import { MUSIC_META, RECIPIENT_NAME } from '../utils/constants';

/**
 * Section 7: The Final Sealed Envelope & Birthday Letter
 * The climactic emotional experience of Neha's birthday website:
 * - Landscape vintage parchment envelope with wax seal, postmark, and addressing
 * - Interactive unsealing animation: wax seal breaks, flap unfolds, letter slides into focus
 * - Heartfelt handwritten birthday letter addressed to Neha, signed by Kannan V
 * - Seamless persistent background music ("I Wanna Be Yours" - Arctic Monkeys) with subtle play/pause control
 * - Respects mobile responsiveness, accessibility, and prefers-reduced-motion
 */
export default function FinalEnvelopeSection({ audioPlayer }) {
  const [envelopeState, setEnvelopeState] = useState('sealed'); // 'sealed' | 'unsealing' | 'opened'
  const letterRef = useRef(null);

  const { isPlaying, togglePlay } = audioPlayer || {};

  const isUnsealing = envelopeState === 'unsealing';
  const isOpened = envelopeState === 'opened';

  const handleUnseal = useCallback(() => {
    if (envelopeState !== 'sealed') return;
    setEnvelopeState('unsealing');
    setTimeout(() => {
      setEnvelopeState('opened');
    }, 500);
  }, [envelopeState]);

  const handleFoldBack = useCallback(() => {
    setEnvelopeState('sealed');
  }, []);

  // When opened, smoothly focus the letter container for keyboard and screen reader users
  useEffect(() => {
    if (isOpened && letterRef.current) {
      letterRef.current.focus();
      letterRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [isOpened]);

  // Keyboard shortcut: Escape folds back into envelope
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpened) {
        handleFoldBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpened, handleFoldBack]);

  return (
    <section className="section-container anim-fade-in" id="section-final-envelope">
      <span className="section-corner-flourish" aria-hidden="true">✦ 07</span>

      <div className="section-content">
        <span className="vintage-tag">Section 07 &bull; {FINAL_LETTER_DATA.envelopeTag}</span>
        <h2 className="section-title">The Final Sealed Envelope</h2>
        <p className="section-subtitle">
          The words saved for the very end, written from the deepest corner of my heart.
        </p>
        <VintageDivider />

        {/* Music companion bar (persistent, non-intrusive) */}
        <div className="final-audio-companion-wrapper">
          <div className="final-audio-pill">
            <span className={`final-audio-icon ${isPlaying ? 'anim-music-pulse' : ''}`} aria-hidden="true">
              {isPlaying ? '♫' : '♪'}
            </span>
            <span className="final-audio-title">
              {isPlaying ? (
                <>
                  <span className="final-audio-now">Playing:</span> {MUSIC_META.title} &bull; {MUSIC_META.artist}
                </>
              ) : (
                <>{FINAL_LETTER_DATA.musicPromptText}</>
              )}
            </span>
            <button
              type="button"
              className="final-audio-toggle-btn"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause background song' : 'Play our song softly while reading'}
            >
              {isPlaying ? '⏸ Pause' : '▶ Play Song'}
            </button>
          </div>
        </div>

        {/* Envelope & Letter Stage */}
        <div className="final-envelope-stage">
          {/* 1. Closed / Unsealing Envelope View */}
          {!isOpened && (
            <div
              className={`final-envelope-packet ${isUnsealing ? 'packet-unsealing' : ''}`}
              role="region"
              aria-label={`Sealed birthday envelope for ${RECIPIENT_NAME}`}
            >
              {/* Top Folding Flap */}
              <div
                className={`final-envelope-top-flap ${isUnsealing ? 'flap-unsealing' : ''}`}
                aria-hidden="true"
              />

              {/* Envelope Face */}
              <div className="final-envelope-face">
                <div className="final-envelope-stamp-corner">
                  <VintageStamp
                    value="06"
                    text={FINAL_LETTER_DATA.postmarkDate}
                    postmark={`${FINAL_LETTER_DATA.postmarkCity} &bull; NEHA`}
                  />
                </div>

                <div className="final-envelope-address-area">
                  <span className="final-envelope-tagline">{FINAL_LETTER_DATA.envelopePrompt}</span>
                  <p className="final-envelope-recipient font-handwritten">
                    {FINAL_LETTER_DATA.envelopeRecipient}
                  </p>
                </div>

                <div className="final-envelope-seal-mount">
                  <WaxSeal
                    onClick={handleUnseal}
                    isBreaking={isUnsealing}
                    isBroken={isOpened}
                    label={FINAL_LETTER_DATA.envelopeSealHint}
                  />
                  <span className="final-envelope-seal-hint font-handwritten">
                    {FINAL_LETTER_DATA.envelopeSealHint}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 2. Unfolded Letter Reading View */}
          {isOpened && (
            <div
              className="final-letter-presentation anim-paper-unfold"
              ref={letterRef}
              tabIndex={-1}
              role="region"
              aria-label={`Handwritten birthday letter to ${RECIPIENT_NAME} from Kannan V`}
            >
              {/* Parchment Sheet */}
              <article className="final-letter-parchment">
                {/* Vintage Washi Tape & Pressed Flower Accent */}
                <div className="final-letter-tape" aria-hidden="true" />
                <div className="final-letter-flower" aria-hidden="true">🌸</div>

                {/* Letter Header */}
                <div className="final-letter-header">
                  <span className="final-letter-salutation font-handwritten">
                    {FINAL_LETTER_DATA.salutation}
                  </span>
                  <span className="final-letter-date font-serif">
                    {FINAL_LETTER_DATA.date}
                  </span>
                </div>

                {/* Birthday Wish Opening */}
                <p className="final-letter-greeting font-handwritten">
                  {FINAL_LETTER_DATA.birthdayWish}
                </p>

                {/* Letter Body Paragraphs */}
                <div className="final-letter-body font-handwritten">
                  {FINAL_LETTER_DATA.paragraphs.map((para, idx) => (
                    <p key={idx} className="final-letter-paragraph">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Sign-off & Signature */}
                <div className="final-letter-signoff">
                  <p className="final-letter-closing font-handwritten">
                    {FINAL_LETTER_DATA.closing}
                  </p>
                  <p className="final-letter-signature font-handwritten">
                    {FINAL_LETTER_DATA.signature}
                  </p>
                  <span className="final-letter-author-name">
                    {FINAL_LETTER_DATA.authorName}
                  </span>
                </div>

                {/* Bottom Wax Seal Accent */}
                <div className="final-letter-seal-accent" aria-hidden="true">
                  <div className="parchment-wax-seal">
                    <span className="parchment-seal-heart">&hearts;</span>
                  </div>
                </div>
              </article>

              {/* Envelope Re-seal / Fold Back Action */}
              <div className="final-letter-actions">
                <button
                  type="button"
                  className="final-letter-fold-btn"
                  onClick={handleFoldBack}
                  aria-label="Fold letter back into envelope"
                >
                  <span aria-hidden="true">✉</span>
                  <span>{FINAL_LETTER_DATA.foldBackBtn}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
