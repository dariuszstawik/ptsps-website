import Arrow from "@/components/global-components/arrow";
import { BellPlus } from "lucide-react";

export default function NewsCard() {
  return (
    <div className="min-w-96 flex justify-between gap-4 items-center py-3 px-10 rounded-lg bg-gray-200  z-200">
      <span className="bg-primaryYellow  px-2 py-2 rounded-lg">
        <BellPlus />
        {/* Aktualne */}
      </span>{" "}
      <span className="flex flex-nowrap items-center gap-2">
        <h2 className="text-base">Zapraszamy na konferencję do Katowic! </h2>{" "}
        <Arrow isBlack />
      </span>
    </div>
  );
}
