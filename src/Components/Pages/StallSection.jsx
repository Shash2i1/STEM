import React, { useState, useEffect } from 'react';

function StallSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Visit", "Explore", "Shop", "Enjoy"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 2500); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="flex h-screen flex-col p-8 justify-center">
      <h1 className="flex justify-center text-3xl font-bold text-white">STALLS</h1>
      <div className="flex flex-col md:flex-row items-center text-white text-3xl">
        <div>
          <img
            src="./img/Stall.png"
            alt="Stall"
            className="w-[800px] animate-[move_2s_infinite_ease_alternate]"
          />
        </div>
        <div className="flex w-1/2 items-center justify-center">
        <div
              className={`font-bold text-7xl opacity-0 transition-opacity duration-1000 ease-in-out text-[#da4ea2] animate-[move_2s_infinite_ease_alternate] ${
                currentWord === 0
                  ? 'opacity-100'
                  : currentWord === 1
                  ? 'opacity-100'
                  : currentWord === 2
                  ? 'opacity-100'
                  : currentWord === 3
                  ? 'opacity-100'
                  : ''
              }`}
            >
              {words[currentWord]}
            </div>
        </div>
      </div>
    </section>
  );
}

export default StallSection;
