import { useState } from 'react';
import { skillCategories } from '@/data/portfolio';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { Cpu } from 'lucide-react';

function SkillBar({ name, level, note, delay }: { name: string; level: number; note?: string; delay: number }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-navy-700 dark:text-navy-200">
          {name}
          {note && (
            <span className="ml-2 text-xs text-navy-400 dark:text-navy-500 font-normal">
              {note}
            </span>
          )}
        </span>
        <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 tabular-nums">
          {level}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-navy-100 dark:bg-navy-700/40 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal-400 to-teal-600 transition-all duration-1000 ease-out group-hover:from-teal-500 group-hover:to-teal-500"
          style={{
            width: visible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
          ref={(el) => {
            if (el && !visible) {
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                  }
                },
                { threshold: 0.3 }
              );
              observer.observe(el);
            }
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 bg-white dark:bg-navy-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Skills & Expertise"
            description="A multidisciplinary toolkit spanning operations management, data analysis, and multilingual communication."
            icon={<Cpu size={16} />}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <ScrollReveal key={category.title} delay={catIndex * 120}>
                <div className="group h-full p-6 md:p-7 rounded-2xl bg-white dark:bg-navy-800/40 border border-navy-200/60 dark:border-navy-700/50 hover:border-teal-300 dark:hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/10 to-teal-600/10 dark:from-teal-500/15 dark:to-teal-600/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={22} className="text-teal-600 dark:text-teal-400" />
                    </div>
                    <h3 className="font-display text-base md:text-lg font-bold text-navy-900 dark:text-white leading-tight">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        note={'note' in skill ? skill.note : undefined}
                        delay={skillIndex * 100}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
