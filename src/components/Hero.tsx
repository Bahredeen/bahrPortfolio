import { Mail, Phone, MapPin, ChevronDown, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

interface HeroProps {
  onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  const scrollToExperience = () => {
    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const contactButtons = [
    {
      label: 'Email',
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      external: false,
    },
    {
      label: 'Phone',
      icon: Phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
      external: false,
    },
    {
      label: 'Location',
      icon: MapPin,
      href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
      external: true,
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-50 via-white to-teal-50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 bg-grid"
    >
      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-navy-500/10 dark:bg-navy-400/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20 animate-fade-in-down">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            <span className="text-xs font-medium text-teal-700 dark:text-teal-300">
              Available for new opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 dark:text-white tracking-tight animate-fade-in-up leading-[1.1]">
            {personalInfo.name}
          </h1>

          {/* Subtitle */}
          <p
            className="mt-6 text-lg sm:text-xl md:text-2xl font-medium text-gradient animate-fade-in-up"
            style={{ animationDelay: '0.15s' }}
          >
            {personalInfo.subtitle}
          </p>

          {/* Tagline */}
          <p
            className="mt-6 text-base sm:text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            {personalInfo.tagline}
          </p>

          {/* Contact buttons */}
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.45s' }}
          >
            {contactButtons.map((btn) => {
              const Icon = btn.icon;
              return (
                <a
                  key={btn.label}
                  href={btn.href}
                  target={btn.external ? '_blank' : undefined}
                  rel={btn.external ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-navy-800/60 border border-navy-200 dark:border-navy-700 text-navy-700 dark:text-navy-200 font-medium text-sm hover:border-teal-400 dark:hover:border-teal-500 hover:shadow-lg hover:shadow-teal-500/10 hover:scale-105 transition-all duration-300"
                >
                  <Icon size={16} className="text-teal-500 group-hover:scale-110 transition-transform" />
                  <span>{btn.label}</span>
                </a>
              );
            })}
          </div>

          {/* Action buttons */}
          <div
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <button
              onClick={scrollToExperience}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold text-sm shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 transition-all duration-300"
            >
              <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
              Explore Work
              <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </button>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-transparent text-navy-700 dark:text-navy-200 font-semibold text-sm border-2 border-navy-200 dark:border-navy-700 hover:border-teal-400 dark:hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300"
            >
              Send a Message
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden sm:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-navy-400 dark:text-navy-500 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-teal-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}
