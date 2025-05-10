import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { recognitions } from '../content';

export default function RecognitionsSection() {
  return (
    <section id="recognitions" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">Cosa dicono di me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recognitions.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-primary/10 shadow-sm rounded-xl px-6 py-5"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-500 mb-1 inline-block mr-1" />
            ))}
            <p className="text-sm text-primary/80 italic">“{item.text}”</p>
            <p className="text-sm text-primary mt-2 font-semibold">– {item.author}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.keys.map((k, i) => (
                <span
                  key={i}
                  className="text-xs bg-cream text-primary px-2 py-1 rounded-full border border-primary/20"
                >
                  {k}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <a
          href={import.meta.env.BASE_URL + 'recognize-now.pdf'}
          download
          className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition"
        >
          Scarica tutte le recensioni in PDF
        </a>
      </motion.div>
    </section>
  );
}
