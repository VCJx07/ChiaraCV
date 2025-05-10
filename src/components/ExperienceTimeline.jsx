import { experiences } from '../content';
import { motion } from 'framer-motion';
import { Hotel, Briefcase, PenLine, Mic, Plane, Image as Gallery } from 'lucide-react';

const iconMap = {
  hotel: Hotel,
  briefcase: Briefcase,
  pen: PenLine,
  mic: Mic,
  plane: Plane,
  gallery: Gallery,
};

export default function ExperienceTimeline() {
  return (
    <section id="esperienze" className="py-20 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-semibold mb-12">Esperienze Lavorative</h2>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start">
        <div className="relative">
          <span className="absolute left-3 top-0 h-full w-px bg-primary/30" />
          <ul className="space-y-16">
            {' '}
            {experiences.timeline.map((exp, idx) => {
              const Icon = iconMap[exp.icon] ?? Briefcase;
              return (
                <motion.li
                  key={idx}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="absolute left-3 -translate-x-1/2 top-1.5">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-cream border border-secondary">
                      <Icon size={14} className="text-secondary" />
                    </div>
                  </span>
                  <div className="ml-10">
                    <p className="text-sm md:text-base uppercase tracking-wide text-primary/70 font-medium">
                      {exp.period}
                    </p>
                    <h3 className="text-lg font-semibold leading-tight">{exp.role}</h3>
                    <p className="text-base md:text-[17px] leading-relaxed text-primary/80">
                      {exp.desc}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
        <motion.img
          src={experiences.timelineImg}
          alt="Esperienze professionali"
          className="md:block w-full h-[980px] object-contain mx-auto"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}
