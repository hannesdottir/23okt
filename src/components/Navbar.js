import logga from "../images/logga.jpg";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsBag } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <div class="flex justify-between m-2">
      <div>
        <img src={logga} />
      </div>
      <div class="flex row">
        <HiMagnifyingGlass size={30} class="mx-4" />
        <BsBag size={30} />
        <RxHamburgerMenu size={30} class="mx-4" />
      </div>
    </div>
  );
}
