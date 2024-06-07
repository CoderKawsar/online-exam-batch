import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { particleConfig } from "./particleConfig";
import { useEffect, useState } from "react";
import "./ParticleBg.css";

const ParticleBg = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  //   const particlesLoaded = (container) => {
  //     console.log(container);
  //   };
  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          //   particlesLoaded={particlesLoaded}
          options={particleConfig}
          // params={particleConfig}
        ></Particles>
      )}
    </div>
  );
};

export default ParticleBg;
