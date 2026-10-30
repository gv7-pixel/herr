import React from 'react';
import { MUSIC_META } from '../utils/constants';

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

/**
 * Persistent Audio Player Bar
 * Clean glassmorphism footer bar with continuous music control.
 */
export default function AudioBar({ audioPlayer }) {
  const { isPlaying, togglePlay, currentTime = 0, progressPercent = 0 } = audioPlayer || {};

  return (
    <aside className="audio-persistent-bar" aria-label="Music playback controller">
      {/* Top micro progress line */}
      <div
        className="audio-bar-progress-line"
        style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
        aria-hidden="true"
      />

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
            <span className="audio-bar-artist">
              {MUSIC_META.artist} &bull; {formatTime(currentTime)}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="audio-toggle-btn"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause Arctic Monkeys - I Wanna Be Yours' : 'Play Arctic Monkeys - I Wanna Be Yours'}
        >
          <span aria-hidden="true">{isPlaying ? '❚❚' : '▶'}</span>
          <span>{isPlaying ? 'Pause' : 'Play Song'}</span>
        </button>
      </div>
    </aside>
  );
}
