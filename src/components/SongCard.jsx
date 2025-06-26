import React, { useRef } from "react";
import "./SongCard.css";

export default function SongCard({ title, albumCover, video, audio, message }) {
  const audioRef = useRef();
  const videoRef = useRef();

  const handlePlay = () => {
    audioRef.current.play();
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    audioRef.current.pause();
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="song-card">
      <img src={albumCover} alt="Album Cover" className="album-cover" />

      <div className="song-info">
        <div className="title">{title}</div>
        <div className="message">{message}</div>
      </div>

      {/* Thumbnail video */}
      <video
        className="video-thumbnail"
        src={video}
        muted
        loop
        ref={videoRef}
      />

      <audio ref={audioRef} src={audio}></audio>

      <div className="buttons">
        <button className="play" onClick={handlePlay}>▶ Play</button>
        <button className="pause" onClick={handlePause}>❚❚ Pause</button>
      </div>
    </div>
  );
}
