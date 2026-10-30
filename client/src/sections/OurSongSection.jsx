import React from 'react';
import { MUSIC_META } from '../utils/constants';

/**
 * Section 6: Our song
 * "I Wanna Be Yours" by Arctic Monkeys
 * Audio player controls (with uninterrupted continuous playback architecture).
 */
export default function OurSongSection({ audioPlayer }) {
  const { isPlaying, togglePlay, error } = audioPlayer || {};

  return (
    <section className="section-container" id="section-our-song">
      <div className="section-content">
        <span className="section-badge">Section 6</span>
        <h2 className="section-title">Our Song</h2>
        <div className="song-card">
          <div className="song-details">
            <h3 className="song-title">{MUSIC_META.title}</h3>
            <p className="song-artist">{MUSIC_META.artist}</p>
          </div>
          <div className="player-controls">
            <button
              type="button"
              className="player-button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause song' : 'Play song'}
            >
              {isPlaying ? 'Pause' : 'Play Song'}
            </button>
            {error && <p className="audio-notice">{error}</p>}
          </div>
          <p className="playback-note">
            Playback is user-initiated (no forced autoplay) and configured to continue smoothly across all sections.
          </p>
        </div>
      </div>
    </section>
  );
}
