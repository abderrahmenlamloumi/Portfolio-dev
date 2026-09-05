const ASSETS_BASE = import.meta.env.BASE_URL || '/';

export const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Projects', href: '#projects' },
  { id: 4, name: 'Contact', href: '#contact' },
  { id: 5, name: 'Background', href: '#work' },
];

export const Myexploration = [
  {
    id: 1,
    name: 'OrionDB',
    position: 'Go time-series ingestion engine',
    img: `${ASSETS_BASE}assets/grid1.png`,
    review:
      'A Go-based time-series ingestion engine built from first principles, exploring the systems trade-offs behind modern observability platforms.',
    links: [
      {
        label: 'OrionDB repository',
        href: 'https://github.com/abderrahmenlamloumi/OrionDB',
      }
    ],
  },
  {
    id: 2,
    name: 'Databricks Data Engineer Associate',
    position: 'Certification in progress',
    img: `${ASSETS_BASE}assets/databricks.png`,
    review:
      'Preparing for the Databricks Data Engineer Associate certification while exploring cloud, infrastructure, and MLOps.',
    links: [
      {
        label: 'Databricks study repository',
        href: 'https://github.com/ManglaSourav/Data-Engineer-Associate-Databricks/tree/main7',
      },
      {
        label: 'Derar study guide',
        href: 'https://github.com/derar-alhussein/Databricks-Certified-Data-Engineer-Associate/tree/main',
      },
      {
        label: 'BricksNotes',
        href: 'https://bricksnotes.com/',
      },
      {
        label: 'Udemy course',
        href: 'https://www.udemy.com/course/databricks-certified-data-engineer-associate/?referralCode=F0FA48E9A0546C975F14&couponCode=KEEPLEARNING',
      },
      {
        label: 'Kengio study guide',
        href: 'https://github.com/kengio/databricks-certification-study-guide/tree/main/certifications/data-engineer-associate',
      },
      {
        label: 'Data engineering notes',
        href: 'https://datavidhya.com/',
      },
    ],
  },
  {
    id: 3,
    name: 'System design study',
    position: 'Distributed systems study notes',
    img: `${ASSETS_BASE}assets/sd.png`,
    review:
      'Notes from studying scalable architectures, APIs, storage, queues, and the engineering decisions that make systems dependable.',
    links: [
      {
        label: 'Data-intensive applications summary',
        href: 'https://danlebrero.com/2021/09/01/designing-data-intensive-applications-summary/',
      },
      {
        label: 'DDIA',
        href: 'https://github.com/moyano83/Designing-Data-Intensive-Applications',
      },
      {
        label: 'System Design Interview',
        href: 'https://pagefy.io/system-design',
      },
      {
        label: 'System design notes',
        href: 'https://bytes.usc.edu/~saty/courses/docs/data/SystemDesignInterview.pdf',
      },
    ],
  },
  {
    id: 4,
    name: 'NeetCode submissions',
    position: 'Algorithms and problem solving',
    img: `${ASSETS_BASE}assets/leet.png`,
    review:
      'A public collection of NeetCode problem submissions used to sharpen algorithmic thinking and write clearer, more reliable code.',
    links: [
      {
        label: 'My NeetCode repository',
        href: 'https://github.com/abderrahmenlamloumi/neetcode-submissions',
      },
    ],
  },
];

