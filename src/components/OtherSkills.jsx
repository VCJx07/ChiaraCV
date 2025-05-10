import { motion } from 'framer-motion';
import { languageSkills } from '../content';
import { BookOpen } from 'lucide-react';

export default function OtherSkillsSection() {
  return (
    <section id="altreCompetenze" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">Competenze linguistiche avanzate</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {languageSkills.languages.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-cream rounded-xl p-6 shadow-md border border-primary/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen size={24} className="text-secondary" />
              <h3 className="text-base font-semibold leading-snug">{skill.title}</h3>
            </div>
            <p className="text-sm text-primary/80 leading-snug">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
