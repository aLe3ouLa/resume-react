module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fredoka', 'Comfortaa', 'sans-serif'],
        body: ['Comfortaa', 'sans-serif'],
        mono: ['Fira Code', 'SF Mono', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        primary: "#2EA84F",
        secondary: "#E0399B",
        tertiary: "#FFCE2E",
        accent: "#8C9EEC",
        coral: "#F6A6D6",
        cream: "#FBEADB",
        hoverPrimary: '#248F42',
        hoverSecondary: '#C42585',
        hoverTertiary: '#E9B412',
        text: "#1A1A1A",
        textLight: "#5C5C5C",
        white: "#FFFFFF",
        black: "#1A1A1A",
        warning: "#FFCE2E",
        error: "#E8431F",
      },
      spacing: {
        'xxxs': '2px',
        'xxs': '4px',
        'xs': '6px',
        'sm': '12px',
        'md': '20px',
        'lg': '28px',
        'xl': '40px',
        'xxl': '100px',
        'siteWidth': '1440px',
      },
      screens: {
        'tablet': '640px',
        'desktop': '1024px',
        'large': '1280px',
        'xlarge': '1440px',
      },
      animation: {
        'wave': 'wave 2s infinite',
        'gradient-shift': 'gradient-shift 6s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'rainbow': 'rainbow 1.5s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'morphing-bg': 'morphing-bg 8s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
      },
      keyframes: {
        'wave': {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(12deg)' },
          '40%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'sparkle': {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        'wiggle': {
          '0%, 7%, 93%, 100%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(5deg)' },
          '20%': { transform: 'rotate(-4deg)' },
          '25%': { transform: 'rotate(3deg)' },
          '30%': { transform: 'rotate(-2deg)' },
          '35%': { transform: 'rotate(1deg)' },
        },
        'rainbow': {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(130, 158, 134, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(130, 158, 134, 0.6), 0 0 60px rgba(130, 158, 134, 0.4)' },
        },
        'morphing-bg': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-scale': {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-left': {
          'from': { opacity: '0', transform: 'translateX(-50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'bounce-soft': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        'pop-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
        '400': '400% 400%',
      },
      animationDelay: {
        '800': '800ms',
        '1000': '1000ms',
        '1600': '1600ms',
        '2400': '2400ms',
      },
    },
  },
  plugins: [],
}