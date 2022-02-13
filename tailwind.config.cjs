module.exports = {
  mode: 'jit',
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      backgroundImage: {
        ring: "url('/src/svg/ring.svg')",
        velvet: "url('/src/svg/velvet.svg')"
      }
    }
  }
}
