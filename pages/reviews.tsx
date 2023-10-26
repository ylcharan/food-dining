import { NextPage } from "next";
import ReviewCard from "@/components/ReviewCard";

interface ReviewsProps {}

const Reviews: NextPage<ReviewsProps> = () => {
  return (
    <div className="w-full min-h-screen bg-[#f0f4ff] py-[35px]">
      <div className="base-wrapper">
        <div className="robot py-3 w-full md:w-[50%] text-center md:text-left transition-all duration-300 cursor-pointer text-[#291D89] hover:text-[#4e67eb] font-bold text-[48px]">
          Reviews
        </div>
        <div className="flex flex-col text-black">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
