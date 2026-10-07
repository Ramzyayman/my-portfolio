import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const [cairoTime, setCairoTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Cairo (Africa/Cairo)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Cairo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCairoTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-light-surface/40 dark:bg-dark-bg transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-light-muted dark:text-dark-muted border-t border-light-border dark:border-dark-border pt-8">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">●</span>
            <span>Cairo, EG:</span>
            <span className="text-light-text dark:text-dark-text font-medium">{cairoTime || 'Loading...'}</span>
          </div>

          <div className="text-center sm:text-left">
            <span>© {currentYear} {profileData.name} · All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-light-border-muted dark:bg-dark-card border border-light-border dark:border-dark-border hover:text-light-text dark:hover:text-dark-text transition-colors"
            title="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
