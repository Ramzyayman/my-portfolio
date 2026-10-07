import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Send, MessageSquare } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-light-border dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-2">
            <MessageSquare size={14} />
            <span>GET_IN_TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-light-text dark:text-dark-text">
            Let’s Build Something Together.
          </h2>
          <p className="text-base text-light-muted dark:text-dark-muted mt-3">
            I’m actively looking for software engineering internships, collaborative builder projects, and full-stack opportunities. Drop a note or reach out directly.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-2xl mx-auto rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border p-6 sm:p-8 space-y-6">
          {/* Email Quick Copy Box */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-light-muted dark:text-dark-muted mb-2 font-semibold text-left">
              Direct Contact Email
            </label>
            <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-light-border-muted dark:bg-dark-card border border-light-border dark:border-dark-border">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail size={16} className="text-emerald-500 shrink-0" />
                <span className="font-mono text-sm text-light-text dark:text-dark-text truncate">
                  {profileData.contactEmail}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:border-emerald-500/50 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profileData.contactEmail}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  <Send size={13} />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg bg-light-border-muted/50 dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-emerald-500/40 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text border border-light-border dark:border-dark-border">
                  <GithubIcon size={18} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-mono text-light-muted dark:text-dark-muted">GitHub</div>
                  <div className="text-sm font-semibold text-light-text dark:text-dark-text group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    @Ramzyayman
                  </div>
                </div>
              </div>
              <ExternalLink size={14} className="text-light-muted dark:text-dark-muted group-hover:text-emerald-500 transition-colors" />
            </a>

            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg bg-light-border-muted/50 dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-emerald-500/40 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text border border-light-border dark:border-dark-border">
                  <LinkedinIcon size={18} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-mono text-light-muted dark:text-dark-muted">LinkedIn</div>
                  <div className="text-sm font-semibold text-light-text dark:text-dark-text group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Ramzy Ayman
                  </div>
                </div>
              </div>
              <ExternalLink size={14} className="text-light-muted dark:text-dark-muted group-hover:text-emerald-500 transition-colors" />
            </a>
          </div>

          {/* Quick Notice */}
          <div className="text-xs font-mono text-light-muted dark:text-dark-muted text-center pt-2">
            Based in Cairo, Egypt (UTC+3) · Typical response time within 24 hours.
          </div>
        </div>
      </div>
    </section>
  );
};
