import React from 'react';
import VintageDivider from '../components/VintageDivider';
import { MUSIC_META } from '../utils/constants';

/**
 * Section 6: Our Song
 * Minimal vintage music-player with vinyl record disc visual detail.
 * Continuous audio playback hook integration (no forced autoplay).
 */
export default function OurSongSection({ audioPlayer }) {
  const { isPlaying, togglePlay, error } = audioPlayer || {};

  return (
    <section className="section-container anim-fade-in" id="section-our-song">
      <span className="section-corner-flourish" aria-hidden="true">✦ 06</span>

      <div className="section-content">
        <span className="vintage-tag">Section 06</span>
        <h2 className="section-title">Our Song</h2>
        <p className="section-subtitle">
          The melody that plays quietly in the background of every memory.
        </p>
        <VintageDivider />

        <div className="vinyl-container">
          <div
            className={`vinyl-disc ${isPlaying ? 'anim-vinyl-spin' : 'anim-vinyl-paused'}`}
            aria-hidden="true"
          >
            <div className="vinyl-center-label">
              <div className="vinyl-center-hole" />
            </div>
          </div>

          <div className="paper-card paper-card-inset" style={{ textAlign: 'left', flex: 1, minWidth: '240px' }}>
            <span className="vintage-detail-text" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Track 01 &bull; Side A
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', margin: '4px 0', color: 'var(--text-primary)' }}>
              {MUSIC_META.title}
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-burgundy)', fontWeight: 500 }}>
              {MUSIC_META.artist}
            </p>

            <div style={{ marginTop: 'var(--space-4)' }}>
              <button
                type="button"
                className="btn-primary"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause song' : 'Play song'}
              >
                <span>{isPlaying ? '⏸' : '▶'}</span>
                <span>{isPlaying ? 'Pause Song' : 'Play Song'}</span>
              </button>
            </div>

            {error && (
              <p className="vintage-detail-text" style={{ color: 'var(--color-burgundy)', marginTop: 'var(--space-2)' }}>
                {error}
              </p>
            )}
          </div>
        </div>

        <p className="vintage-detail-text" style={{ marginTop: 'var(--space-5)' }}>
          Continuous playback &bull; Music flows seamlessly without restarting across section navigation
        </p>
      </div>
    </section>
  );
}
