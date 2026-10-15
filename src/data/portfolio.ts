import {
  Building2,
  Factory,
  HardHat,
  GraduationCap,
  Award,
  Languages,
  Briefcase,
  BarChart3,
  Brain,
  Cpu,
  Code2,
  User,
  FolderGit2,
  Mail,
  CheckCircle2,
  Database,
  Layers,
  Sparkles
} from 'lucide-react';

export const personalInfo = {
  name: 'Bahredin Ali Muzeyin',
  title: 'Operations Planning Head | Project Manager | Data Analyst',
  email: 'Bahredeen@gmail.com',
  phone: '+251 942211142 / +251 933852875',
  location: 'Hawassa, Ethiopia',
  about: 'MSc Project Planning & Management graduate with extensive experience in factory operational planning, technical supervision, quality control, SAP ERP system preparation, and peanut manufacturing plant startup.',
};

export const contactInfo = personalInfo;

export const navLinks = [
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Skills', href: '#skills', icon: User },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export const metrics = [
  {
    label: 'MSc CGPA',
    value: '3.95',
    description: 'Project Planning & Mgmt',
    icon: GraduationCap,
  },
  {
    label: 'Industry Experience',
    value: '8+',
    suffix: ' Yrs',
    description: 'Operations & Quality Leadership',
    icon: Briefcase,
  },
  {
    label: 'Enterprise Systems',
    value: 'SAP ERP',
    description: 'Integration & Process Mapping',
    icon: Database,
  },
  {
    label: 'Languages',
    value: '5',
    description: 'English, Amharic, Oromo, Arabic, Siltigna',
    icon: Languages,
  },
];

export const experiences = [
  {
    company: 'Tabor Ceramics Products S.C.',
    role: 'Head of Operation Planning & Monitoring Division',
    period: 'Nov 2020 — Present',
    location: 'Hawassa, Ethiopia',
    icon: Building2,
    summary:
      'Promoted across multiple leadership tiers from Production Foreman and Supervisor to Head of Operation Planning & Monitoring Division.',
    accomplishments: [
      'Direct overall production planning, monitoring, and operational schedules across ceramic insulation manufacturing units.',
      'Actively engaged in SAP ERP system preparation, implementation workflows, and process mapping to optimize enterprise resources.',
      'Promoted through progressive leadership tiers: Production Foreman & Unit Supervisor (2020–2023), Production Supervisor & Delegated Division Head (2023–2024), and Division Head (2024–Present).',
      'Optimize production flow, materials allocation, and technical supervisor workflows to drive operational efficiency and high output standards.',
      'Entitled to executive housing benefits in recognition of exceptional operational leadership.',
    ],
  },
  {
    company: 'Nutricare Manufacturing PLC',
    role: 'Technical Supervisor & Plant Startup Contributor',
    period: 'Nov 2018 — May 2020',
    location: 'Ethiopia',
    icon: Factory,
    summary:
      'Supervised technical operations and actively contributed to the setup, installation, and initial startup of the peanut manufacturing factory.',
    accomplishments: [
      'Key technical team member during the startup, equipment commissioning, and trial runs of the peanut processing and food manufacturing factory.',
      'Supervised overall manufacturing work sequences, technical workflow execution, and preventive machinery maintenance schedules.',
      'Maintained strict food safety, quality assurance, and operational safety protocols across plant production lines.',
      'Enforced technical quality checks and equipment reliability standards to maximize uptime.',
    ],
  },
  {
    company: 'Kabew Construction PLC',
    role: 'Quality Control Expert & Delegated Support Division Head',
    period: 'Nov 2016 — Nov 2018',
    location: 'Adola Woyu, Ethiopia',
    icon: HardHat,
    summary:
      'Managed quality control testing and served as Delegated Division Head for support services at Adola Woyu Concrete Pole Factory.',
    accomplishments: [
      'Led quality control operations, materials testing, and standard compliance for concrete pole manufacturing processes.',
      'Served concurrently as Delegated Head of the Supportive Staff Division (Aug 2017 – Nov 2018), overseeing administrative and operational support.',
      'Implemented rigorous quality assurance protocols for raw materials evaluation and final product acceptance.',
    ],
  },
];

