import { useState, useEffect, useMemo } from "react";
import { loadFull } from "tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react"
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";

function ParticlesBackground() {
  const [init, setInit] = useState(false)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    })
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  }

  const options: ISourceOptions = useMemo(() => ({
    fullScreen: {
      enable: true,
    },
    fpsLimit: 60,
    particles: {
      groups: {
        z5000: {
          number: {
            value: 70
          },
          zIndex: {
            value: 5000
          }
        },
        z7500: {
          number: {
            value: 30
          },
          zIndex: {
            value: 75
          }
        },
        z2500: {
          number: {
            value: 50
          },
          zIndex: {
            value: 25
          }
        },
        z1000: {
          number: {
            value: 40
          },
          zIndex: {
            value: 10
          }
        }
      },
      number: {
        value: 140,
        density: {
          enable: false,
          value_area: 800
        }
      },
      color: {
        value: "#000",
        animation: {
          enable: false,
          speed: 20,
          sync: true
        }
      },
      shape: {
        type: "square"
      },
      opacity: {
        value: 1,
        random: true,
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 0.1,
          sync: true
        }
      },
      size: {
        value: 4
      },
      links: {
        enable: false,
        distance: 100,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        angle: {
          value: 10,
          offset: 0
        },
        enable: true,
        speed: 4,
        direction: "right",
        random: true,
        straight: true,
        outModes: {
          default: "out"
        },
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        },
      },
      zIndex: {
        value: 6,
        opacityRate: 0.5
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "bubble"
        },
        onClick: {
          enable: true,
          mode: "push"
        },
      },
      modes: {
        grab: {
          distance: 400,
          links: {
            opacity: 1
          }
        },
        bubble: {
          distance: 300,
          size: 20,
          duration: 4,
          opacity: 0.5
        },
        repulse: {
          distance: 200
        },
        push: {
          quantity: 4,
          groups: ["z5000", "z7500", "z2500", "z1000"]
        },
        remove: {
          quantity: 2
        }
      }
    },
    detectRetina: true,
    background: {
      color: "#ffffff",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    },
    emitters: {
      position: {
        y: 55,
        x: -30
      },
      rate: {
        delay: 7,
        quantity: 1
      },
      size: {
        width: 0,
        height: 0
      },
    }
  }), [],)

  if (init) {
    return (
      <>
        <Particles id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </>
    );
  }
  return (
    <>
    </>
  )

}

export default ParticlesBackground
