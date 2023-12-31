import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./style.scss";

export default function Particle() {

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        });
    }, []);

    return (
        <Particles
            id="tsparticles"
            options={{
                  detectRetina: false,
                  fpsLimit: 30,
                  interactivity: {
                    detectsOn: "canvas",
                    events: {
                      resize: true
                    }
                  },
                  particles: {
                    color: {
                      value: "#fff"
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 1080
                      },
                      limit: 0,
                      value: 200
                    },
                    opacity: {
                      animation: {
                        enable: true,
                        minimumValue: 0.05,
                        speed: 1,
                        sync: false
                      },
                      random: {
                        enable: true,
                        minimumValue: 0.05
                      },
                      value: 1
                    },
                    shape: {
                      type: "circle"
                    },
                    size: {
                      random: {
                        enable: true,
                        minimumValue: 0.5
                      },
                      value: 1
                    }
                  }
            }}
        />
    );
}