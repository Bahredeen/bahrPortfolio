import { useState } from 'react';
import { education, certifications } from '@/data/portfolio';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export function Education() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="education"
      className="relative py-20 md:py-28 bg-navy-50 dark:bg-navy-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Academic & Professional Development"
            title="Education & Certifications"
            description="A foundation built on rigorous academic training and continuous professional development."
            icon={<GraduationCap size={16} />}
          />
        </ScrollReveal>

        {/* Education cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {education.map((edu, index) => {
            const Icon = edu.icon;
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

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <ScrollReveal key={cert.title} delay={index * 120}>
                <div className="group h-full p-5 md:p-6 rounded-2xl bg-white dark:bg-navy-800/40 border border-navy-200/60 dark:border-navy-700/50 hover:border-teal-300 dark:hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/10 to-teal-600/10 dark:from-teal-500/15 dark:to-teal-600/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={22} className="text-teal-600 dark:text-teal-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-navy-100 dark:bg-navy-700/50 text-navy-700 dark:text-navy-200 text-xs font-bold">
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

        {/* Additional badges */}
        <ScrollReveal delay={200}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {['Yom Postgraduate College', 'ASTU', 'Udacity', "O'Reilly"].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white dark:bg-navy-800/60 border border-navy-200 dark:border-navy-700 text-sm font-medium text-navy-700 dark:text-navy-200 hover:border-teal-300 dark:hover:border-teal-500/50 transition-colors"
              >
                <Award size={14} className="text-teal-500" />
                {badge}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
