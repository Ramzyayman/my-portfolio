import React, { useState } from 'react';
import { Terminal } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { projectsData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Full-Stack',
    'Backend & APIs',
    'Bots & Automation',
    'Interactive Tools',
    'APIs & Data',
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-light-border dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-2">
              <Terminal size={14} />
              <span>FEATURED_WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-light-text dark:text-dark-text">
              Projects & Systems
            </h2>
            <p className="text-sm sm:text-base text-light-muted dark:text-dark-muted mt-2 max-w-xl">
              Production-focused builds highlighting full-stack execution, resilient data schemas, and clean user interfaces.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeFilter === cat
                    ? 'bg-light-text text-light-bg dark:bg-dark-text dark:text-dark-bg font-semibold'
                    : 'bg-light-surface dark:bg-dark-card text-light-muted dark:text-dark-muted border border-light-border dark:border-dark-border hover:text-light-text dark:hover:text-dark-text'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Architecture Specs Deep-Dive Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
