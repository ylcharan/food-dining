import { useRouter } from "next/router";
import { FC } from "react";

interface DualButtonProps {}

const DualButton: FC<DualButtonProps> = () => {
  const router = useRouter();
  return (
    <div className="w-full flex gap-[4px]">
      <div
        className="btn-primary !rounded-r-none"
        onClick={() => router.push("/food")}
      >
        Food
      </div>
      <div
        className="btn-primary !rounded-l-none"
        onClick={() => router.push("/dining")}
      >
        Dining
      </div>
    </div>
  );
};

export default DualButton;
