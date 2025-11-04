'use client';

import { useEffect, useRef } from "react";
import "./style.css";

export default function Home() {
  const mascotVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = mascotVideoRef.current;
    if (!video) return;

    const attemptPlay = () => {
      video.muted = true;
      video.playsInline = true;
      void video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      attemptPlay();
    } else {
      const handleCanPlay = () => {
        video.removeEventListener("canplay", handleCanPlay);
        attemptPlay();
      };

      video.addEventListener("canplay", handleCanPlay);
      return () => {
        video.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, []);

  const handleVideoEnded = () => {
    const video = mascotVideoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = video.duration;
  };

  return (
    <div className="home-page">
      <header className="home-header">
        <img src="/Logo.svg" alt="Hubode logo" className="home-logo" />
      </header>

      <main className="home-content">
        <div className="mascot-wrapper">
          <video
            ref={mascotVideoRef}
            className="mascot-video"
            src="/mascot-support.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnded}
          />
        </div>

        <h1 className="home-title">
          <span className="title-highlight">Co</span>
          <span className="title-default">mplete</span>{" "}
          <span className="title-highlight">Living</span>
        </h1>

        <p className="home-subtitle">Begins Soon</p>
      </main>

      <footer className="home-footer">
        <nav className="social-links" aria-label="Social media">
          <a href="#" aria-label="Instagram" className="social-link">
            <img src="/instagram 5.png" alt="" />
          </a>
          <a href="#" aria-label="Facebook" className="social-link">
            <img src="/instagram 6.png" alt="" />
          </a>
          <a href="#" aria-label="Community" className="social-link">
            <img src="/instagram 7.png" alt="" />
          </a>
        </nav>
      </footer>
    </div>
  );
}
