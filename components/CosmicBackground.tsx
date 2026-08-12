"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function CosmicBackground() {
  const particlesInit = async (main: any) => {
    await loadSlim(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#0a0f2c" }, // biru gelap
        fpsLimit: 60,
        particles: {
          number: { value: 120, density: { enable: true, area: 800 } },
          color: { value: ["#1e90ff", "#00ffff", "#ffffff"] },
          shape: { type: "circle" },
          opacity: { value: 0.6, random: true },
          size: { value: { min: 1, max: 4 }, random: true },
          move: { enable: true, speed: 1.5, outModes: { default: "bounce" } },
          links: { enable: true, distance: 150, color: "#1e90ff", opacity: 0.4 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
