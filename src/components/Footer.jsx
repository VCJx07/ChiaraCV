export default function Footer() {
    return (
      <footer className="bg-cream text-primary py-10 px-6 md:px-20 mt-20 border-t border-primary/10">
        <div className="text-center text-sm space-y-2">
          <p>© {new Date().getFullYear()} Chiara Giuffrè – Tutti i diritti riservati</p>
          <p>
            Progetto realizzato con ❤️ usando Vite + TailwindCSS – Design by Vittorio
          </p>
        </div>
      </footer>
    );
  }