import React from 'react';
import VintageDivider from '../components/VintageDivider';

/**
 * Section 5: Open When You Feel...
 * Interactive paper-like letter cards designed for varied emotions and moments.
 */
export default function LettersSection() {
  const letters = [
    { id: 1, title: 'Open when you miss me' },
    { id: 2, title: 'Open when you need a smile' },
    { id: 3, title: 'Open when you cannot sleep' },
    { id: 4, title: 'Open when you doubt yourself' },
    { id: 5, title: 'Open on your birthday morning' },
    { id: 6, title: 'Open when you just want to know how loved you are' },
  ];

  return (
    <section className="section-container anim-fade-in" id="section-letters">
      <span className="section-corner-flourish" aria-hidden="true">✦ 05</span>

      <div className="section-content">
        <span className="vintage-tag">Section 05</span>
        <h2 className="section-title">Open When You Feel...</h2>
        <p className="section-subtitle">
          Folded letters sealed with tenderness, awaiting the right moment to be read.
        </p>
        <VintageDivider />

        <div className="letters-grid" style={{ width: '100%' }}>
          {letters.map((letter) => (
            <article key={letter.id} className="letter-card interactive-lift">
              <div>
                <span className="vintage-detail-text" style={{ display: 'block', marginBottom: '2px' }}>
                  Letter No. 0{letter.id}
                </span>
                <h3 className="letter-card-title">{letter.title}</h3>
              </div>
              <span className="letter-card-action" aria-hidden="true">
                Read &rarr;
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
