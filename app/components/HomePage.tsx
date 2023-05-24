import Image from "next/image";
import qrscan from "@/public/qr-scan.gif";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="w-full h-screen home relative">
        <div className="flex md:flex-row flex-col justify-between items-center sm:h-[80%] h-[80vh] px-[2rem] absolute z-10">
          <div className="md:w-[45%] w-[100%] mt-[5rem] md:mt-0 flex justify-start sm:items-start items-center gap-2 sm:gap-8 flex-col pl-4">
            <h1 className="sm:text-[2.5rem] text-[1.6rem] font-bold">
              This is the time for you to have your own digital menu
            </h1>
            <a
              href={`#contact`}
              draggable="false"
              className="px-[2rem] sm:py-[1rem] py-3 border-[2px] sm:border-[#ff5500] border-[#fff] text-[1rem] sm:text-[1.3rem] sm:text-[#ff5500] font-semibold uppercase rounded-lg mt-8 text-[#fff] cursor-pointer"
            >
              Contact Us
            </a>
          </div>
          <div className="md:w-[50%] w-[100%] relative">
            <div className="w-[30rem] h-[30rem] bg-[#ff5500] title-shadow radius object-contain pointer-events-none absolute z-[-1] bottom-0" />
            <Image
              src={qrscan}
              alt="qr-scan"
              width={1000}
              height={1000}
              className="sm:w-[30rem] w-[40rem] sm:h-[30rem] h-[20rem] object-contain pointer-events-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}
