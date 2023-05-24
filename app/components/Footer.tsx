import Link from "next/link";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#3f3f3f] text-white py-[2rem] mt-[10rem]" id="contact">
      <div className="flex md:flex-row flex-col justify-between items-start  gap-8 sm:px-[3rem] px-2 py-[2rem]">
        <div className="flex flex-col gap-4 items-start justify-start">
          <p className="p-2 text-[#ff5500] font-light tracking-wider">
            Contact us to build your own digital menu
          </p>
          <Link
            href={`tel:+355692931309`}
            className="flex items-center gap-2 text-[1.4rem] mt-2"
            draggable="false"
          >
            <BsTelephone size={25} /> +355690101001
          </Link>
          <Link
            target="blank"
            href={`/`}
            className="flex items-center gap-2 text-[1.4rem] mt-2"
            draggable="false"
          >
            <BsInstagram size={25} />
            [siteName]
          </Link>
          <Link
            href={`/`}
            className="flex items-center gap-2 text-[1.4rem] mt-2"
            target="blank"
            draggable="false"
          >
            <AiOutlineMail size={25} />
            site@gmail.com
          </Link>
        </div>
        <div className="self-start bg-[#4f4f4f] border border-[#6f6f6f] shadow-2xl rounded-lg py-8 sm:px-8 px-4">
          <p className="pb-4 text-[#ff5500] font-light tracking-wider">
            Leave us a message and we will reply as soon as possible
          </p>

          <form className="flex flex-row w-full">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 email-radius w-full bg-transparent text-white border border-[#ff5500] outline-none"
              autoComplete="none"
            />

            <button
              type="submit"
              className="bg-[#ff5500] p-2 text-[1.1rem] btn-radius  px-6"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <p className="text-center">
        Copyright © {year} [akoma sja kemi gjetur emrin]
      </p>
    </div>
  );
}
