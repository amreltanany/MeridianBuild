import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/content';

interface NavbarProps {
  visible: boolean;
}

export function Navbar({ visible }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[opacity,transform] duration-700 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-5 pointer-events-none'
      } ${scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}
      aria-hidden={!visible}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-tight text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
          aria-label="Meridian Build home"
        >
          Meridian<span className="text-accent">Build</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="accent-underline text-sm font-medium text-text/90 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:inline-flex"
        >
          Get a Quote
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-text md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-bg/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-base font-medium text-text/90 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-2 block rounded-md bg-accent px-5 py-3 text-center text-sm font-semibold text-bg hover:bg-accent-hover"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
