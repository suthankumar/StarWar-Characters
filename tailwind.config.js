module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: theme => ({
        "screen/1": "45vh",
        "screen/2": "66vh",
        "screen/3": "75vh",
      }),
    },
  },
  plugins: [],
}