/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Stazione di Pasta — paleta oficial (Guía de estilos)
        sdp: {
          carmin: '#DC3036',
          oliva: '#51802F',
          dorado: '#B98D17',
          mediterraneo: '#F6F1E2',
          negro: '#2D2D2D',
          'mediterraneo-suave': '#FAF7EC',
          'oliva-oscuro': '#3C5F22',
          'carmin-oscuro': '#B82428',
        },
      },
      fontFamily: {
        // Faustina (serif italiana) + Asap (sans grotesque)
        display: ['Faustina', 'Georgia', 'serif'],
        body: ['Asap', 'system-ui', 'sans-serif'],
        italic: ['Faustina', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.4s ease-out forwards',
        'fade-up': 'fadeUp 1.2s ease-out forwards',
        'fade-up-slow': 'fadeUp 1.8s ease-out forwards',
        'reveal': 'reveal 1.4s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(40px)', filter: 'blur(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
      },
    },
  },
  plugins: [],
};
