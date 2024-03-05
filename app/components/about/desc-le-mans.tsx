import { LeMans_teaser } from "~/assets";
export default function Description() {
  return (
    <section id="description_le_mans">
      <div className="bg-gradient-to-r from-red-600 via-blue-600 to-blue-600 bg-clip-text text-transparent font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl pt-10">
        About
      </div>
      <div className="pt-2 pb-8">
        <hr className="w-full h-[2px] bg-gradient-to-r from-red-600 via-blue-600 to-blue-600 border-0" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch md:gap-10">
        <div>
          <video autoPlay={true} controls={false} muted loop>
            <source src={LeMans_teaser} />
          </video>
        </div>
        <div className="text-base md:text-xl lg:text-2xl font-bold bg-gradient-to-br from-blue-500 to-red-800 bg-clip-text text-transparent">
          The 24 Hours of Le Mans is an endurance-focused sports car race held
          annually near the town of Le Mans, France. It is widely considered to
          be one of the world's most prestigious races, and is one of the races
          along with the Monaco Grand Prix and Indianapolis 500 that form the
          Triple Crown of Motorsport, and is also one of the races alongside the
          24 Hours of Daytona and 12 Hours of Sebring that make up the informal
          Triple Crown of endurance racing. Run since 1923, it is the oldest
          active endurance racing event in the world.
          <div className="mt-4 md:pt-3 flex flex-wrap gap-3">
            <a
              href="#le_mans_2024"
              type="button"
              className="align-middle py-3 px-5 bg-white text-xl md:text-2xl rounded-md font-extrabold"
            >
              <span className="bg-gradient-to-r from-red-900 to-blue-600 bg-clip-text text-transparent">
                2024 Season
              </span>
            </a>
            <a
              href="#le_mans_2023"
              type="button"
              className="align-middle py-3 px-5 bg-white text-xl md:text-2xl rounded-md font-extrabold"
            >
              <span className="bg-gradient-to-r from-red-900 to-blue-600 bg-clip-text text-transparent">
                2023 Season
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
