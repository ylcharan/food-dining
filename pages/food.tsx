import React from "react";
import FoodCard from "@/components/FoodCard";
import image1 from "../public/burger.jpeg";
import image2 from "../public/dumBiriyani.jpeg";
import image3 from "../public/frechfries.jpeg";
import image4 from "../public/pizza.jpeg";
import image5 from "../public/pancakes.webp";
import image6 from "../public/roll.jpeg";
import image7 from "../public/tan.jpeg";
import image8 from "../public/idle.jpeg";
import image9 from "../public/rice.jpeg";
import image10 from "../public/ramen.jpeg";

export default function Food() {
  const data = [
    {
      img: image1,
      rating: 4.3,
      cost: 80,
      name: "burger",
    },
    {
      img: image2,
      rating: 4.5,
      cost: 250,
      name: "Dum Biryani",
    },
    {
      img: image3,
      rating: 4.8,
      cost: 30,
      name: "French Fries",
    },
    {
      img: image4,
      rating: 3.8,
      cost: 300,
      name: "Pizza + Cheese",
    },
    {
      img: image5,
      rating: 3.9,
      cost: 150,
      name: "Pancake",
    },
    {
      img: image6,
      rating: 4.6,
      cost: 300,
      name: "veg roll",
    },
    {
      img: image7,
      rating: 4.9,
      cost: 300,
      name: "Tandoori",
    },
    {
      img: image8,
      rating: 2.4,
      name: "Sambar Idly",
      cost: 30,
    },
    {
      img: image9,
      rating: 3.7,
      cost: 70,
      name: "Sambar Rice",
    },
    {
      img: image10,
      rating: 2.9,
      cost: 500,
      name: "Ramen",
    },
  ];
  return (
    <div className="w-full min-h-screen bg-[#f0f4ff] py-[35px]">
      <div className="base-wrapper">
        <div className="robot py-3 w-full md:w-[50%] text-center md:text-left transition-all duration-300 cursor-pointer text-[#291D89] hover:text-[#4e67eb] font-bold text-[48px]">
          Foods
        </div>
        <div className="grid grid-cols-4 gap-[20px]">
          {data.map((e, i) => (
            <FoodCard
              key={i}
              image={e.img}
              name={e.name}
              price={e.cost}
              rating={e.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
