import { LeMans_teaser } from "~/assets";
import { useState } from "react";

export default function Description() {
  const [lang, setLang] = useState(false);
  const handleTranslate = () => {
    setLang(!lang);
  };
  return (
    <section id="description_le_mans">
      <div className="bg-gradient-to-r from-red-600 via-blue-600 to-blue-600 bg-clip-text text-transparent font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl pt-10">
        {lang ? "À propos" : "About"}
      </div>
      <div className={lang ? "mt-1 pt-2 pb-4" : "pt-2 pb-4"}>
        <hr className="w-full h-[2px] bg-gradient-to-r from-red-600 via-blue-600 to-blue-600 border-0" />
      </div>
      <div className="flex justify-end px-2 pb-6">
        <div className="align-middle py-1 px-2 bg-white text-sm sm:text-base md:text-lg rounded-sm font-bold">
          <button
            onClick={handleTranslate}
            className="bg-gradient-to-r from-red-900 to-blue-600 bg-clip-text text-transparent"
            type="button"
          >
            <i className="fa-solid fa-globe"></i>&nbsp;
            <span>{lang ? "English" : "Français"}</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch md:gap-10">
        <div>
          <video autoPlay={true} controls={false} muted loop>
            <source src={LeMans_teaser} />
          </video>
        </div>
        <div className="text-base md:text-xl lg:text-2xl font-bold bg-gradient-to-br from-blue-500 to-red-800 bg-clip-text text-transparent">
          {lang ? (
            <div>
              Les 24 Heures du Mans sont une course de voitures de sport axée
              sur l'endurance organisé chaque année près de la ville du Mans, en
              France. C'est largement considérée comme l'une des courses les
              plus prestigieuses au monde, et est une des courses avec le Grand
              Prix de Monaco et d'Indianapolis 500 qui forment la Triple
              Couronne du sport automobile, et est également l'un des les
              courses aux côtés des 24 Heures de Daytona et des 12 Heures de
              Sebring qui composent la Triple Couronne informelle d'endurance
              courses. Courue depuis 1923, c'est la plus ancienne course
              d'endurance active événement dans le monde.
            </div>
          ) : (
            <div>
              The 24 Hours of Le Mans is an endurance-focused sports car race
              held annually near the town of Le Mans, France. It is widely
              considered to be one of the world's most prestigious races, and is
              one of the races along with the Monaco Grand Prix and Indianapolis
              500 that form the Triple Crown of Motorsport, and is also one of
              the races alongside the 24 Hours of Daytona and 12 Hours of
              Sebring that make up the informal Triple Crown of endurance
              racing. Run since 1923, it is the oldest active endurance racing
              event in the world.
            </div>
          )}
          <div className="mt-4 md:pt-3 flex flex-wrap gap-3">
            <a
              href="#le_mans_2024"
              type="button"
              className="align-middle py-3 px-4 bg-white text-xl md:text-2xl rounded-md font-extrabold"
            >
              <span className="bg-gradient-to-r from-red-900 to-blue-600 bg-clip-text text-transparent">
                2024 {lang ? "Saison" : "Season"}
              </span>
            </a>
            <a
              href="#le_mans_2023"
              type="button"
              className="align-middle py-3 px-4 bg-white text-xl md:text-2xl rounded-md font-extrabold"
            >
              <span className="bg-gradient-to-r from-red-900 to-blue-600 bg-clip-text text-transparent">
                2023 {lang ? "Saison" : "Season"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
