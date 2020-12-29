var particles = screen.width * screen.height / 10000;
tsParticles.load("tsparticles", {
  background : {
    color: '#01151a'
  },
  particles: {
    number: {
      value: particles
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
      distance: 200,
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
  fpsLimit: 30
})

$(document).ready(function(){
  $("#name").css('visibility', 'visible').hide().fadeIn(1000);
  setTimeout(function(){$("#description").css('visibility', 'visible').hide().fadeIn(1500)}, 1000);
  setTimeout(function(){$("#gh").css('visibility', 'visible').hide().fadeIn(1500)}, 2250);
  setTimeout(function(){$("#li").css('visibility', 'visible').hide().fadeIn(1500)}, 2500);
  setTimeout(function(){$("#re").css('visibility', 'visible').hide().fadeIn(1500)}, 2750);
});
