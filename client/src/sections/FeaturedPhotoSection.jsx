import React, { useState } from 'react';
import VintageDivider from '../components/VintageDivider';
import PhotoLightbox from '../components/PhotoLightbox';
import { FEATURED_PHOTO_META } from '../utils/constants';

/**
 * Section 4: The Photograph
 * Dedicated, emotionally resonant presentation of the featured beach photograph.
 * Exclusively uses /assets/featured/neha-and-me-beach.jpg.
 * Caption: "The ocean was beautiful, but my favourite view was beside me."
 * Attribution: "— A little memory of us"
 */
export default function FeaturedPhotoSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const beachPhotoSrc = '/assets/featured/neha-and-me-beach.jpg';

  const featuredPhotoData = [
    {
      id: 'featured-beach',
      src: beachPhotoSrc,
      alt: 'Neha and me at the beach beside the ocean waves',
    },
  ];

  return (
    <section className="section-container anim-fade-in" id="section-featured-photo">
      <span className="section-corner-flourish" aria-hidden="true">✦ 04</span>

      <div className="section-content">
        <span className="vintage-tag">Section 04</span>
        <h2 className="section-title">The photograph</h2>
        <p className="section-subtitle">A quiet afternoon beside the sea.</p>
        <VintageDivider />

        {/* Featured Photograph Exhibition Frame */}
        <div className="featured-exhibition-wrapper">
          <figure
            className="featured-photo-frame"
            onClick={() => setLightboxOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setLightboxOpen(true);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Enlarge featured beach photograph"
            title="Click to view full screen"
          >
            {/* Subtle vintage photo corner detail */}
            <div className="featured-frame-matting">
              <div className="featured-img-container">
                <img
                  src={beachPhotoSrc}
                  alt="Neha and me together by the ocean waves"
                  className="featured-photo-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="featured-hover-hint" aria-hidden="true">
                  <span className="featured-hint-badge">View full size</span>
                </div>
              </div>
            </div>

            {/* Exact Required Caption & Attribution */}
            <figcaption className="romantic-quote">
              <p className="featured-quote-text font-serif">
                "{FEATURED_PHOTO_META.caption}"
              </p>
              <cite className="featured-quote-author font-handwritten">
                {FEATURED_PHOTO_META.attribution}
              </cite>
            </figcaption>
          </figure>
        </div>

        {/* Lightbox for Featured Beach Photo */}
        <PhotoLightbox
          isOpen={lightboxOpen}
          photos={featuredPhotoData}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => {}}
          onNext={() => {}}
        />
      </div>
    </section>
  );
}
