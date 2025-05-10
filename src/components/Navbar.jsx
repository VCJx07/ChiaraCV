import { useState, useEffect } from 'react';
import { HeartHandshake, Hotel, Menu, X } from 'lucide-react';
import { links } from '../content';
import C2 from '../assets/c2.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-md border-b border-primary/10 px-6 md:px-20 py-4 md:py-6 ${scrolled ? 'bg-cream/100 shadow-sm' : 'bg-cream/100'}`}
      >
        <div className="flex justify-between items-center">
          <span className="font-bold text-secondary text-lg"> </span>
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className={`transition-colors duration-300 pb-1 border-b-2 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-secondary font-semibold border-secondary'
                      : 'text-primary/80 hover:text-primary border-transparent'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={() => setOpen(!open)} className="md:hidden text-primary">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-64 bg-cream p-6 shadow-xl flex flex-col gap-6 text-sm font-medium border-l border-primary/10">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`transition-colors duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-secondary font-semibold'
                    : 'text-primary/80 hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="h-28 md:h-32" />
    </>
  );
}
