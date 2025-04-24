import { GraduationCap, BookOpen, ShieldCheck, Lock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { education } from '../content';

const iconMap = {
  diploma: GraduationCap,
  course: BookOpen,
  privacy: Lock,
  security: ShieldCheck,
  training: Users,
};

export default function EducationSection() {
  return (
    <section id="formazione" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">Formazione e Certificazioni</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {education.map((item, idx) => {
          const Icon = iconMap[item.icon] ?? BookOpen;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-cream rounded-xl p-6 shadow-md border border-primary/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon size={24} className="text-primary" />
                <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
              </div>
              <p className="text-sm text-primary/80 leading-snug">{item.desc}</p>
              <p className="text-xs text-primary/60 mt-2">{item.period}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}