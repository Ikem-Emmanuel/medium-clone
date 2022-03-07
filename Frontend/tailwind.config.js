module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      serif: ['serif'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern':
          "url('https://miro.medium.com/max/698/4*BIK9VGjeCj2TaTDw4id2nA.png')",
      },
      backgroundSize: {
        'hero-size': '349px 353px;',
        50: '70% 100%',
      },
      zIndex: {
        2: '2',
      },
    },
  },
  plugins: [],
}
