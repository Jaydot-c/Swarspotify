// src/App.jsx
import "./App.css";
import songs from "./songsData";
import SongCard from "./components/SongCard";

function App() {
  return (
    <div className="App">
      <h1> Swarspotify💖</h1>
      <p className="subtitle">Shuddh Desi romance💕</p>
      <div className="song-list">
        {songs.map((song, index) => (
          <SongCard key={index} {...song} />
        ))}
      </div>
    </div>
  );
}

export default App;
