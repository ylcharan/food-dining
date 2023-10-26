/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import DualButton from "../DualButton";
interface HotelCardInt {
  imgSrc: any;
  hotelName: string;
  rating: number;
  distance: number;
  isOpen: boolean;
}

export default function HotelCard({
  imgSrc,
  hotelName,
  rating,
  distance,
  isOpen = true,
}: HotelCardInt) {
  const router = useRouter();
  return (
    <div className="bg-[#fff] rounded-[20px] flex flex-col p-[15px] gap-[8px] shadow-xl">
      <img src={imgSrc.src} alt="hotel" className="rounded-[20px] h-[250px]" />
      <div className="flex items-center justify-between mt-[8px]">
        <div className="text-[22px]">{hotelName}</div>
        <div className="flex gap-[8px] items-center">
          <AiFillStar className="text-[#ffd700] text-[25px]" />
          <div className="text-[18px]">{rating}</div>
        </div>
      </div>
      <div className="flex gap-[8px]">
        <IoLocationSharp className="text-[25px] text-[#291d89] " />
        <div className="text-[20px]">{distance} KM</div>
      </div>
      <span className="text-[15px] text-gray-600 mb-[8px]">
        {isOpen ? "Opened" : "Closed"}
      </span>
      <div onClick={() => router.push("/food")}>
        <DualButton />
      </div>
    </div>
  );
}
