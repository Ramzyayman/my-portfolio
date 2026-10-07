import React from 'react';
import { ArrowDown, Mail, MapPin, Sparkles, Terminal } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-light-border dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability and Meta Pill Header */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{profileData.availabilityStatus}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-light-border-muted dark:bg-dark-card border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted">
            <MapPin size={12} className="text-light-text dark:text-dark-text" />
            <span>{profileData.location.city}, {profileData.location.country}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-light-border-muted dark:bg-dark-card border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted">
            <span className="text-emerald-500 font-semibold">B.Sc.</span>
            <span>{profileData.education.graduationYear}</span>
          </div>
        </div>

        {/* Hero Title and Subheadline */}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-light-text dark:text-dark-text mb-6">
            Hi, I’m <span className="text-emerald-600 dark:text-emerald-400">{profileData.name}</span>.
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-medium text-light-muted dark:text-zinc-400">
              I build reliable web applications & backend systems.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-light-muted dark:text-dark-muted leading-relaxed mb-8">
            {profileData.bioSummary}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm font-medium bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm hover:shadow-emerald-500/20"
            >
              <Terminal size={16} />
              <span>Explore Projects</span>
              <ArrowDown size={14} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm font-medium bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:border-emerald-500/50 hover:bg-light-border-muted dark:hover:bg-dark-border/40 transition-all"
            >
              <Mail size={16} />
              <span>Get in Touch</span>
            </a>

            <div className="flex items-center gap-2 pl-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Builder Metrics / Philosophy Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="p-4 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-light-muted dark:text-dark-muted">
                Core Focus
              </span>
              <Sparkles size={14} className="text-emerald-500" />
            </div>
            <div className="font-semibold text-light-text dark:text-dark-text text-sm">
              Full-Stack & Backend Systems
            </div>
            <p className="text-xs text-light-muted dark:text-dark-muted mt-1">
              End-to-end architectures from relational schemas to clean client interfaces.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-light-muted dark:text-dark-muted">
                Engineering Approach
              </span>
              <Terminal size={14} className="text-sky-500" />
            </div>
            <div className="font-semibold text-light-text dark:text-dark-text text-sm">
              Pragmatic & Builder-Oriented
            </div>
            <p className="text-xs text-light-muted dark:text-dark-muted mt-1">
              Prioritizing usable software, atomic data flows, and clean maintainable code.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-light-muted dark:text-dark-muted">
                Graduation Milestone
              </span>
              <span className="text-xs font-mono text-emerald-500">2027</span>
            </div>
            <div className="font-semibold text-light-text dark:text-dark-text text-sm">
              Software Engineering Degree
            </div>
            <p className="text-xs text-light-muted dark:text-dark-muted mt-1">
              Solid algorithmic fundamentals paired with active production-level project shipping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
