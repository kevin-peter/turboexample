import type { Config } from 'tailwindcss';

const preset: Partial<Config> = {
  darkMode: 'class',

  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },

    extend: {
      colors: {
        brand: {
          50: '#f5faff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },

      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },

      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },

      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.04)',
        medium: '0 4px 20px rgba(0, 0, 0, 0.08)',
      },

      transitionTimingFunction: {
        'in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
      },
    },
  },

  plugins: [
  ],
};

export default preset;
