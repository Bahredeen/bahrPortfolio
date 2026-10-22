import { useState } from 'react';
import { certifications } from '@/data/portfolio';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { Award, ChevronDown, FileText } from 'lucide-react';

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState('');

  const handleSelect = (url: string) => {
    if (url) {
      window.open(encodeURI(url), '_blank');
      setSelectedCert('');
    }
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
            description="Verified qualifications in Data Science, Machine Learning, and AI Fundamentals."
            icon={<Award size={16} />}
          />
        </ScrollReveal>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => {
            const Icon = cert.icon || Award;
            return (
              <ScrollReveal key={cert.title} delay={index * 120}>
                <div className="group h-full p-5 md:p-6 rounded-2xl bg-navy-50/50 dark:bg-navy-900/50 border border-navy-200/60 dark:border-navy-800/50 hover:border-teal-300 dark:hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/10 to-teal-600/10 dark:from-teal-500/15 dark:to-teal-600/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={22} className="text-teal-600 dark:text-teal-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-500/15 text-teal-700 dark:text-teal-300 text-xs font-bold">
                          {cert.badge}
                        </span>
                      </div>
                      <h3 className="font-display text-sm md:text-base font-bold text-navy-900 dark:text-white leading-tight">
                        {cert.title}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-teal-600 dark:text-teal-400">
                        {cert.provider}
                      </p>
                      <p className="mt-2 text-sm text-navy-600 dark:text-navy-300 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Dropdown Selector at Bottom */}
        <ScrollReveal delay={200}>
          <div className="max-w-md mx-auto p-6 rounded-2xl bg-navy-50/80 dark:bg-navy-900/80 border border-navy-200 dark:border-navy-800 text-center shadow-md">
            <div className="flex items-center justify-center gap-2 mb-3 text-teal-600 dark:text-teal-400 font-bold text-sm">
              <FileText size={18} />
              <span>Select & View Official Certificates</span>
            </div>

            <div className="relative">
              <select
                value={selectedCert}
                onChange={(e) => handleSelect(e.target.value)}
                className="w-full appearance-none px-4 py-3 pr-10 rounded-xl bg-white dark:bg-navy-950 border border-navy-200 dark:border-navy-700 text-navy-900 dark:text-white text-sm font-medium focus:border-teal-500 outline-none cursor-pointer shadow-sm transition-all"
              >
                <option value="">-- Choose a Certificate to View --</option>
                {certifications.map((cert) => (
                  <option key={cert.title} value={cert.documentUrl}>
                    {cert.title} ({cert.provider})
                  </option>
                ))}
              </select>
              <ChevronDown size={18} className="absolute right-3.5 top-3.5 text-navy-400 pointer-events-none" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}