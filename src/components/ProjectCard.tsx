import React from 'react';
import { ArrowUpRight, Cpu } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './icons';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <article className="group relative flex flex-col justify-between rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border p-6 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-200">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              {project.category}
            </span>
            {project.badge && (
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-xs font-mono text-light-muted dark:text-zinc-400 bg-light-border-muted dark:bg-dark-card border border-light-border dark:border-dark-border">
                {project.badge}
              </span>
            )}
          </div>
          <span className="text-xs font-mono text-light-muted dark:text-dark-muted">
            {project.period}
          </span>
        </div>

        {/* Title & Tagline */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-light-text dark:text-dark-text tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-light-muted dark:text-zinc-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* High Level Problem & Solution summary */}
        <div className="mb-5 space-y-2">
          <p className="text-sm text-light-muted dark:text-dark-muted leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Key Feature Highlights */}
        <div className="mb-6 space-y-1.5">
          {project.highlights.slice(0, 3).map((item, index) => (
            <div key={index} className="flex items-start gap-2 text-xs text-light-muted dark:text-zinc-300">
              <span className="text-emerald-500 font-mono select-none">›</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Technologies List */}
        <div className="flex flex-wrap gap-1.5 pt-4 pb-5 border-t border-light-border dark:border-dark-border">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-light-border-muted dark:bg-dark-card text-light-muted dark:text-dark-muted border border-light-border/60 dark:border-dark-border/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between gap-2 pt-2">
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
          >
            <Cpu size={14} />
            <span>Architecture Specs</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-light-border-muted dark:bg-dark-card border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors"
              aria-label={`View ${project.title} on GitHub`}
              title="View GitHub Repository"
            >
              <GithubIcon size={16} />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-light-border-muted dark:bg-dark-card border border-light-border dark:border-dark-border text-xs font-mono text-light-text dark:text-dark-text hover:border-emerald-500/40 transition-colors"
                title="Open Live or Repo"
              >
                <span>Demo</span>
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
