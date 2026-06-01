"use client";

import { useEffect, useRef } from "react";

export default function ShinyHeartCursor() {
  const mousePos = useRef<{x: number, y: number} | null>(null);

  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth < 768) return;

    // Premium Luxury Color Palette: Golds, Velvet Reds, Soft Pinks
    const colors = [
      "#D4AF37", "#FFD700", "#DAA520", // Sparkling Golds
      "#8C001A", "#A40000", "#7E191B", // Velvet Reds
      "#FFC0CB", "#FFB6C1", "#F9C5D1"  // Premium Pinks
    ];
    let lastSpawnTime = 0;

    const spawnHeart = (x: number, y: number) => {
      const heart = document.createElement("div");
      
      const isHollow = Math.random() > 0.5;
      
      if (isHollow) {
        // Hollow elegant heart
        heart.innerHTML = `
          <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 28.72l-1.92-1.76C6.88 20.32 2 15.84 2 10.4 2 6.08 5.44 2.56 9.68 2.56c2.4 0 4.72 1.12 6.32 2.88 1.6-1.76 3.92-2.88 6.32-2.88 4.24 0 7.68 3.52 7.68 7.84 0 5.44-4.88 9.92-12.08 16.56L16 28.72z" />
          </svg>
        `;
      } else {
        // Filled elegant heart
        heart.innerHTML = `
          <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 28.72l-1.92-1.76C6.88 20.32 2 15.84 2 10.4 2 6.08 5.44 2.56 9.68 2.56c2.4 0 4.72 1.12 6.32 2.88 1.6-1.76 3.92-2.88 6.32-2.88 4.24 0 7.68 3.52 7.68 7.84 0 5.44-4.88 9.92-12.08 16.56L16 28.72z" />
          </svg>
        `;
      }
      
      // Smaller, delicate sizes (8px to 16px)
      const size = Math.random() * 8 + 8; 
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      heart.style.position = "fixed";
      // Offset slightly so it trails from the pointer tip
      heart.style.left = `${x + 10}px`;
      heart.style.top = `${y + 10}px`;
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "999999";
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      heart.style.color = color;
      
      // Optimized shadow (less intense for GPU)
      heart.style.filter = `drop-shadow(0 0 3px ${color})`;
      
      document.body.appendChild(heart);

      // Faster, cleaner animation
      const driftX = (Math.random() - 0.5) * 30; 
      const driftY = -(Math.random() * 30 + 30); 
      const rotation = (Math.random() - 0.5) * 45;

      const animation = heart.animate([
        { transform: 'translate(-50%, -50%) scale(0.5) rotate(0deg)', opacity: 0 },
        { transform: 'translate(-50%, -50%) scale(1) rotate(10deg)', opacity: 0.7, offset: 0.2 },
        { transform: `translate(calc(-50% + ${driftX}px), calc(-50% + ${driftY}px)) scale(0.4) rotate(${rotation}deg)`, opacity: 0 }
      ], {
        duration: 1200 + Math.random() * 800, // Faster fade
        easing: 'ease-out',
      });

      animation.onfinish = () => {
        heart.remove();
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      const now = Date.now();
      // Increase throttle to 150ms to prevent massive DOM element accumulation
      if (now - lastSpawnTime < 150) return; 
      lastSpawnTime = now;
      
      // Use requestAnimationFrame for smoother DOM writes
      requestAnimationFrame(() => {
        spawnHeart(e.clientX, e.clientY);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
