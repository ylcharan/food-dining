/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import checkGreen from "../public/green-tick.jpg";
import { useRouter } from "next/router";

interface SuccessProps {}

const Success: NextPage<SuccessProps> = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center gap-[20px] h-full flex-col pt-[100px]">
      <img src={checkGreen.src} alt="" />
      <div className="text-[24px]">You have bought the item successfully</div>
      <div className="text-[24px]">Click below to navigate to Restaurants</div>
      <div
        className="btn-primary !w-max px-[150px]"
        onClick={() => router.push("/")}
      >
        Go Back
      </div>
    </div>
  );
};

export default Success;
