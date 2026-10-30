import React from 'react';
import { FEATURED_PHOTO_META } from '../utils/constants';

/**
 * Section 4: The photograph
 * One separate featured beach photograph of us together.
 * Caption: "The ocean was beautiful, but my favourite view was beside me."
 * Attribution: "— A little memory of us"
 */
export default function FeaturedPhotoSection() {
  return (
    <section className="section-container" id="section-featured-photo">
      <div className="section-content">
        <span className="section-badge">Section 4</span>
        <h2 className="section-title">The Photograph</h2>
        <div className="featured-card">
          <div className="featured-image-slot">
            <p>Featured beach photograph asset container (Asset directory: <code>/assets/featured/</code>)</p>
          </div>
          <blockquote className="featured-quote">
            <p>"{FEATURED_PHOTO_META.caption}"</p>
            <cite>{FEATURED_PHOTO_META.attribution}</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