const allProjects = [
  {
    title: 'OrionDB',
    desc: 'A high-performance experimental Go telemetry database designed to sustain tens of thousands of requests per second.',
    subdesc:
      'OrionDB explores zero-allocation OTLP ingestion, lock-free MPMC ring buffers, Roaring Bitmap tag indexes, and an LSM-based storage engine with an append-only WAL, MemTables, SSTables, and compaction.',
    href: 'https://github.com/abderrahmenlamloumi/Orion-Collector',
    docs: 'https://abderrahmenlamloumi.github.io/OrionDB/',
    texture: `${ASSETS_BASE}textures/project/project1.mp4`,
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: `${ASSETS_BASE}assets/spotlight1.png`,
    tags: [
      {
        id: 1,
        name: 'Go',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
      },
      {
        id: 2,
        name: 'Lock-free systems',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/cpu.svg',
      },
      {
        id: 3,
        name: 'Roaring Bitmaps',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/database.svg',
      },
      {
        id: 4,
        name: 'LSM storage',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/hard-drive.svg',
      },
    ],
  },

  {
    title: 'NeetCode submissions',
    desc: 'A growing collection of solutions to algorithm and data-structure problems from NeetCode.',
    subdesc:
      'Each submission is a small exercise in correctness, complexity, and communicating an idea through code.',
    href: 'https://github.com/abderrahmenlamloumi/neetcode-submissions',
    texture: `${ASSETS_BASE}textures/project/project2.mp4`,
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: `${ASSETS_BASE}assets/spotlight2.png`,
    tags: [
      {
        id: 1,
        name: 'Algorithms',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/code.svg',
      },
      {
        id: 2,
        name: 'Data structures',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/layers.svg',
      },
      {
        id: 3,
        name: 'Problem solving',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/check-circle.svg',
      },
      {
        id: 4,
        name: 'Complexity',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/activity.svg',
      },
    ],
  },

  {
    title: 'System design notes',
    desc: 'A practical notebook for studying the architecture of scalable software systems.',
    subdesc:
      'Topics include distributed systems, storage, communication patterns, and the trade-offs behind production-ready designs.',
    href: 'https://github.com/abderrahmenlamloumi/system-design-notes',
    texture: `${ASSETS_BASE}textures/project/project3.mp4`,
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: `${ASSETS_BASE}assets/spotlight3.png`,
    tags: [
      {
        id: 1,
        name: 'System design',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/server.svg',
      },
      {
        id: 2,
        name: 'Distributed systems',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/grid.svg',
      },
      {
        id: 3,
        name: 'APIs',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/link.svg',
      },
      {
        id: 4,
        name: 'Architecture',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/layout.svg',
      },
    ],
  },

  {
    title: 'Data and machine learning experiments',
    desc: 'A space for exploring data science, machine learning, and the engineering needed to turn experiments into useful tools.',
    subdesc:
      'I enjoy moving between models, data pipelines, and the backend systems that make intelligent products dependable.',
    href: 'https://github.com/abderrahmenlamloumi?tab=repositories',
    texture: `${ASSETS_BASE}textures/project/project4.mp4`,
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: `${ASSETS_BASE}assets/spotlight4.png`,
    tags: [
      {
        id: 1,
        name: 'Python',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        id: 2,
        name: 'Machine learning',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      },
      {
        id: 3,
        name: 'Data science',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      },
      {
        id: 4,
        name: 'Data engineering',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg',
      },
    ],
  },

  {
    title: 'Internal engineering tools',
    desc: 'Tools and model-based systems work developed during my apprenticeship at Schneider Electric.',
    subdesc:
      'My work sits at the intersection of software engineering, data modeling, and continuous improvement.',
    href: 'https://www.se.com/',
    texture: `${ASSETS_BASE}textures/project/project5.mp4`,
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: `${ASSETS_BASE}assets/spotlight5.png`,
    tags: [
      {
        id: 1,
        name: 'Software engineering',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/code.svg',
      },
      {
        id: 2,
        name: 'Data modeling',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/database.svg',
      },
      {
        id: 3,
        name: 'Internal tools',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/tool.svg',
      },
      {
        id: 4,
        name: 'Industrial software',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/settings.svg',
      },
    ],
  },

  {
    title: 'Tiny Dungeon',
    desc: 'A compact game project focused on gameplay loops, dungeon exploration, and modular design.',
    href: 'https://github.com/abderrahmenlamloumi?tab=repositories',
    texture: `${ASSETS_BASE}textures/project/project1.mp4`,
    logo: `${ASSETS_BASE}assets/project-logo1.png`,
    logoStyle: {
      backgroundColor: '#302116',
      border: '0.2px solid #5a3923',
      boxShadow: '0px 0px 60px 0px #d977064d',
    },
    spotlight: `${ASSETS_BASE}assets/spotlight1.png`,
    tags: [
      {
        id: 1,
        name: 'Game development',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
      },
      {
        id: 2,
        name: 'Algorithms',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/code.svg',
      },
      {
        id: 3,
        name: 'Software design patterns',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/feather.svg',
      },
    ],
  },

  {
    title: 'Nsigma Machine Learning Hackathon',
    desc: 'A machine learning hackathon project built under time constraints, with a focus on experimentation and measurable results.',
    subdesc:
      'The project documents the problem framing, data preparation, feature choices, evaluation approach, Using at the time the new RAG technology.',
    href: 'https://github.com/abderrahmenlamloumi?tab=repositories',
    texture: `${ASSETS_BASE}textures/project/project5.mp4`,
    logo: `${ASSETS_BASE}assets/nsigma.png`,
    logoStyle: {
      backgroundColor: '#1e293b',
      border: '0.2px solid #475569',
      boxShadow: '0px 0px 60px 0px #38bdf84d',
    },
    spotlight: `${ASSETS_BASE}assets/spotlight5.png`,
    tags: [
      {
        id: 1,
        name: 'Machine learning',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      },
      {
        id: 2,
        name: 'Python',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        id: 3,
        name: 'Data science',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      },
    ],
  },

  {
    title: 'Decac',
    desc: 'A complete Java compiler for the Deca language, developed as an Ensimag software-engineering project.',
    subdesc:
      'The compiler supports typed variables, arithmetic and boolean expressions, control flow, I/O, classes, inheritance, assembly generation, runtime checks, and optional extensions such as arrays, strings, math, assertions, and graphics.',
    href: 'https://github.com/abderrahmenlamloumi/Deca-Compiler-Java',
    docs: 'https://abderrahmenlamloumi.github.io/Deca-Compiler-Java/',
    texture: `${ASSETS_BASE}textures/project/project2.mp4`,
    logoStyle: {
      backgroundColor: '#172337',
      border: '0.2px solid #29456b',
      boxShadow: '0px 0px 60px 0px #2563eb4d',
    },
    spotlight: `${ASSETS_BASE}assets/spotlight2.png`,
    tags: [
      {
        id: 1,
        name: 'Compilers',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/terminal.svg',
      },
      {
        id: 2,
        name: 'Java',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
      {
        id: 3,
        name: 'Assembly',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/cpu.svg',
      },
    ],
  },

  {
    title: 'Bankify',
    desc: 'A full-stack personal-finance and shared-portfolio application for managing accounts, transactions, and group permissions.',
    subdesc:
      'Bankify combines a React frontend with an Express backend, SQLite persistence, ORM-based data access, authentication, and REST API workflows.',
    href: 'https://github.com/abderrahmenlamloumi?tab=repositories',
    texture: `${ASSETS_BASE}textures/project/project3.mp4`,
    logo: `${ASSETS_BASE}assets/project-logo3.png`,
    logoStyle: {
      backgroundColor: '#12352d',
      border: '0.2px solid #1f8069',
      boxShadow: '0px 0px 60px 0px #10b9814d',
    },
    spotlight: `${ASSETS_BASE}assets/spotlight3.png`,
    tags: [
      {
        id: 1,
        name: 'React',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        id: 2,
        name: 'Express',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        id: 3,
        name: 'SQLite',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
      },
    ],
  },

  {
    title: 'Lost & Found API',
    desc: 'A lightweight Node.js and TypeScript API for tracking metro items that were lost and later recovered.',
    subdesc:
      'The project stores item records in SQLite and makes it easy to query by station, date, and category through a simple REST API.',
    href: 'https://github.com/abderrahmenlamloumi?tab=repositories',
    texture: `${ASSETS_BASE}textures/project/project5.mp4`,
    logoStyle: {
      backgroundColor: '#16212b',
      border: '0.2px solid #264766',
      boxShadow: '0px 0px 60px 0px #38bdf84d',
    },
    spotlight: `${ASSETS_BASE}assets/spotlight5.png`,
    tags: [
      {
        id: 1,
        name: 'Node.js',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        id: 3,
        name: 'SQLite',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
      },
      {
        id: 4,
        name: 'REST API',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/server.svg',
      },
    ],
  },

  {
    title: 'VHDL+',
    desc: 'A RISC-V processor project implemented in VHDL and developed for FPGA simulation, synthesis, and programming.',
    subdesc:
      'The project includes a VHDL processor, RISC-V program compilation, automated tests, waveform simulation, and FPGA synthesis through Make-based flows.',
    href: 'https://github.com/abderrahmenlamloumi?tab=repositories',
    texture: `${ASSETS_BASE}textures/project/project4.mp4`,
    logo: `${ASSETS_BASE}assets/project-logo4.png`,
    logoStyle: {
      backgroundColor: '#202447',
      border: '0.2px solid #4f5ba8',
      boxShadow: '0px 0px 60px 0px #6366f14d',
    },
    spotlight: `${ASSETS_BASE}assets/spotlight4.png`,
    tags: [
      {
        id: 1,
        name: 'VHDL',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/cpu.svg',
      },
      {
        id: 3,
        name: 'Systems',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/terminal.svg',
      },
      {
        id: 4,
        name: 'FPGA',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/tool.svg',
      },
    ],
  },

  {
    title: 'FPGA RISC-V processor',
    desc: 'A hardware project implementing and testing a RISC-V processor on an FPGA platform.',
    subdesc:
      'The project combines VHDL, Vivado build flows, simulation, memory initialization, and automated hardware tests.',
    href: 'https://gitlab.ensimag.fr/cep_deploy/AO-PROJET-24-25/Students/karmouah_lamlouma',
    texture: `${ASSETS_BASE}textures/project/project1.mp4`,
    logo: `${ASSETS_BASE}assets/project-logo1.png`,
    logoStyle: {
      backgroundColor: '#241c12',
      border: '0.2px solid #6b4f2a',
      boxShadow: '0px 0px 60px 0px #d977064d',
    },
    spotlight: `${ASSETS_BASE}assets/spotlight1.png`,
    tags: [
      {
        id: 1,
        name: 'VHDL',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/cpu.svg',
      },
      {
        id: 2,
        name: 'RISC-V',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/cpu.svg',
      },
      {
        id: 3,
        name: 'FPGA',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/cpu.svg',
      },
    ],
  },

  {
    title: 'DocAsk',
    desc: 'A document question-answering assistant created for the NSIGMA x NEOVISION 2025 hackathon.',
    subdesc:
      'The Python project combines document preprocessing, vector search, language models, and a command-line interface.',
    href: 'https://github.com/abderrahmenlamloumi?tab=repositories',
    texture: `${ASSETS_BASE}textures/project/project2.mp4`,
    logo: `${ASSETS_BASE}assets/project-logo2.png`,
    logoStyle: {
      backgroundColor: '#172337',
      border: '0.2px solid #29456b',
      boxShadow: '0px 0px 60px 0px #2563eb4d',
    },
    spotlight: `${ASSETS_BASE}assets/spotlight2.png`,
    tags: [
      {
        id: 1,
        name: 'Python',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        id: 2,
        name: 'LangChain',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/link.svg',
      },
      {
        id: 3,
        name: 'RAG',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/search.svg',
      },
    ],
  },


  {
    title: 'PSys operating-system kernel',
    desc: 'A low-level operating-system project implementing kernel services for processes, memory, interrupts, and device I/O.',
    subdesc:
      'The C and assembly code explores bootstrapping, scheduling, serial communication, keyboard input, debugging, and protected-mode systems programming.',
    href: 'https://gitlab.ensimag.fr/celdrato_lamlouma/psys-base',
    texture: `${ASSETS_BASE}textures/project/project5.mp4`,
    logo: `${ASSETS_BASE}assets/project-logo5.png`,
    logoStyle: {
      backgroundColor: '#1c1a43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635bff4d',
    },
    spotlight: `${ASSETS_BASE}assets/spotlight5.png`,
    tags: [
      {
        id: 1,
        name: 'C',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      },
      {
        id: 2,
        name: 'Assembly',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/cpu.svg',
      },
      {
        id: 3,
        name: 'Operating systems',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      },
    ],
  },

  {
    title: 'Rainbow table attack',
    desc: 'A C11 implementation that generates rainbow tables and uses them to recover possible preimages of hashed values.',
    subdesc:
      'The project focuses on hashing, reduction chains, table generation, attack workflows, and incremental POSIX builds.',
    href: 'https://gitlab.ensimag.fr/frevillc/rainbow-table',
    texture: `${ASSETS_BASE}textures/project/project1.mp4`,
    logo: `${ASSETS_BASE}assets/project-logo1.png`,
    logoStyle: {
      backgroundColor: '#302116',
      border: '0.2px solid #5a3923',
      boxShadow: '0px 0px 60px 0px #d977064d',
    },
    spotlight: `${ASSETS_BASE}assets/spotlight1.png`,
    tags: [
      {
        id: 1,
        name: 'C11',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      },
      {
        id: 2,
        name: 'Cryptography',
        path: 'https://raw.githubusercontent.com/feathericons/feather/master/icons/lock.svg',
      },
      {
        id: 3,
        name: 'POSIX',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      },
    ],
  },
];

const projectOrder = [
  { title: 'OrionDB' },
  { title: 'Decac' },
  {
    title: 'PSys operating-system kernel',
    displayTitle: 'EmaX Kernel',
  },
  { title: 'VHDL', displayTitle: 'RISC-V FPGA' },
  {
    title: 'Nsigma Machine Learning Hackathon',
    displayTitle: 'Multi-RAG model assistant',
  },
  { title: 'Bankify', displayTitle: 'Bankify' },
  { title: 'Lost & Found API', displayTitle: 'Lost & Found API' },
  { title: 'Rainbow table attack' },
  { title: 'Tiny Dungeon' },
];

export const myProjects = projectOrder
  .map(({ title, displayTitle }) => {
    const project = allProjects.find((project) => project.title === title);

    if (!project) return null;

    return {
      ...project,
      sourceTitle: title,
      title: displayTitle || title,
    };
  })
  .filter(Boolean);

export const tagUsage = myProjects.reduce((acc, project) => {
  (project.tags || []).forEach((tag) => {
    const name = tag.name || 'unknown';

    if (!acc[name]) {
      acc[name] = [];
    }

    acc[name].push(project.title);
  });

  return acc;
}, {});

export const calculateSizes = (isSmall, isMobile, isTablet) => ({
  deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,

  deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],

  cubePosition: isSmall
    ? [4, -5, 0]
    : isMobile || isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],

  reactLogoPosition: isSmall
    ? [3, 4, 0]
    : isMobile || isTablet
      ? [5, 4, 0]
      : [12, 3, 0],

  ringPosition: isSmall
    ? [-5, 7, 0]
    : isMobile
      ? [-10, 10, 0]
      : isTablet
        ? [-12, 10, 0]
        : [-24, 10, 0],

  targetPosition: isSmall
    ? [-5, -10, -10]
    : isMobile
      ? [-9, -10, -10]
      : isTablet
        ? [-11, -7, -10]
        : [-13, -13, -10],
});

