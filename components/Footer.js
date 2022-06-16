import React from "react";
import {
  RiGithubFill,
  RiGlobeFill,
  RiMailFill,
  RiTwitterFill,
} from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
import Link from "next/link";

function Footer() {
  return (
    <div className=" px-2 sm:px-4 py-4 bg-slate-600" id="contact">
      <div className="container flex flex-wrap justify-between items-center mx-auto px-8">
        <div className="container flex flex-wrap justify-between items-center mx-auto px-8">
          <div className="flex items-center">
            <span className="text-sm text-gray-300 sm:text-center">
              © 2022{" "}
              <Link href="#" className="hover:underline">
                Fumi Melvin Dev
              </Link>
              . All Rights Reserved.
            </span>
          </div>
          <div className="flex mt-4 space-x-8 sm:justify-center sm:mt-0 text-lg">
            <Link
              href="#"
              className="text-gray-300 cursor-pointer hover:text-secondary"
            >
              <RiTwitterFill />
            </Link>
            <Link
              href="#"
              className="text-gray-300 cursor-pointer hover:text-secondary"
            >
              <RiGithubFill />
            </Link>
            <Link
              href="#"
              className="text-gray-300 cursor-pointer hover:text-secondary"
            >
              <BsGlobe />
            </Link>
            <Link
              href="#"
              className="text-gray-300 cursor-pointer hover:text-secondary"
            >
              <RiMailFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
