document.addEventListener("DOMContentLoaded", () => {
  // Initialize Particles
  tsParticles.load("tsparticles", {
    background: {
      color: "transparent"
    },
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: {
        value: "#333333"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.7,
        random: {
          enable: true,
          minimumValue: 0.4
        }
      },
      size: {
        value: {
          min: 2,
          max: 4
        },
        random: {
          enable: true,
          minimumValue: 1.5
        }
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#555555",
        opacity: 0.4,
        width: 1
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.7
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });

  // Animated Text
  const animatedText = document.querySelector(".animated-text");
  const phrases = [ "Student","MERN Stack Developer","Software Developer"];
  let index = 0;

  function updateText() {
    animatedText.textContent = phrases[index];
    index = (index + 2) % phrases.length;
  }

  setInterval(updateText, 3000);
  updateText();
});