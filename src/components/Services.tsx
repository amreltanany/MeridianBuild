import { HardHat, Compass, Hammer } from 'lucide-react';
import { services as servicesData, type Service } from '@/data/content';
import { useReveal } from '@/hooks/useScrollEffects';

const iconMap = {
  'hard-hat': HardHat,
  compass: Compass,
  hammer: Hammer,
};

export function Services() {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="services"
      ref={ref}
      className="relative border-t border-border bg-bg py-24 md:py-32"
    >
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className={`reveal ${isVisible ? 'is-visible' : ''} mb-16 max-w-2xl`}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            What We Do
          </p>
          <h2
            className="font-display text-3xl font-bold text-text sm:text-4xl md:text-5xl"
            style={{ textWrap: 'balance' }}
          >
            Services Built on Craftsmanship
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.icon];
            return (
              <ServiceCard
                key={service.id}
                service={service}
                icon={Icon}
                delay={idx * 120}
                isVisible={isVisible}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  icon: Icon,
  delay,
  isVisible,
}: {
  service: Service;
  icon: typeof HardHat;
  delay: number;
  isVisible: boolean;
}) {
  return (
    <article
      className={`reveal ${isVisible ? 'is-visible' : ''} group rounded-2xl border border-border bg-surface p-8 transition-colors duration-300 hover:border-accent/40 hover:bg-surface-hover`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 transition-colors duration-300 group-hover:border-accent/60">
        <Icon className="text-accent" size={28} aria-hidden="true" />
      </div>
      <h3 className="font-display mb-3 text-xl font-bold text-text">
        {service.title}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-text-muted">
        {service.description}
      </p>
      <ul className="space-y-2.5">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-sm text-text/80"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
