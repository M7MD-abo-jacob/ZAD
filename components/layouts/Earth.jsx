import { useEffect, useRef } from "react";
import { DoubleSide, TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRouter } from "next/router";

export default function Earth() {
  const { locale } = useRouter();
  const position = locale === "ar" ? [-1, 0, 3] : [1, 0, 3];
  const [colorMap, normalMap, specularMap, cloudsMap, nightMap] = useLoader(
    TextureLoader,
    [
      "/assets/textures/earth/earth_daymap.jpg",
      "/assets/textures/earth/earth_normal_map.jpg",
      "/assets/textures/earth/earth_specular_map.jpg",
      "/assets/textures/earth/earth_clouds.png",
      "/assets/textures/earth/earth_nightmap.jpg",
    ]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    // rotate each frame
    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 8;
  });

  useEffect(() => {
    // change the map depending on the theme color
    const handleThemeChange = () => {
      if (window.__theme === "dark") {
        console.log("dark");
        earthRef.current.material.map = nightMap;
      } else {
        console.log("light");
        earthRef.current.material.map = colorMap;
      }
    };

    handleThemeChange(); // Initial call to handle the current theme

    window.addEventListener("themechange", handleThemeChange); // Listen for theme change event

    return () => {
      window.removeEventListener("themechange", handleThemeChange); // Clean up the event listener when the component unmounts
    };
  }, []);

  return (
    <>
      {/* Rotate the group at an angle */}
      <ambientLight intensity={0.1} />
      <pointLight
        color="#f6f3ea"
        position={locale === "ar" ? [190, 2, -5] : [-90, 2, -5]}
        intensity={1.2}
      />
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
      <mesh ref={cloudsRef} position={position}>
        <sphereGeometry args={[1.01, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={1}
          depthWrite={true}
          transparent={true}
          side={DoubleSide}
        />
      </mesh>
      {/* -------------------- EARTH -------------------- */}
      {/* <group rotation={[1, 0, Math.PI / 3]}> */}
      <mesh ref={earthRef} position={position} rotation={[Math.PI / 7, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
      {/* </group> */}
    </>
  );
}

// if (window.__theme === "dark") {
//   earthRef.current.material.map = nightMap;
// }
// if (window.__theme !== "dark") {
//   earthRef.current.material.map = colorMap;
// }
