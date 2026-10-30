import React, { useState, useRef } from 'react';
import VintageDivider from '../components/VintageDivider';
import PhotoLightbox from '../components/PhotoLightbox';
import { GALLERY_PHOTOS } from '../utils/constants';

/**
 * Section 3: A Little Collection of Memories
 * Minimal vintage scrapbook aesthetic featuring 14 personal photographs
 * with an interactive, touch-friendly, accessible photo lightbox.
 */
export default function MemoriesSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const activeTriggerRef = useRef(null);

  const handleOpenPhoto = (index, e) => {
    setActivePhotoIndex(index);
    activeTriggerRef.current = e.currentTarget;
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handlePrevPhoto = () => {
    setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : GALLERY_PHOTOS.length - 1));
  };

  const handleNextPhoto = () => {
    setActivePhotoIndex((prev) => (prev < GALLERY_PHOTOS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="section-container anim-fade-in" id="section-memories">
      <span className="section-corner-flourish" aria-hidden="true">✦ 03</span>

      <div className="section-content">
        <span className="vintage-tag">Section 03</span>
        <h2 className="section-title">A little collection of memories</h2>
        <p className="section-subtitle">
          Some moments are too special to be forgotten.
        </p>
        <VintageDivider />

        {/* Vintage Scrapbook Photo Grid */}
        <div className="memories-gallery-grid" role="region" aria-label="Personal memories photo gallery">
          {GALLERY_PHOTOS.map((photo, index) => {
            const numFormatted = String(index + 1).padStart(2, '0');
            // Subtle organic rotation for scrapbook character
            const rotations = ['-0.8deg', '0.6deg', '-0.5deg', '0.8deg', '-0.7deg', '0.5deg', '-0.4deg'];
            const rot = rotations[index % rotations.length];

            return (
              <article
                key={photo.id}
                className="scrapbook-card"
                style={{ '--card-rotation': rot }}
                onClick={(e) => handleOpenPhoto(index, e)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenPhoto(index, e);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Open memory photograph ${numFormatted} in enlarged view`}
              >
                {/* Vintage Washi Tape Detail on select cards */}
                {index % 3 === 0 && <div className="scrapbook-tape" aria-hidden="true" />}

                {/* Photograph Frame */}
                <div className="scrapbook-card-matting">
                  <div className="scrapbook-img-box">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="scrapbook-img"
                    />
                    <div className="scrapbook-hover-overlay" aria-hidden="true">
                      <span className="scrapbook-view-badge">View</span>
                    </div>
                  </div>
                </div>

                {/* Minimal Card Footer with subtle number emblem */}
                <div className="scrapbook-card-footer">
                  <span className="scrapbook-number font-serif">✦ {numFormatted} ✦</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        <PhotoLightbox
          isOpen={lightboxOpen}
          photos={GALLERY_PHOTOS}
          currentIndex={activePhotoIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrevPhoto}
          onNext={handleNextPhoto}
          triggerRef={activeTriggerRef}
        />
      </div>
    </section>
  );
}
