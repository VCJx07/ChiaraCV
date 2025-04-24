import { motion } from 'framer-motion';
import { hero } from '../content';

export default function Hero() {
  return (
    
    <section
  id="hero"
  className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-16 pt-10 md:pt-24"
>
      {/* Testo */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          {hero.name}: <span className="block">{hero.claim}</span>
        </h1>
        <p className="text-lg mb-8 max-w-xl">{hero.intro}</p>

        <div className="flex flex-wrap gap-4">
          {hero.buttons.map(btn => (
            <a
              key={btn.label}
              href={btn.href}
              className="px-6 py-3 rounded-xl bg-primary text-cream hover:opacity-90 transition"
            >
              {btn.label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Immagine */}
      <motion.img
        src={hero.image}
        alt={hero.name}
        className="rounded-2xl shadow-lg object-cover w-full h-[480px]"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
    </section>
  );
}