import React, { useState, useEffect, useRef } from 'react';
import './music-player.css';

// Update your MusicPlayer component to accept this prop
interface MusicPlayerProps {
    audioPath: string;
    onMusicPreferenceSet: () => void;
    isMobile?: boolean;
  }

const MusicPlayer: React.FC<MusicPlayerProps> = ({ audioPath, onMusicPreferenceSet }) => {
  const [showDialog, setShowDialog] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Check if user has already set preference
    const savedPreference = localStorage.getItem('musicEnabled');
    
    if (savedPreference !== null) {
      // Returning visitor, apply saved preference
      const preferenceEnabled = savedPreference === 'true';
      setMusicEnabled(true);
      setIsPlaying(preferenceEnabled);
      setShowDialog(false); // Hide dialog if preference is already set
      // Notify parent that preference is set
      onMusicPreferenceSet();
    }
    // For new visitors, dialog remains shown by default
  }, [onMusicPreferenceSet]);

  useEffect(() => {
    // Create audio element
    const audio = new Audio(audioPath);
    audio.loop = true;
    audio.volume = 0.7;
    audioRef.current = audio;
    
    // Handle page visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isPlaying && audioRef.current) {
        audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioPath, isPlaying]);

  // Control audio playback whenever isPlaying changes
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Audio playback failed:", error);
          setIsPlaying(false);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handleYesClick = () => {
    setShowDialog(false);
    setMusicEnabled(true);
    setIsPlaying(true);
    localStorage.setItem('musicEnabled', 'true');
    // Notify parent component that preference is set to start preloader
    onMusicPreferenceSet();
  };

  const handleNoClick = () => {
    setShowDialog(false);
    setMusicEnabled(true); // Still show the button
    setIsPlaying(false);
    localStorage.setItem('musicEnabled', 'false');
    // Notify parent component that preference is set to start preloader
    onMusicPreferenceSet();
  };

  const toggleMusic = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    localStorage.setItem('musicEnabled', newState.toString());
  };

  return (
    <div className="music-player">
      {showDialog && (
        <div className="music-dialog">
          <div className="music-dialog-header">
            <div className="greek-ornament left"></div>
            <h3>Music of the Gods</h3>
            <div className="greek-ornament right"></div>
          </div>
          <p>Would you like to enhance your journey through Olympus with the divine melodies?</p>
          <div className="music-buttons">
            <button onClick={handleYesClick} className="btn-yes">
              <span className="btn-text">Yes, Invoke the Muses</span>
            </button>
            <button onClick={handleNoClick} className="btn-no">
              <span className="btn-text">Continue in Silence</span>
            </button>
          </div>
        </div>
      )}
      
      {musicEnabled && !showDialog && (
        <button 
          onClick={toggleMusic} 
          className="music-toggle"
          aria-label={isPlaying ? "Pause background music" : "Play background music"}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default MusicPlayer;