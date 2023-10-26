import React from "react";

export default function InfoBanner() {
  return (
    <div className="flex flex-col">
      <div>
        <p>icon</p>
        <p className="text-white">FRI FRAKT VID KÖP ÖVER 999 SEK</p>
      </div>
      <div>
        <p>icon</p>
        <p>SÄKER BETALNING MED KLARNA</p>
      </div>
      <div>
        <p>icon</p>
        <p>ORDER INOM 1-3 LEVERANSDAGAR</p>
      </div>
    </div>
  );
}
