import { motion } from 'framer-motion';
import { hero } from '../content';

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-16 py-0"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
          <span className="text-secondary">{hero.name}</span>
          <span className="block">{hero.claim}</span>
        </h1>
        <p className="text-lg mb-8 max-w-xl">{hero.intro}</p>
        <div className="flex flex-wrap gap-4"></div>
      </motion.div>
      <motion.img
        src={hero.image}
        alt={hero.name}
        className="rounded-2xl shadow-lg object-cover w-full h-auto max-h-[80dvh]"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
    </section>
  );
}
