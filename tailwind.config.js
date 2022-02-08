module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: theme => ({
        "screen/1": "50vh",
        "screen/2": "73vh",
        "screen/3": "75vh",
        "90": "90%",
      }),
    },
  },
  plugins: [],
}