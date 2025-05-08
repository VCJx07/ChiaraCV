import { motion } from 'framer-motion';
import { profile } from '../content';

export default function Profile() {
  return (
    <section
      id="profilo"
      className="min-h-screen grid md:grid-cols-2 gap-12 items-center px-6 md:px-20 py-16"
    >
      {/* Testo */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          {profile.title}
        </h2>

        {profile.paragraphs.map((p, i) => (
          <p key={i} className="text-lg leading-relaxed mb-6 max-w-xl">
            {p}
          </p>
        ))}
      </motion.div>

      {/* Immagine */}
      <motion.img
        src={profile.image}
        alt={profile.title}
        className="hidden md:block rounded-2xl shadow-lg object-cover w-full h-[600px]"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
      />
    </section>
  );
}
