export const site = {
  firstName: "Lovejoy",
  lastName: "Chirombo",
  shortName: "LJ",
  label: "Digital Designer",
  course: "VCDM491-555",
  professor: "Professor Williams",
};

export const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/work", label: "WORK" },
  { href: "/skills", label: "SKILLS" },
  { href: "/resume", label: "RESUME" },
  { href: "/contact", label: "CONTACT" },
] as const;

export const hero = {
  titleLine1: "DIGITAL",
  titleLine2: "DESIGNER",
  body: "A digital creative with a passion for design, technology, and storytelling. I blend creativity and strategy to create meaningful experiences that inform, inspire, and leave a lasting impact.",
  primaryCta: "VIEW MY WORK",
  secondaryCta: "ABOUT ME",
};

export const sidebarTagline = "CREATIVE • INNOVATIVE • PURPOSE DRIVEN";

export const skillGroups = [
  {
    title: "DESIGN",
    items: "Printmaking, Web Design, UI/UX, Branding",
    icon: "design" as const,
  },
  {
    title: "ANIMATION",
    items: "2D Animation, 3D Animation",
    icon: "animation" as const,
  },
  {
    title: "DEVELOPMENT",
    items: "Python, JavaScript, Programming",
    icon: "development" as const,
  },
  {
    title: "STRATEGY",
    items: "Logistics, Financing, Problem Solving",
    icon: "strategy" as const,
  },
];

export const about = {
  eyebrow: "ABOUT ME",
  headingWhite: "MORE THAN DESIGN.",
  headingAccent: "IT'S PURPOSE.",
  intro:
    "Hello, my name is Lovejoy Chirombo. I am a rising star with an unsatiable appetite for growth. I blend creativity and strategy to design meaningful experiences that inform, inspire, and leave a lasting impact.",
  connectCta: "LET'S CONNECT",
  skillsEyebrow: "SKILLS & EXPERTISE",
  skillsHeading: "A DIGITAL DESIGNER",
  skillBullets: [
    "Printmaking",
    "2D Animation",
    "3D Animation",
    "Traditional Art",
    "Web Design",
    "Programming (Python / JavaScript)",
    "User Interface & User Experience",
    "Logistics",
    "Financing",
  ],
  expertise: [
    { title: "Design", detail: "Print · Web · UI/UX", icon: "design" as const },
    { title: "Animation", detail: "2D · 3D · Motion", icon: "animation" as const },
    { title: "Development", detail: "Python · JavaScript", icon: "development" as const },
    { title: "Strategy", detail: "Planning · Direction", icon: "strategy" as const },
    { title: "Art", detail: "Traditional · Mixed Media", icon: "art" as const },
    { title: "Logistics", detail: "Systems · Delivery", icon: "logistics" as const },
    { title: "Financing", detail: "Budget · Growth", icon: "financing" as const },
    { title: "Problem Solving", detail: "Think · Iterate · Ship", icon: "problem" as const },
    { title: "Passion", detail: "Drive · Craft · Care", icon: "passion" as const },
    { title: "Growth", detail: "Learn · Push · Rise", icon: "growth" as const },
  ],
  interestsEyebrow: "BEYOND DESIGN",
  interestsHeading: "INTERESTS & PASSIONS",
  interestsIntro:
    "Outside of design, these passions keep me curious, grounded, and creatively charged.",
  interests: [
    { title: "Music", detail: "What moves my soul", icon: "music" as const },
    { title: "Basketball", detail: "Discipline on and off the court", icon: "basketball" as const },
    { title: "Reading", detail: "Fuel for growth", icon: "reading" as const },
    { title: "Travel", detail: "New places, new perspective", icon: "travel" as const },
    { title: "Community", detail: "Giving back, staying connected", icon: "community" as const },
  ],
  interestsQuote:
    "I am a rising star with an unsatiable appetite for growth. I never stop learning, creating, and pushing forward.",
  journeyEyebrow: "MY JOURNEY",
  journeyHeading: "GROWTH IN MOTION",
  journeyIntro:
    "Every chapter has sharpened how I see, make, and create — from early sketchbooks to purposeful digital work.",
  journeyCta: "VIEW MY WORK",
  journey: [
    {
      title: "Early Beginnings",
      body: "A passion for art and storytelling took root — sketching, painting, and finding my voice.",
      icon: "beginnings" as const,
    },
    {
      title: "Education & Growth",
      body: "Building digital design and animation skills while expanding craft across mediums.",
      icon: "education" as const,
    },
    {
      title: "Exploring & Building",
      body: "Working across diverse projects — from type posters to interfaces and brand systems.",
      icon: "exploring" as const,
    },
    {
      title: "Purpose & Impact",
      body: "Creating intentional designs that solve real problems and leave a lasting mark.",
      icon: "purpose" as const,
    },
  ],
  valuesHeading: "VALUES THAT SHAPE MY WORK",
  values: [
    {
      title: "Creativity",
      body: "Approach every challenge with an open mind and a willingness to explore.",
      icon: "creativity" as const,
    },
    {
      title: "Innovation",
      body: "Strive to create original, forward-thinking work that stands apart.",
      icon: "innovation" as const,
    },
    {
      title: "Purpose",
      body: "Design is about solving real problems — beauty with intention.",
      icon: "purposeValue" as const,
    },
    {
      title: "Growth",
      body: "A commitment to constant learning, refining, and rising.",
      icon: "growthValue" as const,
    },
  ],
  closingQuote:
    "If I was to label my work I would say I am a “Digital Designer” with a plethora of hidden talents. I hope you enjoy my portfolio.",
  signature: "LJ Chirombo",
  signatureTitle: "DIGITAL DESIGNER",
};

