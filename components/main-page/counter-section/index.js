import Counter from "../../global-components/counter";
import SectionTitle from "../../global-components/section-title";

export default function CounterSection() {
  return (
    <div>
      <SectionTitle>Superwizja w liczbach</SectionTitle>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="w-96 flex flex-col justify-center items-center gap-10">
          <span className="flex text-primaryBlue font-bold">
            <Counter end={20000} />
          </span>
          <span className="text-center">liczb pracowników socjalnych</span>
        </div>
        <div className="w-96 flex flex-col justify-center items-center gap-10">
          <span className="flex text-primaryBlue font-bold">
            <Counter end={16} />
            <h1>%</h1>
          </span>
          <span className="text-center">
            {" "}
            procent pracowników socjalnych objętych superwizją
          </span>
        </div>
        <div className="w-96 flex flex-col justify-center items-center gap-10">
          <span className="flex text-primaryBlue font-bold">
            <Counter end={8} />
            <h1>%</h1>
          </span>
          <span className="text-center">
            {" "}
            liczba pracowników objętych superwizją PTSPS
          </span>
        </div>
      </div>
    </div>
  );
}
