module.exports = {
  mode: 'jit',
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      backgroundImage: {
        ring: "url('/src/svg/ring.svg')",
        velvet: "url('/src/svg/velvet.svg')",
        stitch: "url('/src/svg/velvet.svg')",
        example: "url('/src/svg/example.svg')",
        current: "url('/src/svg/current.svg')"
      }
    }
  }
}
