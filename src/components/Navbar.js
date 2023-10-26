import logga from "../images/logga.jpg";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsBag } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <div className="flex justify-between p-4">
      <div>
        <img src={logga} alt="logga" />
      </div>
      <div className="flex row">
        <HiMagnifyingGlass size={30} className="mx-4" />
        <BsBag size={30} />
        <RxHamburgerMenu size={30} className="mx-4" />
      </div>
    </div>
  );
}
