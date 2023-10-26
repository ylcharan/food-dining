import { useRouter } from "next/router";
import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import Menu from "@/components/Menu";
import { BiUser } from "react-icons/bi";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-[80px] border-b-[1.5px] bg-[#f0f4ff] border-[#291d89] ">
      <div className="base-wrapper text-[48px] flex items-center justify-center ">
        <div
          onClick={() => {
            setIsMenuOpen(false);
            router.push("/");
          }}
          className="header-title py-3 w-full md:w-[50%] text-center md:text-left transition-all duration-300 cursor-pointer font-extrabold text-[#291D89] hover:text-[#4e67eb]"
        >
          Food and Dining
        </div>
        <div className="hidden md:flex gap-[20px] items-center justify-end w-[50%] text-[18px]">
          <div onClick={() => router.push("/signup")}>
            <BiUser className="text-[40px] hover-link" />
          </div>
          <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <CgMenuRight className="text-[40px] hover-link" />
            <Menu isOpen={isMenuOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}
