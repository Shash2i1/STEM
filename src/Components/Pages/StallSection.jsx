import React, { useState, useEffect } from 'react';

function StallSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Visit", "Shop", "Enjoy"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex md:h-screen flex-col p-1 md:p-8 md:justify-center">
      <h1 className="flex justify-center text-3xl font-bold text-white">STALLS</h1>
      <div className="flex flex-col md:flex-row items-center text-white text-3xl">
        {/* Image Section */}
        <div>
          <img
            src="./img/Stall.png"
            alt="Stall"
            className="w-[800px] animate-[move_2s_infinite_ease_alternate]"
          />
        </div>

        {/* Text Section */}
        <div className="flex w-1/2 items-start justify-center flex-col">
          {/* Animated Word */}
          <div className="font-bold text-7xl text-[#da4ea2] opacity-100 transition-opacity duration-1000 ease-in-out">
            {words[currentWord]}
          </div>

          {/* Description */}
          <div className="mt-12">
            <p className="text-[15px]">
              "Enjoy diverse flavours at our food stalls 
              tasty bites, hearty meals, and great vibes all in one place!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StallSection;