export const projects = [
  {
    title: 'SAP ERP System Preparation & Implementation',
    organization: 'Tabor Ceramics Products S.C.',
    category: 'Enterprise Resource Planning',
    description:
      'Engaged in process mapping, master data structuring, and workflow alignment for company-wide SAP ERP integration.',
    technologies: ['SAP ERP Preparation', 'Process Mapping', 'Operations Monitoring', 'Workflow Optimization'],
    icon: Database,
  },
  {
    title: 'Peanut Food Manufacturing Plant Commissioning',
    organization: 'Nutricare Manufacturing PLC',
    category: 'Factory Startup & Operations',
    description:
      'Participated in machinery installation, trial production runs, and establishing standard operating procedures for peanut processing lines.',
    technologies: ['Factory Commissioning', 'Plant Setup', 'Machinery Calibration', 'Quality Assurance'],
    icon: Factory,
  },
];

export const education = [
  {
    degree: 'MSc in Project Planning and Management',
    institution: 'Yom Postgraduate College',
    period: 'Graduated July 2024',
    details: 'CGPA: 3.95 | Thesis Result: Very Good',
    icon: GraduationCap,
  },
  {
    degree: 'BSc in Materials Science & Engineering',
    institution: 'Adama Science and Technology University (ASTU)',
    period: 'Graduated July 2016',
    details: 'CGPA: 2.63 | Major GPA: 2.70',
    icon: GraduationCap,
  },
];

export const certifications = [
  {
    title: 'Data Science & Machine Learning A to Z',
    issuer: "O'Reilly / Packt Publishing",
    date: 'Aug 2025',
    icon: Brain,
  },
  {
    title: 'Artificial Intelligence Fundamentals Nanodegree',
    issuer: 'Udacity',
    date: 'Apr 2025',
    icon: Cpu,
  },
  {
    title: 'Data Analysis Fundamentals Nanodegree',
    issuer: 'Udacity',
    date: 'Aug 2024',
    icon: BarChart3,
  },
  {
    title: 'Programming Fundamentals',
    issuer: 'Udacity',
    date: 'Completed',
    icon: Code2,
  },
];

export const skills = [
  {
    name: 'Operation Planning & Monitoring',
    category: 'Operations',
    level: 95,
  },
  {
    name: 'SAP ERP System Preparation',
    category: 'Operations',
    level: 90,
  },
  {
    name: 'Factory Startup & Commissioning',
    category: 'Operations',
    level: 88,
  },
  {
    name: 'SPSS & Stata Data Analysis',
    category: 'Analytics',
    level: 92,
  },
  {
    name: 'Quality Control & Risk Assessment',
    category: 'Quality',
    level: 94,
  },
  {
    name: 'Project Management',
    category: 'Management',
    level: 96,
  },
];

export const skillCategories = [
  {
    category: 'Operations & Enterprise Management',
    skills: [
      'Operation Planning & Monitoring',
      'SAP ERP System Preparation',
      'Factory Startup & Commissioning',
      'Production Supervision',
      'Quality Control & Assurance',
      'Process Optimization',
    ],
    icon: Briefcase,
  },
  {
    category: 'Data Analysis & Software Tools',
    skills: [
      'SPSS & Stata',
      'Data Analysis & Modeling',
      'AI & Machine Learning Concepts',
      'MS Project & Office Suite',
      'Risk Assessment Protocols',
    ],
    icon: BarChart3,
  },
  {
    category: 'Languages Spoken',
    skills: [
      'English (Excellent)',
      'Amharic (Native/Fluent)',
      'Afan Oromo (Fluent)',
      'Arabic (Proficient)',
      'Siltigna (Fluent)',
    ],
    icon: Languages,
  },
];
