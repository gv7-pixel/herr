import React, { useRef } from 'react';
import VintageDivider from '../components/VintageDivider';
import { MUSIC_META } from '../utils/constants';

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

/**
 * Section 6: Our Song
 * Beautiful vintage vinyl music player for "I Wanna Be Yours" by Arctic Monkeys.
 * Powered by the single persistent application-wide audio player.
 */
export default function OurSongSection({ audioPlayer }) {
  const {
    isPlaying,
    isLoading,
    isLoaded,
    currentTime = 0,
    duration = 0,
    progressPercent = 0,
    volume = 0.7,
    isMuted = false,
    error,
    togglePlay,
    seek,
    changeVolume,
    toggleMute,
  } = audioPlayer || {};

  const progressBarRef = useRef(null);

  const handleProgressClick = (e) => {
    if (!progressBarRef.current || duration <= 0) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickRatio = Math.max(0, Math.min(1, clickX / rect.width));
    seek(clickRatio * duration);
  };

  const handleSkip = (secondsOffset) => {
    seek(currentTime + secondsOffset);
  };

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

        <div className="vinyl-player-card">
          {/* Vinyl Disc with Realistic Rotating Visual */}
          <div className="vinyl-record-stage">
            <div
              className={`vinyl-disc ${isPlaying ? 'anim-vinyl-spin' : 'anim-vinyl-paused'}`}
              aria-hidden="true"
            >
              <div className="vinyl-groove groove-1" />
              <div className="vinyl-groove groove-2" />
              <div className="vinyl-groove groove-3" />
              <div className="vinyl-center-label">
                <span className="vinyl-label-text">HERR</span>
                <div className="vinyl-center-hole" />
              </div>
            </div>
          </div>

          {/* Player Console */}
          <div className="vintage-player-console">
            <div className="player-track-info">
              <span className="player-track-badge">
                Track 01 &bull; Side A &bull; Vintage Acoustic
              </span>
              <h3 className="player-song-title font-serif">{MUSIC_META.title}</h3>
              <p className="player-artist-name">{MUSIC_META.artist}</p>
            </div>

            {/* Interactive Progress Bar */}
            <div className="player-timeline-wrapper">
              <div className="player-time-row">
                <span className="player-time-text">{formatTime(currentTime)}</span>
                <span className="player-time-text">
                  {duration > 0 ? formatTime(duration) : isLoaded ? '0:00' : 'Loading...'}
                </span>
              </div>

              <div
                className="player-progress-bar-container"
                ref={progressBarRef}
                onClick={handleProgressClick}
                role="slider"
                tabIndex={0}
                aria-label="Audio playback seek bar"
                aria-valuemin={0}
                aria-valuemax={Math.floor(duration || 100)}
                aria-valuenow={Math.floor(currentTime)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    handleSkip(5);
                  } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    handleSkip(-5);
                  }
                }}
              >
                <div
                  className="player-progress-fill"
                  style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
                >
                  <div className="player-progress-handle" />
                </div>
              </div>
            </div>

            {/* Transport Controls */}
            <div className="player-controls-row">
              <button
                type="button"
                className="player-aux-btn"
                onClick={() => handleSkip(-10)}
                aria-label="Skip backward 10 seconds"
                title="Rewind 10s"
              >
                ↺ 10s
              </button>

              <button
                type="button"
                className="player-play-btn"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause song' : 'Play song'}
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isLoading ? (
                  <span className="player-btn-spinner" aria-hidden="true" />
                ) : (
                  <span className="player-play-icon" aria-hidden="true">
                    {isPlaying ? '❚❚' : '▶'}
                  </span>
                )}
                <span>{isPlaying ? 'Pause' : 'Play Song'}</span>
              </button>

              <button
                type="button"
                className="player-aux-btn"
                onClick={() => handleSkip(10)}
                aria-label="Skip forward 10 seconds"
                title="Forward 10s"
              >
                10s ↻
              </button>
            </div>

            {/* Volume Slider & Status Bar */}
            <div className="player-volume-row">
              <button
                type="button"
                className="player-mute-btn"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute volume' : 'Mute volume'}
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted || volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => changeVolume(parseFloat(e.target.value))}
                className="player-volume-slider"
                aria-label="Playback volume level"
              />

              <span className="player-volume-text">
                {isMuted ? 'Muted' : `${Math.round(volume * 100)}%`}
              </span>
            </div>

            {error && (
              <p className="player-error-text" role="alert">
                {error}
              </p>
            )}
          </div>
        </div>

        <p className="vintage-detail-text" style={{ marginTop: 'var(--space-4)' }}>
          Continuous playback &bull; Music flows seamlessly without restarting across section navigation
        </p>
      </div>
    </section>
  );
}
