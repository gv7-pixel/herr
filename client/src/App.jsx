import React, { useState, useEffect } from 'react';
import { useAudioPlayer } from './hooks/useAudioPlayer';
import AudioBar from './components/AudioBar';
import VintageStamp from './components/VintageStamp';
import EnvelopeIntro from './sections/EnvelopeIntro';
import CountdownSection from './sections/CountdownSection';
import MemoriesSection from './sections/MemoriesSection';
import FeaturedPhotoSection from './sections/FeaturedPhotoSection';
import LettersSection from './sections/LettersSection';
import OurSongSection from './sections/OurSongSection';
import FinalEnvelopeSection from './sections/FinalEnvelopeSection';
import { RECIPIENT_NAME } from './utils/constants';

export default function App() {
  const audioPlayer = useAudioPlayer();
  const [backendStatus, setBackendStatus] = useState('checking');

  useEffect(() => {
    // Verify frontend-backend connectivity
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.status === 'ok') {
          setBackendStatus('connected');
        } else {
          setBackendStatus('ready');
        }
      })
      .catch(() => {
        setBackendStatus('standalone');
      });
  }, []);

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <div className="header-inner">
          <div className="header-stamp-wrapper">
            <VintageStamp value="06" text="NOV 2026" postmark="HERR &bull; NEHA" />
          </div>
          <h1 className="header-title">A Little Something for {RECIPIENT_NAME}</h1>
          <p className="header-subtitle">A collection of memories, letters & melody</p>
          <span className="header-status-badge">
            Vintage Rose &amp; Parchment &bull; API {backendStatus}
          </span>
        </div>
      </header>

      <main className="main-content" id="main-content">
        {/* Exact Chronological Sequence: */}
        {/* 1. Vintage sealed envelope */}
        <EnvelopeIntro />

        {/* 2. Welcome screen + birthday countdown */}
        <CountdownSection />

        {/* 3. A little collection of memories */}
        <MemoriesSection />

        {/* 4. The photograph */}
        <FeaturedPhotoSection />

        {/* 5. Open when you feel... */}
        <LettersSection />

        {/* 6. Our song */}
        <OurSongSection audioPlayer={audioPlayer} />

        {/* 7. Final sealed envelope */}
        <FinalEnvelopeSection />
      </main>

      {/* Persistent audio controller */}
      <AudioBar audioPlayer={audioPlayer} />

      <footer className="app-footer">
        <p className="footer-love-note">Crafted with endless love for {RECIPIENT_NAME}</p>
        <p className="footer-date">November 6, 2026 &bull; An intimate romantic keepsake</p>
      </footer>
    </div>
  );
}
