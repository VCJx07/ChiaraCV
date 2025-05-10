import { motion } from 'framer-motion';
import { digitalSkills } from '../content';
import { Monitor } from 'lucide-react';

export default function DigitalSkillsSection() {
  return (
    <section id="competenzeDigitali" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">Competenze Digitali</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {digitalSkills.digital.map((obj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-cream rounded-xl p-6 shadow-md border border-primary/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Monitor size={24} className="text-secondary" />
              <h3 className="text-base font-semibold leading-snug">{obj.label}</h3>
            </div>
            <p className="text-sm text-primary/80 leading-snug">{obj.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
