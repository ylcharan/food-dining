/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import human1 from "../../public/human.avif";

interface ReviewCardProps {}

const ReviewCard: FC<ReviewCardProps> = () => {
  return (
    <div className="w-full bg-white mb-[20px] rounded-[20px] flex p-[20px]">
      <div className="flex gap-[8px] items-center">
        <img
          src={human1.src}
          alt=""
          className="w-[60px] h-[60px] rounded-full object-cover"
        />
        <div className="text-[24px]">Arundathi</div>
      </div>
    </div>
  );
};

export default ReviewCard;
