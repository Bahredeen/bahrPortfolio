import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  TrendingUp,
  BarChart3,
  Globe2,
  GraduationCap,
  Award,
  Building2,
  Factory,
  HardHat,
  ChevronDown,
  Send,
  Sparkles,
  Target,
  Cpu,
  Languages as LanguagesIcon,
  Send as TelegramIcon,
} from 'lucide-react';

// Resolves public assets correctly whether running locally or on GitHub Pages (/bahrPortfolio/)
export const getPublicAsset = (fileName: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanFile = fileName.startsWith('/') ? fileName.slice(1) : fileName;
  return `${cleanBase}${cleanFile}`;
};

export const personalInfo = {
  name: 'Bahredin Ali Muzeyin',
  subtitle: 'Operations Planning and Monitoring Head | Project Manager | Data Analyst',
  tagline:
    'Bridging operational excellence with data-driven strategy to deliver measurable results.',
  avatar: getPublicAsset('profile.png'),
  email: 'Bahredeen@gmail.com / astugc2008@gmail.com',
  phone: '+251 942 211 142 / +251 708 621 142 / +251 933 852 875',
  location: 'Hawassa City, Ethiopia',
  socials: [
    {
      label: 'GitHub',
      icon: Github,
      url: 'https://github.com/Bahredeen',
    },
    {
      label: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/bahredin-ali-abusinwar',
    },
    {
      label: 'Telegram',
      icon: TelegramIcon,
      url: 'https://t.me/AbuBasmaBahredeen',
    },
  ],
};

export const metrics = [
  {
    label: 'MSc CGPA',
    value: 3.95,
    suffix: '',
    decimals: 2,
    icon: GraduationCap,
  },
  {
    label: 'Years Experience',
    value: 9,
    suffix: '+',
    decimals: 0,
    icon: TrendingUp,
  },
  {
    label: 'Languages Spoken',
    value: 5,
    suffix: '',
    decimals: 0,
    icon: Globe2,
  },
];

export const experiences = [
  {
    company: 'Tabor Ceramics Product S.C.',
    role: 'Head of Operations Planning & Monitoring Division',
    period: 'Nov 2020 — Present',
    location: 'Hawassa, Ethiopia',
    icon: Building2,
    documentUrl: getPublicAsset('tabor experience.png'),
    summary:
      'Demonstrated exceptional leadership and technical proficiency across multiple promotions from Production Foreman to Division Head at Tabor Ceramics Product S.C.',
    accomplishments: [
      'Promoted to Head of Operation Planning and Monitoring Division (Dec 2024 — Present) managing full operational strategy, monitoring, and production efficiency.',
      'Served as Production Supervisor in the Fuse and Insulator Production Department while delegated as Head of Operation Planning and Control Division (July 2023 — Dec 2024).',
      'Worked as Production Foreman and Unit Supervisor in the Fuse and Composite Insulator Production Department (Nov 2020 — July 2023).',
      'Improved production output, reduced downtime, and streamlined monitoring frameworks across core manufacturing operations.',
    ],
  },
  {
    company: 'Nutricare Manufacturing PLC',
    role: 'Technical Supervisor',
    period: 'Nov 2018 — May 2020',
    location: 'Ethiopia',
    icon: Factory,
    documentUrl: getPublicAsset('nutricare experience.jpg'),
    summary:
      'Supervised technical operations, production sequencing, and machinery maintenance for a food and beverage manufacturing plant.',
    accomplishments: [
      'lead the technic team in the machine installation phase, whiting SAP, configuring Machineries and the work flow o the ROSA PEANUT Manufacturing Plant under the Nutricare Manufacturing.',
      'Supervised the complete operational working sequence and daily performance across production lines.',
      'Managed maintenance schedules and technical care for complex plant machinery, minimizing operational disruption.',
      'Ensured adherence to strict quality, safety, and manufacturing compliance standards.',
    ],
  },
  {
    company: 'Kabew Construction PLC',
    role: 'Quality Control Expert & Delegated Supportive Staff Head',
    period: 'Oct 2016 — Dec 2018',
    location: 'Adola Woyu, Ethiopia',
    icon: HardHat,
    documentUrl: getPublicAsset('kabow experience.jpg'),
    summary:
      'Directed quality control operations and delegated management of the supportive staff section at the Adola Wayu Concrete Pole Factory.',
    accomplishments: [
      'Managed concrete pole production quality testing, material inspections, and standard compliance.',
      'Served as Delegated Head of the Supportive Staff Division (Aug 2017 — Dec 2018), overseeing operational support and personnel coordination, including HR management and Finance management.',
      'Maintained rigorous quality control protocols across manufacturing and delivery workflows.',
    ],
  },
];

