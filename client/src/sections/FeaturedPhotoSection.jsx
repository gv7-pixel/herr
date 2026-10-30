import React from 'react';
import VintageDivider from '../components/VintageDivider';
import { FEATURED_PHOTO_META } from '../utils/constants';

/**
 * Section 4: The Photograph
 * Featured beach photograph of us together with warm matting frame,
 * personal caption, and romantic attribution.
 */
export default function FeaturedPhotoSection() {
  return (
    <section className="section-container anim-fade-in" id="section-featured-photo">
      <span className="section-corner-flourish" aria-hidden="true">✦ 04</span>

      <div className="section-content">
        <span className="vintage-tag">Section 04</span>
        <h2 className="section-title">The Photograph</h2>
        <p className="section-subtitle">A singular afternoon captured forever.</p>
        <VintageDivider />

        <div className="featured-photo-frame" style={{ width: '100%' }}>
          <div className="featured-photo-aspect">
            <span style={{ fontSize: '2rem', marginBottom: '8px' }}>🌊</span>
            <p className="font-serif" style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
              Featured Beach Photograph
            </p>
            <span className="vintage-detail-text">
              Reserved for personal photograph: <code>/assets/featured/beach-photo.jpg</code>
            </span>
          </div>

          <blockquote className="romantic-quote" style={{ marginTop: 'var(--space-4)' }}>
            <p>"{FEATURED_PHOTO_META.caption}"</p>
            <cite>{FEATURED_PHOTO_META.attribution}</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