export const workExperiences = [
  {
    id: 1,
    name: 'Schneider Electric · Grenoble, France',
    pos: 'Junior Software & Data Model Engineer, apprentice',
    duration: '3-year program · Since September 2024',
    title:
      'Developing internal tools within a model-based system while learning how software engineering and data modeling support industrial products within energy management and automation environment.',
    icon: `${ASSETS_BASE}assets/se.png`,
    animation: 'victory',
    group: 'schneider',
    link: 'https://www.se.com/fr/fr/'
  },
  {
    id: 2,
    name: 'Schneider Electric · Bangalore, India',
    pos: 'Data Engineering and Semantic Modeling Mission',
    duration: 'June 2026 – September 2026',
    title:
      'Working on data engineering for building equipment in EcoStruxure, mapping domain ontologies and enhancing an automated label-tagging feature across RDF, OWL, and SHACL.',
    icon: `${ASSETS_BASE}assets/se.png`,
    animation: 'victory',
    group: 'schneider',
    link: 'https://www.se.com/in/en/'
  },
  {
    id: 3,
    name: 'Societe Generale',
    pos: 'RPA Developer Intern',
    duration: '4 months · 2022',
    title:
      'Exploring backend development, machine learning, data science, and system design through focused open-source projects.',
    icon: `${ASSETS_BASE}assets/sg.png`,
    link: 'https://www.societegenerale.com/'
  },
];

