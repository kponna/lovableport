
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded successfully");
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 -z-0"
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 30,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: true,
                force: 90,  // Increased force for more pronounced effect
                smooth: 10  // Smoother transition
              }
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.8,
              factor: 150,  // Increased repulsion factor
              speed: 1.5,   // Slightly faster repulsion
              maxSpeed: 25, // Higher max speed for more dramatic effect
              easing: "ease-out-quad"
            },
          },
        },
        particles: {
          color: {
            value: ["#AF52DE", "#5856D6", "#5A29F8"],
          },
          links: {
            color: "#5856D6",
            distance: 200,
            enable: true,
            opacity: 0.4,
            width: 1.2,
            triangles: {
              enable: true,
              opacity: 0.1
            },
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.15, // Even slower for more gentle movement
            straight: false,
            trail: {
              enable: true,
              length: 10,  // Longer trail
              fillColor: "#000",
            },
            attract: {
              enable: true,
              rotateX: 800,
              rotateY: 1600
            }
          },
          number: {
            density: {
              enable: true,
              area: 800,  // Reduced area for more particles
            },
            value: 120, // Further increased for more visibility
          },
          opacity: {
            value: {
              min: 0.25,  // Slightly higher minimum opacity
              max: 0.6,   // Higher maximum opacity
            },
            animation: {
              enable: true,
              speed: 0.1, 
              minimumValue: 0.2,  // Higher minimum value
              sync: false
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1.2, max: 4 },  // Slightly larger particles
            animation: {
              enable: true,
              speed: 0.3,
              minimumValue: 0.8,
              sync: false
            }
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
