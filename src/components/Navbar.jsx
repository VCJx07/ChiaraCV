import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
    { label: 'Home', href: '#hero' },
  { label: 'Profilo', href: '#profile' },
  { label: 'Esperienze', href: '#esperienze' },
  { label: 'Competenze', href: '#competenze' },
  { label: 'Formazione', href: '#formazione' },
  { label: 'Lingue', href: '#lingue' },
  { label: 'Contatti', href: '#contatti' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <><nav
          className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-md border-b border-primary/10 px-6 md:px-20 py-8 md:py-10 ${scrolled ? 'bg-white/100 shadow-sm' : 'bg-white/100'}`}
      >
          <div className="flex justify-between items-center">
              <span className="font-bold text-primary text-lg">CG</span>

              {/* Desktop menu */}
              <ul className="hidden md:flex gap-6 text-sm font-medium text-primary/80">
                  {links.map((link, idx) => (
                      <li key={idx}>
                          <a href={link.href} className="hover:text-primary transition-colors duration-300">
                              {link.label}
                          </a>
                      </li>
                  ))}
              </ul>

              {/* Mobile menu button */}
              <button onClick={() => setOpen(!open)} className="md:hidden text-primary">
                  {open ? <X size={24} /> : <Menu size={24} />}
              </button>
          </div>

          {/* Mobile menu dropdown */}
          {open && (
              <ul className="mt-4 md:hidden flex flex-col gap-4 text-sm font-medium text-primary/90 bg-cream p-6 rounded-xl shadow-md border border-primary/10">
                  {links.map((link, idx) => (
                      <li key={idx}>
                          <a href={link.href} onClick={() => setOpen(false)} className="block hover:text-primary transition">
                              {link.label}
                          </a>
                      </li>
                  ))}
              </ul>
          )}
      </nav><div className="h-28 md:h-32" /></>
  );
}
