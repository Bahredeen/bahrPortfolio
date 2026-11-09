import { useState } from 'react';
import { certifications } from '@/data/portfolio';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { DocumentModal } from './DocumentModal';
import { Award, Eye, Download, CheckCircle, ShieldCheck } from 'lucide-react';

export function Certifications() {
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
      id="certifications"
      className="relative py-20 md:py-28 bg-white dark:bg-navy-950 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Continuous Learning"
            title="Certifications & Training"
            description="Verified credentials in Data Science, Machine Learning, and Artificial Intelligence Fundamentals."
            icon={<Award size={16} />}
          />
        </ScrollReveal>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon || Award;
            return (
              <ScrollReveal key={cert.title} delay={index * 120}>
                <div className="group h-full flex flex-col justify-between p-6 rounded-3xl bg-navy-50/50 dark:bg-navy-900/60 border border-navy-200/70 dark:border-navy-800/70 hover:border-teal-300 dark:hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500/10 to-teal-600/10 dark:from-teal-500/20 dark:to-teal-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={24} className="text-teal-600 dark:text-teal-400" />
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-100/70 dark:bg-teal-500/15 text-teal-700 dark:text-teal-300 text-xs font-bold">
                        <ShieldCheck size={12} />
                        {cert.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-navy-900 dark:text-white leading-snug">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-teal-600 dark:text-teal-400">
                      {cert.provider}
                    </p>
                    <p className="mt-3 text-sm text-navy-600 dark:text-navy-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-navy-200/50 dark:border-navy-800 flex items-center justify-between">
                    <button
                      onClick={() => openPreview(cert.title, cert.provider, cert.documentUrl)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 group-hover:translate-x-0.5 transition-all"
                    >
                      <Eye size={14} />
                      <span>Inspect Credential</span>
                    </button>

                    <a
                      href={cert.documentUrl}
                      download
                      className="p-1.5 rounded-lg text-navy-400 hover:text-navy-700 dark:hover:text-white hover:bg-navy-200/50 dark:hover:bg-navy-800 transition-colors"
                      title="Download Certificate"
                    >
                      <Download size={15} />
                    </a>
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