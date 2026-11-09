import { useState } from 'react';
import { ChevronDown, MapPin, Calendar, FileText, Briefcase, Eye, Download } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { DocumentModal } from './DocumentModal';

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    subtitle: string;
    url: string;
  }>({
    isOpen: false,
    title: '',
    subtitle: '',
    url: '',
  });

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const openPreview = (title: string, subtitle: string, url: string) => {
    setModalState({
      isOpen: true,
      title,
      subtitle,
      url,
    });
  };

  const closePreview = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <section
      id="experience"
      className="relative py-20 md:py-28 bg-navy-50 dark:bg-navy-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Career Journey"
            title="Professional Experience"
            description="Proven track record in operations planning, industrial supervision, and quality assurance."
            icon={<Briefcase size={16} />}
          />
        </ScrollReveal>

        <div className="relative mb-6">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 via-teal-400/50 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon || Briefcase;
              const isExpanded = expandedIndex === index;

              return (
                <ScrollReveal key={exp.company} delay={index * 100}>
                  <div className="relative pl-16 md:pl-20">
                    <div
                      className={`absolute left-0 top-6 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isExpanded
                          ? 'bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/30 scale-110'
                          : 'bg-white dark:bg-navy-800 border-2 border-navy-200 dark:border-navy-700'
                      }`}
                    >
                      <Icon
                        size={22}
                        className={isExpanded ? 'text-white' : 'text-teal-600 dark:text-teal-400'}
                      />
                    </div>

                    <div
                      className={`w-full rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isExpanded
                          ? 'bg-white dark:bg-navy-800/80 border-teal-300 dark:border-teal-500/50 shadow-xl shadow-teal-500/10'
                          : 'bg-white/60 dark:bg-navy-800/40 border-navy-200/60 dark:border-navy-700/50 hover:border-teal-300 dark:hover:border-teal-500/40 hover:shadow-lg'
                      }`}
                    >
                      <button
                        onClick={() => toggle(index)}
                        className="w-full text-left p-5 md:p-6"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-display text-lg md:text-xl font-bold text-navy-900 dark:text-white">
                              {exp.role}
                            </h3>
                            <p className="mt-1 text-sm font-semibold text-teal-600 dark:text-teal-400">
                              {exp.company}
                            </p>
                            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-navy-500 dark:text-navy-400">
                              <span className="inline-flex items-center gap-1">
                                <Calendar size={12} /> {exp.period}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <MapPin size={12} /> {exp.location}
                              </span>
                            </div>
                            <p className="mt-3 text-sm text-navy-600 dark:text-navy-300 leading-relaxed">
                              {exp.summary}
                            </p>
                          </div>
                          <ChevronDown
                            size={20}
                            className={`shrink-0 mt-1 text-teal-500 transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-5 pb-6 md:px-6 pt-2 border-t border-navy-100 dark:border-navy-700/50 animate-fade-in">
                          <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-3">
                            Key Accomplishments
                          </p>
                          <ul className="space-y-2.5 mb-6">
                            {exp.accomplishments.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-sm text-navy-700 dark:text-navy-200 leading-relaxed"
                              >
                                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Experience Letter Trigger */}
                          <div className="pt-4 border-t border-navy-100 dark:border-navy-700/50 flex items-center justify-between">
                            <span className="text-xs text-navy-500 dark:text-navy-400">
                              Verification of Employment
                            </span>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => openPreview(`Letter of Experience`, exp.company, exp.documentUrl)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-500/15 text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-500/25 text-xs font-semibold transition-colors"
                              >
                                <Eye size={13} />
                                <span>View Experience Letter</span>
                              </button>
                              <a
                                href={exp.documentUrl}
                                download
                                className="p-1.5 rounded-lg text-navy-400 hover:text-navy-700 dark:hover:text-white hover:bg-navy-100 dark:hover:bg-navy-700 transition-colors"
                                title="Download letter"
                              >
                                <Download size={14} />
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

      <DocumentModal
        isOpen={modalState.isOpen}
        onClose={closePreview}
        title={modalState.title}
        subtitle={modalState.subtitle}
        documentUrl={modalState.url}
      />
    </section>
  );
}