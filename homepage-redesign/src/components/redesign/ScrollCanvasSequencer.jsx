'use client';

import { useEffect, useRef } from 'react';

export default function ScrollCanvasSequencer({
  desktopFolder      = '/assets/scroll-sequences/hero-neural/desktop',
  mobileFolder       = '/assets/scroll-sequences/hero-neural/mobile',
  framePrefix        = 'hero-frame',
  totalDesktopFrames = 240,
  totalMobileFrames  = 120,
  triggerId          = 'hero-scroll-container',
}) {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);      // populated progressively — no re-renders
  const stateRef  = useRef({
    currentFrame: 0,
    targetFrame:  0,
    isMobile:     false,
    totalFrames:  totalDesktopFrames,
    ready:        false,             // true once frame-0 is drawable
  });

  // ── Progressive preload ───────────────────────────────────────────────────
  useEffect(() => {
    const mobile = window.innerWidth < 768;
    stateRef.current.isMobile    = mobile;
    stateRef.current.totalFrames = mobile ? totalMobileFrames : totalDesktopFrames;
    const folder = mobile ? mobileFolder : desktopFolder;
    const total  = stateRef.current.totalFrames;

    // Allocate slots up front so index lookups work immediately
    imagesRef.current = new Array(total).fill(null);

    Array.from({ length: total }, (_, i) => {
      const img = new Image();
      const num = String(i + 1).padStart(3, '0');
      img.src = `${folder}/${framePrefix}-${num}.webp`;

      img.onload = () => {
        imagesRef.current[i] = img;
        // Mark ready on first successful load so the LERP loop can draw frame 0
        if (!stateRef.current.ready) stateRef.current.ready = true;
      };

      img.onerror = () => {
        // slot stays null — drawFrame guards against null gracefully
      };
    });
  }, [desktopFolder, mobileFolder, framePrefix, totalDesktopFrames, totalMobileFrames]);

  // ── Render + LERP loop (starts immediately on mount) ─────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawFrame = (frameIndex) => {
      const img = imagesRef.current[frameIndex];
      if (!img || !img.complete || !img.naturalWidth) return;

      const rect = canvas.getBoundingClientRect();
      const cw = rect.width;
      const ch = rect.height;
      if (!cw || !ch) return;

      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const imgRatio    = iw / ih;
      const canvasRatio = cw / ch;

      let dw = cw, dh = ch, ox = 0, oy = 0;
      if (canvasRatio > imgRatio) {
        dh = cw / imgRatio;
        oy = (ch - dh) / 2;
      } else {
        dw = ch * imgRatio;
        ox = (cw - dw) / 2;
      }

      // 1.15× overscan — pushes VEO watermark out of frame
      const OVERSCAN = 1.15;
      dw *= OVERSCAN; dh *= OVERSCAN;
      ox = (cw - dw) / 2;
      oy = (ch - dh) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, ox, oy, dw, dh);
    };

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width  = rect.width  * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      drawFrame(Math.round(stateRef.current.currentFrame));
    };

    const handleScroll = () => {
      const trigger = document.getElementById(triggerId);
      if (!trigger) return;
      const rect            = trigger.getBoundingClientRect();
      const totalScrollHeight = rect.height - window.innerHeight;
      let progress;
      if (totalScrollHeight <= 0) {
        progress = rect.top < 0 ? 1 : 0;
      } else {
        progress = Math.max(0, Math.min(1, -rect.top / totalScrollHeight));
      }
      stateRef.current.targetFrame = progress * (stateRef.current.totalFrames - 1);
    };

    // LERP loop — 0.25 (≈ scrub: 0.2) for snappy response on first pixel
    let rafId;
    const lerpLoop = () => {
      const state = stateRef.current;
      if (state.ready) {
        const diff = state.targetFrame - state.currentFrame;
        if (Math.abs(diff) > 0.01) {
          state.currentFrame += diff * 0.25;
          drawFrame(Math.round(state.currentFrame));
        }
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
  }, [triggerId]);   // no isLoaded dep — loop is always live

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full will-change-transform"
        style={{ display: 'block' }}
        aria-hidden="true"
      />
    </div>
  );
}
