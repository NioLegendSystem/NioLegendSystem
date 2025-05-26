import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'gradient-x-slow': 'gradient 30s ease infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 1.1s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '0.15' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
        'gradient-hero': 'linear-gradient(to bottom right, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
        'gradient-card': 'linear-gradient(45deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))',
        'gradient-button': 'linear-gradient(to right, #9333ea, #ec4899)',
        'gradient-text': 'linear-gradient(to right, #a855f7, #ec4899)',
      },
      boxShadow: {
        'card': '0 0 20px rgba(139, 92, 246, 0.1)',
        'card-hover': '0 0 30px rgba(139, 92, 246, 0.2)',
        'neon': '0 0 20px rgba(147, 51, 234, 0.3)',
        'neon-hover': '0 0 30px rgba(147, 51, 234, 0.4)',
        'text-glow': '0 0 40px rgba(139, 92, 246, 0.3)',
        'button-glow': '0 0 20px rgba(147, 51, 234, 0.4)',
      },
      textShadow: {
        'glow': '0 0 40px rgba(139, 92, 246, 0.3)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        '.text-shadow-glow': {
          'text-shadow': '0 0 40px rgba(139, 92, 246, 0.3)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
} satisfies Config;
