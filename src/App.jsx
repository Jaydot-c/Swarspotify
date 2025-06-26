import React from "react";
import SongCard from "./components/SongCard";
import "./App.css";
import songsData from "./songsData";

function App() {
  return (
    <div className="app-container">
      <h1>My Spotify-Themed Birthday Songs 🎶</h1>
      {songsData.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
}

export default App;
