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
import { getApiUrl } from './utils/api';

export default function App() {
  const audioPlayer = useAudioPlayer();
  const [_backendStatus, setBackendStatus] = useState('checking');

  useEffect(() => {
    // Verify frontend-backend connectivity
    fetch(getApiUrl('/api/health'))
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

  const handleOpenSurprise = () => {
    const countdownEl = document.getElementById('section-countdown');
    if (countdownEl) {
      countdownEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <div className="header-inner">
          <div className="header-stamp-wrapper">
            <VintageStamp value="06" text="NOV 2026" postmark="HERR &bull; NEHA" />
          </div>
          <h1 className="header-title">A Little Something for {RECIPIENT_NAME}</h1>
          <p className="header-subtitle">A collection of memories, letters & melody</p>
        </div>
      </header>

      <main className="main-content" id="main-content">
        {/* Exact Chronological Sequence: */}
        {/* 1. Vintage sealed envelope with interactive unsealing & invitation */}
        <EnvelopeIntro onOpenSurprise={handleOpenSurprise} />

        {/* 2. Birthday welcome screen + live dynamic countdown (Asia/Kolkata) */}
        <CountdownSection />

        {/* 3. A little collection of memories (5-10 personal photographs architecture) */}
        <MemoriesSection />

        {/* 4. The photograph (featured beach photograph + quotes) */}
        <FeaturedPhotoSection />

        {/* 5. Open when you feel... (interactive letter cards) */}
        <LettersSection />

        {/* 6. Our song ("I Wanna Be Yours" by Arctic Monkeys) */}
        <OurSongSection audioPlayer={audioPlayer} />

        {/* 7. Final sealed envelope (handwritten-style birthday letter + continuous music prep) */}
        <FinalEnvelopeSection audioPlayer={audioPlayer} />
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
