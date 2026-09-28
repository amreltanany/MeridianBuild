import { CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useScrollEffects';

const stats = [
  { value: '180+', label: 'Projects Delivered' },
  { value: '22', label: 'Years in Business' },
  { value: '98%', label: 'On-Time Completion' },
  { value: '15', label: 'Industry Awards' },
];

const values = [
  'Licensed & insured general contractor in 4 states',
  'In-house architecture, engineering, and construction teams',
  'Transparent pricing with guaranteed maximum price contracts',
  'Dedicated project manager for every build',
];

export function About() {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="relative border-t border-border bg-bg py-24 md:py-32"
    >
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <div
            className={`reveal ${isVisible ? 'is-visible' : ''} relative`}
          >
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <img
                src="https://images.pexels.com/photos/29197533/pexels-photo-29197533.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Two engineers discussing plans at an active construction site under sunny skies"
                width={940}
                height={650}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-border bg-surface p-6 shadow-xl md:-right-6">
              <p className="font-display text-3xl font-bold text-accent">22+</p>
              <p className="text-sm text-text-muted">Years Building Trust</p>
            </div>
          </div>

          {/* Text side */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              About Meridian Build
            </p>
            <h2
              className="font-display text-3xl font-bold text-text sm:text-4xl md:text-5xl"
              style={{ textWrap: 'balance' }}
            >
              A Construction Partner You Can Trust
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              For over two decades, Meridian Build has delivered award-winning
              residential and commercial construction across the Rocky Mountain
              region. We integrate design, engineering, and building under one
              roof — so every project moves faster, costs less to manage, and
              finishes to a higher standard.
            </p>
            <ul className="mt-8 space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-text/90">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-accent"
                    size={20}
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-surface p-4 text-center"
                >
                  <p className="font-display text-2xl font-bold text-accent">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
