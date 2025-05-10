import { Heart } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-cream text-primary py-10 px-6 md:px-20 mt-20 border-t border-primary/10">
      <div className="text-center text-sm space-y-2">
        <p>© {new Date().getFullYear()} Chiara Giuffrè – Tutti i diritti riservati</p>
        <p className="italic text-primary/80 font-light">
          Grazie di <Heart size={16} className="text-[#960018] inline-block" /> per il tempo
          dedicato a leggere il mio profilo. <strong>– Chiara</strong>
        </p>
      </div>
    </footer>
  );
}
