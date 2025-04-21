import React from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <div className="app">
      <h1>Lecture Video Progress Tracker</h1>
      <VideoPlayer />
    </div>
  );
}

export default App;
