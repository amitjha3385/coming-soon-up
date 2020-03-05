import React from "react";
import bgvideo from "./video/backgroundvideo.mp4";
import poster from "./video/poster.jpeg";
import play from "./video/play.png";
import pause from "./video/pause.png";

export default function Header() {
  const [playPauseIcon, setPlayPauseIcon] = React.useState(pause);

  const handleClickPlayPause = () => {
    var video = document.getElementById("video");
    if (video.paused) {
      video.play();
      setPlayPauseIcon(pause);
    } else {
      video.pause();
      setPlayPauseIcon(play);
    }
  };
  return (
    <div className="title-section">
      <header className="App-header">
        <div className="fullscreen-video-wrap">
          <video
            autoPlay
            muted
            className="background-video"
            id="video"
            onEnded={() => setPlayPauseIcon(play)}
          >
            <source src={bgvideo} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
        <img src={poster} alt="title" className="mobile-title-image" />
        <div className="centered">
          <h1 className="title-slogan">Explore the Wild</h1>
          <h2 className="title-subtitle">
            Exotic Expeditions and Immersive Travel Wizards
          </h2>
        </div>
        <div className="toolbar">
          <button id="play-pause" onClick={handleClickPlayPause}>
            <img className="play-pause-icon" src={playPauseIcon} alt="play" />
          </button>
        </div>
      </header>
      <div className="main-blurb">
        <h3>
          Handcrafted experiences created exclusively for the Explorer in you!
        </h3>
      </div>
    </div>
  );
}
