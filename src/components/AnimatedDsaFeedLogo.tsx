import React, { useEffect, useRef } from 'react';
import logoImage from '../assets/images/logo_transparent.png';

/**
 * AnimatedDsaFeedLogo
 * -------------------------------------------------------------------------
 * Drop-in replacement for <DsaFeedLogo />: same props, same visual output
 * at rest, same source asset (logo_transparent.png — nothing new to
 * upload, nothing redrawn). Adds one subtle continuous wave of emphasis
 * that travels left-to-right through D-S-A-F-e-e-d and loops forever.
 *
 * WHY NO SEPARATE LETTER FILES
 * The wordmark is a single flat PNG. Rather than segmenting it into 7
 * cropped assets, this stacks 7 copies of the *same* <img>, each masked
 * to one letter's horizontal slice via CSS clip-path (measured directly
 * off the source image's pixel columns — see the LETTER_ZONES table).
 * At rest the 7 slices tile back together into the exact original logo.
 * Only the active slice's own image layer is scaled/lifted/brightened,
 * anchored at that letter's own center, so neighbors are never disturbed
 * and the underlying asset is never modified.
 *
 * WHY ONE CONTINUOUS DRIVER, NOT 7 KEYFRAME ANIMATIONS
 * A fixed per-letter animation-delay is still 7 independent clocks, which
 * reads as a slideshow no matter how the delays are tuned. Here a single
 * `progress` value ticks forward via requestAnimationFrame and never
 * resets; each letter's intensity is just "how close is the wave right
 * now" — a raised-cosine falloff of its circular distance to that single
 * moving point. Neighboring letters' falloff windows overlap on purpose
 * (waveWidth > letter spacing), so the next letter is always rising
 * before the previous one has finished settling. Because distance is
 * measured on a ring (progress wraps mod 1), the transition from the
 * last "d" back to the first "D" is mathematically identical to any
 * other letter-to-letter handoff — there is no seam to hide.
 */

// Fractional x-ranges of each letter within logo_transparent.png, measured
// directly from the source image's ink columns (851×160 source). These
// only need to change if the logo asset itself changes.
const LETTER_ZONES: { left: number; right: number }[] = [
  { left: 0.0, right: 0.1596 },  // D
  { left: 0.1731, right: 0.3067 }, // S
  { left: 0.3106, right: 0.4865 }, // A
  { left: 0.4894, right: 0.5923 }, // F
  { left: 0.5942, right: 0.7192 }, // e
  { left: 0.7308, right: 0.8548 }, // e
  { left: 0.8644, right: 1.0 },    // d
];

function activation(circularDist: number, waveWidth: number): number {
  if (circularDist >= waveWidth) return 0;
  return 0.5 * (1 + Math.cos((Math.PI * circularDist) / waveWidth));
}

function circularDistance(a: number, b: number): number {
  const d = Math.abs(a - b);
  return Math.min(d, 1 - d);
}

interface AnimatedDsaFeedLogoProps {
  className?: string;
  textColor?: string;
  accentColor?: string;
  /** seconds per full wave lap, 3.2–4s recommended */
  duration?: number;
  /** activation window half-width (ring units); keep > 1/7 ≈ 0.143 for overlap */
  waveWidth?: number;
  /** peak scale bump, e.g. 0.02 = up to +2% */
  scaleStrength?: number;
  /** peak lift in px */
  verticalOffsetPx?: number;
  /** peak brightness bump, e.g. 0.05 = up to +5% */
  brightnessStrength?: number;
}

export const AnimatedDsaFeedLogo: React.FC<AnimatedDsaFeedLogoProps> = ({
  className = 'h-8',
  duration = 3.6,
  waveWidth = 0.17,
  scaleStrength = 0.02,
  verticalOffsetPx = 1,
  brightnessStrength = 0.05,
}) => {
  const layerRefs = useRef<(HTMLImageElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const prefersReducedMotionRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotionRef.current = mq.matches;

    if (prefersReducedMotionRef.current) {
      // Static logo: leave every layer at rest, no rAF loop started.
      return undefined;
    }

    const tick = (nowMs: number) => {
      if (startRef.current === null) startRef.current = nowMs;
      const elapsed = (nowMs - startRef.current) / 1000;
      const progress = (elapsed / duration) % 1;

      layerRefs.current.forEach((el, i) => {
        if (!el) return;
        const zone = LETTER_ZONES[i];
        const center = (zone.left + zone.right) / 2;
        const dist = circularDistance(progress, center);
        const a = activation(dist, waveWidth);

        const scale = 1 + scaleStrength * a;
        const lift = -verticalOffsetPx * a;
        const brightness = 1 + brightnessStrength * a;

        el.style.transform = `translateY(${lift}px) scale(${scale})`;
        el.style.filter = `brightness(${brightness})`;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [duration, waveWidth, scaleStrength, verticalOffsetPx, brightnessStrength]);

  return (
    <span
      className={`relative inline-block select-none ${className}`}
      style={{ aspectRatio: '851 / 160' }}
      role="img"
      aria-label="DSAfeed Logo"
    >
      {LETTER_ZONES.map((zone, i) => {
        const leftPct = zone.left * 100;
        const rightPct = (1 - zone.right) * 100;
        const centerPct = ((zone.left + zone.right) / 2) * 100;
        return (
          <img
            key={i}
            ref={(el) => (layerRefs.current[i] = el)}
            src={logoImage}
            alt=""
            draggable={false}
            className="absolute inset-0 h-full w-full object-contain pointer-events-none"
            style={{
              clipPath: `inset(0 ${rightPct}% 0 ${leftPct}%)`,
              transformOrigin: `${centerPct}% 50%`,
              willChange: 'transform, filter',
            }}
          />
        );
      })}
    </span>
  );
};
