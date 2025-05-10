import { Mail, Phone, Linkedin, Users } from 'lucide-react';
import { contacts } from '../content';

export default function ContactSection() {
  return (
    <section id="contatti" className="py-20 px-6 md:px-20 bg-cream">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Contatti & Referenze</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="flex flex-col items-center">
          <Mail className="mb-2 text-secondary" />
          <p className="text-sm font-medium">Email</p>
          <a href={`mailto:${contacts.email}`} className="text-primary/80 hover:underline">
            {contacts.email}
          </a>
        </div>
        <div className="flex flex-col items-center">
          <Phone className="mb-2 text-secondary" />
          <p className="text-sm font-medium">Telefono</p>
          <p className="text-primary/80">{contacts.phone}</p>
        </div>
        <div className="flex flex-col items-center">
          <Linkedin className="mb-2 text-secondary" />
          <p className="text-sm font-medium">LinkedIn</p>
          <a href={contacts.linkedin} className="text-primary/80 hover:underline" target="_blank">
            {contacts.linkedin.replace('https://', '')}
          </a>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
          <Users className="text-secondary" /> Referenze Professionali
        </h3>
        <ul className="space-y-2">
          {contacts.referenze.map((ref, idx) => (
            <li key={idx} className="text-sm text-primary/80">
              <span className="text-secondary">{ref.name}</span>, {ref.role} –{' '}
              <strong>{ref.email}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
