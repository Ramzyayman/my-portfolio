import type { ProfileData, Project, SkillGroup } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Ramzy Ayman',
  roleTitle: 'Software Engineering Student & Full-Stack Engineer',
  education: {
    degree: 'B.Sc. in Software Engineering',
    graduationYear: 'Class of 2027',
    status: 'Undergraduate Software Engineering Student',
  },
  location: {
    city: 'Cairo',
    country: 'Egypt',
    timezone: 'UTC+3 (Cairo Time)',
  },
  availabilityStatus: 'Open for Software Engineering Roles & Internships',
  bioSummary:
    'Software engineer focused on building full-stack web applications, resilient backend services, and interactive developer tools. Pragmatic and builder-focused, prioritizing shipping real, usable software over generic clones.',
  builderPhilosophy:
    'I believe good software engineering is about clarity, performance, and practical reliability. Rather than building throwaway boilerplates, I architect real-world applications with thoughtful database schemas, fast APIs, intuitive user flows, and maintainable modular code.',
  contactEmail: 'placeholder@portfolio.com',
  experience: [
    {
      role: 'Web Development Trainee',
      organization: 'ITIDA / NTI (National Telecommunication Institute)',
      period: 'Summer 2024',
      location: 'Cairo, Egypt',
      badge: 'Practical Training',
      description: [
        'Completed intensive practical training in full-stack web development and modern frontend engineering.',
        'Delivered hands-on technical coursework and practical assignments under industry instructor supervision.',
        'Strengthened core foundations in DOM manipulation, asynchronous JavaScript, and responsive design systems.',
      ],
      skills: ['JavaScript', 'HTML5/CSS3', 'Responsive Design', 'Git', 'Web APIs'],
    },
  ],
  socials: {
    github: 'https://github.com/Ramzyayman',
    linkedin: 'https://www.linkedin.com/in/ramzy-ayman-314004406/',
    email: 'mailto:placeholder@portfolio.com',
  },
};

