/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#090a0f',
          surface: '#11131a',
          card: '#151822',
          border: '#232838',
          'border-muted': '#1a1f2c',
          text: '#f3f4f6',
          muted: '#9ca3af',
        },
        light: {
          bg: '#f8fafc',
          surface: '#ffffff',
          card: '#ffffff',
          border: '#e2e8f0',
          'border-muted': '#edf2f7',
          text: '#0f172a',
          muted: '#64748b',
        },
        accent: {
          emerald: '#10b981',
          'emerald-glow': 'rgba(16, 185, 129, 0.15)',
          cyan: '#06b6d4',
          sky: '#38bdf8',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      }
    },
  },
  plugins: [],
}
