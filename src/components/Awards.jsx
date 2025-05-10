import { motion } from 'framer-motion';
import { Sparkles, Award, ThumbsUp, Star } from 'lucide-react';
import { awards } from '../content';
const iconMap = {
  star: Star,
  award: Award,
  like: ThumbsUp,
  sparkles: Sparkles,
};

export default function AwardsSection() {
  return (
    <section id="premi" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">Riconoscimenti e Premi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {awards.map((award, idx) => {
          const Icon = iconMap[award.icon] ?? Award;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-cream rounded-xl p-6 shadow-md text-center border border-primary/10"
            >
              <div className="flex justify-center mb-4">
                <Icon size={28} className="text-secondary" />
              </div>
              <p className="text-3xl font-bold text-primary">{award.count}</p>
              <h3 className="text-lg font-semibold mt-2 mb-1">{award.title}</h3>
              <p className="text-sm text-primary/80 leading-snug">{award.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
