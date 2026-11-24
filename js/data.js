const SITE = {
  name: "Marc Bishara",
  initials: "MB",
  polytechName: "Grenoble INP - Polytech Grenoble",
  polytechUrl: "https://polytech.grenoble-inp.fr",
  links: [
    { key: "phone", url: "tel:+33781283099" },
    { key: "email", url: "mailto:marcbadir75@gmail.com" },
    { key: "linkedin", url: "https://www.linkedin.com/in/marc-bishara-6b654b26b/" }
  ]
};

const CONTENT = {
  en: {
    title: "Marc Bishara - Embedded Systems Engineer",
    description: "Marc Bishara, engineering student and application engineer apprentice at STMicroelectronics. Projects in embedded systems, electronics, and software.",
    intro: {
      eyebrow: "Embedded systems · Firmware · Interfaces",
      explore: "Explore more",
      contact: "Get in touch",
      carouselTitle: "Recent work",
      carouselLabel: "Recent experience and project work",
      focusLabel: "In focus",
      viewDetails: "View details",
      widgetsTitle: "Explore the portfolio",
      widgetsNote: "Choose a section to explore its projects, experience, and details.",
      widgets: [
        { section: "experience", description: "Professional roles and technical contributions." },
        { section: "projects", description: "Embedded systems and software built through coursework." },
        { section: "education", description: "Engineering studies, academic distinctions, and results." },
        { section: "leadership", description: "Team coaching, student life, and campaign work." },
        { section: "skills", description: "Programming, embedded systems, tools, and methods." },
        { section: "about", description: "A little more about my background and interests." },
        { section: "languages", description: "Languages I speak and things I enjoy." },
        { section: "contact", description: "Ways to get in touch and connect." }
      ]
    },
    detailEyebrow: "Selected work and experience",
    backToIntro: "Quick intro",
    cvLabel: "Open bilingual CV (PDF)",
    detailBack: "Back to CV",
    detailDetailsTitle: "What I worked on",
    detailHighlightsTitle: "Highlights",
    detailResourcesTitle: "Media and resources",
    notFoundTitle: "This CV entry could not be found.",
    programLinkLabel: "Visit the program page",
    communityImage: {
      src: "assets/Educations/PolyBoyard/Polyboyard.jpg",
      alt: "Students from Polytech Grenoble at a campus event",
      label: "Polyboyard · campus life"
    },
    headline: "Engineering embedded systems, from firmware to interface.",
    summary: "Fifth-year Computer Engineering student at Grenoble INP - Polytech Grenoble, completing an apprenticeship at STMicroelectronics. Passionate about programming and physics, I combine academic study with hands-on engineering experience.",
    about: [
      "Passionate about programming and physics, I am pursuing a fifth-year Computer Engineering degree at Polytech Grenoble through an apprenticeship at STMicroelectronics. The program combines rigorous academic training with hands-on industry experience.",
      "At Polytech Grenoble, I have developed proficiency in C/C++, Python, and shell scripting, supported by a strong foundation in mathematics and physics. My studies continue to strengthen my technical skills.",
      "My apprenticeship at STMicroelectronics is helping me expand both my technical expertise and soft skills while gaining practical experience in a professional environment.",
      "As an international student, studying abroad has strengthened my independence, time and budget management, and problem-solving abilities. I speak English and French fluently, and Arabic is my native language."
    ],
    contactNote: "For professional inquiries, email is the best way to reach me.",
    skipLink: "Skip to projects",
    navLabel: "Main navigation",
    languageLabel: "Language",
    nav: { experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", leadership: "Leadership", about: "About", contact: "Contact" },
    heroProjects: "Explore my projects",
    heroContact: "Get in touch",
    sections: { experience: "Experience", projects: "Projects", skills: "Skills", about: "About", education: "Education", leadership: "Leadership and recognition", languages: "Languages and interests", contact: "Contact" },
    languageHeading: "Languages",
    interestsHeading: "Interests",
    projectFilterLabel: "Filter projects by technology",
    allProjects: "All",
    contactLinks: { phone: "Phone", email: "Email", linkedin: "LinkedIn" },
    skills: [
      { title: "Programming", items: ["C/C++", "Python (Pandas, NumPy, Matplotlib)", "OCaml", "Bash (Linux)"] },
      { title: "Embedded systems", items: ["STM32Cube ecosystem", "TouchGFX", "Modbus", "ARMv4", "RISC-V", "Arduino"] },
      { title: "Tools and methods", items: ["Git", "SCRUM", "G8D", "Microsoft Office", "Teamwork", "Communication"] }
    ],
    experience: [
      {
        company: "STMicroelectronics",
        companyUrl: "https://www.linkedin.com/company/stmicroelectronics/",
        logo: "assets/ProfessionalExperience/STMicroelectronics/ST-logo-2026-quantum.svg",
        role: "Application Engineer Apprentice",
        date: "September 2024 - Present",
        details: [
          "Developing an RS-485 transceiver demonstration and a portable Modbus master/slave library.",
          "Building embedded software to drive and monitor encoders, actuators, and microcontrollers, with a user interface for system control and supervision.",
          "Preparing a large dataset for analysis and machine learning through cleaning, filtering, mathematical modeling, and correlation analysis.",
          "Gaining hands-on experience testing USB communication, USB-C connectors, and USB Power Delivery."
        ]
      },
      {
        company: "STMicroelectronics TouchGFX",
        companyUrl: "https://www.linkedin.com/company/stmicroelectronics/",
        logo: "assets/ProfessionalExperience/STMicroelectronics/ST-logo-2026-quantum.svg",
        role: "Graphical User Interface Development Intern",
        date: "April - July 2026",
        location: "Aarhus, Denmark",
        details: [
          "Developed GUI demonstrations for MCU-based products using TouchGFX.",
          "Implemented smooth animations and polished interfaces for resource-constrained embedded systems.",
          "Helped showcase the performance and user experience of ST's newest products."
        ]
      },
      {
        company: "Orange Business",
        logo: "assets/ProfessionalExperience/OrangeBusiness/orange-logo.svg",
        role: "Intern",
        date: "July - August 2023",
        details: [
          "Gained an early introduction to technical work, cloud computing, and the practical expectations of the industry.",
          "Explored AWS, Azure, and Google Cloud; configured virtual machines, operating systems, and performance.",
          "Worked with DNS, user and group administration, security policies, and DevOps automation and monitoring."
        ],
        resources: [
          {
            type: "image",
            src: "assets/ProfessionalExperience/OrangeBusiness/BestTeamSpiritAward.jpg",
            alt: "Best Team Spirit Award certificate for the CASA and Monitoring Team",
            label: "Best Team Spirit Award · CASA and Monitoring Team"
          },
          {
            type: "document",
            href: "assets/ProfessionalExperience/OrangeBusiness/CASATeamPresentation.pdf",
            label: "CASA and Monitoring Team presentation (PDF)"
          }
        ]
      },
      {
        company: "MSD",
        logo: "assets/ProfessionalExperience/MSD/international-logo.svg",
        role: "Marketing Intern",
        date: "April 2019 · 1 month",
        location: "Cairo, Egypt",
        details: [
          "Explored marketing strategy and sales, gaining an early introduction to professional life."
        ]
      }
    ],
    leadership: [
      {
        organization: "Polytech Grenoble · Bureau des Sports",
        role: "Football Head Coach",
        date: "2024 - 2025",
        details: [
          "Led weekly training sessions and coached Polytech Grenoble's team in the OL'INPIADES, a tournament bringing together schools across the Grenoble INP network.",
          "Organized an inter-department tournament at Polytech Grenoble, coordinating students from every major and managing event logistics.",
          "Built leadership, planning, communication, and adaptability while coordinating a team and events under pressure."
        ],
        resources: [
          {
            type: "image",
            src: "assets/Educations/BDS/BDS.jpg",
            alt: "Polytech Grenoble BDS presentation listing Marc Badir as a football representative",
            label: "Bureau des Sports · football"
          }
        ]
      },
      {
        organization: "Polytech Grenoble · Student Union campaign",
        role: "Head of Communication and Media",
        date: "2025 - 2026",
        details: [
          "Joined a team campaigning to become Polytech Grenoble's student union (BDE) for the 2025-2026 academic year.",
          "Led communications by creating and publishing Instagram posts to keep students informed about the team's activities.",
          "Developed interpersonal communication and design skills while becoming more involved in French student culture."
        ],
        resources: [
          { type: "document", href: "https://www.instagram.com/polyboyard/", label: "Polyboyard Instagram page" }
        ]
      }
    ],
    projects: [
      {
        title: "Autonomous light-seeking robot",
        description: "Designed an STM32 robot with light-seeking and light-avoiding modes, integrating sensors, electronics, embedded software, and control algorithms.",
        date: "June 2025",
        resources: [
          { type: "image", src: "assets/Projects/LightAttractedRobot/sideView.jpg", alt: "Side view of the autonomous light-seeking robot", label: "Robot prototype" },
          { type: "image", src: "assets/Projects/LightAttractedRobot/PrototypingTheRObot.jpg", alt: "Prototyping the autonomous robot on a workbench", label: "Prototyping" },
          { type: "image", src: "assets/Projects/LightAttractedRobot/MaximeAndIWorkingOnThePCB.jpg", alt: "Marc and a teammate working on the robot's PCB", label: "PCB development" }
        ]
      },
      {
        title: "Autonomous watering system",
        description: "Built an Arduino Leonardo irrigation system using soil-moisture, temperature, and light sensors to control a pump, with live readings on an I2C LCD.",
        date: "January - April 2024",
        resources: [
          { type: "image", src: "assets/Projects/AutonomousWateringSystem/TopView.jpg", alt: "Top view of the Arduino watering system prototype", label: "System overview" },
          { type: "image", src: "assets/Projects/AutonomousWateringSystem/WaterPump.jpg", alt: "Water pump used by the autonomous irrigation system", label: "Water pump" }
        ]
      },
      { title: "Cowsay graphical interface", description: "Created a graphical interface for Cowsay using C and Unix tools.", date: "May 2023" },
      { title: "Election system", description: "Implemented an election system in OCaml, working with large datasets and functional programming.", date: "May 2023" },
      {
        title: "Maze game with graphical interface",
        description: "Built a Python maze game with a graphical interface using Turtle.",
        date: "December 2022",
        resources: [
          { type: "image", src: "assets/Projects/MazeGame/MidgameView.jpg", alt: "Maze game during play", label: "Gameplay" },
          { type: "image", src: "assets/Projects/MazeGame/FinalView.jpg", alt: "Maze game showing the completed maze", label: "Completed maze" },
          { type: "document", href: "assets/Projects/MazeGame/Rapport de projet Laby.pdf", label: "Maze game project report (PDF)" }
        ]
      }
    ],
    education: [
      {
        program: "Engineering degree in Electronics and Industrial Computing",
        institution: "Grenoble INP - Polytech Grenoble, UGA",
        institutionUrl: "https://polytech.grenoble-inp.fr",
        programUrl: "https://polytech.grenoble-inp.fr/fr/formations/electronique-et-informatique-industrielle-apprentissage-1#page-presentation",
        location: "Grenoble, France",
        date: "2024 - Present",
        highlights: ["Admitted to the E2I engineering program through an apprenticeship.", "Ranked among the top three in my class during the third year."]
      },
      {
        program: "Preparatory course in Computer Science and Applied Mathematics",
        institution: "Grenoble INP - UGA",
        institutionUrl: "https://polytech.grenoble-inp.fr",
        programUrl: "https://polytech.grenoble-inp.fr/fr/formations/parcours-des-ecoles-dingenieurs-polytech-peip-1#page-presentation",
        location: "Grenoble, France",
        date: "2022 - 2024",
        highlights: ["Ranked 9th in the IMA track and in the top 13% nationwide across the PeiP program."]
      },
      {
        program: "French Baccalaureate",
        institution: "Lycée Français Concordia",
        location: "Cairo, Egypt",
        date: "2008 - 2022"
      }
    ],
    languages: [
      { name: "French", level: "Fluent" },
      { name: "English", level: "Fluent, certified C2" },
      { name: "Arabic", level: "Native" },
      { name: "Spanish", level: "Beginner" }
    ],
    interests: ["Football", "Travelling", "Music", "Videography", "Boxing"]
  },
  fr: {
    title: "Marc Bishara - Ingénieur en systèmes embarqués",
    description: "Marc Bishara, étudiant ingénieur en électronique et informatique industrielle et apprenti ingénieur d'application chez STMicroelectronics.",
    intro: {
      eyebrow: "Systèmes embarqués · Firmware · Interfaces",
      explore: "Découvrir la suite",
      contact: "Me contacter",
      carouselTitle: "Activités récentes",
      carouselLabel: "Expériences et projets récents",
      focusLabel: "À retenir",
      viewDetails: "Voir les détails",
      widgetsTitle: "Explorer le portfolio",
      widgetsNote: "Choisissez une rubrique pour découvrir les projets, expériences et informations associés.",
      widgets: [
        { section: "experience", description: "Expériences professionnelles et contributions techniques." },
        { section: "projects", description: "Projets de systèmes embarqués et de développement logiciel." },
        { section: "education", description: "Formation d'ingénieur, résultats et distinctions académiques." },
        { section: "leadership", description: "Encadrement d'équipe, vie étudiante et campagne associative." },
        { section: "skills", description: "Programmation, systèmes embarqués, outils et méthodes." },
        { section: "about", description: "Quelques informations sur mon parcours et mes centres d'intérêt." },
        { section: "languages", description: "Langues parlées et activités que j'apprécie." },
        { section: "contact", description: "Me contacter et retrouver mes profils en ligne." }
      ]
    },
    detailEyebrow: "Projets et expérience",
    backToIntro: "Accueil",
    cvLabel: "Ouvrir le CV bilingue (PDF)",
    detailBack: "Retour au CV",
    detailDetailsTitle: "Travail réalisé",
    detailHighlightsTitle: "Points clés",
    detailResourcesTitle: "Médias et ressources",
    notFoundTitle: "Cette rubrique du CV est introuvable.",
    programLinkLabel: "Consulter la formation",
    communityImage: {
      src: "assets/Educations/PolyBoyard/Polyboyard.jpg",
      alt: "Étudiants de Polytech Grenoble lors d'un événement de campus",
      label: "Polyboyard · vie étudiante"
    },
    headline: "Concevoir des systèmes embarqués, du firmware aux interfaces.",
    summary: "Étudiant en cinquième année à Grenoble INP - Polytech Grenoble, en apprentissage chez STMicroelectronics. Passionné par la programmation et la physique, j'associe formation académique et expérience concrète en entreprise.",
    about: [
      "Passionné par la programmation et la physique, je suis en cinquième année de formation d'ingénieur en électronique et informatique industrielle à Polytech Grenoble, en apprentissage chez STMicroelectronics. Cette formation exigeante associe enseignements académiques et expérience concrète en entreprise.",
      "À Polytech Grenoble, j'ai développé mes compétences en C/C++, Python et scripts shell, sur de solides bases en mathématiques et en physique. Ma formation continue de renforcer mes compétences techniques.",
      "Mon apprentissage chez STMicroelectronics me permet de développer mon expertise technique et mes compétences relationnelles, tout en acquérant une expérience concrète du monde professionnel.",
      "En tant qu'étudiant international, mes études à l'étranger ont renforcé mon autonomie, ma gestion du temps et du budget, ainsi que ma capacité à résoudre des problèmes. Je parle couramment anglais et français, et l'arabe est ma langue maternelle."
    ],
    contactNote: "Pour toute demande professionnelle, vous pouvez me contacter par e-mail.",
    skipLink: "Aller aux projets",
    navLabel: "Navigation principale",
    languageLabel: "Langue",
    nav: { experience: "Expérience", projects: "Projets", skills: "Compétences", education: "Formation", leadership: "Engagement", about: "À propos", contact: "Contact" },
    heroProjects: "Voir mes projets",
    heroContact: "Me contacter",
    sections: { experience: "Expérience", projects: "Projets", skills: "Compétences", about: "À propos", education: "Formation", leadership: "Engagement et distinction", languages: "Langues et centres d'intérêt", contact: "Contact" },
    languageHeading: "Langues",
    interestsHeading: "Centres d'intérêt",
    projectFilterLabel: "Filtrer les projets par technologie",
    allProjects: "Tous",
    contactLinks: { phone: "Téléphone", email: "E-mail", linkedin: "LinkedIn" },
    skills: [
      { title: "Programmation", items: ["C/C++", "Python (Pandas, NumPy, Matplotlib)", "OCaml", "Bash (Linux)"] },
      { title: "Systèmes embarqués", items: ["Écosystème STM32Cube", "TouchGFX", "Modbus", "ARMv4", "RISC-V", "Arduino"] },
      { title: "Outils et méthodes", items: ["Git", "SCRUM", "G8D", "Microsoft Office", "Travail en équipe", "Communication"] }
    ],
    experience: [
      {
        company: "STMicroelectronics",
        companyUrl: "https://www.linkedin.com/company/stmicroelectronics/",
        logo: "assets/ProfessionalExperience/STMicroelectronics/ST-logo-2026-quantum.svg",
        role: "Apprenti ingénieur d'application",
        date: "Septembre 2024 - Aujourd'hui",
        details: [
          "Développement d'un démonstrateur de transceivers RS-485 et d'une bibliothèque portable Modbus maître/esclave.",
          "Développement de logiciels embarqués pour piloter et superviser des encodeurs, actionneurs et microcontrôleurs, avec une interface de contrôle et de supervision.",
          "Préparation d'un grand jeu de données pour l'analyse et l'apprentissage automatique : nettoyage, filtrage, modélisation mathématique et analyse des corrélations.",
          "Tests pratiques de la communication USB, des connecteurs USB-C et du protocole USB Power Delivery."
        ]
      },
      {
        company: "STMicroelectronics TouchGFX",
        companyUrl: "https://www.linkedin.com/company/stmicroelectronics/",
        logo: "assets/ProfessionalExperience/STMicroelectronics/ST-logo-2026-quantum.svg",
        role: "Stagiaire en développement d'interfaces graphiques",
        date: "Avril - juillet 2026",
        location: "Aarhus, Danemark",
        details: [
          "Développement de démonstrateurs d'interfaces graphiques pour microcontrôleurs avec TouchGFX.",
          "Réalisation d'animations fluides et d'interfaces soignées pour des systèmes embarqués aux ressources limitées.",
          "Contribution à la mise en valeur des performances et de l'expérience utilisateur des nouveaux produits de ST."
        ]
      },
      {
        company: "Orange Business",
        logo: "assets/ProfessionalExperience/OrangeBusiness/orange-logo.svg",
        role: "Stagiaire",
        date: "Juillet - août 2023",
        details: [
          "Première expérience technique en entreprise, à la découverte du cloud et des attentes concrètes du monde professionnel.",
          "Découverte d'AWS, Azure et Google Cloud ; configuration de machines virtuelles, de systèmes d'exploitation et optimisation des performances.",
          "Travail autour du DNS, de l'administration des utilisateurs et groupes, des politiques de sécurité et de l'automatisation et supervision DevOps."
        ],
        resources: [
          {
            type: "image",
            src: "assets/ProfessionalExperience/OrangeBusiness/BestTeamSpiritAward.jpg",
            alt: "Certificat Best Team Spirit Award pour l'équipe CASA and Monitoring",
            label: "Best Team Spirit Award · équipe CASA and Monitoring"
          },
          {
            type: "document",
            href: "assets/ProfessionalExperience/OrangeBusiness/CASATeamPresentation.pdf",
            label: "Présentation de l'équipe CASA and Monitoring (PDF)"
          }
        ]
      },
      {
        company: "MSD",
        logo: "assets/ProfessionalExperience/MSD/international-logo.svg",
        role: "Stagiaire en marketing",
        date: "Avril 2019 · 1 mois",
        location: "Le Caire, Égypte",
        details: [
          "Découverte des stratégies marketing et de la vente, lors de mes premiers pas dans le monde professionnel."
        ]
      }
    ],
    leadership: [
      {
        organization: "Polytech Grenoble · Bureau des Sports",
        role: "Entraîneur principal de football",
        date: "2024 - 2025",
        details: [
          "Encadrement des entraînements hebdomadaires et de l'équipe de football de Polytech Grenoble aux OL'INPIADES, tournoi réunissant les écoles du réseau Grenoble INP.",
          "Organisation d'un tournoi inter-départements à Polytech Grenoble, réunissant des étudiants de toutes les filières et coordonnant la logistique.",
          "Développement du leadership, de la planification, de la communication et de l'adaptabilité dans la coordination d'une équipe et d'événements."
        ],
        resources: [
          {
            type: "image",
            src: "assets/Educations/BDS/BDS.jpg",
            alt: "Présentation du BDS de Polytech Grenoble désignant Marc Badir comme responsable football",
            label: "Bureau des Sports · football"
          }
        ]
      },
      {
        organization: "Polytech Grenoble · Campagne du Bureau des Étudiants",
        role: "Responsable communication et médias",
        date: "2025 - 2026",
        details: [
          "Participation à une campagne menée en équipe pour devenir le Bureau des Étudiants (BDE) de Polytech Grenoble pour l'année 2025-2026.",
          "Responsable de la communication : création et publication de posts Instagram pour informer les étudiants des actions de l'équipe.",
          "Développement de compétences en communication relationnelle et en design, et meilleure intégration à la culture étudiante française."
        ],
        resources: [
          { type: "document", href: "https://www.instagram.com/polyboyard/", label: "Page Instagram Polyboyard" }
        ]
      }
    ],
    projects: [
      {
        title: "Robot autonome attiré par la lumière",
        description: "Conception d'un robot STM32 avec des modes d'attraction et d'évitement de la lumière, intégrant capteurs, électronique, logiciel embarqué et algorithmes de contrôle.",
        date: "Juin 2025",
        resources: [
          { type: "image", src: "assets/Projects/LightAttractedRobot/sideView.jpg", alt: "Vue latérale du robot autonome attiré par la lumière", label: "Prototype du robot" },
          { type: "image", src: "assets/Projects/LightAttractedRobot/PrototypingTheRObot.jpg", alt: "Prototypage du robot autonome sur un établi", label: "Prototypage" },
          { type: "image", src: "assets/Projects/LightAttractedRobot/MaximeAndIWorkingOnThePCB.jpg", alt: "Marc et un coéquipier travaillant sur le circuit imprimé du robot", label: "Développement du circuit imprimé" }
        ]
      },
      {
        title: "Système d'arrosage autonome",
        description: "Réalisation d'un système sur Arduino Leonardo utilisant des capteurs d'humidité, de température et de luminosité pour piloter une pompe, avec affichage sur écran LCD I2C.",
        date: "Janvier - avril 2024",
        resources: [
          { type: "image", src: "assets/Projects/AutonomousWateringSystem/TopView.jpg", alt: "Vue de dessus du prototype d'arrosage Arduino", label: "Vue d'ensemble" },
          { type: "image", src: "assets/Projects/AutonomousWateringSystem/WaterPump.jpg", alt: "Pompe à eau du système d'arrosage autonome", label: "Pompe à eau" }
        ]
      },
      { title: "Cowsay - interface graphique", description: "Création d'une interface graphique pour Cowsay avec C et des outils Unix.", date: "Mai 2023" },
      { title: "Système électoral", description: "Implémentation en OCaml d'un système électoral avec manipulation de données volumineuses et programmation fonctionnelle.", date: "Mai 2023" },
      {
        title: "Jeu de labyrinthe avec interface graphique",
        description: "Réalisation d'un jeu de labyrinthe en Python avec une interface graphique utilisant Turtle.",
        date: "Décembre 2022",
        resources: [
          { type: "image", src: "assets/Projects/MazeGame/MidgameView.jpg", alt: "Partie en cours du jeu de labyrinthe", label: "En cours de partie" },
          { type: "image", src: "assets/Projects/MazeGame/FinalView.jpg", alt: "Jeu de labyrinthe terminé", label: "Labyrinthe terminé" },
          { type: "document", href: "assets/Projects/MazeGame/Rapport de projet Laby.pdf", label: "Rapport de projet du labyrinthe (PDF)" }
        ]
      }
    ],
    education: [
      {
        program: "Diplôme d'ingénieur en électronique et informatique industrielle",
        institution: "Grenoble INP - Polytech Grenoble, UGA",
        institutionUrl: "https://polytech.grenoble-inp.fr",
        programUrl: "https://polytech.grenoble-inp.fr/fr/formations/electronique-et-informatique-industrielle-apprentissage-1#page-presentation",
        location: "Grenoble, France",
        date: "2024 - Aujourd'hui",
        highlights: ["Admis en cycle ingénieur E2I en alternance.", "Classé parmi les trois premiers de ma promotion en troisième année."]
      },
      {
        program: "Parcours PeiP en informatique et mathématiques appliquées",
        institution: "Grenoble INP - UGA",
        institutionUrl: "https://polytech.grenoble-inp.fr",
        programUrl: "https://polytech.grenoble-inp.fr/fr/formations/parcours-des-ecoles-dingenieurs-polytech-peip-1#page-presentation",
        location: "Grenoble, France",
        date: "2022 - 2024",
        highlights: ["Classé 9e dans le parcours IMA et parmi les 13 % les mieux classés au niveau national dans le cycle PeiP."]
      },
      {
        program: "Baccalauréat français",
        institution: "Lycée Français Concordia",
        location: "Le Caire, Égypte",
        date: "2008 - 2022"
      }
    ],
    languages: [
      { name: "Français", level: "Courant" },
      { name: "Anglais", level: "Courant, niveau C2 certifié" },
      { name: "Arabe", level: "Langue maternelle" },
      { name: "Espagnol", level: "Débutant" }
    ],
    interests: ["Football", "Voyages", "Musique", "Vidéographie", "Boxe"]
  }
};

const PROJECT_TAGS = [
  ["STM32", "C", "Electronics"],
  ["Arduino", "Electronics"],
  ["C", "Unix"],
  ["OCaml", "Functional programming"],
  ["Python", "Turtle", "Algorithms"]
];
