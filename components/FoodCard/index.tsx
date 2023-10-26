/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import pancakes from "../../../public/pancakes.webp";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/router";

interface FoodCardProps {
  image: any;
  name: string;
  rating: number;
  price: number;
}

const FoodCard: FC<FoodCardProps> = ({ image, name, rating, price }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-[10px] rounded-[20px] overflow-hidden p-[10px] bg-white shadow-xl">
      <img src={image.src} alt="food" className="rounded-[20px] h-[200px]" />
      <div className="mt-[10px] flex items-center justify-between">
        <div className="text-[24px]">{name}</div>
        <div className="flex gap-[8px] items-center">
          <AiFillStar className="text-[#ffd700] text-[25px]" />
          <div className="text-[18px]">{rating}</div>
        </div>
      </div>
      <div className="text-[20px]">₹ {price}</div>
      <div className="btn-primary" onClick={() => router.push("/success")}>
        Buy Now
      </div>
    </div>
  );
};

export default FoodCard;
