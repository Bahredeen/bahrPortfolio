import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '@/data/portfolio';

interface FooterProps {
  onContactClick: () => void;
}

export function Footer({ onContactClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-teal-500/20">
                BM
              </span>
              <span className="font-display font-bold text-lg">{personalInfo.name}</span>
            </div>
            <p className="text-sm text-navy-300 leading-relaxed max-w-xs">
              {personalInfo.subtitle}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-navy-400 mb-4">
              Navigate
            </h3>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-navy-300 hover:text-teal-400 transition-colors text-left w-fit"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={onContactClick}
                className="text-sm text-navy-300 hover:text-teal-400 transition-colors text-left w-fit"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-navy-400 mb-4">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personalInfo.email.split(' / ')[0]}`}
                className="inline-flex items-center gap-2 text-sm text-navy-300 hover:text-teal-400 transition-colors w-fit"
              >
                <Mail size={15} className="text-teal-500" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone.split(' / ')[0].replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 text-sm text-navy-300 hover:text-teal-400 transition-colors w-fit"
              >
                <Phone size={15} className="text-teal-500" />
                {personalInfo.phone}
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-navy-300 w-fit">
                <MapPin size={15} className="text-teal-500" />
                {personalInfo.location}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-navy-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-500">
            {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-xs font-medium text-navy-400 hover:text-teal-400 transition-colors"
          >
            Back to top
            <span className="w-8 h-8 rounded-lg bg-navy-800/50 border border-navy-700/50 flex items-center justify-center group-hover:border-teal-500 group-hover:bg-teal-500/10 transition-all">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
