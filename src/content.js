import heroImg from './assets/hero.jpg';
import profileImg from './assets/profilo.svg';
import timelineImg from './assets/timeline.svg';
import skillsImg from './assets/skills.svg';
export const hero = {
  name: 'Chiara Giuffrè',
  claim: 'Receptionist multilingue',
  intro:
    'Receptionist multilingue con esperienza internazionale in contesti dinamici. Specializzata nell’accoglienza e nella gestione del front office, comunico con disinvoltura in italiano, inglese, francese e spagnolo, offrendo un servizio professionale e attento in ambienti multiculturali.',
  buttons: [
    { label: 'Scarica CV completo', href: '/ChiaraGiuffreCV.pdf' },
    { label: 'Contattami', href: '#contatti' },
  ],
  image: heroImg,
};

export const profile = {
  title: 'Profilo Professionale',
  paragraphs: [
    `Receptionist  con oltre un anno e mezzo di esperienza presso gli hotel tematici del gruppo Disney. 
    Laureata in Mediazione Linguistica, con eccellenti capacità relazionali e padronanza di inglese, francese e spagnolo. 
    Cerco un'opportunità nel settore alberghiero a Palermo, dove portare le competenze acquisite in contesto internazionale.`,
  ],
  image: profileImg,
};

export const experiences = {
  timeline: [
    {
      period: 'Gen 2024 – Attuale',
      role: 'Euro Disney Associés S.A.S – Receptionist hotel',
      desc: 'Gestione quotidiana del front desk in un contesto internazionale ad alto flusso, accogliendo ospiti da tutto il mondo. Responsabile di check-in/check-out, assegnazione camere, gestione reclami e richieste speciali, mantenendo gli elevati standard Disney. Utilizzo fluente di inglese, francese e spagnolo per garantire un’esperienza ospite impeccabile.',
      icon: 'hotel',
    },
    {
      period: '2023 – 2024',
      role: 'Whig Italy – Account manager',
      desc: 'Gestione clienti internazionali e supporto alla comunicazione multilingue per una startup di marketing legata all’organizzazione di tornei ed eventi a tema Pokémon. Contributo attivo alla crescita del pubblico e alla promozione di campagne digitali.',
      icon: 'briefcase',
    },
    {
      period: '2022 – attuale',
      role: 'Traduttrice Freelance',
      desc: 'Traduzione tecnico-commerciale dall’inglese all’italiano per contenuti e-commerce. Revisione e post-editing di testi automatici con uso di software CAT.',
      icon: 'pen',
    },
    {
      period: '2021–2022',
      role: 'Mock Conference',
      desc: 'Interpretariato in consecutiva e simultanea (inglese/francese) su temi di attualità, medicina e cultura.',
      icon: 'mic',
    },
    {
      period: '2021–2022',
      role: 'Aeroporto Falcone e Borsellino',
      desc: "Assistenza presso l'info point aeroportuale, fornendo informazioni e supporto logistico ai passeggeri. Gestione di pratiche lost and found in inglese, francese e spagnolo. Collaborazione con il personale di terra per garantire un flusso passeggeri efficiente e sicuro.",
      icon: 'plane',
    },
    {
      period: '2018–2019',
      role: 'GAM – Galleria d’Arte Moderna – Servizio clienti',
      desc: 'Accoglienza e supporto ai visitatori durante mostre ed eventi culturali. Gestione della biglietteria e assistenza informativa in italiano e inglese.',
      icon: 'gallery',
    },
  ],
  timelineImg: timelineImg,
};

export const awards = [
  {
    title: 'Dipendente del mese',
    count: 1,
    desc: 'Premiata come Dipendente del Mese per l’eccellenza nel servizio clienti e l’attenzione costante alle esigenze degli ospiti.',
  },
  {
    title: 'Venditrice del Mese',
    count: 2,
    desc: 'Premiata come miglior venditrice per aver raggiunto il più alto numero di vendite del mese.',
  },
  {
    title: 'Lettere di Elogio',
    count: 15,
    desc: "Ricevute da ospiti per un'accoglienza eccezionale e cura personalizzata.",
  },
  {
    title: 'Valutazioni Performance',
    count: '100%',
    desc: 'Punteggio massimo nelle ultime tre valutazioni annuali.',
  },
];

