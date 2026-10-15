import React, { useState } from 'react';
import {
  Building2,
  Factory,
  HardHat,
  GraduationCap,
  Award,
  Languages,
  Mail,
  Phone,
  MapPin,
  FileText,
  Briefcase,
  ChevronRight,
  Code2,
  BarChart3,
  CheckCircle2,
  Cpu,
  Brain,
  Download,
  Send,
  UserCheck
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('experience');
  const [copied, setCopied] = useState(false);

  const contactInfo = {
    name: 'Bahredin Ali Muzeyin',
    title: 'Operations Planning Head | Project Manager | Data Analyst',
    email: 'Bahredeen@gmail.com',
    phone: '+251 942211142 / +251 933852875',
    location: 'Hawassa, Ethiopia',
  };

  const experiences = [
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

  const education = [
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

  const certifications = [
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

  const skillCategories = [
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Header / Hero Section */}
      <header className="relative bg-slate-900 border-b border-slate-800 pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <span className="px-3 py-1 bg-teal-500/10 text-teal-400 text-xs font-semibold rounded-full border border-teal-500/20 uppercase tracking-wider">
                Executive Operations & Project Specialist
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                {contactInfo.name}
              </h1>
              <p className="text-xl text-slate-300 font-medium">
                {contactInfo.title}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-400 pt-2">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-teal-400" />
                  {contactInfo.location}
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-teal-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-teal-300">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-teal-400" />
                  {contactInfo.phone}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-teal-500/20"
              >
                <Mail className="w-4 h-4" /> Direct Contact
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-teal-400">3.95</div>
              <div className="text-xs text-slate-400 mt-1">MSc CGPA (Project Mgmt)</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-teal-400">8+ Yrs</div>
              <div className="text-xs text-slate-400 mt-1">Industry Operations</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-teal-400">SAP ERP</div>
              <div className="text-xs text-slate-400 mt-1">System Prep & Integration</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-teal-400">5</div>
              <div className="text-xs text-slate-400 mt-1">Languages Spoken</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'experience'
                ? 'border-teal-400 text-teal-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-4 h-4" /> Work Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'education'
                ? 'border-teal-400 text-teal-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" /> Education & Certifications
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'skills'
                ? 'border-teal-400 text-teal-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <UserCheck className="w-4 h-4" /> Skills & Competencies
          </button>
        </div>

        {/* Tab 1: Work Experience */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-teal-500/10 text-teal-400 rounded-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-teal-400 text-sm font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full w-fit">
                      {exp.period} | {exp.location}
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">{exp.summary}</p>
                  <ul className="space-y-2">
                    {exp.accomplishments.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                        <ChevronRight className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Education & Certifications */}
        {activeTab === 'education' && (
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-teal-400" /> Academic Qualifications
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                    <div className="p-2 bg-teal-500/10 text-teal-400 rounded-lg w-fit mb-4">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-slate-300 text-sm">{edu.institution}</p>
                    <p className="text-xs text-slate-400 mt-2">{edu.period}</p>
                    <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-semibold text-teal-400">
                      {edu.details}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-400" /> Professional Certifications
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                      <Icon className="w-6 h-6 text-teal-400 mb-3" />
                      <h4 className="font-semibold text-white text-sm mb-1">{cert.title}</h4>
                      <p className="text-xs text-slate-400">{cert.issuer}</p>
                      <span className="inline-block text-[10px] text-teal-400 mt-3 bg-teal-500/10 px-2 py-0.5 rounded">
                        {cert.date}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Skills */}
        {activeTab === 'skills' && (
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-teal-500/10 text-teal-400 rounded-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base">{cat.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {cat.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}

        {/* Contact Footer Section */}
        <section id="contact" className="mt-16 pt-12 border-t border-slate-800">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
            <p className="text-slate-400 text-sm mb-6">
              Available for Executive Operations Management, Factory Leadership, and Project Planning roles.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-slate-950 font-semibold rounded-lg hover:bg-teal-600 transition-all w-full sm:w-auto justify-center"
              >
                <Send className="w-4 h-4" /> Send Email
              </a>
              <a
                href="tel:+251942211142"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-200 font-semibold rounded-lg hover:bg-slate-700 transition-all w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4" /> Call Direct
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
