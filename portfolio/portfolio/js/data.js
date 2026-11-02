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
    headline: "Engineering embedded systems, from firmware to interface.",
    summary: "Fifth-year engineering student at Grenoble INP - Polytech Grenoble and application engineer apprentice at STMicroelectronics, focused on electronics and industrial computing.",
    about: "I am an engineering student specializing in electronics and industrial computing, currently completing a work-study apprenticeship at STMicroelectronics. I enjoy applying computer science and mathematics to embedded systems, firmware, and practical demonstrations that make technology easier to use.",
    contactNote: "For professional inquiries, email is the best way to reach me.",
    skipLink: "Skip to projects",
    navLabel: "Main navigation",
    languageLabel: "Language",
    nav: { experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", about: "About", contact: "Contact" },
    heroProjects: "Explore my projects",
    heroContact: "Get in touch",
    sections: { experience: "Experience", projects: "Projects", skills: "Skills", about: "About", education: "Education", languages: "Languages and interests", contact: "Contact" },
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
        role: "Application Engineer Apprentice",
        date: "September 2024 - Present",
        details: [
          "Developing a complete demonstration showcasing ST RS-485 integrated circuits.",
          "Processing and analyzing data for machine learning, with a focus on data analysis and visualization.",
          "Building foundational knowledge of USB communication and the USB Type-C Power Delivery protocol."
        ]
      },
      {
        company: "STMicroelectronics TouchGFX",
        role: "Graphical User Interface Development Intern",
        date: "April - July 2026",
        details: [
          "Designed and programmed multiple demonstrations showcasing TouchGFX features and rendering performance."
        ]
      },
      {
        company: "Orange Business",
        role: "Intern",
        date: "July - August 2023",
        details: [
          "Explored AWS, Azure, and Google Cloud; set up virtual machines, configured operating systems, and tuned performance.",
          "Configured DNS, users, groups, and security policies; learned DevOps automation, monitoring, and continuous deployment."
        ]
      }
    ],
    projects: [
      { title: "Autonomous light-seeking robot", description: "Built an autonomous robot using STM32, C, and electronics.", date: "June 2025" },
      { title: "Autonomous watering system", description: "Designed and built an Arduino-based autonomous watering system.", date: "January - April 2024" },
      { title: "Cowsay graphical interface", description: "Created a graphical interface for Cowsay using C and Unix tools.", date: "May 2023" },
      { title: "Election system", description: "Implemented an election system in OCaml, working with large datasets and functional programming.", date: "May 2023" },
      { title: "Maze game with graphical interface", description: "Built a Python maze game with a graphical interface using Turtle.", date: "December 2022" }
    ],
    education: [
      {
        program: "Engineering degree in Electronics and Industrial Computing",
        institution: "Grenoble INP - Polytech Grenoble, UGA",
        institutionUrl: "https://polytech.grenoble-inp.fr",
        programUrl: "https://polytech.grenoble-inp.fr/fr/formations/electronique-et-informatique-industrielle-apprentissage-1#page-presentation",
        location: "Grenoble, France",
        date: "2024 - Present"
      },
      {
        program: "Preparatory course in Computer Science and Applied Mathematics",
        institution: "Grenoble INP - UGA",
        institutionUrl: "https://polytech.grenoble-inp.fr",
        programUrl: "https://polytech.grenoble-inp.fr/fr/formations/parcours-des-ecoles-dingenieurs-polytech-peip-1#page-presentation",
        location: "Grenoble, France",
        date: "2022 - 2024"
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
    headline: "Concevoir des systèmes embarqués, du firmware aux interfaces.",
    summary: "Étudiant en cinquième année à Grenoble INP - Polytech Grenoble et apprenti ingénieur d'application chez STMicroelectronics, spécialisé en électronique et informatique industrielle.",
    about: "Je suis étudiant ingénieur spécialisé en électronique et informatique industrielle, actuellement en alternance chez STMicroelectronics. J'aime appliquer l'informatique et les mathématiques aux systèmes embarqués, au firmware et à la réalisation de démonstrateurs concrets qui rendent la technologie plus simple à utiliser.",
    contactNote: "Pour toute demande professionnelle, vous pouvez me contacter par e-mail.",
    skipLink: "Aller aux projets",
    navLabel: "Navigation principale",
    languageLabel: "Langue",
    nav: { experience: "Expérience", projects: "Projets", skills: "Compétences", education: "Formation", about: "À propos", contact: "Contact" },
    heroProjects: "Voir mes projets",
    heroContact: "Me contacter",
    sections: { experience: "Expérience", projects: "Projets", skills: "Compétences", about: "À propos", education: "Formation", languages: "Langues et centres d'intérêt", contact: "Contact" },
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
        role: "Apprenti ingénieur d'application",
        date: "Septembre 2024 - Aujourd'hui",
        details: [
          "Développement d'un démonstrateur complet mettant en valeur les circuits intégrés RS-485 de ST.",
          "Traitement et analyse de données pour l'apprentissage automatique, avec un travail de visualisation des données.",
          "Acquisition de connaissances de base sur la communication USB et le protocole USB Type-C Power Delivery."
        ]
      },
      {
        company: "STMicroelectronics TouchGFX",
        role: "Stagiaire en développement d'interfaces graphiques",
        date: "Avril - juillet 2026",
        details: [
          "Conception et programmation de plusieurs démonstrateurs pour présenter les fonctionnalités et les performances de rendu de TouchGFX."
        ]
      },
      {
        company: "Orange Business",
        role: "Stagiaire",
        date: "Juillet - août 2023",
        details: [
          "Découverte d'AWS, Azure et Google Cloud ; mise en place de machines virtuelles, configuration de systèmes d'exploitation et optimisation des performances.",
          "Configuration DNS, gestion des utilisateurs et des groupes, politiques de sécurité et découverte de l'automatisation, de la supervision et du déploiement continu."
        ]
      }
    ],
    projects: [
      { title: "Robot autonome attiré par la lumière", description: "Réalisation d'un robot autonome à l'aide d'un STM32, de C et de composants électroniques.", date: "Juin 2025" },
      { title: "Système d'arrosage autonome", description: "Conception et réalisation d'un système d'arrosage autonome à base d'Arduino.", date: "Janvier - avril 2024" },
      { title: "Cowsay - interface graphique", description: "Création d'une interface graphique pour Cowsay avec C et des outils Unix.", date: "Mai 2023" },
      { title: "Système électoral", description: "Implémentation en OCaml d'un système électoral avec manipulation de données volumineuses et programmation fonctionnelle.", date: "Mai 2023" },
      { title: "Jeu de labyrinthe avec interface graphique", description: "Réalisation d'un jeu de labyrinthe en Python avec une interface graphique utilisant Turtle.", date: "Décembre 2022" }
    ],
    education: [
      {
        program: "Diplôme d'ingénieur en électronique et informatique industrielle",
        institution: "Grenoble INP - Polytech Grenoble, UGA",
        institutionUrl: "https://polytech.grenoble-inp.fr",
        programUrl: "https://polytech.grenoble-inp.fr/fr/formations/electronique-et-informatique-industrielle-apprentissage-1#page-presentation",
        location: "Grenoble, France",
        date: "2024 - Aujourd'hui"
      },
      {
        program: "Parcours PeiP en informatique et mathématiques appliquées",
        institution: "Grenoble INP - UGA",
        institutionUrl: "https://polytech.grenoble-inp.fr",
        programUrl: "https://polytech.grenoble-inp.fr/fr/formations/parcours-des-ecoles-dingenieurs-polytech-peip-1#page-presentation",
        location: "Grenoble, France",
        date: "2022 - 2024"
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
