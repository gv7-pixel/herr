import React from 'react';
import VintageDivider from '../components/VintageDivider';

/**
 * Section 3: A Little Collection of Memories
 * Scrapbook-inspired photo gallery presentation.
 * Prepared for 5–10 personal photographs in dedicated directory (/assets/photos/).
 */
export default function MemoriesSection() {
  const photoSlots = [
    { id: 1, caption: 'First smile' },
    { id: 2, caption: 'Coffee afternoon' },
    { id: 3, caption: 'Unplanned walks' },
    { id: 4, caption: 'That quiet evening' },
    { id: 5, caption: 'Golden light' },
    { id: 6, caption: 'Laughing together' },
  ];

  return (
    <section className="section-container anim-fade-in" id="section-memories">
      <span className="section-corner-flourish" aria-hidden="true">✦ 03</span>

      <div className="section-content">
        <span className="vintage-tag">Section 03</span>
        <h2 className="section-title">A Little Collection of Memories</h2>
        <p className="section-subtitle">
          Small, unforgettable moments frozen in time like pressed wildflowers.
        </p>
        <VintageDivider />

        <div className="scrapbook-grid" style={{ width: '100%' }}>
          {photoSlots.map((slot) => (
            <article key={slot.id} className="scrapbook-frame">
              <div className="scrapbook-slot">
                <span style={{ fontSize: '1.25rem', marginBottom: '4px' }}>🖼</span>
                <span>Photo {slot.id}</span>
                <span className="vintage-detail-text">/assets/photos/</span>
              </div>
              <p className="scrapbook-caption">{slot.caption}</p>
            </article>
          ))}
        </div>

        <p className="vintage-detail-text" style={{ marginTop: 'var(--space-6)' }}>
          Curated collection &bull; Ready for 5–10 personal photographs in later phases
        </p>
      </div>
    </section>
  );
}
