import { GraduationCap, TrendingUp, Globe2 } from 'lucide-react';
import { metrics } from '@/data/portfolio';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { ScrollReveal } from './ScrollReveal';

function MetricCard({
  value,
  suffix,
  decimals,
  label,
  icon: Icon,
  index,
}: {
  value: number;
  suffix: string;
  decimals: number;
  label: string;
  icon: typeof GraduationCap;
  index: number;
}) {
  const displayValue = useAnimatedCounter(value, 2200, decimals);

  return (
    <ScrollReveal
      delay={index * 150}
      className="group relative flex-1 min-w-[200px] p-6 md:p-8 rounded-2xl bg-white dark:bg-navy-800/40 border border-navy-200/60 dark:border-navy-700/50 hover:border-teal-300 dark:hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/0 to-teal-500/0 group-hover:from-teal-500/5 group-hover:to-navy-500/5 transition-all duration-500" />
      <div className="relative flex flex-col items-center text-center">
        <div className="w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br from-teal-500/10 to-teal-600/10 dark:from-teal-500/15 dark:to-teal-600/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon size={26} className="text-teal-600 dark:text-teal-400" />
        </div>
        <div
          id={`counter-${value}-${decimals}`}
          className="font-display text-4xl md:text-5xl font-bold text-navy-900 dark:text-white tabular-nums"
        >
          {displayValue}
          <span className="text-teal-500">{suffix}</span>
        </div>
        <p className="mt-2 text-sm font-medium text-navy-500 dark:text-navy-400 uppercase tracking-wide">
          {label}
        </p>
      </div>
    </ScrollReveal>
  );
}

export function Metrics() {
  return (
    <section
      id="metrics"
      className="relative py-20 md:py-28 bg-white dark:bg-navy-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Key Highlights
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-navy-900 dark:text-white">
            Proven Excellence at a Glance
          </h2>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row gap-5 md:gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              decimals={metric.decimals}
              label={metric.label}
              icon={metric.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
