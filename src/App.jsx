import React, { useState, useRef } from "react";
import SongCard from "./components/SongCard";
import "./App.css";
import songsData from "./songsData";

function App() {
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState(null);
  const audioRefs = useRef({});

  const handlePlay = (id) => {
    // Pause all other songs
    Object.keys(audioRefs.current).forEach((key) => {
      if (key !== id && audioRefs.current[key]) {
        audioRefs.current[key].pause();
        audioRefs.current[key].currentTime = 0;
      }
    });
    setCurrentlyPlayingId(id);
  };

  const registerAudioRef = (id, audio) => {
    audioRefs.current[id] = audio;
  };

  return (
    <div className="app-container">
      <h1>My Spotify-Themed Birthday Songs 🎶</h1>
      {songsData.map((song) => (
        <SongCard
          key={song.id}
          song={song}
          isPlaying={currentlyPlayingId === song.id}
          onPlay={() => handlePlay(song.id)}
          registerAudioRef={registerAudioRef}
        />
      ))}
    </div>
  );
}

export default App;