export type WorkCategory =
  | "all"
  | "art"
  | "graphic"
  | "digital"
  | "animation"
  | "branding";

export type WorkItem = {
  id: string;
  title: string;
  year?: string;
  medium: string;
  size: string;
  description: string;
  category: WorkCategory;
  /** Drop files in /public/work/ using this filename (e.g. man-from-the-dark.jpg) */
  image: string;
};

export const workFilters: { id: WorkCategory; label: string }[] = [
  { id: "all", label: "ALL WORK" },
  { id: "art", label: "ART & ILLUSTRATION" },
  { id: "graphic", label: "GRAPHIC DESIGN" },
  { id: "digital", label: "DIGITAL DESIGN" },
  { id: "animation", label: "ANIMATION" },
  { id: "branding", label: "LOGO & BRANDING" },
];

export const works: WorkItem[] = [
  {
    id: "01",
    title: "Linear Love and Joy",
    medium: "Marker on Paper, Pencil on Paper",
    size: "9”×12”",
    category: "art",
    image: "/work/linear-love-and-joy.png",
    description:
      "This piece is about a man who is going through a lot in personal life, but masks to everyone else.",
  },
  {
    id: "02",
    title: "Montana of 300 Chiraq L-mix",
    medium: "Adobe Photoshop, Adobe Illustrator",
    size: "9”×12”",
    category: "graphic",
    image: "/work/montana-of-300.png",
    description:
      "This piece is a creative piece that I wanted to show my interest in personal life. This also represents my love for music and what I am passionate about.",
  },
  {
    id: "03",
    title: "Shiners",
    medium: "Adobe Photoshop, Adobe Illustrator",
    size: "8”×11”",
    category: "graphic",
    image: "/work/shiners.png",
    description: "This piece symbolizes a complete journey into financial independence.",
  },
  {
    id: "04",
    title: "Linear Lady",
    medium: "Pencil on Paper, Marker on Paper",
    size: "9”×12”",
    category: "art",
    image: "/work/linear-lady.png",
    description:
      "A young man in tune with the essence of her environment and at peace.",
  },
  {
    id: "05",
    title: "X-Men Century Typeface",
    medium: "Adobe Illustrator",
    size: "8”×11”",
    category: "graphic",
    image: "/work/x-men-century.png",
    description:
      "A poster created all through using the Century typeface and only letters and numbers — no pictures at all.",
  },
  {
    id: "06",
    title: "Say No!",
    medium: "Adobe Photoshop, Adobe Illustrator, Adobe InDesign",
    size: "8”×11”",
    category: "graphic",
    image: "/work/say-no.png",
    description: "A poster to spread awareness on the plague of drug abuse.",
  },
  {
    id: "07",
    title: "On the Path to Gil Sans",
    medium: "Adobe Illustrator",
    size: "8”×11”",
    category: "graphic",
    image: "/work/gil-sans.png",
    description:
      "A poster created all through using the Century typeface and only letters and numbers — no pictures at all.",
  },
  {
    id: "08",
    title: "Steam Care Logo",
    medium: "Adobe InDesign, Adobe Photoshop",
    size: "6”×10”",
    category: "branding",
    image: "/work/steam-care-logo.png",
    description: "A logo I designed for a product.",
  },
  {
    id: "09",
    title: "Steam Care Advertisement",
    medium: "Adobe Photoshop, Adobe InDesign, Adobe Illustrator",
    size: "8”×11”",
    category: "branding",
    image: "/work/steam-care-ad.png",
    description: "An advertisement for a product.",
  },
  {
    id: "10",
    title: "Reli Group Application User Interface",
    medium: "Adobe InDesign, Adobe Photoshop, Adobe After Effects",
    size: "8”×11”",
    category: "digital",
    image: "/work/reli-group-ui.png",
    description: "A potential design for the user interface of a mobile phone app.",
  },
];

