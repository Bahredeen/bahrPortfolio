import { type ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: ReactNode;
}

export function SectionHeading({ eyebrow, title, description, icon }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-2 mb-3">
        {icon && <span className="text-teal-500">{icon}</span>}
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-navy-600 dark:text-navy-300 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
