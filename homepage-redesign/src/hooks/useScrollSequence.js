'use client';

/**
 * useScrollSequence
 *
 * Preloads a folder of numbered frame images and maps a GSAP progress value
 * (0–1) to the correct frame drawn on a <canvas> ref.
 *
 * Usage:
 *   const { drawFrame } = useScrollSequence({
 *     dir: '/assets/scroll-sequences/hero/',
 *     totalFrames: 120,
 *     canvasRef,
 *     ext: 'jpg',          // optional, default 'jpg'
 *     padLength: 4,        // optional, default 4 → "0001.jpg"
 *   });
 *
 *   // Inside GSAP ScrollTrigger onUpdate:
 *   onUpdate: self => drawFrame(self.progress)
 *
 * File naming convention: /assets/scroll-sequences/hero/0001.jpg … 0120.jpg
 * Generate sequences from Google Flow / Runway exports using:
 *   ffmpeg -i clip.mp4 -vf fps=24 %04d.jpg
 */

import { useEffect, useRef, useCallback } from 'react';

export function useScrollSequence({
  dir,
  totalFrames,
  canvasRef,
  ext = 'jpg',
  padLength = 4,
}) {
  const framesRef = useRef([]);
  const loadedRef = useRef(false);

  // ── Preload all frames ─────────────────────────────────────────────────────
  useEffect(() => {
    if (loadedRef.current) return;
    if (typeof window === 'undefined') return;

    const pad = n => String(n).padStart(padLength, '0');
    const imgs = [];
    let loaded = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `${dir}${pad(i)}.${ext}`;
      img.onload = () => {
        loaded++;
        if (loaded === totalFrames) loadedRef.current = true;
      };
      imgs.push(img);
    }

    framesRef.current = imgs;
  }, [dir, totalFrames, ext, padLength]);

  // ── Draw the frame matching the given scroll progress (0–1) ───────────────
  const drawFrame = useCallback(
    (progress) => {
      const canvas = canvasRef?.current;
      if (!canvas) return;

      const frameIndex = Math.min(
        Math.floor(progress * totalFrames),
        totalFrames - 1
      );
      const img = framesRef.current[frameIndex];
      if (!img || !img.complete) return;

      const ctx = canvas.getContext('2d');

      // Resize canvas to match display size on first draw or resize
      if (canvas.width !== canvas.offsetWidth || canvas.height !== canvas.offsetHeight) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }

      // Cover-fit the frame (like background-size: cover)
      const scale = Math.max(
        canvas.width / img.naturalWidth,
        canvas.height / img.naturalHeight
      );
      const x = (canvas.width - img.naturalWidth * scale) / 2;
      const y = (canvas.height - img.naturalHeight * scale) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
    },
    [canvasRef, totalFrames]
  );

  return { drawFrame, frames: framesRef };
}