export const workPage = {
  eyebrow: "MY WORK",
  heading: "WORK",
  intro:
    "A collection of creative projects that represent my passion for art, design, animation, and digital media. Each piece tells a story and reflects my dedication to crafting meaningful visual experiences.",
  ctaHeading: "LET'S CREATE SOMETHING AMAZING TOGETHER.",
  ctaBody: "I'm always open to new opportunities and exciting projects.",
  ctaButton: "GET IN TOUCH",
};

export const contact = {
  email: "ljchiromb0@gmail.com",
  emailHref: "mailto:ljchiromb0@gmail.com",
  linkedin: "https://www.linkedin.com/in/lj-chirombo-758868271/",
};

export const socialLinks = [
  { label: "Behance", href: "#", icon: "behance" as const },
  { label: "LinkedIn", href: contact.linkedin, icon: "linkedin" as const },
  { label: "Email", href: contact.emailHref, icon: "email" as const },
];

export const contactPage = {
  eyebrow: "LET'S CONNECT",
  headingBefore: "LET'S CREATE SOMETHING",
  headingScript: "Amazing",
  headingAfter: "TOGETHER.",
  intro:
    "I'm always open to new opportunities and exciting projects. Whether you have a question, want to collaborate, or just want to say hello — I'd love to hear from you.",
  topicsHeading: "LET'S CONNECT ABOUT",
  topics: [
    "Creative projects and collaborations",
    "Design, animation, and digital experiences",
    "Opportunities to make an impact",
    "Questions or just saying hello!",
  ],
  quote: "Design is more than aesthetics — it's about solving real problems.",
  inspireHeading: "THINGS THAT INSPIRE ME",
  inspires: [
    { title: "Music", detail: "What moves my soul.", icon: "music" as const },
    {
      title: "Basketball",
      detail: "Discipline on and off the court.",
      icon: "basketball" as const,
    },
    { title: "Reading", detail: "Fuel for growth.", icon: "reading" as const },
    {
      title: "Travel",
      detail: "New places, new perspective.",
      icon: "travel" as const,
    },
    {
      title: "Community",
      detail: "Giving back, staying connected.",
      icon: "community" as const,
    },
  ],
  ctaHeading: "READY TO WORK TOGETHER?",
  ctaBody: "I'm excited to bring your ideas to life and create something amazing together.",
  taglineBefore: "CREATIVE MIND.",
  taglineAccent: "PROBLEM SOLVER.",
  taglineAfter: "LIFELONG LEARNER.",
};

