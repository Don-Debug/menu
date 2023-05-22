"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRight, CgClose } from "react-icons/cg";
import logo from "@/public/logo.png";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" flex justify-between items-center md:px-[5rem] px-4 py-[1rem] my-shadow fixed top-0 left-0 w-full z-40 bg-[#3f3f3f]">
      <Link href={`/`} draggable="false">
        <div className=" flex sm:gap-[1rem] gap-2 items-center overflow-hidden">
          <Image
            src={logo}
            alt="img"
            width={1000}
            height={1000}
            className=" sm:w-fit w-[10rem] sm:h-[4rem] h-[3rem] object-contain pointer-events-none"
          />
          {/* <h1 className=" sm:text-[1.4rem] text-[1.1rem] font-bold">MENU.AL</h1> */}
        </div>
      </Link>

      <div className=" md:flex hidden justify-between items-center lg:gap-[4rem] gap-2rem">
        <a
          href={`#about`}
          className="text-[1.3rem] hover:bg-[#6f6f6f] hover:text-white px-[1rem] py-[0.5rem] rounded"
          draggable="false"
        >
          About
        </a>
        <a
          href={`/#designs`}
          className="text-[1.3rem] hover:bg-[#6f6f6f] hover:text-white px-[1rem] py-[0.5rem] rounded"
          draggable="false"
        >
          Designs
        </a>
        <a
          href={`/#contact`}
          className="text-[1.3rem] hover:bg-[#6f6f6f] hover:text-white px-[1rem] py-[0.5rem] rounded"
          draggable="false"
        >
          Contact
        </a>
      </div>
      <div className="md:hidden flex">
        {toggle ? (
          <CgClose
            className=" text-[40px] font-bold cursor-pointer text-white"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <CgMenuRight
            className=" text-[40px] font-bold cursor-pointer text-white"
            onClick={() => setToggle(!toggle)}
          />
        )}

        <div
          className={`${
            !toggle ? " hidden" : " flex"
          } py-6 px-2 absolute top-20 right-0 w-[100%] z-20 
             bg-[#3f3f3f] flex items-center justify-center my-shadow`}
        >
          <div className=" flex justify-center items-center flex-col gap-0 w-full px-2 py-8">
            <a
              href={`/#rrethnesh`}
              className="text-[1.2rem] text-white hover:bg-[#6f6f6f] w-full text-center py-4"
              onClick={() => {
                setToggle(!toggle);
              }}
              draggable="false"
            >
              About
            </a>
            <a
              href={`/#galeri`}
              className="text-[1.2rem] text-white hover:bg-[#6f6f6f] w-full text-center py-4"
              onClick={() => {
                setToggle(!toggle);
              }}
              draggable="false"
            >
              Designs
            </a>
            <a
              href={`/#vendodhja`}
              className="text-[1.2rem] text-white hover:bg-[#6f6f6f] w-full text-center py-4"
              onClick={() => {
                setToggle(!toggle);
              }}
              draggable="false"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
