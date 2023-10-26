import { FC, useState } from "react";
import { useRouter } from "next/router";
import { CgMenuRight } from "react-icons/cg";

interface MenuProps {
  isOpen: boolean;
}

const Menu: FC<MenuProps> = ({ isOpen }) => {
  const router = useRouter();

  return (
    <div
      className={`${
        isOpen ? "bg-[#f0f4ff] translate-y-0" : "-translate-y-[150vh] opacity-0"
      } absolute left-0 top-0 w-full h-screen transition-all z-[100] duration-700`}
    >
      <div className="min-h-[80px] border-b-[1.5px] bg-[#f0f4ff] border-[#291d89] ">
        <div className="base-wrapper text-[48px] flex items-center justify-center ">
          <div
            onClick={() => {
              isOpen = false;
              router.push("/");
            }}
            className="header-title py-3 w-full md:w-[50%] text-center md:text-left transition-all duration-300 cursor-pointer text-[#291D89] hover:text-[#4e67eb] font-extrabold"
          >
            Food and Dining
          </div>
          <div className="hidden md:flex gap-[20px] items-center justify-end w-[50%] text-[18px]">
            <div onClick={() => (isOpen = false)}>
              <CgMenuRight className="text-[40px] hover-link cursor-pointer" />
              {/* <Menu isOpen={isOpen} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[20px] text-[60px] text-[#291d89] h-full pb-[100px]">
        <div className="hover-link" onClick={() => router.push("/track")}>
          Track My Order
        </div>
        <div className="hover-link" onClick={() => router.push("/reviews")}>
          Reviews
        </div>
        <div className="hover-link" onClick={() => router.push("/")}>
          Reservations
        </div>
      </div>
    </div>
  );
};

export default Menu;
