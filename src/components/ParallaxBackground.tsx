import { useScrollProgress } from '@/hooks/useScrollEffects';

/**
 * Multi-layered parallax background.
 * Layer 1: Deep dark textured canvas (0.2x speed)
 * Layer 2: Blueprint grid (0.5x speed)
 * Layer 3 is the foreground content itself, handled by App.
 */
export function ParallaxBackground() {
  const scrollY = useScrollProgress();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Layer 1 — deep dark base */}
      <div className="absolute inset-0 bg-bg" />

      {/* Layer 2 — blueprint grid moving at 0.5x */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage:
            'linear-gradient(rgba(255,203,116,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,203,116,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          height: '200%',
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-[0.04]"
        style={{
          background:
            'radial-gradient(circle, rgba(255,203,116,1) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
