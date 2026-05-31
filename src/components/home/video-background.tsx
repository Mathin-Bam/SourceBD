'use client';

import { useRef, useState, useCallback, useEffect } from 'react';

const VIDEOS = ['/videos/vid1.mp4', '/videos/vid2.mp4'];

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const handleEnded = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
  }, []);

  // When the index changes, load and play the next video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.src = VIDEOS[currentIndex];
    video.load();
    video.play().catch(() => {
      // Autoplay might be blocked; that's okay, it's just a background
    });
  }, [currentIndex]);

  // Mark as ready once the first frame is painted
  const handleCanPlay = useCallback(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video element */}
      <video
        ref={videoRef}
        muted
        playsInline
        onEnded={handleEnded}
        onCanPlay={handleCanPlay}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isReady ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-bengal-forest/70" />

      {/* Subtle gradient at the bottom for a clean edge */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-jute-cream to-transparent" />
    </div>
  );
}
