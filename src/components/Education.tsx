import { useState } from 'react';
import { education } from '@/data/portfolio';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { DocumentModal } from './DocumentModal';
import { GraduationCap, CheckCircle2, Eye, Download, Award } from 'lucide-react';

export function Education() {
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
      id="education"
      className="relative py-20 md:py-28 bg-navy-50 dark:bg-navy-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Academic Background"
            title="Education & Academic Credentials"
            description="Verified university degrees in engineering and advanced project planning & management."
            icon={<GraduationCap size={16} />}
          />
        </ScrollReveal>

        {/* Education Credential Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {education.map((edu, index) => {
            const Icon = edu.icon || GraduationCap;

            return (
              <ScrollReveal key={edu.institution} delay={index * 120}>
                <div className="group h-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-800/80 border border-navy-200/80 dark:border-navy-700/70 hover:border-teal-400/80 dark:hover:border-teal-500/80 shadow-md hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
                        <Icon size={26} className="text-white" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-500/15 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-500/20 text-xs font-bold tracking-wide">
                        {edu.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-2 text-xs font-medium text-navy-500 dark:text-navy-400">
                      <span>{edu.period}</span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-navy-900 dark:text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="mt-1.5 text-sm font-semibold text-teal-600 dark:text-teal-400">
                      {edu.institution}
                    </p>

                    <p className="mt-4 text-sm text-navy-600 dark:text-navy-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-navy-100 dark:border-navy-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 dark:text-navy-200">
                      <CheckCircle2 size={16} className="text-teal-500 shrink-0" />
                      <span>{edu.grade}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openPreview(edu.degree, edu.institution, edu.documentUrl)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-50 dark:bg-teal-500/15 text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-500/25 text-xs font-bold transition-all hover:scale-105 shadow-sm"
                      >
                        <Eye size={14} />
                        <span>Preview Degree</span>
                      </button>

                      <a
                        href={edu.documentUrl}
                        download
                        className="p-2 rounded-xl text-navy-400 hover:text-navy-700 dark:hover:text-white hover:bg-navy-100 dark:hover:bg-navy-700/50 transition-colors"
                        title="Download file"
                      >
                        <Download size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
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