import { NextPage } from "next";

interface DiningProps {}

const Dining: NextPage<DiningProps> = () => {
  return (
    <div className="w-full min-h-screen bg-[#f0f4ff] py-[35px]">
      <div className="base-wrapper">
        <div className="robot py-3 w-full md:w-[50%] text-center md:text-left transition-all duration-300 cursor-pointer text-[#291D89] hover:text-[#4e67eb] font-bold text-[48px]">
          Dining
        </div>
      </div>
    </div>
  );
};

export default Dining;