export const projectsData: Project[] = [
  {
    id: 'ramscraft',
    title: 'Ramscraft',
    subtitle: 'Game Server Management & Live Web Terminal',
    tagline: 'Production full-stack monorepo featuring an embedded xterm.js web terminal, real-time CPU/RAM telemetry, and Prisma database persistence.',
    category: 'Full-Stack',
    period: '2024',
    featured: true,
    badge: 'Monorepo & WebSockets',
    role: 'Full-Stack Monorepo Architecture, xterm.js Integration & Process Telemetry',
    problem:
      'Dedicated game server management is often tethered to raw SSH or rigid command-line scripts lacking real-time web telemetry, interactive browser terminals, and backup automation.',
    solution:
      'Architected Ramscraft, a comprehensive full-stack management platform featuring bidirectional streaming of server stdin/stdout via WebSockets and xterm.js, live CPU/RAM utilization metrics via pidusage, and automated zip-based backup workflows.',
    highlights: [
      'Built bidirectional WebSocket stream linking browser xterm.js terminal directly to Node.js child process streams.',
      'Engineered live process performance telemetry polling with pidusage for CPU, RAM, and uptime statistics.',
      'Organized an npm workspaces monorepo separating React 19 frontend, Express/Node backend, and shared TypeScript types.',
      'Developed world and mod archive management utilizing adm-zip and multer for seamless backups.',
    ],
    architectureDetails: {
      overview:
        'A resilient Node.js process supervisor wrapping child process instances, communicating with a React 19 frontend via Socket.io and REST APIs, backed by Prisma ORM.',
      keyDecisions: [
        'WebSocket event bus ensuring zero-latency terminal character streaming and full ANSI color formatting.',
        'Decoupled shared TypeScript contracts preventing API payload drift between client and backend.',
        'Process isolation ensuring that game crashes or unexpected exits do not destabilize the management daemon.',
      ],
      schemaOrFlow: [
        'Web Terminal (xterm.js) ⇄ Socket.io Channel ⇄ Server Child Process (stdin/stdout)',
        'Telemetry Loop: pidusage ➔ 1000ms Interval ➔ Broadcast CPU/RAM Stats ➔ Live UI Gauges',
      ],
    },
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'Socket.io', 'xterm.js', 'pidusage', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Ramzyayman/ramscraft',
    liveUrl: 'https://github.com/Ramzyayman/ramscraft',
  },
  {
    id: 'ricksy-store',
    title: 'Ricksy Store',
    subtitle: 'Modern Full-Stack E-Commerce Platform',
    tagline: 'End-to-end e-commerce engine with responsive catalog browsing, persistent cart, and seamless checkout pipeline.',
    category: 'Full-Stack',
    period: '2024',
    featured: true,
    badge: 'Full-Stack & DB Architecture',
    role: 'End-to-End Full-Stack Development & Database Schema Design',
    problem:
      'Many e-commerce implementations suffer from brittle checkout states, lack of order atomicity, and sluggish client-side catalog navigation with bloated payload sizes.',
    solution:
      'Engineered a complete, responsive e-commerce web platform featuring real-time inventory synchronization, resilient cart persistence across user sessions, structured relational database modeling for order tracking, and high-performance filtering.',
    highlights: [
      'Architected normalized relational database schema for products, inventory tiers, orders, and customer profiles.',
      'Implemented optimistic cart synchronization and robust client-side state management for zero-latency interactions.',
      'Designed smooth, validation-rich checkout flow handling payment status states and order confirmation.',
      'Built fast faceted product search, price filtering, and responsive gallery views optimized for mobile and desktop.',
    ],
    architectureDetails: {
      overview:
        'A full-stack client-server architecture separating persistent data stores, secure API routing, and responsive frontend views. Focuses on transaction reliability and clean state hydration.',
      keyDecisions: [
        'Relational schema design ensuring atomic order creation and inventory level preservation.',
        'Session-synced cart caching to avoid lost shopping states during browser reloads.',
        'Modular REST API endpoints for product catalogs, cart mutations, and checkout processing.',
      ],
      schemaOrFlow: [
        'Client (React/TypeScript UI) ⇄ REST API Middleware ⇄ Validation & Controller Layer ⇄ Database Engine',
        'Atomic transaction pipeline: Cart verification ➔ Inventory reserve ➔ Order record creation ➔ Confirmation',
      ],
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    githubUrl: 'https://github.com/Ramzyayman/ricksy-store',
    liveUrl: 'https://github.com/Ramzyayman/ricksy-store',
  },
  {
    id: 'papyr',
    title: 'Papyr',
    subtitle: 'Digital Library & Reading Intelligence Tracker',
    tagline: 'Dynamic book tracking and cataloging web application powered by public book databases and real-time reading progress.',
    category: 'APIs & Data',
    period: '2024',
    featured: true,
    badge: 'API Integration & State Sync',
    role: 'Frontend & API Integration Architecture',
    problem:
      'Readers struggle with scattered reading lists and clunky book tracking tools that require tedious manual entry and provide little insight into progress.',
    solution:
      'Created Papyr, an intuitive digital library that directly integrates with the Open Library API for instantaneous metadata retrieval, cover fetching, and interactive shelf categorization with reading velocity metrics.',
    highlights: [
      'Integrated Open Library API with debounced search queries and client-side caching to minimize network overhead.',
      'Designed a multi-shelf organizational system ("Currently Reading", "Want to Read", "Completed", "Abandoned").',
      'Engineered interactive page-by-page progress bars and target completion pace indicators.',
      'Implemented responsive book detail view featuring publication metadata, author biographies, and personal notes.',
    ],
    architectureDetails: {
      overview:
        'Client-heavy dynamic web application integrating public REST endpoints with persistent local storage and state management. Prioritizes instant search feedback and minimal latency.',
      keyDecisions: [
        'Debounced query pipeline with LRU memory caching to avoid spamming public endpoints and prevent rate limits.',
        'Normalized client state schema mapping external API book objects to a uniform internal book model.',
        'Offline-friendly shelf storage ensuring reading logs are saved instantly.',
      ],
      schemaOrFlow: [
        'User Query ➔ 300ms Debounce Gate ➔ Local Cache Check ➔ Open Library REST API ➔ Normalized State Store',
        'Shelf State: Shelves { WantToRead, InProgress, Finished } with progress percentage tracking',
      ],
    },
    technologies: ['React', 'TypeScript', 'Open Library API', 'Tailwind CSS', 'State Management', 'Web Storage'],
    githubUrl: 'https://github.com/Ramzyayman/papyr',
    liveUrl: 'https://github.com/Ramzyayman/papyr',
  },
  {
    id: 'kaszino',
    title: 'Kaszinó',
    subtitle: 'Discord Bot & Real-Time Management Dashboard',
    tagline: 'Multi-featured Discord bot and interactive web dashboard with virtual economy, real-time mini-games, and guild configuration.',
    category: 'Bots & Automation',
    period: '2024',
    featured: true,
    badge: 'Real-Time Bot & Dashboard',
    role: 'Bot Architecture, WebSocket Dashboard & Mini-Game Logic',
    problem:
      'Community engagement bots often lack real-time transparency, rely on clunky command-only interfaces, and suffer from exploitable economy logic or desynchronized state.',
    solution:
      'Engineered Kaszinó, combining a high-uptime Discord bot with an interactive web dashboard. Features secure virtual currency transactions, provably fair mini-games (Mines, Coinflip), and server-level admin controls.',
    highlights: [
      'Built real-time event pipeline coordinating Discord gateway events with web dashboard status updates.',
      'Implemented interactive mini-games including Mines (multi-multiplier grid risk) and Coinflip with tamper-resistant randomness.',
      'Developed server-level configuration controls for server managers (economy multipliers, role rewards, permission gates).',
      'Architected virtual currency ledger ensuring safe balance mutations and race-condition prevention during rapid bets.',
    ],
    architectureDetails: {
      overview:
        'Dual-surface architecture featuring a Discord Gateway event consumer and an administrative Web Dashboard, communicating via shared database storage and event webhooks.',
      keyDecisions: [
        'Mutex/atomic transaction locking on user economy balances to prevent concurrent betting race conditions.',
        'Cryptographically secure pseudo-random number generation (CSPRNG) for provably fair mini-game roll calculations.',
        'Role-based access control (RBAC) linking Discord OAuth permissions with dashboard guild settings.',
      ],
      schemaOrFlow: [
        'Discord Client / Slash Commands ⇄ Bot Gateway Engine ⇄ Economy Ledger (Atomic) ⇄ Persistent Database',
        'Web Dashboard ⇄ REST / WebSocket Gateway ⇄ Live Guild Configuration & Analytics',
      ],
    },
    technologies: ['Node.js', 'Discord.js', 'TypeScript', 'WebSockets', 'REST API', 'Tailwind CSS', 'Database Ledger'],
    githubUrl: 'https://github.com/Ramzyayman/kaszino',
    liveUrl: 'https://github.com/Ramzyayman/kaszino',
  },
  {
    id: 'hos-discordbot',
    title: 'Hall of Shame',
    subtitle: 'Event-Driven Discord Bot & Dynamic Image Synthesis',
    tagline: 'Automated Python bot generating custom dark-mode screenshot cards with "CAUGHT IN 4K" stamps upon reaction triggers, containerized with Docker.',
    category: 'Bots & Automation',
    period: '2024',
    featured: true,
    badge: 'Python & Docker',
    role: 'Bot Architecture, Canvas Image Generation & Containerization',
    problem:
      'Standard Discord pin features are static and easily lost in busy servers, while manually taking and editing screenshots is slow and inconsistent.',
    solution:
      'Developed the Hall of Shame bot, an automated Python system that monitors message reaction thresholds and triggers an in-memory image generation pipeline to produce authentic Discord dark-mode cards stamped with "CAUGHT IN 4K".',
    highlights: [
      'Engineered multi-layer dynamic image canvas using Python Pillow and Pilmoji with custom typography and emojis.',
      'Implemented reaction threshold event watcher with state deduplication preventing duplicate card posts.',
      'Containerized the entire application with Docker and configured continuous deployment on Discloud.',
      'Handled SVG-to-raster vector parsing and WebP conversions for external user avatar assets.',
    ],
    architectureDetails: {
      overview:
        'Event-driven Python worker integrating Discord Gateway webhooks with a headless PIL graphics pipeline.',
      keyDecisions: [
        'Thread-pool offloading for canvas image drawing to keep Discord event gateway responsive.',
        'Multi-stage Dockerfile packaging required TrueType fonts, native C libraries, and Python dependencies.',
        'In-memory image byte streaming avoiding unnecessary disk I/O bottlenecks.',
      ],
      schemaOrFlow: [
        'Message gets 3x 📸 reactions ➔ Discord Gateway ➔ Python Worker ➔ Pillow/Pilmoji Render ➔ Channel Post',
      ],
    },
    technologies: ['Python', 'Discord.py', 'Pillow (PIL)', 'Pilmoji', 'Docker', 'Discloud', 'Vector SVG'],
    githubUrl: 'https://github.com/Ramzyayman/hos-discordbot',
    liveUrl: 'https://github.com/Ramzyayman/hos-discordbot',
  },
  {
    id: 'contacts-api',
    title: 'Contacts REST API',
    subtitle: 'ASP.NET Core Web API with Entity Framework Core',
    tagline: 'Structured enterprise-grade backend API built with C# and .NET, featuring SQLite persistence, DTO mappers, and custom error middleware.',
    category: 'Backend & APIs',
    period: '2024',
    featured: false,
    badge: 'C# & .NET Core',
    role: 'API Design, Entity Framework Schema & Exception Middleware',
    problem:
      'Backend services often leak database entities to the client layer and lack consistent error handling when storage systems experience latency or failure.',
    solution:
      'Built a clean, structured RESTful API with ASP.NET Core and Entity Framework Core, providing complete CRUD actions, duplicate email conflict resolution, and custom middleware for storage exceptions.',
    highlights: [
      'Implemented clean architecture separating Controllers, DTOs, Mappers, Services, and DbContext.',
      'Authored custom StorageUnavailableExceptionMiddleware for uniform HTTP exception handling.',
      'Configured Entity Framework Core with automatic code-first migrations and SQLite storage.',
      'Designed HTTP endpoints for contact queries, creation, updates, and duplicate validation.',
    ],
    architectureDetails: {
      overview:
        'Layered ASP.NET Core Web API utilizing dependency injection and Entity Framework Core.',
      keyDecisions: [
        'DTO mapping isolating internal database models from external HTTP contracts.',
        'Centralized middleware handling storage failures cleanly without leaking stack traces.',
        'Code-first database schema migrations for predictable schema versioning.',
      ],
      schemaOrFlow: [
        'HTTP Request ➔ Exception Middleware ➔ Controller ➔ Service Layer ➔ EF Core DbContext ➔ SQLite',
      ],
    },
    technologies: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQLite', 'REST API', 'LINQ'],
    githubUrl: 'https://github.com/Ramzyayman/MySecondApi',
    liveUrl: 'https://github.com/Ramzyayman/MySecondApi',
  },
  {
    id: 'palette-app',
    title: 'PaletteApp',
    subtitle: 'Keyboard-Driven Color Palette Generator',
    tagline: 'Fast, responsive color scheme exploration utility with keyboard shortcuts and split-screen comparison.',
    category: 'Interactive Tools',
    period: '2022',
    featured: false,
    badge: 'Vanilla JS Utility',
    role: 'Front-End UI/UX & Keyboard Event Handling',
    problem:
      'Developers and designers frequently need a distraction-free, instantaneous tool to test and generate color palettes without heavy interfaces.',
    solution:
      'Created PaletteApp, an interactive web utility with intuitive keyboard hotkeys (H to toggle controls, S for split screen) and dynamic color harmonies.',
    highlights: [
      'Engineered keyboard event navigation for distraction-free rapid color generation.',
      'Zero-dependency vanilla JavaScript implementation ensuring instant load time.',
      'Interactive split-screen comparison mode for previewing contrasting color pairs.',
    ],
    architectureDetails: {
      overview:
        'Lightweight event-driven client web app with dynamic DOM style mutations.',
      keyDecisions: [
        'Zero framework runtime overhead for sub-millisecond execution.',
        'Keyboard shortcut listener facilitating seamless designer workflow.',
      ],
      schemaOrFlow: [
        'Keypress (H/S/Space) ➔ Random Palette Engine ➔ CSS DOM Mutation & Hex Display',
      ],
    },
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Events'],
    githubUrl: 'https://github.com/Ramzyayman/PaletteApp',
    liveUrl: 'https://github.com/Ramzyayman/PaletteApp',
  },
];

export const skillGroupsData: SkillGroup[] = [
  {
    category: 'Languages',
    description: 'Core programming languages used for systems, backend APIs, automation, and full-stack development.',
    skills: [
      { name: 'TypeScript', level: 'Primary', tags: ['Full-Stack', 'Node', 'APIs'] },
      { name: 'JavaScript (ESNext)', level: 'Advanced', tags: ['Async', 'DOM', 'Runtime'] },
      { name: 'Python', level: 'Proficient', tags: ['Discord.py', 'Pillow', 'Automation'] },
      { name: 'C#', level: 'Proficient', tags: ['.NET', 'ASP.NET Core', 'EF Core'] },
      { name: 'C++', level: 'Core Foundations', tags: ['Data Structures', 'Algorithms'] },
      { name: 'SQL', level: 'Relational', tags: ['PostgreSQL', 'SQLite', 'Schema Design'] },
    ],
  },
  {
    category: 'Full-Stack & Backend',
    description: 'Frameworks, runtimes, and protocols for building performant web apps and microservices.',
    skills: [
      { name: 'Node.js & Express', level: 'Advanced', tags: ['Backend Runtime', 'RESTful Routing'] },
      { name: 'React (18 / 19)', level: 'Advanced', tags: ['Hooks', 'SPA', 'Zustand', 'Component Design'] },
      { name: 'ASP.NET Core', level: 'Proficient', tags: ['Web APIs', 'Dependency Injection', 'DTOs'] },
      { name: 'WebSockets & Socket.io', level: 'Proficient', tags: ['Real-Time', 'Event Streams', 'xterm.js'] },
      { name: 'Discord.js & Discord.py', level: 'Advanced', tags: ['Bot Gateways', 'Slash Commands', 'RBAC'] },
    ],
  },
  {
    category: 'Databases & State',
    description: 'Storage engines, relational modeling, and client/server state synchronization.',
    skills: [
      { name: 'PostgreSQL & SQLite', level: 'Relational', tags: ['Relational Schema', 'ACID', 'Migrations'] },
      { name: 'Prisma & EF Core', level: 'Advanced', tags: ['ORM', 'Type-Safe Queries', 'Code-First'] },
      { name: 'MongoDB', level: 'Document', tags: ['NoSQL', 'Document Stores'] },
      { name: 'Client State', level: 'Advanced', tags: ['Zustand', 'Context', 'React Hooks'] },
    ],
  },
  {
    category: 'DevOps & Tooling',
    description: 'Development environment, containerization, build tools, and modern workflows.',
    skills: [
      { name: 'Docker', level: 'Proficient', tags: ['Containerization', 'Dockerfiles', 'Deployments'] },
      { name: 'Git & GitHub', level: 'Core', tags: ['Monorepos', 'Branching', 'PRs'] },
      { name: 'Vite & Tailwind CSS', level: 'Advanced', tags: ['Bundling', 'HMR', 'Design Systems'] },
      { name: 'xterm.js & pidusage', level: 'Proficient', tags: ['Web Terminals', 'Process Telemetry'] },
      { name: 'Linux / Bash', level: 'Comfortable', tags: ['CLI', 'Shell Scripting', 'Hosting'] },
    ],
  },
];
