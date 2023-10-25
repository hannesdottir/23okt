import weightlifting from "../images/weightlifting.jpg";
import React from "react";

export default function Banner() {
  return (
    <div>
      <img class="h-3/5 w-full object-cover grayscale" src={weightlifting} />
    </div>
  );
}
