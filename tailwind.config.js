/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        neon: {
          green: '#00ff88',
          cyan: '#00ffff',
          purple: '#8b5cf6',
          pink: '#f472b6',
        },
        'neon-green': '#00ff88',
        'neon-cyan': '#00ffff',
        'neon-purple': '#8b5cf6',
        'neon-pink': '#f472b6',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'book-open': 'bookOpen 0.8s ease-out',
        'page-flip': 'pageFlip 0.6s ease-in-out',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { 
            textShadow: '0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88, 0 0 20px #00ff88',
          },
          '100%': { 
            textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88, 0 0 40px #00ff88',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff',
          },
          '50%': { 
            boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff',
          },
        },
        bookOpen: {
          '0%': { 
            transform: 'perspective(1000px) rotateY(-15deg) scale(0.8)',
            opacity: '0'
          },
          '100%': { 
            transform: 'perspective(1000px) rotateY(0deg) scale(1)',
            opacity: '1'
          },
        },
        pageFlip: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(-90deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        sparkle: {
          '0%, 100%': { 
            transform: 'scale(0) rotate(0deg)',
            opacity: '0'
          },
          '50%': { 
            transform: 'scale(1) rotate(180deg)',
            opacity: '1'
          },
        },
      },
    },
  },
  plugins: [],
}