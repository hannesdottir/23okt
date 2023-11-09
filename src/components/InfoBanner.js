import React from "react";
import { AiOutlineCar } from "react-icons/ai";
import { SiKlarna } from "react-icons/si";
import { BsBoxSeam } from "react-icons/bs";

export default function InfoBanner() {
  return (
    <div className="flex flex-col my-20 ml-6">
      <div className="flex flex-row items-center">
        <div className="m-6">
          <AiOutlineCar size={30} />
        </div>
        <p className="ml-4 text-sm">FRI FRAKT VID KÖP ÖVER 999 SEK</p>
      </div>
      <div className="flex flex-row items-center">
        <div className="m-6">
          <SiKlarna size={30} />
        </div>
        <p className="ml-4 text-sm">SÄKER BETALNING MED KLARNA</p>
      </div>
      <div className="flex flex-row items-center">
        <div className="m-6">
          <BsBoxSeam size={30} />
        </div>
        <p className="ml-4 text-sm">ORDER INOM 1-3 LEVERANSDAGAR</p>
      </div>
    </div>
  );
}
