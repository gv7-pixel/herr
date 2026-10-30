import React from 'react';

/**
 * Section 3: A little collection of memories
 * Photo album grid for 5–10 personal photographs.
 * Photos to be uploaded by user in later phases.
 */
export default function MemoriesSection() {
  return (
    <section className="section-container" id="section-memories">
      <div className="section-content">
        <span className="section-badge">Section 3</span>
        <h2 className="section-title">A Little Collection of Memories</h2>
        <p className="section-subtitle">Moments frozen in time, waiting for personal photographs.</p>
        <div className="section-placeholder">
          <p>Prepared for 5–10 personal photographs (Assets directory: <code>/assets/photos/</code>)</p>
          <div className="gallery-placeholder-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="photo-slot">
                <span>Photo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
