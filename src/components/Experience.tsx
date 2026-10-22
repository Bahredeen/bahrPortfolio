import { useState } from 'react';
import { ChevronDown, MapPin, Calendar, FileText } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [selectedExp, setSelectedExp] = useState('');

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleSelect = (url: string) => {
    if (url) {
      window.open(encodeURI(url), '_blank');
      setSelectedExp('');
    }
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
            description="A track record of driving operational excellence across manufacturing and construction industries."
            icon={<Briefcase size={16} />}
          />
        </ScrollReveal>

        <div className="relative mb-12">
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

                    <button
                      onClick={() => toggle(index)}
                      className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 ${
                        isExpanded
                          ? 'bg-white dark:bg-navy-800/80 border-teal-300 dark:border-teal-500/50 shadow-xl shadow-teal-500/10'
                          : 'bg-white/60 dark:bg-navy-800/40 border-navy-200/60 dark:border-navy-700/50 hover:border-teal-300 dark:hover:border-teal-500/40 hover:shadow-lg'
                      }`}
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

                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isExpanded ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="pt-4 border-t border-navy-100 dark:border-navy-700/50">
                          <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-3">
                            Key Accomplishments
                          </p>
                          <ul className="space-y-3">
                            {exp.accomplishments.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-sm text-navy-700 dark:text-navy-200 leading-relaxed animate-fade-in"
                                style={{ animationDelay: `${i * 80}ms` }}
                              >
                                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </button>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Dropdown Selector at Bottom */}
        <ScrollReveal delay={200}>
          <div className="max-w-md mx-auto p-6 rounded-2xl bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-800 text-center shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-3 text-teal-600 dark:text-teal-400 font-bold text-sm">
              <FileText size={18} />
              <span>Select & View Experience Letters</span>
            </div>

            <div className="relative">
              <select
                value={selectedExp}
                onChange={(e) => handleSelect(e.target.value)}
                className="w-full appearance-none px-4 py-3 pr-10 rounded-xl bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-700 text-navy-900 dark:text-white text-sm font-medium focus:border-teal-500 outline-none cursor-pointer shadow-sm transition-all"
              >
                <option value="">-- Choose Experience Letter to View --</option>
                {experiences.map((exp) => (
                  <option key={exp.company} value={exp.documentUrl}>
                    {exp.company} ({exp.role})
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