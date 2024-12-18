import React, { Suspense } from "react";
import Events from "./Events";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useSelector } from "react-redux";

const Hero = () => {
  const status = useSelector((state) => state.auth.authStatus);

  return (
    <>
      <section className="h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat md:px-8 pt-8">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full px-8">
          {/* Left Section */}
          <div className="flex flex-col justify-center gap-6 text-center lg:text-left lg:flex-1 lg:items-start">
            <h1 className="text-4xl lg:text-6xl text-white font-bold">STEM-2024</h1>
            <p className="text-md text-gray-300 sm:px-4 lg:text-left">
              Welcome to STEM - Science, Technology, Engineering, and Mathematics, the distinguished
              annual fest meticulously organised by the Anjuman Institute of Technology and Management.
              Our hallmark event gathers bright minds from diverse Pre-University institutions around
              Bhatkal and surrounding regions. Embracing innovation and academic excellence, STEM
              serves as a platform that nurtures aspiring talents while fostering the spirit of
              scientific inquiry and technological advancement.
            </p>
            <p className="text-sm text-gray-500">* College Id Cards are compulsory</p>
            {!status ? (
              <Link to="/register">
                <button className="bg-[#da4ea2] text-white font-medium px-6 py-3 rounded-2xl cursor-pointer sm:w-32">
                  Register
                </button>
              </Link>
            ) : (
              <Link to="/profile">
                <button className="bg-[#da4ea2] text-white font-medium px-6 py-3 rounded-2xl cursor-pointer sm:w-32">
                  My Profile
                </button>
              </Link>
            )}
          </div>

          {/* Right Section */}
          <div className="relative flex-1 h-full w-full lg:w-1/2 sm:mt-8">
            {/* Full-Width and Full-Height Sphere */}
            <div className="hidden sm:block w-full h-full">
              <Canvas
                camera={{
                  fov: 70, // Wider view to make the sphere proportional
                  position: [0, 0, 4], // Camera adjusted for full view
                }}
                style={{
                  width: "100%", // Takes full width of the right section
                  height: "100%", // Takes full height of the right section
                }}
              >
                <Suspense fallback={null}>
                  <OrbitControls enableZoom={false} />
                  <ambientLight intensity={1.5} />
                  <directionalLight position={[3, 2, 1]} />
                  {/* Large Sphere */}
                  <Sphere args={[1, 100, 200]} scale={1.5}>
                    <MeshDistortMaterial color="#3c1c56" distort={0.5} speed={2} />
                  </Sphere>
                </Suspense>
              </Canvas>
            </div>

            {/* Image on Top of Sphere */}
            <img
              src="./img/stem-2.png"
              alt="bg2"
              className="absolute inset-0 m-auto w-[200px] sm:w-[600px] sm:h-[800px] h-[300px] object-contain animate-[move_2s_infinite_ease_alternate]"
            />
          </div>
        </div>

        {/* Keyframes for animation */}
        <style>
          {`
          @keyframes move {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(20px);
            }
          }
        `}
        </style>
      </section>
      <Events />
    </>
  );
};

export default Hero;
