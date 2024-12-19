import React, { Suspense } from "react";
import Events from "./Events";
import StallSection from "./StallSection";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useSelector } from "react-redux";

const Hero = () => {
  const status = useSelector((state) => state.auth.authStatus);

  return (
    <>
      <section className="relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 md:px-8 mt-16 lg:mt-0 lg:min-h-screen overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between w-full h-full space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Right Section - Image */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2 
            opacity-0 animate-fade-in-right duration-1000 ease-out delay-500">
            {/* 3D Sphere Canvas - Hidden on mobile */}
            <div className="lg:block absolute inset-0">
              <Canvas
                camera={{
                  fov: 50,
                  position: [0, 0, 4],
                }}
                className="w-full h-full"
              >
                <Suspense fallback={null}>
                  <OrbitControls enableZoom={false} />
                  <ambientLight intensity={1.5} />
                  <directionalLight position={[3, 2, 1]} />
                  <Sphere args={[1, 100, 200]} scale={1.5}>
                    <MeshDistortMaterial color="#3c1c56" distort={0.5} speed={2} />
                  </Sphere>
                </Suspense>
              </Canvas>
            </div>

            {/* Image */}
            <img
              src="./img/stem-2.png"
              alt="STEM Event"
              className="z-10 max-w-full max-h-full object-contain animate-float animate-[move_2s_infinite_ease_alternate]"
            />
          </div>

          {/* Left Section - Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-6 order-2 lg:order-1
            opacity-0 animate-fade-in duration-1000 ease-out delay-300">
            <h1 className="text-4xl lg:text-6xl text-white font-bold 
              opacity-0 animate-slide-in-left duration-700 delay-500 font-mono">
              STEM-2024
            </h1>
            <p className="text-md text-gray-300 lg:text-left font-sans
              opacity-0 animate-slide-in-left duration-700 delay-700">
              Welcome to STEM - Science, Technology, Engineering, and Mathematics, the distinguished
              annual fest meticulously organized by the Anjuman Institute of Technology and Management.
              Our hallmark event gathers bright minds from diverse Pre-University institutions around
              Bhatkal and surrounding regions. Embracing innovation and academic excellence, STEM
              serves as a platform that nurtures aspiring talents while fostering the spirit of
              scientific inquiry and technological advancement.
            </p>
            <p className="text-sm text-gray-500 font-mono
              opacity-0 animate-slide-in-left duration-700 delay-900">
              * College ID Cards are compulsory
            </p>
            {!status ? (
              <div className="flex justify-center lg:justify-start
                opacity-0 animate-slide-in-left duration-700 delay-1100">
                <Link to="/register">
                  <button className="bg-[#da4ea2] text-white font-medium px-6 py-3 rounded-2xl cursor-pointer font-serif 
                    transition-all duration-300 hover:bg-[#b0298c]">
                    Register
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex justify-center lg:justify-start
                opacity-0 animate-slide-in-left duration-700 delay-1100">
                <Link to="/profile">
                  <button className="bg-[#da4ea2] text-white font-medium px-6 py-3 rounded-2xl cursor-pointer font-serif
                    transition-all duration-300 hover:bg-[#b0298c]">
                    My Profile
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <Events />
      <StallSection />

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s forwards;
        }
      `}</style>
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
    </>
  );
};

export default Hero;