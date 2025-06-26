import React, { useRef } from "react";
import "./SongCard.css";

function SongCard({ song }) {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <div className="song-card">
      <video
        className="video-thumbnail"
        src={song.video}
        muted
        loop
        autoPlay
      />

      <div className="song-info">
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>

      <div className="buttons">
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>

      <audio ref={audioRef} src={song.audio} />
    </div>
  );
}

export default SongCard;
