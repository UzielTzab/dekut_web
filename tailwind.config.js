/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tema profesional gaming
        primary: {
          dark: '#0a0a0f',
          darker: '#050507',
          light: '#1a1a2e',
        },
        accent: {
          primary: '#6366f1',
          secondary: '#8b5cf6',
          tertiary: '#06b6d4',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#cbd5e1',
          muted: '#64748b',
        },
        gaming: {
          purple: '#8b5cf6',
          indigo: '#6366f1',
          cyan: '#06b6d4',
          emerald: '#10b981',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
        'gradient-secondary': 'linear-gradient(90deg, #1e1b4b 0%, #312e81 50%, #1e3a8a 100%)',
        'gradient-accent': 'linear-gradient(45deg, #6366f1 0%, #06b6d4 100%)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'gaming': '0 8px 25px rgba(99, 102, 241, 0.4)',
      },
      borderColor: {
        'primary': 'rgba(99, 102, 241, 0.2)',
        'secondary': 'rgba(139, 92, 246, 0.1)',
      },
      animation: {
        'gradient-shift': 'gradientShift 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backdropBlur: {
        'xs': '2px',
        'gaming': '20px',
      }
    },
  },
  plugins: [],
}
