import { motion } from 'framer-motion';
import { skills } from '../content';
import competenzeImg from '../assets/hero2.jpg'; // usa l'immagine che preferisci

export default function SkillsSection() {
  return (
    <section id="competenze" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">Competenze Chiave</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Immagine a sinistra */}
        <div>
          <img
            src={competenzeImg}
            alt="Reception desk"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>

        {/* Box competenze a destra */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.core.map((item, idx) => (
            <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-cream rounded-xl p-6 shadow-md border border-primary/10"
            >
              <h3 className="text-base font-semibold text-primary mb-1">{item.label}</h3>
              <p className="text-sm text-primary/70 leading-snug">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
