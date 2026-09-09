import { timelineStages } from '@/data/content';
import { useReveal } from '@/hooks/useScrollEffects';

export function Timeline() {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="process"
      ref={ref}
      className="relative overflow-hidden border-t border-border bg-bg py-24 md:py-32"
    >
      {/* Blueprint background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,203,116,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,203,116,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-8xl px-6 lg:px-10">
        <div className={`reveal ${isVisible ? 'is-visible' : ''} mb-16 max-w-2xl`}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            How We Work
          </p>
          <h2
            className="font-display text-3xl font-bold text-text sm:text-4xl md:text-5xl"
            style={{ textWrap: 'balance' }}
          >
            Construction Stages
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Every project follows a disciplined five-stage process — from bare
            ground to the moment we hand you the keys.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-0 right-0 top-8 h-0.5 bg-border">
              <div
                className="h-full bg-accent transition-[width] duration-1000"
                style={{ width: isVisible ? '100%' : '0%' }}
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              {timelineStages.map((stage, idx) => (
                <div
                  key={stage.id}
                  className={`reveal ${isVisible ? 'is-visible' : ''} flex flex-col items-center text-center`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-bg">
                    <span className="font-display text-lg font-bold text-accent">
                      {stage.step}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold text-text">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {stage.description}
                  </p>
                  <span className="mt-3 rounded-full border border-border px-3 py-1 text-xs font-medium text-accent">
                    {stage.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden">
          <div className="relative space-y-8 pl-8">
            <div className="absolute bottom-4 left-3 top-4 w-0.5 bg-border" />
            {timelineStages.map((stage, idx) => (
              <div
                key={stage.id}
                className={`reveal ${isVisible ? 'is-visible' : ''} relative`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-bg">
                  <span className="text-[10px] font-bold text-accent">
                    {stage.step}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-text">
                  {stage.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                  {stage.description}
                </p>
                <span className="mt-2 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-accent">
                  {stage.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
