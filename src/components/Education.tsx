import { useState } from 'react';
import { education } from '@/data/portfolio';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { GraduationCap, CheckCircle2, ChevronDown, FileText } from 'lucide-react';

export function Education() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedDegree, setSelectedDegree] = useState('');

  const handleSelect = (url: string) => {
    if (url) {
      window.open(encodeURI(url), '_blank');
      setSelectedDegree('');
    }
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
            title="Education & Academic Achievements"
            description="A foundation built on engineering and advanced project management degrees."
            icon={<GraduationCap size={16} />}
          />
        </ScrollReveal>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {education.map((edu, index) => {
            const Icon = edu.icon || GraduationCap;
            const isActive = activeIndex === index;

            return (
              <ScrollReveal key={edu.institution} delay={index * 120}>
                <button
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className={`w-full text-left p-6 md:p-7 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-white dark:bg-navy-800/80 border-teal-300 dark:border-teal-500/50 shadow-xl shadow-teal-500/10'
                      : 'bg-white/60 dark:bg-navy-800/40 border-navy-200/60 dark:border-navy-700/50 hover:border-teal-300 dark:hover:border-teal-500/40 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-500/15 text-teal-700 dark:text-teal-300 text-xs font-bold">
                          {edu.badge}
                        </span>
                        <span className="text-xs text-navy-500 dark:text-navy-400">
                          {edu.period}
                        </span>
                      </div>
                      <h3 className="font-display text-base md:text-lg font-bold text-navy-900 dark:text-white leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-teal-600 dark:text-teal-400">
                        {edu.institution}
                      </p>
                      {isActive && (
                        <p className="mt-3 text-sm text-navy-600 dark:text-navy-300 leading-relaxed animate-fade-in">
                          {edu.description}
                        </p>
                      )}
                      <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 dark:text-navy-200">
                        <CheckCircle2 size={14} className="text-teal-500" />
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Dropdown Selector at Bottom */}
        <ScrollReveal delay={200}>
          <div className="max-w-md mx-auto p-6 rounded-2xl bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-800 text-center shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-3 text-teal-600 dark:text-teal-400 font-bold text-sm">
              <FileText size={18} />
              <span>Select & View Official Degrees</span>
            </div>

            <div className="relative">
              <select
                value={selectedDegree}
                onChange={(e) => handleSelect(e.target.value)}
                className="w-full appearance-none px-4 py-3 pr-10 rounded-xl bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-700 text-navy-900 dark:text-white text-sm font-medium focus:border-teal-500 outline-none cursor-pointer shadow-sm transition-all"
              >
                <option value="">-- Choose Degree to View --</option>
                {education.map((item) => (
                  <option key={item.degree} value={item.documentUrl}>
                    {item.badge}: {item.degree} ({item.institution})
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