import desings from "@/data/Designs";
import Image from "next/image";
import Link from "next/link";

export default function Clients() {
  return (
    <>
      <div className="sm:p-[3rem] p-0 py-[3rem]">
        <div className="relative  border border-[#6f6f6f] sm:px-8 px-2 py-12 bg-[#4f4f4f] mt-[15rem] sm:rounded-lg rounded-none">
          <h1 className="absolute mt-[-6rem] ml-4 px-[2rem] py-[1rem] bg-[#ff5500] rounded-lg sm:text-[2rem] text-[1.5rem] font-bold title-shadow">
            Clients
          </h1>
          <p className="md:p-8 p-0 px-4 text-[#ff5500] font-light tracking-wider">
            Here are our Clients
          </p>
        </div>
      </div>
    </>
  );
}
