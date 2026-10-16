import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Briefcase,
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
  ShieldCheck,
  Cpu,
  Languages as LanguagesIcon,
} from 'lucide-react';

export const personalInfo = {
  name: 'Bahredin Ali Muzeyin',
  subtitle: 'Operations Planning Head | Project Manager | Data Analyst',
  tagline:
    'Bridging operational excellence with data-driven strategy to deliver measurable results.',
  email: 'bahredin.muzeyin@gmail.com',
  phone: '+251 911 234 567',
  location: 'Addis Ababa, Ethiopia',
  socials: [
    { label: 'LinkedIn', icon: Linkedin, url: '#' },
    { label: 'GitHub', icon: Github, url: '#' },
    { label: 'Website', icon: Globe, url: '#' },
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
    label: 'Years Leadership',
    value: 5,
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
    company: 'Tabor Ceramics S.C.',
    role: 'Head of Operation Planning & Monitoring Division',
    period: '2022 — Present',
    location: 'Hawassa, Ethiopia',
    icon: Building2,
    summary:
      'Leading the operation planning and monitoring division for one of the largest ceramics manufacturers in Ethiopia.',
    accomplishments: [
      'Spearheaded the redesign of the production planning framework, reducing delivery lead times by 23% across five product lines.',
      'Implemented a real-time monitoring dashboard tracking 40+ KPIs, enabling proactive decision-making and reducing downtime by 18%.',
      'Led cross-functional teams of 60+ members across production, quality, and logistics to align operational output with strategic targets.',
      'Developed risk mitigation protocols that cut unplanned production stoppages by 31% in the first year of implementation.',
    ],
  },
  {
    company: 'Nutricare Manufacturing PLC',
    role: 'Technical Supervisor',
    period: '2020 — 2022',
    location: 'Addis Ababa, Ethiopia',
    icon: Factory,
    summary:
      'Oversaw technical operations and quality assurance for a food and beverage manufacturing plant.',
    accomplishments: [
      'Managed daily technical operations across three production lines with a combined output of 50,000+ units per day.',
      'Introduced statistical process control (SPC) methods that improved product consistency and reduced waste by 15%.',
      'Coordinated with R&D to launch two new product variants, taking them from pilot to full-scale production within four months.',
      'Trained and mentored 25+ production staff on quality standards, safety protocols, and equipment operation.',
    ],
  },
  {
    company: 'Kabew Construction PLC',
    role: 'Quality Control Expert & Support Head',
    period: '2019 — 2020',
    location: 'Addis Ababa, Ethiopia',
    icon: HardHat,
    summary:
      'Directed quality control processes and support operations for large-scale construction projects.',
    accomplishments: [
      'Established a comprehensive quality control system covering materials testing, in-process inspections, and final acceptance audits.',
      'Inspected and certified materials for projects valued at over 120 million ETB, ensuring compliance with international standards.',
      'Led a support team of 15 personnel responsible for on-site problem resolution and contractor coordination.',
      'Authored quality assurance documentation adopted as the company standard across all future project bids.',
    ],
  },
];

export const skillCategories = [
  {
    title: 'Operations & Project Management',
    icon: Target,
    accent: 'teal',
    skills: [
      { name: 'Production Planning', level: 95 },
      { name: 'Risk Assessment', level: 88 },
      { name: 'Quality Control', level: 92 },
      { name: 'Process Optimization', level: 85 },
      { name: 'Supply Chain Management', level: 82 },
    ],
  },
  {
    title: 'Data Analysis & AI Tools',
    icon: BarChart3,
    accent: 'navy',
    skills: [
      { name: 'SPSS', level: 90 },
      { name: 'Stata', level: 80 },
      { name: 'Data Science', level: 70 },
      { name: 'AI Fundamentals', level: 75 },
      { name: 'Statistical Modeling', level: 85 },
    ],
  },
  {
    title: 'Languages',
    icon: LanguagesIcon,
    accent: 'teal',
    skills: [
      { name: 'English', level: 95, note: 'Professional' },
      { name: 'Amharic', level: 100, note: 'Native' },
      { name: 'Oromo', level: 95, note: 'Native' },
      { name: 'Arabic', level: 75, note: 'Professional' },
      { name: 'Siltigna', level: 90, note: 'Fluent' },
    ],
  },
];

export const education = [
  {
    institution: 'Yom Postgraduate College',
    degree: 'MSc in Project Planning & Management',
    period: '2021 — 2023',
    grade: 'CGPA 3.95',
    badge: 'MSc',
    icon: GraduationCap,
    description:
      'Advanced study in project planning, risk management, monitoring & evaluation, and strategic decision-making. Graduated with distinction.',
  },
  {
    institution: 'Adama Science & Technology University (ASTU)',
    degree: 'BSc in Materials Science & Engineering',
    period: '2015 — 2019',
    grade: 'Graduated',
    badge: 'BSc',
    icon: GraduationCap,
    description:
      'Comprehensive engineering education covering materials characterization, manufacturing processes, quality analysis, and industrial applications.',
  },
];

export const certifications = [
  {
    title: 'Data Scientist Nanodegree',
    provider: 'Udacity',
    icon: Award,
    description:
      'Hands-on program covering Python, statistics, machine learning, and data visualization for real-world analysis.',
    badge: 'Udacity',
  },
  {
    title: 'AI Fundamentals',
    provider: "O'Reilly",
    icon: Cpu,
    description:
      'Foundational certification in artificial intelligence concepts, ML workflows, and practical AI applications in business.',
    badge: "O'Reilly",
  },
];

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#metrics' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
];

export const contactIcons = { Mail, Phone, MapPin };
export const actionIcons = { ChevronDown, Send, Sparkles, ShieldCheck, Briefcase };
