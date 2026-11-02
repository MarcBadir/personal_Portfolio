const SITE = {
  name: "Marc Bishara",
  initials: "MB",
  headline: "Engineering embedded systems, from firmware to interface.",
  summary: "Fifth-year engineering student at Grenoble INP - Polytech Grenoble and application engineer apprentice at STMicroelectronics, focused on electronics and industrial computing.",
  about: "I am an engineering student specializing in electronics and industrial computing, currently completing a work-study apprenticeship at STMicroelectronics. I enjoy applying computer science and mathematics to embedded systems, firmware, and practical demonstrations that make technology easier to use.",
  contactNote: "For professional inquiries, email is the best way to reach me.",
  links: [
    { label: "Phone", url: "tel:+33781283099" },
    { label: "Email", url: "mailto:marcbadir75@gmail.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/marc-bishara-6b654b26b/" }
  ]
};

const PROJECTS = [
  { title: "Autonomous light-seeking robot", description: "Built an autonomous robot using STM32, C, and electronics.",
    tags: ["STM32", "C", "Electronics"], date: "June 2025" },
  { title: "Autonomous watering system", description: "Designed and built an Arduino-based autonomous watering system.",
    tags: ["Arduino", "Electronics"], date: "January - April 2024" },
  { title: "Cowsay graphical interface", description: "Created a graphical interface for Cowsay using C and Unix tools.",
    tags: ["C", "Unix"], date: "May 2023" },
  { title: "Election system", description: "Implemented an election system in OCaml, working with large datasets and functional programming.",
    tags: ["OCaml", "Functional programming"], date: "May 2023" },
  { title: "Maze game with graphical interface", description: "Built a Python maze game with a graphical interface using Turtle.",
    tags: ["Python", "Turtle", "Algorithms"], date: "December 2022" }
];

const SKILLS = {
  "Programming": ["C/C++", "Python (Pandas, NumPy, Matplotlib)", "OCaml", "Bash (Linux)"],
  "Embedded systems": ["STM32Cube ecosystem", "TouchGFX", "Modbus", "ARMv4", "RISC-V", "Arduino"],
  "Tools and methods": ["Git", "SCRUM", "G8D", "Microsoft Office", "Teamwork", "Communication"]
};

const EXPERIENCE = [
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
];

const EDUCATION = [
  {
    program: "Engineering degree in Electronics and Industrial Computing",
    institution: "Grenoble INP - Polytech Grenoble, UGA",
    location: "Grenoble, France",
    date: "2024 - Present"
  },
  {
    program: "Preparatory course in Computer Science and Applied Mathematics",
    institution: "Grenoble INP - UGA",
    location: "Grenoble, France",
    date: "2022 - 2024"
  },
  {
    program: "French Baccalaureate",
    institution: "Lycée Français Concordia",
    location: "Cairo, Egypt",
    date: "2008 - 2022"
  }
];

const LANGUAGES = [
  { name: "French", level: "Fluent" },
  { name: "English", level: "Fluent, certified C2" },
  { name: "Arabic", level: "Native" },
  { name: "Spanish", level: "Beginner" }
];

const INTERESTS = ["Football", "Travelling", "Music", "Videography", "Boxing"];
