module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '375px',
      md: '550px',
      lg: '800px',
      desktop: '1280px',
    },
    extend: {
      colors: {
        'primary-orange': 'hsl(26, 100%, 55%)',
        'primary-pale-orange': 'hsl(25, 100%, 94%)',
        'neutral-very_dark-blue': 'hsl(220, 13%, 13%)',
        'neutral-dark_grayish-blue': 'hsl(219, 9%, 45%)',
        'neutral-grayish-blue': 'hsl(220, 14%, 75%)',
        'neutral-light_grayish-blue': 'hsl(223, 64%, 98%)',
        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-black': 'hsl(0, 0%, 0%)',
      },
    },
  },
  plugins: [],
}
