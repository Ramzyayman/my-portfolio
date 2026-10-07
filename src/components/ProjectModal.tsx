import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Database, Server } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-2xl p-6 sm:p-8 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-light-border dark:border-dark-border">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                {project.category}
              </span>
              <span className="text-xs font-mono text-light-muted dark:text-dark-muted">
                {project.period}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-light-text dark:text-dark-text tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-border-muted dark:hover:bg-dark-card border border-light-border dark:border-dark-border transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content body */}
        <div className="py-6 space-y-6">
          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-light-border-muted/50 dark:bg-dark-card border border-light-border dark:border-dark-border">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2 font-semibold">
                The Engineering Problem
              </h4>
              <p className="text-xs sm:text-sm text-light-text dark:text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-light-border-muted/50 dark:bg-dark-card border border-light-border dark:border-dark-border">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 font-semibold">
                Engineered Solution
              </h4>
              <p className="text-xs sm:text-sm text-light-text dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Overview */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers size={16} className="text-emerald-500" />
              <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-light-text dark:text-dark-text">
                Architecture & Data Flow
              </h3>
            </div>
            <p className="text-sm text-light-muted dark:text-dark-muted leading-relaxed mb-4">
              {project.architectureDetails.overview}
            </p>

            <div className="p-4 rounded-lg bg-dark-bg border border-light-border dark:border-dark-border space-y-2">
              <div className="text-xs font-mono text-zinc-400 mb-2 flex items-center gap-1.5">
                <Server size={13} className="text-emerald-400" />
                <span>System Pipeline & Pipelines:</span>
              </div>
              {project.architectureDetails.schemaOrFlow.map((flow, index) => (
                <div
                  key={index}
                  className="font-mono text-xs text-emerald-400/90 dark:text-emerald-300 bg-black/40 p-2.5 rounded border border-emerald-500/20"
                >
                  {flow}
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Decisions */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Cpu size={16} className="text-sky-500" />
              <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-light-text dark:text-dark-text">
                Key Technical Decisions
              </h3>
            </div>
            <ul className="space-y-2.5">
              {project.architectureDetails.keyDecisions.map((decision, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-light-text dark:text-zinc-300">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full-Stack Highlights */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Database size={16} className="text-amber-500" />
              <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-light-text dark:text-dark-text">
                Implementation Highlights
              </h3>
            </div>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-light-muted dark:text-dark-muted">
                  <span className="text-emerald-500 font-mono mt-0.5">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-light-muted dark:text-dark-muted mb-2.5 font-semibold">
              Tech Stack & Tooling
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-light-border-muted dark:bg-dark-card border border-light-border dark:border-dark-border text-light-text dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-light-border dark:border-dark-border flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-light-muted dark:text-dark-muted">
            Role: <span className="text-light-text dark:text-zinc-300 font-medium">{project.role}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-medium bg-light-border-muted dark:bg-dark-card border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:border-emerald-500/50 transition-colors"
            >
              <GithubIcon size={14} />
              <span>Source Repository</span>
              <ExternalLink size={12} />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-medium bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
              >
                <span>Live View</span>
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