export const resumePage = {
  eyebrow: "RESUME",
  headingWhite: "DIGITAL DESIGNER.",
  headingAccent: "PROBLEM SOLVER. LIFELONG LEARNER.",
  intro:
    "I blend creativity, technical expertise, and strategy to design meaningful experiences that inform, inspire, and leave a lasting impact.",
  education: {
    degree: "Bachelor of Science",
    field: "Digital Communication & Media Arts",
    school: "Bowie State University",
  },
  skillsIntro:
    "A broad mix of creative, technical, and strategic skills from coursework and hands-on projects.",
  skillColumns: [
    [
      "Printmaking",
      "2D Animation",
      "3D Animation",
      "Traditional Art",
      "Web Design",
      "UI/UX Design",
    ],
    [
      "Python Programming",
      "JavaScript Programming",
      "User Interface Design",
      "User Experience Design",
      "Logistics",
      "Financing",
    ],
  ],
  tools: [
    { label: "Photoshop", short: "Ps", color: "#31A8FF" },
    { label: "Illustrator", short: "Ai", color: "#FF9A00" },
    { label: "InDesign", short: "Id", color: "#FF3366" },
    { label: "After Effects", short: "Ae", color: "#9999FF" },
    { label: "Python", short: "Py", color: "#3776AB" },
    { label: "JavaScript", short: "JS", color: "#F7DF1E", dark: true },
    { label: "HTML5", short: "5", color: "#E34F26" },
    { label: "CSS3", short: "3", color: "#1572B6" },
    { label: "Figma", short: "Fg", color: "#A259FF" },
    { label: "Canva", short: "Ca", color: "#00C4CC" },
    { label: "Traditional Tools", short: "Tt", color: "#F5A623", dark: true },
  ],
  interests: [
    { title: "Music", icon: "music" as const },
    { title: "Basketball", icon: "basketball" as const },
    { title: "Reading", icon: "reading" as const },
    { title: "Travel", icon: "travel" as const },
    { title: "Community", icon: "community" as const },
  ],
  quote: "Design is more than aesthetics — it's about solving real problems.",
  experience: [
    {
      title: "Digital Design & Creative Projects",
      meta: "Self-Directed Work · 2022 – Present",
      body: "Creating visual designs, animations, and brand work while managing projects from concept to finish.",
    },
    {
      title: "Design & Logistics Support",
      meta: "Academic Projects · 2022 – Present",
      body: "Supporting planning, coordination, and problem-solving across design and production workflows.",
    },
    {
      title: "Freelance Design Projects",
      meta: "Independent · 2021 – Present",
      body: "Delivering branding, posters, and digital content for clients with clear goals and deadlines.",
    },
    {
      title: "Continuous Learning",
      meta: "Ongoing · Always",
      body: "Expanding skills in design, animation, development, and strategy through coursework and practice.",
    },
  ],
  highlights: [
    { title: "Traditional & Digital Art", detail: "10+ Pieces", icon: "art" as const },
    { title: "Animation", detail: "2D & 3D Projects", icon: "animation" as const },
    { title: "Graphic Design", detail: "Posters, Logos & Ads", icon: "design" as const },
    { title: "Development", detail: "Python & JavaScript", icon: "development" as const },
    { title: "UI/UX Design", detail: "Mobile App Concepts", icon: "ui" as const },
  ],
  achievements: [
    "Dean's List recognition for academic performance",
    "Strong performance across digital design coursework",
    "Featured design and creative projects in portfolio",
    "Leadership through collaboration and project ownership",
  ],
  ctaHeading: "LET'S CREATE SOMETHING AMAZING TOGETHER.",
  ctaBody: "I'm always open to new opportunities and exciting projects.",
  ctaButton: "GET IN TOUCH",
};

