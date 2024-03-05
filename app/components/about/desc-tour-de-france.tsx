import { tourDeFrance_teaser } from "~/assets";
export default function Description() {
  return (
    <section id="description_tour_de_france">
      <div className="bg-gradient-to-r from-yellow-400 via-stone-800 to-yellow-600 bg-clip-text text-transparent font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl pt-10">
        About
      </div>
      <div className="pt-2 pb-8">
        <hr className="w-full h-[2px] bg-gradient-to-r from-yellow-400 via-stone-800 to-yellow-600 border-0" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div>
            <video autoPlay={true} controls={false} muted loop>
                <source src={tourDeFrance_teaser} />
            </video>
        </div>
        <div className="text-base md:text-xl lg:text-2xl font-bold bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          The 24 Hours of Le Mans is an endurance-focused sports car race held
          annually near the town of Le Mans, France. It is widely considered to
          be one of the world's most prestigious races, and is one of the
          races along with the Monaco Grand Prix and Indianapolis 500 that form
          the Triple Crown of Motorsport, and is also one of the races alongside
          the 24 Hours of Daytona and 12 Hours of Sebring that make up the
          informal Triple Crown of endurance racing. Run since 1923, it is the
          oldest active endurance racing event in the world.
        </div>
      </div>
    </section>
  );
}
