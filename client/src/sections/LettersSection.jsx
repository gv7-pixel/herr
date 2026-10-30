import React, { useState, useRef } from 'react';
import VintageDivider from '../components/VintageDivider';
import LetterReaderModal from '../components/LetterReaderModal';
import { LETTERS_DATA } from '../utils/lettersData';

/**
 * Section 5: Open When You Feel...
 * Six individual interactive letters styled as vintage folded envelopes.
 * Click/tap opens an authentic handwritten lined parchment reading modal.
 */
export default function LettersSection() {
  const [selectedLetterIndex, setSelectedLetterIndex] = useState(null);
  const activeTriggerRef = useRef(null);

  const handleOpenLetter = (index, e) => {
    setSelectedLetterIndex(index);
    activeTriggerRef.current = e.currentTarget;
  };

  const handleClose = () => {
    setSelectedLetterIndex(null);
  };

  const handlePrev = () => {
    setSelectedLetterIndex((prev) => (prev > 0 ? prev - 1 : LETTERS_DATA.length - 1));
  };

  const handleNext = () => {
    setSelectedLetterIndex((prev) => (prev < LETTERS_DATA.length - 1 ? prev + 1 : 0));
  };

  const activeLetter = selectedLetterIndex !== null ? LETTERS_DATA[selectedLetterIndex] : null;

  return (
    <section className="section-container anim-fade-in" id="section-letters">
      <div className="section-content">
        <h2 className="section-title">Open when you feel...</h2>
        <p className="section-subtitle">
          Six folded letters sealed with tenderness, awaiting the right moment to be read.
        </p>
        <VintageDivider />

        {/* Six Interactive Envelope Cards */}
        <div className="letters-envelopes-grid" role="region" aria-label="Six interactive love letters">
          {LETTERS_DATA.map((letter, index) => {
            return (
              <article
                key={letter.id}
                className="letter-envelope-card interactive-lift"
                onClick={(e) => handleOpenLetter(index, e)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenLetter(index, e);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Open and read ${letter.prompt}`}
              >
                {/* Envelope Top Triangle Flap */}
                <div className="envelope-card-flap" aria-hidden="true" />

                {/* Wax Seal Accent */}
                <div className="envelope-card-seal" aria-hidden="true">
                  <span className="card-seal-icon">♥</span>
                </div>

                {/* Card Content */}
                <div className="envelope-card-body">
                  <div className="envelope-card-meta">
                    <span className="envelope-card-tag">{letter.tag}</span>
                    <span className="envelope-card-action">Read Letter &rarr;</span>
                  </div>

                  <h3 className="envelope-card-prompt font-serif">
                    {letter.prompt}
                  </h3>
                  <p className="envelope-card-subtitle font-handwritten">
                    {letter.subtitle}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Handwritten Letter Reading Modal */}
        <LetterReaderModal
          isOpen={selectedLetterIndex !== null}
          letter={activeLetter}
          letterIndex={selectedLetterIndex || 0}
          totalLetters={LETTERS_DATA.length}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
          triggerRef={activeTriggerRef}
        />
      </div>
    </section>
  );
}
