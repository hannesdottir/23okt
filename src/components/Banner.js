import React from "react";
import Navbar from "./Navbar";

export default function Banner() {
  return (
    <div className="bg-pic bg-cover flex flex-col bg-center lg:bg-cover lg:bg-fixed lg:bg-no-repeat">
      <Navbar />
      <div className="flex flex-col items-center pt-44 lg:pt-96 pb-96 lg:mb-44 lg:mt-44">
        <h1 className="text-5xl">LYFT ASTUNGT</h1>
        <p>1000+ NÖJDA KUNDER ★★★★★</p>
        <div>
          <button className="bg-white text-black p-3 font-bold mr-1 my-2">
            SHOPPA NU
          </button>
          <button className="bg-white text-black p-3 font-bold ml-1">
            SE VÅRA RECENSIONER
          </button>
        </div>
      </div>
    </div>
  );
}
