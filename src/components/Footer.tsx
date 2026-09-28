import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useReveal } from '@/hooks/useScrollEffects';

export function Footer() {
  const { ref, isVisible } = useReveal<HTMLElement>();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <footer
      id="contact"
      ref={ref}
      className="relative border-t border-border bg-bg"
    >
      <div className="mx-auto max-w-8xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact info */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Get in Touch
            </p>
            <h2
              className="font-display text-3xl font-bold text-text sm:text-4xl md:text-5xl"
              style={{ textWrap: 'balance' }}
            >
              Start Your Project Today
            </h2>
            <p className="mt-4 max-w-md text-lg text-text-muted">
              Tell us about your vision and we'll get back to you within 48 hours
              with next steps and a preliminary timeline.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+13055550100"
                className="flex items-center gap-3 text-text/90 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface">
                  <Phone size={18} className="text-accent" aria-hidden="true" />
                </span>
                +1 (305) 555-0100
              </a>
              <a
                href="mailto:hello@meridianbuild.com"
                className="flex items-center gap-3 text-text/90 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface">
                  <Mail size={18} className="text-accent" aria-hidden="true" />
                </span>
                hello@meridianbuild.com
              </a>
              <div className="flex items-center gap-3 text-text/90">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface">
                  <MapPin size={18} className="text-accent" aria-hidden="true" />
                </span>
                1200 Construction Way, Denver, CO 80202
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            className={`reveal ${isVisible ? 'is-visible' : ''} rounded-2xl border border-border bg-surface p-8`}
            style={{ transitionDelay: '150ms' }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-text"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Jane Doe…"
                  className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-text placeholder:text-text-muted/60 focus:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-text"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  spellCheck={false}
                  placeholder="jane@example.com…"
                  className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-text placeholder:text-text-muted/60 focus:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-text"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project…"
                  className="w-full resize-none rounded-lg border border-border bg-bg px-4 py-3 text-text placeholder:text-text-muted/60 focus:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-bg transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-60"
              >
                {status === 'sending' ? (
                  'Sending…'
                ) : status === 'sent' ? (
                  'Message Sent'
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
              {status === 'sent' && (
                <p
                  className="text-center text-sm text-accent"
                  aria-live="polite"
                >
                  Thanks! We'll be in touch within 48 hours.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="font-display text-lg font-bold text-text">
            Meridian<span className="text-accent">Build</span>
          </p>
          <p className="text-sm text-text-muted">
            © 2026 Meridian Build. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#projects"
              className="text-text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              Projects
            </a>
            <a
              href="#services"
              className="text-text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
