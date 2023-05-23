import Image from "next/image";
import form from "@/public/form.svg";
import qrscan from "@/public/qr-scan.gif";

export default function HomePage() {
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="absolute top-0 left-0 w-full h-full z-[-11]">
          <Image
            src={form}
            alt="home"
            className="w-full h-screen object-cover pointer-events-none"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center sm:h-[80%] h-[80vh] px-[2rem]">
          <div className="md:w-[50%] w-[100%] md:mt-0 mt-[5rem]">
            <h1 className="sm:text-[2.5rem] text-[2rem] font-bold">
              This is the time for you to have your own digital menu
            </h1>
          </div>
          <div className="md:w-[50%] w-[100%]">
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
