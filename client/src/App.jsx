import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { useAudioPlayer } from './hooks/useAudioPlayer';
import AudioBar from './components/AudioBar';
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
        <h1>A Little Something for {RECIPIENT_NAME}</h1>
        <p>Phase 1 &bull; Architecture & Foundation [Backend: {backendStatus}]</p>
      </header>

      <main className="main-content" id="main-content">
        {/* Sequence strictly follows specification: */}
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

      {/* Uninterrupted persistent audio controller */}
      <AudioBar audioPlayer={audioPlayer} />

      <footer className="app-footer">
        <p>&hearts; Crafted for {RECIPIENT_NAME} &bull; November 6, 2026</p>
      </footer>
    </div>
  );
}
