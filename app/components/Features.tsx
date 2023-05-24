import { FaMoneyBillWave } from "react-icons/fa";
import { HiDeviceTablet } from "react-icons/hi";
import { CgArrowsExchangeAlt } from "react-icons/cg";

export default function Features() {
  return (
    <>
      <div className="bg-[#2f2f2f] flex justify-around flex-wrap items-start p-8 py-16 ">
        <div className="flex flex-col justify-center items-center w-[15rem] my-4">
          <FaMoneyBillWave color="#ff5500" size={35} />
          <p className="text-[1.3rem] font-semibold p-4 text-center">
            Minimize the printing costs with the digital menu
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[15rem] my-4">
          <HiDeviceTablet color="#ff5500" size={35} />
          <p className="text-[1.3rem] font-semibold p-4 text-center">
            Very easy and accessable from every device
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[15rem] my-4">
          <CgArrowsExchangeAlt color="#ff5500" size={35} />
          <p className="text-[1.3rem] font-semibold p-4 text-center">
            Prices and products can change without any extra cost
          </p>
        </div>
      </div>
    </>
  );
}