export const recognitions = [
  {
    text: 'Il mio più grande ringraziamento va alla signora Chiara, che mi ha aiutato a ottenere la carta per la disabilità con empatia, aiutandomi a superare l’imbarazzo.',
    author: 'Antonio Cabras – A nome di un ospite',
    keys: ['Cortesia', 'Inclusione'],
  },
  {
    text: 'Complimenti per una magnifica vendita da quasi 500 € per una proposta di matrimonio. È stato un successo! Ottimo lavoro, Partner!',
    author: 'Thomas Billet – Coordinatore vendite, Disneyland Paris',
    keys: ['Creare felicità per gli altri'],
  },
  {
    text: 'Grazie per il tuo aiuto con l’ospite inglese che pensava gli fosse stato rubato il passaporto. Una bellissima collaborazione inter-servizio.',
    author: 'Thierry Calmettes – Supervisore, Disneyland Paris',
    keys: ['Cortesia', 'Efficienza'],
  },
];

export const education = [
  {
    title: 'Diploma linguistico',
    desc: 'Liceo delle Scienze Umane e Linguistico "Danilo Dolci".',
    period: '2014–2019',
    icon: 'diploma',
  },
  {
    title: 'Laurea in Mediazione Linguistica (L12)',
    desc: 'Scuola Superiore per Mediatori Linguistici, 2019–2022.',
    period: '2019–2022',
    icon: 'diploma',
  },
  {
    title: 'Corso Public Speaking e Comunicazione',
    desc: 'Corso superato con successo, focus su mediazione e comunicazione pubblica.',
    period: '2020–2021',
    icon: 'course',
  },
  {
    title: 'Corso Microsoft Office e Google Suite',
    desc: 'Studio di Word, Excel, PowerPoint, Docs, Drive e Fogli.',
    period: '2021–2022',
    icon: 'course',
  },
  {
    title: 'EF SET Certificate – Inglese C1',
    desc: 'Certificato per il livello C1 di inglese (11/2022).',
    period: '11/2022',
    icon: 'course',
    certLink: 'https://www.efset.org/cert/LJhUGU',
  },
  {
    title: 'Formazione Privacy Disney',
    desc: 'Corso Disney su protezione dei dati personali secondo gli standard aziendali.',
    period: '2022',
    icon: 'privacy',
  },
  {
    title: 'Corso di accoglienza clienti',
    desc: 'Formazione su servizio clienti e gestione richieste.',
    period: '2022',
    icon: 'training',
  },
  {
    title: 'Corsi sicurezza generale (ambiente di lavoro)',
    desc: 'Nozioni base su sicurezza e prevenzione in azienda.',
    period: '2022',
    icon: 'security',
  },
  {
    title: 'Formazione interna Opera PMS e Travelbox',
    desc: 'Uso dei gestionali per prenotazioni, anagrafica clienti e gestione camere.',
    period: '2022–2023',
    icon: 'training',
  },
];

export const languages = [
  {
    lang: 'Italiano',
    level: 'Madrelingua',
    use: 'Lingua nativa, utilizzata in ogni contesto professionale.',
    icon: 'italy',
    levelIndex: 5,
  },
  {
    lang: 'Inglese',
    level: 'C1 Avanzato – EF SET',
    use: 'Comunicazione professionale quotidiana con ospiti internazionali.',
    icon: 'english',
    levelIndex: 5,
  },
  {
    lang: 'Francese',
    level: 'C1 Avanzato',
    use: 'Utilizzo quotidiano a Disneyland per accoglienza e problem solving.',
    icon: 'french',
    levelIndex: 4,
  },
  {
    lang: 'Spagnolo',
    level: 'B2 Intermedio',
    use: 'Buona capacità di gestione conversazioni con ospiti ispanofoni.',
    icon: 'spanish',
    levelIndex: 3,
  },
];

