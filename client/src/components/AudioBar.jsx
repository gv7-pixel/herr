import React from 'react';
import { MUSIC_META } from '../utils/constants';

/**
 * Persistent Audio Player Bar
 * Allows the user to toggle music playback from any section.
 * Operates independently of section changes so music never restarts or cuts out.
 */
export default function AudioBar({ audioPlayer }) {
  const { isPlaying, togglePlay } = audioPlayer;

  return (
    <aside className="audio-persistent-bar" aria-label="Audio player controller">
      <div className="audio-bar-content">
        <button
          type="button"
          className="audio-toggle-btn"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause background song' : 'Play background song'}
        >
          {isPlaying ? '⏸ Pause' : '▶ Play Song'}
        </button>
        <span className="audio-bar-title">
          {MUSIC_META.title} &bull; {MUSIC_META.artist}
        </span>
      </div>
    </aside>
  );
}
