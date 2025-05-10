import { motion } from 'framer-motion';
import { languages } from '../content';

export default function LanguageSkillsSection() {
  return (
    <section id="lingue" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">Competenze Linguistiche</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {languages.map((lang, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-cream rounded-xl p-6 shadow-md border border-primary/10 text-center"
          >
            <h3 className="text-xl font-semibold mb-2">{lang.lang}</h3>
            <p className="text-primary font-medium text-sm mb-1">{lang.level}</p>
            <p className="text-sm text-primary/70 leading-snug mb-2">{lang.use}</p>
            <div className="flex justify-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-5 h-1.5 rounded-full ${i < lang.levelIndex ? 'bg-secondary' : 'bg-primary/20'}`}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
