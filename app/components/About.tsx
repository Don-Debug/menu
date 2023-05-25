import Image from "next/image";
import ilustration from "@/public/ilustration.png";

export default function About() {
  return (
    <>
      <div className="sm:p-[3rem] p-0 py-[3rem]" id="about">
        <div className="relative sm:px-8 px-4 py-12 bg-[#2f2f2f] mt-[15rem] sm:rounded-lg rounded-none border border-[#4f4f4f]">
          <h1 className="absolute mt-[-6rem] ml-4 px-[2rem] py-[1rem] bg-[#ff5500] rounded-lg sm:text-[2rem] text-[1.5rem] font-bold title-shadow">
            About Us
          </h1>
          <div className="flex lg:flex-row flex-col justify-around items-center">
            <div className="lg:w-[60%] w-[100%] relative z-30">
              <p className="md:p-8 p-0">
                Welcome to [Your Website Name]! We are passionate about helping
                bars and restaurants showcase their menus in a digital format.
                With our innovative platform, we provide a seamless experience
                for both businesses and their valued customers. Our mission is
                to revolutionize the way menus are presented, making it easier
                than ever to explore the delectable offerings of your favorite
                establishments. By utilizing our subdomain system, each venue
                can have its own dedicated space to represent their unique menu
                in a user-friendly and visually appealing manner. At [Your
                Website Name], we prioritize simplicity and convenience. Our
                platform offers features such as easy menu customization, smooth
                navigation, and quick updates, ensuring that your menu is always
                up to date and accessible. Whether you're a bustling bar or a
                cozy restaurant, we've got you covered. Join us in embracing the
                digital era and discover the modern way to showcase your
                culinary delights. Start exploring the diverse menus on our
                platform today and experience the convenience and excitement of
                a digital dining adventure. We are committed to supporting
                businesses in their quest to provide memorable dining
                experiences, and we look forward to being a part of your
                journey. Cheers to great food and unforgettable moments!
              </p>
            </div>
            <div className="lg:w-[50%] w-auto relative self-center">
              <div className="w-[30rem] h-[30rem] bg-[#ff5500] title-shadow about-radius object-contain pointer-events-none absolute z-[1] bottom-0 flex justify-center items-center" />
              <Image
                src={ilustration}
                alt="man-using-digital-menu"
                width={1000}
                height={1000}
                className="sm:w-[30rem] w-[40rem] z-10 relative sm:h-[30rem] h-[30rem] object-contain sm:scale-100 scale-110 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