export const skills = {
  core: [
    {
      label: 'Front office multilingue',
      desc: 'Esperienza in reception con clienti di ogni nazionalità (Disneyland Paris).',
    },
    {
      label: 'Lingue straniere',
      desc: 'Inglese e Francese C1 (uso quotidiano), Spagnolo B2.',
    },
    {
      label: 'Gestione autonoma prenotazioni',
      desc: 'Check-in/out, richieste speciali, reclami.',
    },
    {
      label: 'Comunicazione interculturale',
      desc: 'Abituata a contesti dinamici e turisti internazionali.',
    },
    {
      label: 'Problem solving reale',
      desc: 'Risoluzione efficace di imprevisti in ambienti ad alto flusso.',
    },
    {
      label: 'Resistenza allo stress',
      desc: 'Formazione Disney, flussi elevati, turni serali e festivi.',
    },
  ],
  skillsImg: skillsImg,
};

export const languageSkills = {
  languages: [
    {
      title: 'Revisione linguistica professionale',
      desc: 'Esperienza nel proofreading e nella revisione di testi in ambito tecnico e commerciale.',
    },
    {
      title: 'Creazione di risorse terminologiche',
      desc: 'Realizzazione di glossari e memorie di traduzione (TM) per progetti multilingue.',
    },
    {
      title: 'Interpretariato multilingue',
      desc: 'Esperienza in interpretariato consecutivo e simultaneo in inglese e francese.',
    },
    {
      title: 'Gestione progetti linguistici',
      desc: 'Coordinamento e sviluppo di contenuti multilingua per progetti editoriali o aziendali.',
    },
  ],
};

export const digitalSkills = {
  digital: [
    {
      label: 'Software Alberghieri',
      desc: 'Opera PMS e TravelBox – Formazione interna su prenotazioni, assegnamento camere e front office',
    },
    {
      label: 'Software CAT',
      desc: 'MemoQ, SDL Trados, Matecat',
    },
    {
      label: 'Microsoft Office',
      desc: 'Word, Excel, PowerPoint',
    },
    {
      label: 'Google Workspace',
      desc: 'Docs, Drive, Forms, Slide, Classroom, Meet',
    },
    {
      label: 'Collaborazione Digitale',
      desc: 'Collaborazione online e gestione file condivisi',
    },
  ],}

export const contacts = {
  email: 'kiara.giuffre@gmail.com',
  phone: '+39 3313905199',
  linkedin: 'https://www.linkedin.com/in/chiara-giuffré2603/',
  referenze: [
    {
      name: 'Enrica Magro',
      role: 'Docente – Scuola superiore per Mediatori Linguistici',
      email: 'enrica.magro@libero.it',
    },
    {
      name: 'Sergio Nuzzo',
      role: 'Coordinatore – Whig Italia',
      email: 'sergio@whig.it',
    },
    {
      name: 'Leonardo Tilotta',
      role: 'Team Leader Expert hotel – Disneyland Paris',
      email: 'leonardo.tilotta@disney.com',
    },
    {
      name: 'Antonio Cabras',
      role: 'Team Leader Expert hotel – Disneyland Paris',
      email: 'antonio.cabras@disney.com',
    },
  ],
};

export const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Profilo', href: '#profilo' },
  { label: 'Esperienze', href: '#esperienze' },
  { label: 'Riconoscimenti', href: '#premi' },
  { label: 'Recensioni', href: '#recognitions' },
  { label: 'Formazione', href: '#formazione' },
  { label: 'Lingue', href: '#lingue' },
  { label: 'Competenze Chiave', href: '#competenze' },
  { label: 'Competenze Linguistiche', href: '#altreCompetenze' },
  { label: 'Competenze Digitali', href: '#competenzeDigitali' },
  { label: 'Contatti', href: '#contatti' },
];
