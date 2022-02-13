module.exports = {
  mode: 'jit',
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      backgroundImage: {
        ring: "url('/src/svg/ring.svg')",
        velvet: "url('/src/svg/velvet.svg')",
        stitch: "url('/src/svg/stitch.svg')",
        calico: "url('/src/svg/calico.svg')",
        example: "url('/src/svg/example.svg')",
        dots: "url('/src/svg/dots.svg')",
        current: "url('/src/svg/current.svg')"
      }
    }
  }
}
