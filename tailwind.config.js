/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-silver-DEFAULT',
    'text-emerald',
    'text-emerald-light',
    'text-emerald-dark',
    'border-emerald',
    'border-emerald-light',
    'bg-emerald',
    'bg-emerald-light',
    'bg-emerald-dark',
    'bg-rich-black',
    'bg-rich-darker',
    'bg-rich-darkest',
    'bg-glass-light',
    'bg-glass-medium',
    'bg-glass-dark',
    // Animation classes
    'timeline-plane-right',
    'timeline-plane-left',
    'timeline-plane-down',
    'timeline-path',
    'timeline-path-vertical',
    'timeline-connection',
    'animate-fly-right',
    'animate-fly-left',
    'animate-pulse-line',
    'overflow-visible',
    'timeline-plane-patil-to-reva',
    'timeline-plane-reva-to-stjohns'
  ],
  theme: {
    extend: {
      colors: {
        rich: {
          black: '#050505',
          darker: '#030303',
          darkest: '#000000',
        },
        emerald: {
          light: '#34D399',
          DEFAULT: '#10B981',
          dark: '#065F46',
          darkest: '#064E3B',
        },
        silver: {
          light: '#F8FAFC',
          DEFAULT: '#94A3B8',
          dark: '#64748B',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.05)',
          medium: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(0, 0, 0, 0.3)',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'Georgia', 'Cambria', 'serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-emerald': 'linear-gradient(to right, #10B981, #34D399, #065F46)',
        'gradient-dark': 'linear-gradient(to bottom, #050505, #0a0a0a)',
        'noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'emerald-glow': '0 0 15px rgba(16, 185, 129, 0.5)',
        'emerald-sm': '0 0 5px rgba(16, 185, 129, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(16, 185, 129, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.7)' },
        },
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.6, 0, 0.1, 1)',
      },
      letterSpacing: {
        'widest': '0.2em',
        'ultra-wide': '0.3em',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}