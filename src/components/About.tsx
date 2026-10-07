import { Check, Compass, GraduationCap, MapPin, User, Briefcase } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-light-border dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-2">
                <User size={14} />
                <span>ABOUT_ME</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-light-text dark:text-dark-text">
                Engineering with Intent.
              </h2>
            </div>

            <p className="text-base text-light-muted dark:text-dark-muted leading-relaxed">
              I am a Software Engineering student based in <strong>Cairo, Egypt</strong> (graduating <strong>Class of 2027</strong>). My work centers on building end-to-end web applications, robust backend services, real-time gaming utilities, and developer tooling.
            </p>

            <div className="p-5 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                <Compass size={16} />
                <span>Builder Philosophy</span>
              </h3>
              <p className="text-sm text-light-muted dark:text-dark-muted leading-relaxed">
                {profileData.builderPhilosophy}
              </p>
            </div>

            {/* Principles Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-light-muted dark:text-dark-muted font-semibold">
                What I Care About When Building:
              </h4>

              <div className="space-y-2">
                <div className="flex items-start gap-3 text-sm text-light-text dark:text-zinc-300">
                  <div className="p-0.5 rounded bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <div>
                    <strong className="font-medium">Data Integrity & Schema Design:</strong> Designing clean relational schemas and transactional pipelines that handle edge cases gracefully.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-light-text dark:text-zinc-300">
                  <div className="p-0.5 rounded bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <div>
                    <strong className="font-medium">Performance & Zero Bloat:</strong> Writing lean client code and optimized queries that deliver instant user feedback without unnecessary runtime bulk.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-light-text dark:text-zinc-300">
                  <div className="p-0.5 rounded bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <div>
                    <strong className="font-medium">Real-World Usability:</strong> Delivering products that solve real problems, from real-time server terminals to e-commerce, bots, and reading tools.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Experience Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Education Card */}
            <div className="rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border p-6 space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-light-border dark:border-dark-border">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-light-text dark:text-dark-text">
                    Education & Timeline
                  </h3>
                  <p className="text-xs font-mono text-light-muted dark:text-dark-muted">
                    Academic Degree & Engineering Studies
                  </p>
                </div>
              </div>

              {/* Degree Card */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono text-light-muted dark:text-dark-muted">
                  <span>Undergraduate Degree</span>
                  <span className="text-emerald-500 font-semibold">{profileData.education.graduationYear}</span>
                </div>
                <div className="font-bold text-lg text-light-text dark:text-dark-text">
                  {profileData.education.degree}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-light-muted dark:text-dark-muted">
                  <MapPin size={13} className="text-emerald-500" />
                  <span>Cairo, Egypt</span>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="space-y-2.5 pt-3 border-t border-light-border dark:border-dark-border text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-light-muted dark:text-dark-muted">Target Graduation:</span>
                  <span className="font-mono font-medium text-light-text dark:text-dark-text">Spring 2027</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-light-muted dark:text-dark-muted">Primary Focus:</span>
                  <span className="font-mono font-medium text-light-text dark:text-dark-text">Full-Stack / Systems</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-light-muted dark:text-dark-muted">Status:</span>
                  <span className="font-mono font-medium text-emerald-600 dark:text-emerald-400">Available for Opportunities</span>
                </div>
              </div>
            </div>

            {/* Experience / Industry Training Card */}
            {profileData.experience.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border p-6 space-y-4"
              >
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-light-border dark:border-dark-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-500">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-light-text dark:text-dark-text">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-mono text-light-muted dark:text-dark-muted">
                        {exp.organization}
                      </p>
                    </div>
                  </div>
                  {exp.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                      {exp.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-light-muted dark:text-dark-muted">
                  <span>{exp.period}</span>
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-1.5 text-xs text-light-muted dark:text-zinc-300">
                  {exp.description.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-sky-500 font-mono select-none">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {exp.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-light-border dark:border-dark-border">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-light-border-muted dark:bg-dark-card border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Developer Terminal Snippet */}
            <div className="p-3.5 rounded-lg bg-dark-bg border border-light-border dark:border-dark-border text-xs font-mono text-zinc-300 space-y-1">
              <div className="text-zinc-500">// Terminal status check</div>
              <div className="text-emerald-400">$ ramzy --repos</div>
              <div className="text-zinc-300">→ 7 showcase builds loaded & live</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