export const skillsPage = {
  eyebrow: "MY SKILLS",
  headingWhite: "CREATIVITY. STRATEGY.",
  headingAccent: "EXECUTION.",
  intro:
    "I blend creativity, technical expertise, and real-world problem solving to design meaningful experiences that inform, inspire, and leave a lasting impact.",
  bestHeading: "WHAT I DO BEST",
  bestIntro:
    "A diverse skill set that allows me to take ideas from concept to execution across multiple mediums and platforms.",
  cards: [
    {
      title: "DESIGN",
      icon: "design" as const,
      items: ["Printmaking", "Web Design", "UI/UX Design", "Branding"],
      proficiency: 92,
    },
    {
      title: "ANIMATION",
      icon: "animation" as const,
      items: ["2D Animation", "3D Animation", "Storyboarding", "Motion Design"],
      proficiency: 85,
    },
    {
      title: "DEVELOPMENT",
      icon: "development" as const,
      items: ["Python Programming", "JavaScript", "Problem Solving", "Debugging"],
      proficiency: 80,
    },
    {
      title: "STRATEGY",
      icon: "strategy" as const,
      items: ["Logistics", "Financing", "Planning", "Resource Management"],
      proficiency: 88,
    },
    {
      title: "ART",
      icon: "art" as const,
      items: ["Traditional Art", "Drawing & Painting", "Mixed Media", "Digital Art"],
      proficiency: 94,
    },
    {
      title: "LOGISTICS",
      icon: "logistics" as const,
      items: ["Planning", "Coordination", "Operations", "Process Optimization"],
      proficiency: 86,
    },
    {
      title: "FINANCING",
      icon: "financing" as const,
      items: ["Budgeting", "Analysis", "Resource Management", "Financial Planning"],
      proficiency: 82,
    },
    {
      title: "PROBLEM SOLVING",
      icon: "problem" as const,
      items: ["Critical Thinking", "Creative Solutions", "Analytical Thinking", "Decision Making"],
      proficiency: 90,
    },
  ],
  toolsHeading: "TOOLS & TECHNOLOGIES",
  tools: [
    { label: "Photoshop", short: "Ps", color: "#31A8FF" },
    { label: "Illustrator", short: "Ai", color: "#FF9A00" },
    { label: "InDesign", short: "Id", color: "#FF3366" },
    { label: "After Effects", short: "Ae", color: "#9999FF" },
    { label: "Python", short: "Py", color: "#3776AB" },
    { label: "JavaScript", short: "JS", color: "#F7DF1E", dark: true },
    { label: "HTML5", short: "5", color: "#E34F26" },
    { label: "CSS3", short: "3", color: "#1572B6" },
    { label: "Figma", short: "Fg", color: "#A259FF" },
    { label: "Canva", short: "Ca", color: "#00C4CC" },
  ],
  drivesEyebrow: "WHAT DRIVES ME",
  drivesHeading: "VALUES THAT SHAPE MY WORK",
  values: [
    {
      title: "CREATIVITY",
      body: "I approach every challenge with curiosity and an open mind.",
      icon: "creativity" as const,
    },
    {
      title: "INNOVATION",
      body: "I strive to create work that's original, effective, and forward-thinking.",
      icon: "innovation" as const,
    },
    {
      title: "PURPOSE",
      body: "Design is more than aesthetics — it's about solving real problems.",
      icon: "purposeValue" as const,
    },
    {
      title: "GROWTH",
      body: "I'm committed to learning, unlearning, and leveling up every day.",
      icon: "growthValue" as const,
    },
  ],
  ctaHeading: "ALWAYS LEARNING. ALWAYS EVOLVING.",
  ctaBody:
    "I'm a lifelong learner — constantly sharpening my craft, exploring new tools, and growing as a Digital Designer.",
  ctaButton: "VIEW MY WORK",
};
