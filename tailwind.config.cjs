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
        twirl: "url('/src/svg/twirl.svg')",
        dots: "url('/src/svg/dots.svg')",
        blue: "url('/src/svg/blue.svg')",
        tile: "url('/src/svg/tile.svg')",
        pepper: "url('/src/svg/pepper.svg')",
        current: "url('/src/svg/current.svg')"
      }
    }
  }
}
