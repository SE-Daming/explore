/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Base colors - dark theme
        base: {
          950: '#0a0a0f',
          900: '#0f0f16',
          800: '#16161f',
          700: '#1e1e2a',
          600: '#2a2a3a',
          500: '#3a3a4f',
          400: '#4a4a5f',
          300: '#5a5a6f',
        },
        // Neon cyan accent
        neon: {
          DEFAULT: '#00ffc8',
          50: '#e6fff9',
          100: '#ccfff3',
          200: '#99ffe7',
          300: '#66ffdb',
          400: '#33ffcf',
          500: '#00ffc8',
          600: '#00cca0',
          700: '#009978',
          800: '#006650',
          900: '#003328',
        },
        // Warm amber for secondary accent
        amber: {
          DEFAULT: '#ffb800',
          50: '#fff8e6',
          100: '#fff1cc',
          200: '#ffe399',
          300: '#ffd666',
          400: '#ffb800',
          500: '#cc9300',
          600: '#996e00',
          700: '#664a00',
          800: '#332500',
          900: '#191200',
        },
        // Muted text colors - HIGH CONTRAST
        muted: {
          DEFAULT: '#9ca3af',
          light: '#d1d5db',
          dark: '#6b7280',
        }
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 200, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 255, 200, 0.6)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
