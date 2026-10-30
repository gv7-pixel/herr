import React, { useEffect, useRef, useCallback } from 'react';

/**
 * LetterReaderModal
 * Full-screen reading experience for the handwritten-style love letters.
 * Matches the warm parchment flat-lay aesthetic of the attached reference letter:
 * - Aged lined parchment sheet
 * - Date header: "6 Nov 2026"
 * - Hand-crafted floral washi tape and burgundy wax seal accents
 * - Accessible keyboard & touch controls (Escape to close, Left/Right arrow to navigate)
 */
export default function LetterReaderModal({
  isOpen,
  letter,
  letterIndex,
  totalLetters,
  onClose,
  onPrev,
  onNext,
  triggerRef = null,
}) {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNext();
      }
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      const triggerEl = triggerRef?.current;

      const timer = setTimeout(() => {
        if (closeBtnRef.current) {
          closeBtnRef.current.focus();
        }
      }, 50);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        if (triggerEl) {
          triggerEl.focus();
        }
      };
    }
  }, [isOpen, handleKeyDown, triggerRef]);

  if (!isOpen || !letter) return null;

  const currentFormatted = String(letterIndex + 1).padStart(2, '0');
  const totalFormatted = String(totalLetters).padStart(2, '0');

  return (
    <div
      className="letter-reader-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={letter.prompt}
    >
      <div
        className="letter-reader-container"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="letter-reader-bar">
          <button
            type="button"
            className="letter-reader-back-btn"
            onClick={onClose}
            ref={closeBtnRef}
            aria-label="Back to all letters"
          >
            ← Back to letters
          </button>

          <span className="letter-reader-tag font-serif">
            Letter {letterIndex + 1} of {totalLetters}
          </span>

          <button
            type="button"
            className="letter-reader-close-circle"
            onClick={onClose}
            aria-label="Close letter"
            title="Close (Esc)"
          >
            ✕
          </button>
        </div>

        {/* Vintage Parchment Letter Sheet */}
        <div className="letter-parchment-sheet">
          {/* Decorative pressed floral washi tape in corner */}
          <div className="parchment-floral-tape" aria-hidden="true">
            <span className="parchment-floral-icon">🌸</span>
          </div>

          {/* Letter Header */}
          <div className="parchment-header-row">
            <h3 className="parchment-salutation font-handwritten">
              {letter.salutation}
            </h3>
            <span className="parchment-date font-serif">6 Nov 2026</span>
          </div>

          <div className="parchment-prompt-badge">
            <span className="prompt-badge-tag">{letter.tag}</span>
            <span className="prompt-badge-title">"{letter.prompt}"</span>
          </div>

          {/* Letter Body */}
          <div className="parchment-body">
            {letter.paragraphs.map((p, idx) => (
              <p key={idx} className="parchment-paragraph font-handwritten">
                {p}
              </p>
            ))}
          </div>

          {/* Letter Closing & Signature */}
          <div className="parchment-footer">
            <div className="parchment-wax-seal" aria-hidden="true">
              <span className="parchment-seal-heart">♥</span>
            </div>

            <div className="parchment-signoff">
              <p className="parchment-closing font-handwritten">{letter.closing}</p>
              <p className="parchment-signature font-handwritten">{letter.signature}</p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Controls */}
        <div className="letter-reader-nav">
          <button
            type="button"
            className="letter-nav-arrow-btn"
            onClick={onPrev}
            aria-label="Read previous letter"
          >
            ‹ Previous Letter
          </button>
          <span className="letter-nav-count">
            {currentFormatted} / {totalFormatted}
          </span>
          <button
            type="button"
            className="letter-nav-arrow-btn"
            onClick={onNext}
            aria-label="Read next letter"
          >
            Next Letter ›
          </button>
        </div>
      </div>
    </div>
  );
}
