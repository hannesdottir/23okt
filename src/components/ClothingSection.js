import React from "react";
import shortsfram from "../images/shortsfram.jpg";

export default function ClothingSection() {
  return (
    <div>
      <div className="flex flex-row justify-between m-6 md:m-24">
        <h1 className="text-3xl">TRÄNINGSKLÄDER</h1>
        <p className="underline  md:ml-72">VISA ALLA</p>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 xl:gap-12  xl:mx-80 xl:my-20">
        <div className="flex flex-col items-center mx-8 my-8">
          <img className="w-60 xl:w-96 " src={shortsfram} alt="logga" />
          <p>ASTUNGT SHORTS</p>
          <p>
            ⭐⭐⭐⭐⭐ <span className="text-xs">1 RECENISION</span>
          </p>
          <p>
            424 KR <span className="line-through">499 KR</span>
            {"  "}
            <span className="text-red-500 text-xs">SPARA 15%</span>
          </p>
        </div>
        <div className="flex flex-col items-center mx-8 my-8">
          <img className="w-60 xl:w-96" src={shortsfram} alt="logga" />
          <p>ASTUNGT SHORTS</p>
          <p>
            ⭐⭐⭐⭐⭐ <span className="text-xs">1 RECENISION</span>
          </p>
          <p>
            424 KR <span className="line-through">499 KR</span>
            {"  "}
            <span className="text-red-500 text-xs">SPARA 15%</span>
          </p>
        </div>
        <div className="flex flex-col items-center mx-8 my-8">
          <img className="w-60 xl:w-96" src={shortsfram} alt="logga" />
          <p>ASTUNGT SHORTS</p>
          <p>
            ⭐⭐⭐⭐⭐ <span className="text-xs">1 RECENISION</span>
          </p>
          <p>
            424 KR <span className="line-through">499 KR</span>
            {"  "}
            <span className="text-red-500 text-xs">SPARA 15%</span>
          </p>
        </div>
        <div className="flex flex-col items-center mx-8 my-8">
          <img className="w-60 xl:w-96" src={shortsfram} alt="logga" />
          <p>ASTUNGT SHORTS</p>
          <p>
            ⭐⭐⭐⭐⭐ <span className="text-xs">1 RECENISION</span>
          </p>
          <p>
            424 KR <span className="line-through">499 KR</span>
            {"  "}
            <span className="text-red-500 text-xs">SPARA 15%</span>
          </p>
        </div>
        <div className="flex flex-col items-center mx-8 my-8">
          <img className="w-60 xl:w-96" src={shortsfram} alt="logga" />
          <p>ASTUNGT SHORTS</p>
          <p>
            ⭐⭐⭐⭐⭐ <span className="text-xs">1 RECENISION</span>
          </p>
          <p>
            424 KR <span className="line-through">499 KR</span>
            {"  "}
            <span className="text-red-500 text-xs">SPARA 15%</span>
          </p>
        </div>
        <div className="flex flex-col items-center mx-8 my-8">
          <img className="w-60 xl:w-96" src={shortsfram} alt="logga" />
          <p>ASTUNGT SHORTS</p>
          <p>
            ⭐⭐⭐⭐⭐ <span className="text-xs">1 RECENISION</span>
          </p>
          <p>
            424 KR <span className="line-through">499 KR</span>
            {"  "}
            <span className="text-red-500 text-xs">SPARA 15%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
