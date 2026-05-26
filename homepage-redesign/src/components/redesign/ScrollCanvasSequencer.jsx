'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollCanvasSequencer({
  desktopFolder      = '/assets/scroll-sequences/hero-neural/desktop',
  mobileFolder       = '/assets/scroll-sequences/hero-neural/mobile',
  framePrefix        = 'hero-frame',   // filename prefix before -NNN.webp
  totalDesktopFrames = 240,
  totalMobileFrames  = 120,
  triggerId          = 'hero-scroll-container',
}) {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const stateRef = useRef({
    currentFrame: 0,
    targetFrame: 0,
    isMobile: false,
    totalFrames: totalDesktopFrames,
    folderPath: desktopFolder,
  });

  // ── Preload frames ────────────────────────────────────────────────────────
  useEffect(() => {
    const mobile = window.innerWidth < 768;
    stateRef.current.isMobile = mobile;
    stateRef.current.totalFrames = mobile ? totalMobileFrames : totalDesktopFrames;
    stateRef.current.folderPath = mobile ? mobileFolder : desktopFolder;

    const activeFolder = stateRef.current.folderPath;
    const activeTotal = stateRef.current.totalFrames;

    let loadedCount = 0;
    const preloadedImages = [];

    const loadImages = async () => {
      const promises = Array.from({ length: activeTotal }, (_, i) => {
        return new Promise((resolve) => {
          const img = new Image();
          const frameNum = String(i + 1).padStart(3, '0');
          img.src = `${activeFolder}/${framePrefix}-${frameNum}.webp`;
          img.onload = () => {
            loadedCount++;
            setLoadingProgress(Math.round((loadedCount / activeTotal) * 100));
            resolve(img);
          };
          img.onerror = () => {
            // Graceful fallback — frame missing (expected during development)
            loadedCount++;
            setLoadingProgress(Math.round((loadedCount / activeTotal) * 100));
            resolve(img);
          };
          preloadedImages.push(img);
        });
      });

      await Promise.all(promises);
      setImages(preloadedImages);
      setIsLoaded(true);
    };

    loadImages();
  }, [desktopFolder, mobileFolder, framePrefix, totalDesktopFrames, totalMobileFrames]);

  // ── Render + LERP loop ────────────────────────────────────────────────────
  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Retina / high-DPI canvas sizing
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      drawFrame(Math.round(stateRef.current.currentFrame));
    };

    // object-fit: cover image draw
    const drawFrame = (frameIndex) => {
      const img = images[frameIndex];
      if (!img || !img.complete || !img.naturalWidth) return;

      const rect = canvas.getBoundingClientRect();
      const cw = rect.width;
      const ch = rect.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      const imgRatio = iw / ih;
      const canvasRatio = cw / ch;

      let dw = cw, dh = ch, ox = 0, oy = 0;
      if (canvasRatio > imgRatio) {
        dh = cw / imgRatio;
        oy = (ch - dh) / 2;
      } else {
        dw = ch * imgRatio;
        ox = (cw - dw) / 2;
      }

      // 1.15× overscan — pushes bottom-right corner watermark out of frame
      const OVERSCAN = 1.15;
      dw *= OVERSCAN;
      dh *= OVERSCAN;
      ox = (cw - dw) / 2;
      oy = (ch - dh) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, ox, oy, dw, dh);
    };

    // Scroll → targetFrame mapping
    const handleScroll = () => {
      const trigger = document.getElementById(triggerId);
      if (!trigger) return;
      const rect = trigger.getBoundingClientRect();
      const totalScrollHeight = rect.height - window.innerHeight;
      let progress;
      if (totalScrollHeight <= 0) {
        progress = rect.top < 0 ? 1 : 0;
      } else {
        progress = Math.max(0, Math.min(1, -rect.top / totalScrollHeight));
      }
      stateRef.current.targetFrame = progress * (stateRef.current.totalFrames - 1);
    };

    // LERP animation loop — 0.15 dampening for snappy scroll response
    let rafId;
    const lerpLoop = () => {
      const state = stateRef.current;
      const diff = state.targetFrame - state.currentFrame;
      if (Math.abs(diff) > 0.01) {
        state.currentFrame += diff * 0.15;
        drawFrame(Math.round(state.currentFrame));
      }
      rafId = requestAnimationFrame(lerpLoop);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', handleScroll, { passive: true });
    resizeCanvas();
    lerpLoop();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [isLoaded, images, triggerId]);

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0D1117]/90 z-50">
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              border: '2px solid rgba(0,242,254,0.2)',
              borderTopColor: '#00F2FE',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
              marginBottom: '1rem',
            }}
            aria-hidden="true"
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <span className="text-[10px] font-mono text-neon-cyan/80 tracking-widest uppercase">
            Initializing Neural Matrix: {loadingProgress}%
          </span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full will-change-transform"
        style={{
          opacity: isLoaded ? 0.6 : 0,
          transition: 'opacity 1000ms ease',
          display: 'block',
        }}
        aria-hidden="true"
      />
    </div>
  );
}
