import { motion } from 'framer-motion';
import { profile } from '../content';

export default function Profile() {
  return (
    <section
      id="profilo"
      className="min-h-screen grid md:grid-cols-2 gap-12 items-center px-6 md:px-20 py-16"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-8">{profile.title}</h2>

        {profile.paragraphs.map((p, i) => (
          <p key={i} className="text-xl leading-relaxed mb-6 max-w-2xl text-primary/90">
            {p}
          </p>
        ))}
      </motion.div>
      <motion.img
        src={profile.image}
        alt={profile.title}
        className="md:block object-contain w-full h-[500px]"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
      />
    </section>
  );
}
