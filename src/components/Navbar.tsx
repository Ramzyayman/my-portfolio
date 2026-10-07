import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';
import type { Theme } from '../hooks/useTheme';
import { profileData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './icons';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-light-bg/85 dark:bg-dark-bg/85 border-b border-light-border dark:border-dark-border transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2 font-mono font-bold text-base tracking-tight hover:text-emerald-500 transition-colors"
          >
            <div className="w-8 h-8 rounded bg-dark-surface dark:bg-dark-card border border-light-border dark:border-dark-border flex items-center justify-center text-emerald-500 text-sm">
              <Terminal size={16} />
            </div>
            <span className="text-light-text dark:text-dark-text">ramzy.ayman</span>
            <span className="text-emerald-500 text-xs px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-mono">
              ’27
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 rounded-md text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-border-muted dark:hover:bg-dark-card/60 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Socials & Theme Toggle */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-md text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-border-muted dark:hover:bg-dark-card transition-colors border border-transparent hover:border-light-border dark:hover:border-dark-border"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-md text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-border-muted dark:hover:bg-dark-card transition-colors border border-transparent hover:border-light-border dark:hover:border-dark-border"
            >
              <LinkedinIcon size={18} />
            </a>

            <div className="h-4 w-px bg-light-border dark:bg-dark-border mx-1" />

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-md text-light-muted dark:text-dark-muted hover:text-amber-500 dark:hover:text-amber-400 hover:bg-light-border-muted dark:hover:bg-dark-card transition-colors border border-light-border dark:border-dark-border"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-md text-light-muted dark:text-dark-muted hover:bg-light-border-muted dark:hover:bg-dark-card border border-light-border dark:border-dark-border"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="p-2 rounded-md text-light-muted dark:text-dark-muted hover:bg-light-border-muted dark:hover:bg-dark-card border border-light-border dark:border-dark-border"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-light-border dark:border-dark-border flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md font-mono text-sm text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-border-muted dark:hover:bg-dark-card transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3 px-3 border-t border-light-border dark:border-dark-border">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text"
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
