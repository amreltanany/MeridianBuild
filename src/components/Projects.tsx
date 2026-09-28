import { useState } from 'react';
import { X, MapPin, Calendar, Ruler, Clock } from 'lucide-react';
import { projects, type Project, type ProjectCategory } from '@/data/content';
import { useReveal } from '@/hooks/useScrollEffects';

const categories: (ProjectCategory | 'All')[] = [
  'All',
  'Residential',
  'Commercial',
  'Renovation',
];

export function Projects() {
  const { ref, isVisible } = useReveal<HTMLElement>();
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative border-t border-border bg-bg py-24 md:py-32"
    >
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div
          className={`reveal ${isVisible ? 'is-visible' : ''} mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between`}
        >
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Selected Work
            </p>
            <h2
              className="font-display text-3xl font-bold text-text sm:text-4xl md:text-5xl"
              style={{ textWrap: 'balance' }}
            >
              Featured Projects
            </h2>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project category filter">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  filter === cat
                    ? 'border-accent bg-accent text-bg'
                    : 'border-border text-text/70 hover:border-text/40 hover:text-text'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={idx * 100}
              isVisible={isVisible}
              onSelect={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function ProjectCard({
  project,
  delay,
  isVisible,
  onSelect,
}: {
  project: Project;
  delay: number;
  isVisible: boolean;
  onSelect: () => void;
}) {
  return (
    <article
      className={`reveal ${isVisible ? 'is-visible' : ''} group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        type="button"
        onClick={onSelect}
        className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-2xl"
        aria-label={`View details for ${project.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            width={940}
            height={650}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-bg">
            {project.category}
          </span>
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center gap-2 text-xs text-text-muted">
            <MapPin size={14} aria-hidden="true" />
            {project.location}
            <span className="mx-1">·</span>
            <Calendar size={14} aria-hidden="true" />
            {project.year}
          </div>
          <h3 className="font-display text-lg font-bold text-text transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-text-muted">
            {project.description}
          </p>
        </div>
      </button>
    </article>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-surface shadow-2xl"
        style={{ overscrollBehavior: 'contain' }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-bg/60 p-2 text-text backdrop-blur-sm transition-colors hover:bg-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Close project details"
        >
          <X size={20} />
        </button>
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.imageAlt}
            width={940}
            height={528}
            className="h-full w-full object-cover"
          />
          <span className="absolute left-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-bg">
            {project.category}
          </span>
        </div>
        <div className="p-8">
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-text-muted">
            <span className="flex items-center gap-1.5">
              <MapPin size={15} aria-hidden="true" /> {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={15} aria-hidden="true" /> {project.year}
            </span>
            <span className="flex items-center gap-1.5">
              <Ruler size={15} aria-hidden="true" /> {project.area}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={15} aria-hidden="true" /> {project.duration}
            </span>
          </div>
          <h3
            id="modal-title"
            className="font-display mb-4 text-2xl font-bold text-text"
          >
            {project.title}
          </h3>
          <p className="mb-3 text-base text-text/80">{project.description}</p>
          <p className="text-sm leading-relaxed text-text-muted">
            {project.details}
          </p>
        </div>
      </div>
    </div>
  );
}
