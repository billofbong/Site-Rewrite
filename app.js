tsParticles.load("tsparticles", {
  background : {
    color: '#01151a'
  },
  particles: {
    number: {
      value : 300
    },
    move: {
      enable: true,
      direction: "none",
      outMode: "bounce"
    },
    collisions: {
      enable: true,
      mode: "bounce"
    },
    links: {
      enable: true,
      width: 2,
      triangles: {
        enable: false,
        opacity: 0.02
      },
      distance: 100,
      color: "#1f97b5"
    },
    color: "#078cad",
    size: {
      value: 2
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      }
    },
    modes: {
      repulse: {
        distance: 100
      }
    }
  },
  fpsLimit: 60
})
