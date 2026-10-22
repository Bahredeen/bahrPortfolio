import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { navLinks, personalInfo } from '@/data/portfolio';
import { useTheme } from '@/hooks/useTheme';

interface NavbarProps {
  onContactClick: () => void;
}

export function Navbar({ onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-navy-950/80 backdrop-blur-lg border-b border-navy-200/50 dark:border-navy-800/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo / Name */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2 font-display font-bold text-navy-900 dark:text-white text-lg"
          >
            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white text-sm shadow-lg shadow-teal-500/20 font-bold">
              BM
            </span>
            <span className="hidden sm:inline">{personalInfo.name.split(' ').slice(-1)[0]}</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-navy-600 dark:text-navy-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors rounded-lg hover:bg-teal-50 dark:hover:bg-navy-800/50"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={onContactClick}
              className="ml-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg hover:shadow-lg hover:shadow-teal-500/25 transition-all hover:scale-105"
            >
              Get in Touch
            </button>
            <button
              onClick={toggleTheme}
              className="ml-1 p-2 rounded-lg text-navy-600 dark:text-navy-300 hover:bg-navy-100 dark:hover:bg-navy-800/50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Profile Avatar */}
            <button
              onClick={() => handleNavClick('#hero')}
              className="ml-2 flex items-center justify-center p-0.5 rounded-full ring-2 ring-teal-500/50 hover:ring-teal-400 transition-all hover:scale-105"
              aria-label="View Profile"
            >
              <img
                src={personalInfo.avatar || '/Profile pic.png'}
                alt={personalInfo.name}
                className="w-9 h-9 rounded-full object-cover shadow-sm"
              />
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('#hero')}
              className="flex items-center justify-center p-0.5 rounded-full ring-2 ring-teal-500/50 hover:ring-teal-400 transition-all"
              aria-label="View Profile"
            >
              <img
                src={personalInfo.avatar || '/Profile pic.png'}
                alt={personalInfo.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-navy-600 dark:text-navy-300 hover:bg-navy-100 dark:hover:bg-navy-800/50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-navy-700 dark:text-white hover:bg-navy-100 dark:hover:bg-navy-800/50 transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in-down">
            <div className="flex flex-col gap-1 pb-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-3 text-left text-sm font-medium text-navy-700 dark:text-navy-200 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-navy-800/50 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onContactClick();
                }}
                className="mt-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg text-center"
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}