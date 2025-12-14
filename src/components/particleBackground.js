// import React,{useEffect,useState} from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import particlesConfig from "./particleConfig";
// import { loadFull } from "tsparticles";
// import { loadPolygonPath } from '@tsparticles/path-polygon';

// export default function ParticleBackground() {
//     const [init, setInit] = useState(false);

//     // this should be run only once per application lifetime
//     useEffect(() => {
//       initParticlesEngine(async (engine) => {
        
//         await loadFull(engine);
//         await loadPolygonPath(engine);
        
//       }).then(() => {
//         setInit(true);
//       });
//     }, []);
//     const particlesLoaded = (container) => {
//         console.log(container);
//       };
    
 
  

//   return (
//     <Particles
      
//       options={particlesConfig}
//       id="tsparticles"
//     particlesLoaded={particlesLoaded}
//     canvasClassName="particles-canvas"
//     />
//   );
// }
