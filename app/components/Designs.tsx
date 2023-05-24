import desings from "@/data/Designs";
import Image from "next/image";
import Link from "next/link";

export default function Designs() {
  return (
    <>
      <div className="sm:p-[3rem] p-0 py-[3rem]" id="designs">
        <div className="relative  border border-[#4f4f4f] sm:px-8 px-2 py-12 bg-[#2f2f2f] mt-[15rem] sm:rounded-lg rounded-none">
          <h1 className="absolute mt-[-6rem] ml-4 px-[2rem] py-[1rem] bg-[#ff5500] rounded-lg sm:text-[2rem] text-[1.5rem] font-bold title-shadow">
            Designs
          </h1>
          <p className="md:p-8 p-0 px-4 text-[#ff5500] font-light tracking-wider">
            You can choose one of our design templates for your menu
          </p>

          <div className="my-8 w-[100%] mx-auto flex overflow-x-auto snap-x snap-mandatory vertical-sb py-4 gap-3">
            {desings.map((demo, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center xs:w-[320px] w-full max-w-[320px]"
              >
                <div className="bg-[#6f6f6f] border-[2px] border-[#ff5500] aspect-[5/4] overflow-hidden rounded-[0.8rem] relative ">
                  <Image
                    src={demo.photo}
                    alt={`${demo.name}`}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <Link
                    href={`${demo.link}`}
                    draggable="false"
                    className="flex justify-center items-center px-[1.5rem] py-[1rem] bg-[#ff5500de] absolute w-full bottom-0 font-bold tracking-wide"
                  >
                    See Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
