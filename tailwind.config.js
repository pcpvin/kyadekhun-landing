/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kd: {
          bg: "#08080C",
          surface: "#0E0E17",
          card: "#141420",
          cardHover: "#1A1A2B",
          border: "rgba(255, 255, 255, 0.08)",
          borderGlow: "rgba(139, 92, 246, 0.3)",
          purple: {
            DEFAULT: "#8B5CF6",
            light: "#A78BFA",
            dark: "#6D28D9",
            glow: "rgba(139, 92, 246, 0.25)",
          },
          amber: {
            DEFAULT: "#F59E0B",
            light: "#FBBF24",
            accent: "#FF8A00",
          },
          gray: {
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827",
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 40px -10px rgba(139, 92, 246, 0.35)',
        'glow-purple-lg': '0 0 60px -15px rgba(139, 92, 246, 0.45)',
        'glow-amber': '0 0 35px -10px rgba(245, 158, 11, 0.3)',
        'cinematic': '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 20px -5px rgba(139, 92, 246, 0.15)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.15), transparent 70%)',
        'radial-glow-top': 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.22), transparent 60%)',
        'hero-gradient': 'linear-gradient(to bottom, #08080C, #0E0E17 50%, #08080C 100%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-subtle': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
