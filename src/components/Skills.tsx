import React from 'react';
import { Code, Database, Server, Terminal, Wrench } from 'lucide-react';
import { skillGroupsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code size={16} className="text-emerald-500" />;
      case 'Full-Stack & Backend':
        return <Server size={16} className="text-sky-500" />;
      case 'Databases & State':
        return <Database size={16} className="text-amber-500" />;
      default:
        return <Wrench size={16} className="text-purple-500" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-light-border dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-2">
            <Terminal size={14} />
            <span>TECHNICAL_STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-light-text dark:text-dark-text">
            Skills & Systems
          </h2>
          <p className="text-sm sm:text-base text-light-muted dark:text-dark-muted mt-2">
            Practical competencies applied across backend architecture, database modeling, and responsive interfaces.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroupsData.map((group) => (
            <div
              key={group.category}
              className="rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border p-6 hover:border-light-border/80 dark:hover:border-dark-border/80 transition-colors"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-light-border-muted dark:bg-dark-card border border-light-border dark:border-dark-border">
                    {getIconForCategory(group.category)}
                  </div>
                  <h3 className="font-mono font-semibold text-base text-light-text dark:text-dark-text">
                    {group.category}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-light-muted dark:text-dark-muted mb-5 leading-relaxed">
                {group.description}
              </p>

              {/* Skills Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-2.5 rounded-lg bg-light-border-muted/60 dark:bg-dark-card border border-light-border dark:border-dark-border/70 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-medium text-light-text dark:text-dark-text">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                          {skill.level}
                        </span>
                      )}
                    </div>
                    {skill.tags && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-mono text-light-muted dark:text-zinc-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
