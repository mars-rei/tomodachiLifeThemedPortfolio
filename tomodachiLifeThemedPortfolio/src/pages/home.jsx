import { useState, useEffect, useMemo } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import desktopLogo from "../assets/desktop_logo.svg";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const cube = useMemo(() => new THREE.BoxGeometry(1.5, 1.5, 1.5), []);

  return (
    <>
      <div id="desktopLoading" className={isLoading ? "" : "hidden"}>
        <img id="desktopLogo" src={desktopLogo} />
      </div>

      {!isLoading && (
        <Canvas className="three-canvas" camera={{ position: [2, 2, 2] }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1} />

          <mesh geometry={cube} rotation={[0.5, 0.5, 0]}>
            <meshStandardMaterial color="red" />

            {/* adds lineart to edges and corners */}
            <lineSegments>
              <edgesGeometry args={[cube]} />
              <lineBasicMaterial color="black" linewidth={1} />
            </lineSegments>
          </mesh>

          <OrbitControls enableZoom={true} />
        </Canvas>
      )}
    </>
  );
}

export default Home;