import React from "react";
import shortsfram from "../images/shortsfram.jpg";

export default function ClothingSection() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row justify-between m-6">
        <h1 className="text-3xl">TRÄNINGSKLÄDER</h1>
        <p className="underline">VISA ALLA</p>
      </div>
      <div className="flex flex-row">
        <div>
          <img
            style={{ width: 200, height: 200 }}
            src={shortsfram}
            alt="logga"
          />
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
        <div>
          <img
            style={{ width: 200, height: 200 }}
            src={shortsfram}
            alt="logga"
          />
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
        <div>
          <img
            style={{ width: 200, height: 200 }}
            src={shortsfram}
            alt="logga"
          />
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
        <div>
          <img
            style={{ width: 200, height: 200 }}
            src={shortsfram}
            alt="logga"
          />
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
        <div>
          <img
            style={{ width: 200, height: 200 }}
            src={shortsfram}
            alt="logga"
          />
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
        <div>
          <img
            style={{ width: 200, height: 200 }}
            src={shortsfram}
            alt="logga"
          />
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