export const education = [
  {
    id: 1,
    name: 'ENSIMAG - Grenoble INP',
    pos: 'Software engineering student',
    duration: '3 years · 2024/2027',
    title:
      'Building a strong foundation across computer science, algorithms, systems, data, and the mathematical tools behind modern computing.',
    icon: `${ASSETS_BASE}assets/ensimag.png`,
    link: 'https://ensimag.grenoble-inp.fr/',

  },
  {
    id: 2,
    name: 'POLYTECH - Grenoble INP',
    pos: 'PEIP A preparatory program',
    duration: '2 years · 2022/2024',
    title:
      'Completed a two-year integrated preparatory program focused on mathematics, science, and the foundations needed for engineering studies toping 5%.',
    icon: `${ASSETS_BASE}assets/polytech.png`,
    link: 'https://polytech.grenoble-inp.fr/',

  },
];

export const hackathons = [
  {
    id: 1,
    name: 'GreHack',
    result: 'Rank 3/38',
    year: '2026',
    icon: `${ASSETS_BASE}assets/grehack.png`,
  },

  {
    id: 2,
    name: 'Nsigma Machine Learning Hackathon',
    result: 'Rank 7/25',
    year: '2025',
    icon: `${ASSETS_BASE}assets/nsigma.png`,
  },

];