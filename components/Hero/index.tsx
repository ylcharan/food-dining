import React from "react";
import HotelCard from "../HotelCard";
import hotel1 from "../../public/hotel-1.avif";
import hotel2 from "../../public/hotel-2.avif";
import hotel3 from "../../public/hotel-3.jpeg";
import hotel4 from "../../public/hotel-4.jpeg";
import hotel5 from "../../public/hotel-5.webp";
import hotel6 from "../../public/hotel-6.jpeg";
import hotel7 from "../../public/hotel-7.jpeg";
export default function Hero() {
  const data = [
    {
      img: hotel1,
      distance: 2.1,
      hotelName: "Red Cherry",
      isOpen: true,
      rating: 2.3,
    },
    {
      img: hotel2,
      distance: 15,
      hotelName: "Novotel",
      isOpen: true,
      rating: 4.2,
    },
    {
      img: hotel3,
      distance: 5.5,
      hotelName: "Tajhotel",
      isOpen: true,
      rating: 4.8,
    },
    {
      img: hotel4,
      distance: 25,
      hotelName: "The Lodhi",
      isOpen: true,
      rating: 3.9,
    },
    {
      img: hotel5,
      distance: 55,
      hotelName: "The Roseate",
      isOpen: true,
      rating: 4.1,
    },
    {
      img: hotel6,
      distance: 30,
      hotelName: "Taj Exotica",
      isOpen: true,
      rating: 2.6,
    },
    {
      img: hotel7,
      distance: 87,
      hotelName: "Ritz Carlton",
      isOpen: true,
      rating: 4.6,
    },
    // {
    //   img: hotel8,
    //   distance: 56,
    //   hotelName: "Swissotel",
    //   isOpen: true,
    //   rating: 4.5,
    // },
    // {
    //   img: hotel9,
    //   distance: 38,
    //   hotelName: "Fairmont",
    //   isOpen: true,
    //   rating: 3.9,
    // },
    // {
    //   img: hotel10,
    //   distance: 56,
    //   hotelName: "ITC Grand Bharath",
    //   isOpen: true,
    //   rating: 4.7,
    // },
  ];
  return (
    <div className="w-full min-h-screen bg-[#f0f4ff] py-[35px]">
      <div className="base-wrapper">
        <div className="robot py-3 w-full md:w-[50%] text-center md:text-left transition-all duration-300 cursor-pointer text-[#291D89] hover:text-[#4e67eb] font-bold text-[48px]">
          Restaurants
        </div>
        <div className="grid grid-cols-3 items-center gap-[30px]">
          {data.map((e, i) => (
            <HotelCard
              key={i}
              imgSrc={e.img}
              distance={e.distance}
              hotelName={e.hotelName}
              isOpen={e.isOpen}
              rating={e.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
