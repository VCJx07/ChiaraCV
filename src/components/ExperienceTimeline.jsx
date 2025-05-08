import { experiences } from '../content';
import { motion } from 'framer-motion';
import expImg from '../assets/esperienze.png';

import {
  Hotel,
  Briefcase,
  PenLine,
  Mic,
  Plane,
  Image as Gallery,
} from 'lucide-react';

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
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        Esperienze Lavorative
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* TIMELINE */}
        <div className="relative">
          {/* linea verticale */}
          <span className="absolute left-3 top-0 h-full w-px bg-primary/30" />

          <ul className="space-y-16 pl-12">
            {experiences.map((exp, idx) => {
              const Icon = iconMap[exp.icon] ?? Briefcase;
              return (
                <motion.li
                  key={idx}
                  className="relative pl-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  {/* icona */}
                  <span className="absolute left-[-.4375rem] top-1.5">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-cream border border-primary">
                      <Icon size={14} className="text-primary" />
                    </div>
                  </span>

                  <p className="text-xs md:text-sm uppercase tracking-wide text-primary/70 font-medium">
                    {exp.period}
                  </p>
                  <h3 className="text-base font-semibold leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed text-primary/80">
                    {exp.desc}
                  </p>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* IMMAGINE */}
       {  <div>
          <motion.img
          className="hidden md:block w-300 h-[940px]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
            src={expImg}
            alt="Esperienze professionali"
          />
        </div> }
      </div>
    </section>
  );
}
