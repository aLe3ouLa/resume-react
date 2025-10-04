module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // make sure src is included
  ],
  theme: {
    extend: {
      colors: {
        primary: "#829e86",
        secondary: "#ef4444",
        tertiary: "#6b7280",
        hoverPrimary: '#111827',
        hoverTertiary: '#4b5563',
        text: "#191919",
        textLight: "#757576",
        warning: "#efb320",
        error: "#c82c1a",
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
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      components: {
        '.colored-span': {
          '@apply bg-gradient-to-br from-primary via-secondary to-secondary bg-[length:200%_200%] bg-clip-text text-transparent font-extrabold text-[4rem] cursor-none transition-all duration-300 relative': {},
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-4px',
            left: '0',
            width: '0',
            height: '3px',
            background: 'linear-gradient(90deg, var(--tw-gradient-stops))',
            backgroundImage: 'linear-gradient(90deg, #829e86, #ef4444)',
            transition: 'width 0.3s ease',
          },
          '&:hover': {
            backgroundPosition: '100% 0',
            transform: 'translateY(-2px)',
            '&::after': {
              width: '100%',
            },
          },
          '@media (max-width: 640px)': {
            fontSize: '3rem',
          },
        },
        '.colored-span-name': {
          '@apply bg-gradient-to-br from-primary via-tertiary via-tertiary to-secondary bg-[length:400%_400%] bg-clip-text text-transparent text-[4rem] leading-[1.1] font-extrabold tracking-[-0.02em] relative animate-gradient-shift transition-all duration-300': {},
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(135deg, rgba(130, 158, 134, 0.1) 0%, rgba(107, 114, 128, 0.1) 50%, rgba(239, 68, 68, 0.1) 100%)',
            borderRadius: '8px',
            zIndex: '-1',
            opacity: '0',
            transition: 'opacity 0.3s ease',
          },
          '&:hover': {
            transform: 'scale(1.08) translateY(-2px)',
            animationPlayState: 'paused',
            '&::before': {
              opacity: '1',
            },
          },
          '@media (max-width: 640px)': {
            fontSize: '3rem',
          },
        },
      },
    },
  },
  plugins: [],
}