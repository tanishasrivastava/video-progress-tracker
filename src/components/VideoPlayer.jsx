import React, { useEffect, useRef, useState } from "react";
import { mergeIntervals, getProgressPercent } from "../utils/intervalUtils";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [intervals, setIntervals] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("progressData") || "{}");
    if (saved.intervals) setIntervals(saved.intervals);
    if (videoRef.current && saved.lastTime)
      videoRef.current.currentTime = saved.lastTime;
  }, []);

  
  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;

    if (startTime === null) {
      setStartTime(currentTime);
    } else if (Math.abs(currentTime - startTime) >= 1) {
      const newInterval = [startTime, currentTime].sort((a, b) => a - b);
      const updated = mergeIntervals([...intervals, newInterval]);
      setIntervals(updated);
      setStartTime(currentTime);

      const percent = getProgressPercent(updated, videoRef.current.duration);
      setProgress(percent);

      localStorage.setItem(
        "progressData",
        JSON.stringify({ intervals: updated, lastTime: currentTime })
      );
    }
  };

  const handlePause = () => setStartTime(null);
  const handleSeeked = () => setStartTime(null);

  
  const handleReset = () => {
    localStorage.removeItem("progressData");
    setIntervals([]);
    setProgress(0);
    setStartTime(null);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause(); 
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        controls
        onTimeUpdate={handleTimeUpdate}
        onPause={handlePause}
        onSeeked={handleSeeked}
        src="/sample-video.mp4"
      />
      <div className="progress-info">
        <p>Progress: {progress.toFixed(2)}%</p>
        <progress value={progress} max="100" />
        <br />
        <button onClick={handleReset}>RESET PROGRESS</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
