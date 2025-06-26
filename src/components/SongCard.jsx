import React, { useRef } from "react";
import "./SongCard.css";

function SongCard({ song, isPlaying, onPlay, registerAudioRef }) {
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        onPlay();  // Notify parent to pause others
        audioRef.current.play();
      }
    }
  };

  React.useEffect(() => {
    registerAudioRef(song.id, audioRef.current);
  }, [song.id, registerAudioRef]);

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
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      <audio ref={audioRef} src={song.audio} />
    </div>
  );
}

export default SongCard;

