import { dataLeMans } from "~/components/history/data/le-mans";

interface HistoryCardProps {
  time: string;
  content: string;
  color: string;
}

const HistoryCard = ({time, content, color}:HistoryCardProps) => {
  return (
    <main className="bg-[rgba(0,0,0,0.5)] rounded-md max-w-[400px] drop-shadow-md">
      <div className="bg-white py-3 px-4 rounded-t-md font-extrabold text-xl sm:text-2xl history-period">
        <span className="bg-gradient-to-br from-blue-500 to-red-800 bg-clip-text text-transparent">
          {time}
        </span>
      </div>
      <div className={`py-5 px-6 bg-gradient-to-br from-white via-${color}-200 to-white bg-clip-text text-transparent text-base sm:text-lg`}>
        {content}
      </div>
    </main>
  );
}

export default function History() {
  return (
    <section>
        <br />
        <br />
      <div className="bg-gradient-to-r from-red-600 via-blue-600 to-blue-600 bg-clip-text text-transparent font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl pt-10 pb-4">
        History
      </div>
      <div className="pt-2 pb-8">
        <hr className="w-full h-[2px] bg-gradient-to-r from-red-600 via-blue-600 to-blue-600 border-0" />
      </div>
      <div className="flex flex-row flex-wrap items-stretch justify-center gap-6">
        {dataLeMans.map((data) => (
            <HistoryCard
            key={data.index}
            time={data.time}
            content={data.content}
            color={data.color} 
            />
        ))}
      </div>
    </section>
  );
}
