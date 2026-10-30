import React, { useEffect, useRef, useCallback } from 'react';

/**
 * PhotoLightbox
 * An elegant, accessible, vintage-styled lightbox for viewing photographs.
 * Supports Escape key, arrow navigation, click-outside, and touch swipe gestures.
 */
export default function PhotoLightbox({
  isOpen,
  photos = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext,
  triggerRef = null,
}) {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  // Handle keyboard navigation
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

  // Focus management & body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      const triggerEl = triggerRef?.current;

      // Focus close button on open
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

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex] || photos[0];
  const totalCount = photos.length;
  const currentFormatted = String(currentIndex + 1).padStart(2, '0');
  const totalFormatted = String(totalCount).padStart(2, '0');

  // Touch swipe support
  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length === 1) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchEndX - touchStartX.current;
    const diffY = touchEndY - touchStartY.current;

    // Only register horizontal swipe if movement is primarily horizontal and > 45px
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
      if (diffX < 0) {
        onNext();
      } else {
        onPrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div
      className="lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Photograph ${currentFormatted} of ${totalFormatted}`}
    >
      <div
        className="lightbox-dialog"
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Header Bar */}
        <div className="lightbox-header">
          <span className="lightbox-counter font-serif">
            Memory {currentIndex + 1} of {photos.length}
          </span>
          <button
            type="button"
            className="lightbox-btn-close"
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close photograph view"
            title="Close (Esc)"
          >
            ✕
          </button>
        </div>

        {/* Main Image Stage */}
        <div className="lightbox-stage">
          <button
            type="button"
            className="lightbox-nav-btn lightbox-prev-btn"
            onClick={onPrev}
            aria-label="Previous photograph"
            title="Previous (Left Arrow)"
          >
            ‹
          </button>

          <div className="lightbox-frame">
            <img
              key={currentPhoto.src}
              src={currentPhoto.src}
              alt={currentPhoto.alt || `Memory ${currentFormatted}`}
              className="lightbox-img"
            />
          </div>

          <button
            type="button"
            className="lightbox-nav-btn lightbox-next-btn"
            onClick={onNext}
            aria-label="Next photograph"
            title="Next (Right Arrow)"
          >
            ›
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="lightbox-mobile-nav">
          <button
            type="button"
            className="lightbox-mobile-btn"
            onClick={onPrev}
            aria-label="Previous photograph"
          >
            ‹ Previous
          </button>
          <span className="lightbox-mobile-counter">
            {currentFormatted} of {totalFormatted}
          </span>
          <button
            type="button"
            className="lightbox-mobile-btn"
            onClick={onNext}
            aria-label="Next photograph"
          >
            Next ›
          </button>
        </div>
      </div>
    </div>
  );
}
