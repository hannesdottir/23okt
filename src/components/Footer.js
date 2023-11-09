import React from "react";
import cards from "../images/cards.png";
import { CiMail, CiInstagram, CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <hr className="bg-white" />
      <div className="flex flex-col md:flex-row justify-center m-4">
        <div className="m-8">
          <h1 className="font-bold mb-5">SIDOFOTSMENY</h1>
          <p className="my-4">ANVÄNDARVILLKOR</p>
          <p className="my-4">ARTIKLAR</p>
          <p className="my-4">FAQ</p>
          <p className="my-4">KUNDTJÄNST</p>
          <p className="my-4">INTEGRITETSPOLICY</p>
          <p className="my-4">KÖPVILLKOR</p>
          <p className="my-4">VÅR STORY</p>
          <p className="my-4">ÅTERBETALINGSPOLICY</p>
        </div>
        <hr className="md:bg-white" />
        <div className="m-8">
          <h1 className="font-bold mb-5">KONTAKTA OSS</h1>
          <div className="flex flex-row">
            <CiMail className="mr-2" />
            <p className="underline  mb-5">MAILA OSS</p>
          </div>
          <p className="font-bold">FÖLJ OSS</p>
          <div className="flex flex-row mt-3">
            <CiInstagram size={20} className="mr-4" />
            <CiFacebook size={20} className="mr-4" />
            <FaTiktok size={20} />
          </div>
        </div>
        <div className="m-8">
          <h1 className="font-bold mb-5">VI TAR EMOT BETALNINGAR MED</h1>
          <img src={cards} alt="logga" />
        </div>
      </div>
      <hr className="bg-white mb-6" />
      <div className="m-6 flex justify-center">
        <p>
          © <span className="mx-3"></span>2023 ASTUNGT
        </p>
      </div>
    </div>
  );
}
