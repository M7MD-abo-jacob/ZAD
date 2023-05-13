import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";

// import EarthDayMap from "@/public/assets/textures/earth/8k_earth_daymap.jpg";
// import EarthNormalMap from "@/public/assets/textures/earth/8k_earth_normal_map.jpg";
// import EarthSpecularMap from "@/public/assets/textures/earth/8k_earth_specular_map.jpg";
// import EarthCloudsMap from "@/public/assets/textures/earth/8k_earth_clouds.jpg";

export default function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [
      "/assets/textures/earth/8k_earth_daymap.jpg",
      "/assets/textures/earth/8k_earth_normal_map.jpg",
      "/assets/textures/earth/8k_earth_clouds.jpg",
      "/assets/textures/earth/8k_earth_clouds.jpg",
    ]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />
      {/* -------------------- STARS -------------------- */}
      <Stars
        radius={100}
        depth={60}
        count={500}
        factor={10}
        saturation={1}
        fade={true}
      />
      {/* -------------------- CLOUDS -------------------- */}
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* -------------------- EARTH -------------------- */}
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}
