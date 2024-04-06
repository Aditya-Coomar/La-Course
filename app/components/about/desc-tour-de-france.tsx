import { tourDeFrance_teaser } from "~/assets";
import { useState } from "react";

export default function Description() {
  const [lang, setLang] = useState(false);
  const handleTranslate = () => {
    setLang(!lang);
  };
  return (
    <section id="description_tour_de_france">
      <div className="bg-gradient-to-r from-yellow-400 via-stone-800 to-yellow-600 bg-clip-text text-transparent font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl pt-10">
        {lang ? "À propos" : "About"}
      </div>
      <div className="pt-2 pb-8">
        <hr className="w-full h-[2px] bg-gradient-to-r from-yellow-400 via-stone-800 to-yellow-600 border-0" />
      </div>
      <div className="flex justify-end px-2 pb-6">
        <div className="align-middle py-1 px-2 bg-white text-sm sm:text-base md:text-lg rounded-sm font-bold">
          <button
            onClick={handleTranslate}
            className="bg-gradient-to-r from-yellow-400 via-stone-800 to-yellow-600 bg-clip-text text-transparent"
            type="button"
          >
            <i className="fa-solid fa-globe"></i>&nbsp;
            <span>{lang ? "English" : "Français"}</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div>
          <video autoPlay={true} controls={false} muted loop>
            <source src={tourDeFrance_teaser} />
          </video>
        </div>
        <div className="text-base md:text-xl lg:text-2xl font-bold bg-gradient-to-br from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          {lang ? (
            <div>
              Le Tour de France est une course cycliste annuelle emblématique qui
               captive le monde avec sa compétition passionnante et sa richesse
               histoire. Créé en 1903, il s'étend sur trois semaines en juillet,
               couvrant environ 3 500 kilomètres sur des terrains variés
               dans toute la France et parfois dans les pays voisins. La course
               comprend 21 étapes, dont des ascensions en montagne, des sprints sur plat et
               contre-la-montre individuels, testant l'endurance, la force et la performance des cyclistes.
               prouesses tactiques. Les cavaliers concourent à la fois individuellement et dans le cadre de
               équipes, visant le très convoité maillot jaune, décerné aux
               leader du classement général. Aux côtés du jaune
               maillot, les coureurs se disputent également d'autres titres prestigieux comme le
               maillot vert pour les sprinteurs et maillot à pois pour les meilleurs
               grimpeur. Le Tour de France attire des millions de spectateurs
               dans le monde entier et reste un symbole d’athlétisme, de détermination et
               l'esprit du cyclisme de compétition.
            </div>
          ) : (
            <div>
              The Tour de France is an iconic annual cycling race that
              captivates the world with its thrilling competition and rich
              history. Established in 1903, it spans over three weeks in July,
              covering approximately 3,500 kilometers across varied terrains
              throughout France and sometimes neighboring countries. The race
              comprises 21 stages, including mountain climbs, flat sprints, and
              individual time trials, testing cyclists' endurance, strength, and
              tactical prowess. Riders compete both individually and as part of
              teams, aiming for the coveted yellow jersey, awarded to the
              overall leader in the general classification. Alongside the yellow
              jersey, riders also vie for other prestigious titles such as the
              green jersey for sprinters and the polka dot jersey for the best
              climber. The Tour de France attracts millions of spectators
              worldwide and remains a symbol of athleticism, determination, and
              the spirit of competitive cycling.
            </div>
          )}
          <div className="mt-4 md:pt-3 flex flex-wrap gap-3">
            <a
              href="#tdf_2024"
              type="button"
              className="align-middle py-3 px-4 bg-white text-xl md:text-2xl rounded-md font-extrabold"
            >
              <span className="bg-gradient-to-r from-yellow-400 via-stone-800 to-yellow-600 bg-clip-text text-transparent">
                2024 {lang ? "Saison" : "Season"}
              </span>
            </a>
            <a
              href="#tdf_2023"
              type="button"
              className="align-middle py-3 px-4 bg-white text-xl md:text-2xl rounded-md font-extrabold"
            >
              <span className="bg-gradient-to-r from-yellow-400 via-stone-800 to-yellow-600 bg-clip-text text-transparent">
                2023 {lang ? "Saison" : "Season"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
