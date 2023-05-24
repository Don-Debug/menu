import Image from "next/image";
import { firstCol, secCol, thirdCol } from "@/data/Clients";
import { useState } from "react";

export default function Clients() {
  const [numDisplayed, setNumDisplayed] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMore = () => {
    setNumDisplayed(firstCol.length || secCol.length || thirdCol.length);
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setNumDisplayed(3);
    setIsExpanded(false);
  };

  return (
    <>
      <div className="sm:p-[3rem] p-0 py-[3rem] relative overflow-hidden">
        <div className="relative  border border-[#4f4f4f] sm:px-8 px-2 py-12 bg-[#2f2f2f] mt-[15rem] sm:rounded-lg rounded-none">
          <h1 className="absolute mt-[-6rem] ml-4 px-[2rem] py-[1rem] bg-[#ff5500] rounded-lg sm:text-[2rem] text-[1.5rem] font-bold title-shadow">
            Our Clients
          </h1>
          <p className="p-8 px-4 text-[#ff5500] font-light tracking-wider">
            See what other peoples think
          </p>

          <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-4">
            <div className="flex flex-col justify-start items-center gap-8 ">
              {firstCol.slice(0, numDisplayed).map((col, index) => (
                <div
                  key={index}
                  className="bg-[#3f3f3f] border border-[#ff5500] p-4 rounded-lg flex flex-col justify-center items-start gap-4 w-auto shadow-2xl h-fit"
                >
                  <div className="flex justify-start items-center gap-4">
                    <Image
                      src={col.pic}
                      alt="profile"
                      width={1000}
                      height={1000}
                      className="w-16 h-16 object-cover rounded-full shadow-2xl"
                    />
                    <div className="flex flex-col">
                      <h1 className="text-[1.5rem] font-bold text-[#cdcdcd]">
                        {col.name}
                      </h1>
                      <h2>{col.job}</h2>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#c9c9c9]">{col.msg}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="sm:flex hidden flex-col justify-start items-center gap-8">
              {secCol.slice(0, numDisplayed).map((col, index) => (
                <div
                  key={index}
                  className="bg-[#3f3f3f] border border-[#ff5500] p-4 rounded-lg flex flex-col justify-center items-start gap-4 w-auto shadow-2xl h-fit"
                >
                  <div className="flex justify-start items-center gap-4">
                    <Image
                      src={col.pic}
                      alt="profile"
                      width={1000}
                      height={1000}
                      className="w-16 h-16 object-cover rounded-full shadow-2xl"
                    />
                    <div className="flex flex-col">
                      <h1 className="text-[1.5rem] font-bold text-[#cdcdcd]">
                        {col.name}
                      </h1>
                      <h2>{col.job}</h2>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#c9c9c9]">{col.msg}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:flex hidden flex-col justify-start items-center gap-8">
              {thirdCol.slice(0, numDisplayed).map((col, index) => (
                <div
                  key={index}
                  className="bg-[#3f3f3f] border border-[#ff5500] p-4 rounded-lg flex flex-col justify-center items-start gap-4 w-auto shadow-2xl h-fit"
                >
                  <div className="flex justify-start items-center gap-4">
                    <Image
                      src={col.pic}
                      alt="profile"
                      width={1000}
                      height={1000}
                      className="w-16 h-16 object-cover rounded-full shadow-2xl"
                    />
                    <div className="flex flex-col">
                      <h1 className="text-[1.5rem] font-bold text-[#cdcdcd]">
                        {col.name}
                      </h1>
                      <h2>{col.job}</h2>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#c9c9c9]">{col.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute py-24 left-0 z-20 bottom-0 flex justify-center items-center gradient w-full">
            {!isExpanded && numDisplayed < firstCol.length && (
              <button
                className="border border-[#ff5500] px-[1rem] text-[1.2rem] font-semibold hover:bg-[#ff5500] text-[#ff5500] hover:text-[#fff] py-[0.5rem] rounded-md outline-none"
                onClick={handleShowMore}
              >
                Show More
              </button>
            )}
            {isExpanded && (
              <button
                className="border border-[#ff5500] px-[1rem] text-[1.2rem] font-semibold hover:bg-[#ff5500] text-[#ff5500] hover:text-[#fff] py-[0.5rem] rounded-md outline-none"
                onClick={handleShowLess}
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
