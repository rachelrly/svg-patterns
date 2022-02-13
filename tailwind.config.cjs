module.exports = {
  mode: 'jit',
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      backgroundImage: {
        ring: "url('/src/svg/ring.svg')",
        next: "url('/src/svg/other.svg')"
      }
    }
  }
}
