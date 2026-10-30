import React from 'react';
import { MUSIC_META } from '../utils/constants';

/**
 * Persistent Audio Player Bar
 * Clean glassmorphism footer bar with continuous music control.
 */
export default function AudioBar({ audioPlayer }) {
  const { isPlaying, togglePlay } = audioPlayer;

  return (
    <aside className="audio-persistent-bar" aria-label="Music playback controller">
      <div className="audio-bar-content">
        <div className="audio-bar-meta">
          <div
            className={`audio-mini-vinyl ${isPlaying ? 'anim-vinyl-spin' : 'anim-vinyl-paused'}`}
            aria-hidden="true"
          >
            <div className="audio-mini-hole" />
          </div>
          <div className="audio-bar-text">
            <span className="audio-bar-title">{MUSIC_META.title}</span>
            <span className="audio-bar-artist">{MUSIC_META.artist}</span>
          </div>
        </div>

        <button
          type="button"
          className="audio-toggle-btn"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause Arctic Monkeys - I Wanna Be Yours' : 'Play Arctic Monkeys - I Wanna Be Yours'}
        >
          <span aria-hidden="true">{isPlaying ? '⏸' : '▶'}</span>
          <span>{isPlaying ? 'Pause' : 'Play Song'}</span>
        </button>
      </div>
    </aside>
  );
}
