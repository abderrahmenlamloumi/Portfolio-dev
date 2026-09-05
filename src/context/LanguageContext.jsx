import { createContext, useContext, useEffect, useState } from 'react';

const translations = {
  en: {
    nav: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact', background: 'Background', menu: 'Open menu', close: 'Close menu' },
    heroGreeting: 'Hi, I am Abderrahmen Lamloumi',
    heroTagline: 'Software engineer in training, building systems that matter.',
    explore: 'Explore my work',
    about: {
      introTitle: 'A bit about me',
      technologies: 'Technologies I love',
      based: 'Based in France',
      country: 'France',
      building: "What I'm building",
      contact: 'Contact Me',
      intro:
        "I'm Abderrahmen Lamloumi, a last year software engineering student at ENSIMAG - INP Grenoble in France",
      techText:
        'Backend development, platform data engineering, distributed systems, MLops, and the craft of turning ideas into dependable software.',
      basedText:
        "I'm based in France and open to collaborating, and working on thoughtful engineering problems.",
      buildingText:
        "From OrionDB's lock-free ingestion experiments to algorithm practice and system design notes, I use projects to learn in public and improve one decision at a time.",
      resumeTitle: 'My Resume',
      resumeText: 'You can download my resume in English.',
      resumeEn: 'Download Resume (English)',
      contactCard: 'Contact me',
    },
    projectsTitle: 'Projects',
    viewAllProjects: 'View all projects',
    allProjects: {
      title: 'All projects',
      subtitle: 'A glance of the systems, applications, experiments, and games I have built.',
      back: 'Back to main website',
      count: 'projects',
    },
    repository: 'View repository',
    documentation: 'Documentation',
    exploringTitle: 'Currently exploring',
    exploringLabel: 'Open source and study work',
    experienceTitle: 'Education and experience',
    educationTitle: 'Education',
    workTitle: 'Experience',
    hackathonsTitle: 'Hackathons',
    currentRole: 'Current assignment',
    contact: {
      title: "Let's talk",
      intro:
        "Interested in backend engineering, data, machine learning, or systems? Send me a message and let's connect.",
      fullName: 'Full Name',
      email: 'Email address',
      message: 'Your message',
      send: 'Send Message',
      sending: 'Sending...',
      namePlaceholder: 'ex., John Doe',
      emailPlaceholder: 'ex., johndoe@gmail.com',
      messagePlaceholder: 'Share your thoughts or inquiries...',
      success: 'Thank you for your message',
      error: "I didn't receive your message",
    },
    alert: { failed: 'Failed', success: 'Success' },
    reviewLinks: {
      '': 'Databricks study repository',
      'Derar study guide': 'Derar study guide',
      BricksNotes: 'BricksNotes',
      'Udemy course': 'Udemy course',
      'Kengio study guide': 'Kengio study guide',
      'Data engineering notes': 'Data engineering notes',
      DDIA: 'DDIA',
      'System Design Interview': 'System Design Interview',
      'System design notes': 'Notes de conception système',
      'Data-intensive applications summary': 'Data-intensive applications summary',
      'My NeetCode repository': 'My NeetCode repository',
    },
    footer: { rights: 'All rights reserved.' },
    projectCopies: {},
    reviewCopies: {},
    experienceCopies: {},
    hackathonCopies: {},
  },
  fr: {
    nav: { home: 'Accueil', about: 'À propos', projects: 'Projets', contact: 'Contact', background: 'Parcours', menu: 'Ouvrir le menu', close: 'Fermer le menu' },
    heroGreeting: 'Bonjour, je suis Abderrahmen',
    heroTagline: 'Étudiant ingénieur logiciel, je construis des systèmes qui comptent.',
    explore: 'Découvrir mes projets',
    about: {
      introTitle: 'À propos de moi',
      technologies: "Technologies que j'aime",
      based: 'Basé en France',
      country: 'France',
      building: 'Ce que je construis',
      contact: 'Me contacter',
      intro:
        "Je suis Abderrahmen Lamloumi, étudiant ingénieur logiciel à l'ENSIMAG - INP Grenoble et apprenti chez Schneider Electric.",
      techText:
        'Développement backend, ingénierie des données, systèmes distribués, machine learning et conception de logiciels fiables.',
      basedText:
        "Basé en France, je suis ouvert aux échanges, aux collaborations et aux défis d'ingénierie stimulants.",
      buildingText:
        "Entre les expérimentations d'ingestion sans verrou d'OrionDB, l'algorithmique et la conception de systèmes, j'apprends en construisant des projets concrets.",
      resumeTitle: 'Mon CV',
      resumeText: 'Téléchargez mon resume en anglais.',
      resumeEn: 'Télécharger le resume (anglais)',
      contactCard: 'Me contacter',
    },
    projectsTitle: 'Projets',
    viewAllProjects: 'Voir tous les projets',
    allProjects: {
      title: 'Tous les projets',
      subtitle: "Une vue complète des systèmes, applications, expérimentations et jeux que j'ai construits.",
      back: 'Retour aux projets',
      count: 'projets',
    },
    repository: 'Voir le dépôt',
    documentation: 'Documentation',
    exploringTitle: 'Ce que j’explore actuellement',
    exploringLabel: 'Projets open source et apprentissage',
    experienceTitle: 'Formation et expérience',
    educationTitle: 'Formation',
    workTitle: 'Expérience',
    hackathonsTitle: 'Hackathons',
    currentRole: 'Mission actuelle',
    contact: {
      title: 'Échangeons',
      intro: 'Le backend, la data, le machine learning ou les systèmes vous intéressent ? Écrivez-moi et échangeons.',
      fullName: 'Nom complet',
      email: 'Adresse e-mail',
      message: 'Votre message',
      send: 'Envoyer le message',
      sending: 'Envoi...',
      namePlaceholder: 'ex. Jean Dupont',
      emailPlaceholder: 'ex. jean.dupont@gmail.com',
      messagePlaceholder: 'Partagez vos idées ou votre demande...',
      success: 'Merci pour votre message',
      error: "Je n'ai pas reçu votre message",
    },
    alert: { failed: 'Échec', success: 'Succès' },
    reviewLinks: {
      'Databricks study repository': 'Dépôt d\'étude Databricks',
      'Derar study guide': 'Guide d\'étude Derar',
      BricksNotes: 'BricksNotes',
      'Udemy course': 'Cours Udemy',
      'Kengio study guide': 'Guide d\'étude Kengio',
      'Data engineering notes': 'Notes de data engineering',
      DDIA: 'DDIA',
      'System Design Interview': 'Entretien de conception système',
      'System design notes': 'Notes de conception système',
      'Data-intensive applications summary': 'Résumé de Data-Intensive Applications',
      'My NeetCode repository': 'Mon dépôt NeetCode',
    },
    footer: { terms: 'Conditions générales', privacy: 'Politique de confidentialité', rights: 'Tous droits réservés.' },
    projectCopies: {
      OrionDB: {
        desc: "Moteur d'ingestion de séries temporelles en Go pour comprendre les plateformes d'observabilité à haut débit.",
        subdesc:
          "Construit depuis les fondamentaux, avec un focus sur les ring buffers atomiques sans verrou, les flux d'ingestion et les compromis systèmes.",
      },
      'NeetCode submissions': {
        title: 'Solutions NeetCode',
        desc: "Ma collection de solutions aux problèmes d'algorithmique et de structures de données de NeetCode.io.",
        subdesc: 'Chaque solution est un exercice de justesse, de complexité et de clarté du raisonnement.',
      },
      'System design notes': {
        title: 'Notes de conception système',
        desc: "Un carnet pratique pour étudier l'architecture de systèmes logiciels évolutifs.",
        subdesc:
          'Les sujets couvrent les systèmes distribués, le stockage, les communications et les compromis des architectures prêtes pour la production.',
      },
      'Data and machine learning experiments': {
        title: 'Expérimentations data et machine learning',
        desc: "Un espace pour explorer la data science, le machine learning et l'ingénierie nécessaire pour transformer des expériences en outils utiles.",
        subdesc:
          "J'aime passer des modèles aux pipelines de données, puis aux systèmes backend qui rendent les produits intelligents fiables.",
      },
      'Internal engineering tools': {
        title: "Outils d'ingénierie internes",
        desc: 'Outils et travaux sur des systèmes basés sur des modèles réalisés pendant mon apprentissage chez Schneider Electric.',
        subdesc:
          "Mon quotidien se situe à l'intersection du développement logiciel, de la modélisation des données et de l'amélioration continue.",
      },
      'Nsigma Machine Learning Hackathon': {
        title: 'Hackathon Machine Learning Nsigma',
        desc: "Un projet de hackathon en machine learning réalisé dans un temps limité, centré sur l'expérimentation et des résultats mesurables.",
        subdesc:
          "La documentation présente la problématique, la préparation des données, le choix des variables, l'évaluation et les enseignements du concours.",
      },
      Decac: {
        title: 'Decac',
        desc: "Un projet de compilateur couvrant l'analyse lexicale, le parsing, les vérifications sémantiques et la génération de code.",
        subdesc:
          'La documentation explique le langage, le pipeline de compilation, la gestion des erreurs et les compromis techniques.',
      },
      Bankify: {
        title: 'Bankify',
        desc: 'Une application bancaire axée sur la modélisation métier et la fiabilité des workflows backend.',
        subdesc:
          "La documentation couvre le domaine métier, les contrats API, le modèle de persistance, les hypothèses d'authentification et les parcours principaux.",
      },
      'VHDL+': {
        title: 'VHDL+',
        desc: 'Un processeur RISC-V implémenté en VHDL pour la simulation, la synthèse et la programmation sur FPGA.',
        subdesc:
          "Le projet comprend la compilation de programmes RISC-V, des tests automatisés, la simulation de signaux et des flux de synthèse basés sur Make.",
      },
      'FPGA RISC-V processor': {
        title: 'Processeur RISC-V sur FPGA',
        desc: 'Un projet matériel implémentant et testant un processeur RISC-V sur une plateforme FPGA.',
        subdesc:
          'Le projet combine VHDL, les flux Vivado, la simulation, l’initialisation mémoire et des tests matériels automatisés.',
      },

      'Real estate platform': {
        title: 'Plateforme immobilière',
        desc: 'Une plateforme immobilière full-stack pour rechercher, gérer et présenter des biens.',
        subdesc:
          'Le projet associe un client Next.js et TypeScript à une API Express, Prisma, AWS S3, Mapbox et des workflows d’authentification.',
      },
      'PSys operating-system kernel': {
        title: 'Noyau de système d’exploitation',
        desc: 'Un projet bas niveau implémentant les services d’un noyau pour les processus, la mémoire, les interruptions et les entrées-sorties.',
        subdesc:
          'Le code C et assembleur x86 explore l’amorçage, l’ordonnancement, la communication série, le clavier, le débogage, QEMU et Bochs.',
      },
      'Rainbow table attack': {
        title: 'Attaque par tables arc-en-ciel',
        desc: 'Une implémentation C11 qui génère des tables arc-en-ciel et récupère des préimages possibles de valeurs hachées.',
        subdesc:
          'Le projet traite le hachage, les chaînes de réduction, la génération de tables, les attaques et les builds POSIX incrémentaux.',
      },
      'DocAsk': {
        title: 'DocAsk',
        desc: 'Un assistant de questions-réponses sur des documents créé pour le hackathon NSIGMA x NEOVISION 2025.',
        subdesc:
          'Le projet Python combine le prétraitement documentaire, la recherche vectorielle, les modèles de langage et une interface en ligne de commande.',
      },
      'Tiny Dungeon': {
        title: 'Tiny Dungeon',
        desc: 'Un jeu Java compact centré sur l’exploration de donjons, les boucles de gameplay et une conception modulaire.',
        subdesc:
          'Le projet est construit avec Maven et documente l’architecture du jeu, les règles, la progression et les choix d’implémentation.',
      },
    },
    reviewCopies: {
      OrionDB: {
        position: "Moteur d'ingestion Go pour séries temporelles",
        review:
          "Un moteur d'ingestion de séries temporelles en Go, construit depuis les fondamentaux pour explorer les compromis des plateformes d'observabilité modernes.",
      },
      'NeetCode submissions': {
        name: 'Solutions NeetCode',
        position: 'Algorithmique et résolution de problèmes',
        review:
          'Une collection publique de solutions NeetCode pour renforcer ma réflexion algorithmique et écrire un code plus clair et fiable.',
      },
      'System design notes': {
        name: 'Notes de conception système',
        position: 'Étude des systèmes distribués',
        review:
          'Des notes sur les architectures évolutives, les API, le stockage, les files de messages et les choix qui rendent les systèmes fiables.',
      },
      'Databricks Data Engineer Associate': {
        name: 'Databricks Data Engineer Associate',
        position: 'Certification en préparation',
        review:
          "Préparation de la certification Databricks Data Engineer Associate, tout en explorant d'autres certifications orientées cloud, infrastructure et MLOps.",
      },
      'System design study': {
        name: 'Étude de conception système',
        position: 'Notes sur les systèmes distribués',
        review:
          'Des notes sur les architectures évolutives, les API, le stockage, les files de messages et les choix qui rendent les systèmes fiables.',
      },
    },
    experienceCopies: {
      'Schneider Electric · Grenoble, France': {
        name: 'Schneider Electric · Grenoble, France',
        pos: 'Ingénieur logiciel et modèles de données junior, apprenti',
        duration: 'Programme de 3 ans · depuis septembre 2024',
        title:
          "Développement d'outils internes dans un système basé sur des modèles, tout en approfondissant les liens entre ingénierie logicielle et modélisation des données industrielles.",
      },
      'Schneider Electric · Bangalore, India': {
        name: 'Schneider Electric · Bangalore, Inde',
        pos: "Mission d'echange d'ingénierie des données et de modélisation sémantique",
        duration: 'Juin 2026 - septembre 2026',
        title:
          "Travail sur l'ingénierie des données pour les équipements des bâtiments EcoStruxure : cartographie d'ontologies métier et amélioration d'une fonctionnalité d'auto-étiquetage basée sur RDF, OWL et SHACL.",
      },
      ENSIMAG: {
        pos: 'Étudiant ingénieur logiciel',
        duration: 'France',
        title:
          "Construction d'une solide base en informatique, algorithmique, systèmes, données et outils mathématiques du numérique.",
      },
      Polytech: {
        pos: 'Cycle préparatoire PEIP A',
        duration: '2 ans',
        title:
          "Deux années de cycle préparatoire intégré en mathématiques, sciences et fondamentaux nécessaires aux études d'ingénieur.",
      },
      'Societe Generale': {
        name: 'Société Générale',
        pos: 'Projets personnels et apprentissage',
        duration: 'En cours',
        title:
          'Exploration du backend, du machine learning, de la data science et de la conception système à travers des projets open source.',
      },
      'POLYTECH - Grenoble INP': {
        name: 'POLYTECH - Grenoble INP',
        pos: 'Cycle préparatoire PEIP A',
        duration: '2 ans · 2022/2024',
        title: 'Deux années de cycle préparatoire en mathématiques, sciences et fondamentaux nécessaires aux études d’ingénieur.',
      },
      'ENSIMAG - Grenoble INP': {
        name: 'ENSIMAG - Grenoble INP',
        pos: 'Étudiant ingénieur logiciel',
        duration: '3 ans · 2024/2027',
        title: 'Formation en informatique, algorithmique, systèmes, données et outils mathématiques du numérique.',
      },
    },
    hackathonCopies: {
      'Aleo National Web3 Hackathon': { result: 'Vainqueur - prix de 100 000 $' },
      'H7CTF International': { result: '195e sur 527 équipes' },
      PatriotCTF: { result: '81e sur 1 360 équipes' },
      GreHack: { name: 'GreHack', result: '3e sur 38 équipes' },
      'Nsigma Machine Learning Hackathon': { name: 'Hackathon Machine Learning Nsigma', result: '7e sur 25 équipes' },
      TUCTF: { result: '19e sur 485 équipes' },
    },
  },
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'en');

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => setLanguage((current) => (current === 'en' ? 'fr' : 'en'));

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
