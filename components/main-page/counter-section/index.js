import Counter from "../../global-components/counter";
import SectionTitle from "../../global-components/section-title";

export default function CounterSection() {
  return (
    <section>
      <SectionTitle>Superwizja w liczbach</SectionTitle>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="w-96 flex flex-col justify-center items-center gap-6 bg-gray-100 rounded-lg px-6 py-10">
          <span className="flex text-primaryBlue font-bold">
            <Counter end={20000} />
          </span>
          <span className="text-center text-xl">
            liczba pracowników socjalnych
            <span className="block text-primaryBlue">w Polsce</span>
          </span>
        </div>
        <div className="w-96 flex flex-col justify-center items-center gap-6 bg-gray-100 rounded-lg px-6 py-10">
          <span className="flex text-primaryBlue font-bold">
            <Counter end={16} />
            <h1>%</h1>
          </span>
          <span className="text-center text-xl">
            {" "}
            procent pracowników socjalnych
            <span className="block text-primaryBlue">objętych superwizją </span>
          </span>
        </div>
        <div className="w-96 flex flex-col justify-center items-center gap-6 bg-gray-100 rounded-lg px-6 py-10">
          <span className="flex text-primaryBlue font-bold">
            <Counter end={8} />
            <h1>%</h1>
          </span>
          <span className="text-center text-xl">
            {" "}
            procent pracowników socjalnych
            <span className="block text-primaryBlue">
              objętych superwizją PTSPS
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