export const skillCategories = [
  {
    title: 'Operations & Project Management',
    icon: Target,
    accent: 'teal',
    skills: [
      { name: 'Production Planning & Control', level: 95 },
      { name: 'Project Planning & Management', level: 95 },
      { name: 'Risk Assessment & Leadership', level: 90 },
      { name: 'Quality Control & Maintenance', level: 92 },
      { name: 'Process Optimization', level: 88 },
    ],
  },
  {
    title: 'Data Analysis & AI Tools',
    icon: BarChart3,
    accent: 'navy',
    skills: [
      { name: 'SPSS', level: 90 },
      { name: 'Stata', level: 85 },
      { name: 'Data Analysis & Science', level: 85 },
      { name: 'Microsoft Office (Excel, Word, Powerpoint)', level: 95 },
      { name: 'AI Fundamentals', level: 80 },
    ],
  },
  {
    title: 'Languages',
    icon: LanguagesIcon,
    accent: 'teal',
    skills: [
      { name: 'English', level: 90, note: 'Excellent' },
      { name: 'Amharic', level: 99, note: 'Native / Excellent' },
      { name: 'Afan Oromo', level: 99, note: 'Native / Excellent' },
      { name: 'Arabic', level: 85, note: 'Excellent' },
      { name: 'Siltigna', level: 95, note: 'Excellent' },
    ],
  },
];

export const education = [
  {
    institution: 'Yom Postgraduate College',
    degree: 'MSc in Project Planning & Management',
    period: 'Completed July 2024',
    grade: 'CGPA 3.95 (Thesis: Very Good)',
    badge: 'MSc',
    icon: GraduationCap,
    documentUrl: getPublicAsset('msc degree.jpg'),
    description:
      'Advanced degree in project planning, risk management, and strategic decision-making. Completed coursework with 3.95 CGPA and thesis with distinction.',
  },
  {
    institution: 'Adama Science & Technology University (ASTU)',
    degree: 'BSc in Materials Science & Engineering',
    period: 'Completed July 2016',
    grade: 'Major GPA 2.70 / CGPA 2.63',
    badge: 'BSc',
    icon: GraduationCap,
    documentUrl: getPublicAsset('bsc degree.jpg'),
    description:
      'Engineering education covering materials characterization, manufacturing processes, testing, and quality analysis.',
  },
];

export const certifications = [
  {
    title: 'Data Analysis Fundamentals',
    provider: 'Udacity',
    icon: Award,
    description:
      'Nanodegree program covering essential data analysis techniques, statistics, and data processing workflows (Issued Aug 2024).',
    badge: 'Udacity',
    documentUrl: getPublicAsset('data analysis.png'),
  },
  {
    title: 'Data Science & ML A to Z',
    provider: "O'Reilly / Packt Publishing",
    icon: Cpu,
    description:
      'Comprehensive 93.5-hour certification covering data science, machine learning workflows, and analytical modeling (Issued Aug 2025).',
    badge: "O'Reilly",
    documentUrl: getPublicAsset('data science.png'),
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    provider: 'Udacity',
    icon: Cpu,
    description:
      'Foundational Nanodegree covering core artificial intelligence algorithms, workflows, and business applications (Issued Apr 2025).',
    badge: 'Udacity',
    documentUrl: getPublicAsset('AI.png'),
  },
];

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#metrics' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
];

export const contactIcons = { Mail, Phone, MapPin };
export const actionIcons = { ChevronDown, Send, Sparkles };
