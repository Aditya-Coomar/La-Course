import {
  tissot_advertisement_1,
  tissot_advertisement_2,
  tour_de_france_2024,
  tour_de_france_circuit,
} from "~/assets";
import { useState } from "react";
import { dataTDFteams2024 } from "~/components/season-2024/data/teams-data-tdf-2024";

interface TeamCardProps {
  country: string;
  team: string;
  teamLogo: string;
  category: string;
}
// 
const TeamCard = ({country,team, teamLogo, category}: TeamCardProps) => {
  return (
    <main>
      <div className="text-white font-[Montserrat] bg-[rgba(0,0,0,0.5)] px-2 py-3 text-center items-center rounded-md h-full">
        <div className="grid grid-cols-1 gap-10 md:gap-12">
          <div className="w-[40px] h-[22px] mx-auto md:w-[60px] md:[34px]">
            <img src={`/flag/${country}`} alt={country} title={country} />
          </div>
          <div className="w-[150px] h-[150px] mx-auto">
            <img
              src={
                `/tdf-team/${teamLogo}`
              }
              alt={teamLogo}
              title={team}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl">
          <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl py-3 mt-2 sm:mt-6">
            {team}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center md:gap-4 lg:gap-6 text-sm sm:text-base md:text-lg lg:text-xl mt-2">
          <div>
            <span className="text-yellow-400">CAT</span>&nbsp;
            <span>UCI {category}</span>
          </div>
        </div>
        <br />
      </div>
    </main>
  );
};

export default function Season2024() {
  const [hypercarOpen, hypercarAccordian] = useState(false);
  const handleState_hypercar = () => {
    hypercarAccordian(!hypercarOpen);
  };
  const [lang, setLang] = useState(false);
  const handleTranslate = () => {
    setLang(!lang);
  };

  return (
    <section>
      <br />
      <br />
      <div
        id="le_mans_2024"
        className="bg-gradient-to-r from-yellow-400 to-yellow-950 bg-clip-text text-transparent font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-8xl pt-14"
      >
        {lang ? "La saison 2024" : "The Season of 2024"}
      </div>
      <div className="pt-2 pb-4">
        <hr className="w-full h-[2px] bg-gradient-to-r from-yellow-400 via-stone-800 to-yellow-600 border-0" />
      </div>
      <div className="flex justify-end px-2 pb-6">
        <div className="align-middle py-1 px-2 bg-white text-sm sm:text-base md:text-lg rounded-sm font-bold">
          <button
            onClick={handleTranslate}
            className="bg-gradient-to-r from-yellow-400 via-stone-800 to-yellow-950 bg-clip-text text-transparent"
            type="button"
          >
            <i className="fa-solid fa-globe"></i>&nbsp;
            <span>{lang ? "English" : "Français"}</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-stretch items-stretch">
        <img
          src={tour_de_france_2024}
          alt="Le Mans 2024"
          className="w-full rounded-md max-h-[600px]"
        />
        <img
          src={tour_de_france_circuit}
          alt="Le Mans 2024"
          className="w-full rounded-md max-h-[600px]"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-stretch items-stretch gap-5 pt-6">
        <div className="bg-[rgba(0,0,0,0.5)] rounded-md">
          <div className="bg-white py-3 px-4 rounded-t-md font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl history-period">
            <span className="bg-gradient-to-br from-yellow-400 via-stone-800 to-yellow-950 bg-clip-text text-transparent">
              {lang ? "Aperçu" : "Background"}
            </span>
          </div>
          <div className="font-[Quicksand] py-5 px-6 bg-gradient-to-br from-white to-white bg-clip-text text-transparent text-base sm:text-lg md:text-xl">
            {lang ? (
              <div>
                Le Tour de France 2024 sera la 111e édition du Tour de France.
                Il débutera à Florence, en Italie, le 29 juin, et se déroulera
                terminer à Nice, France, le 21 juillet. La course ne finira pas
                à Paris (ou à proximité) pour la première fois depuis sa
                création, grâce aux préparatifs des Jeux Olympiques et
                Paralympiques de Paris 2024.
                <br />
                <br />
                22 équipes participeront à la course. Les 18 UCI WorldTeams
                étaient toutes automatiquement invité. Ils ont été rejoints par
                4 UCI ProTeams : les deux UCI ProTeams les mieux classées en
                2023 (Lotto–Dstny et Israël – Premier Tech), avec Uno-X Mobility
                et Team TotalEnergies sélectionnés par Amaury Sport Organisation
                (ASO), les organisateurs du Tour. Les équipes ont été annoncées
                le 18 janvier 2024.
              </div>
            ) : (
              <div>
                The 2024 Tour de France will be the 111th edition of the Tour de
                France. It will start in Florence, Italy on 29 June, and will
                finish in Nice, France on the 21 July. The race will not finish
                in (or near) Paris for the first time since its inception, owing
                to preparations for the Paris 2024 Olympic and Paralympic Games.
                <br />
                <br />
                22 teams will take part in the race. All 18 UCI WorldTeams were
                automatically invited. They were joined by 4 UCI ProTeams: the
                two highest placed UCI ProTeams in 2023 (Lotto–Dstny and
                Israel–Premier Tech), along with Uno-X Mobility and Team
                TotalEnergies who were selected by Amaury Sport Organisation
                (ASO), the organisers of the Tour. The teams were announced on
                18 January 2024.
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <img
            className="w-1/2 rounded-tl-md rounded-bl-md"
            src={tissot_advertisement_2}
            alt="Rolex"
          />
          <img
            className="w-1/2 rounded-tr-md rounded-br-md"
            src={tissot_advertisement_1}
            alt="Rolex"
          />
        </div>
      </div>

      {/* CATEGORY TDF Teams 2024 */}
      <div className="bg-[rgba(0,0,0,0.4)] rounded-md mt-6">
        <div className="bg-white py-3 px-4 rounded-t-md font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl history-period">
          <span className="bg-gradient-to-br from-yellow-400 via-stone-800 to-yellow-950 bg-clip-text text-transparent">
            {lang ? "Entrées pour" : "Entries for"} 2024 - Tour de France
          </span>
        </div>
        <div>
          <div
            className={
              hypercarOpen
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch justify-between py-4 px-4 gap-4"
                : "hidden"
            }
          >
            {dataTDFteams2024.map((data) => (
              <TeamCard
                key={data.index}
                country={data.country}
                team={data.team}
                teamLogo={data.teamLogo}
                category={data.cat}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center py-5">
            {hypercarOpen ? (
              <div className="items-center text-white font-extrabold text-xl">
                {/* Close Button */}
                <button
                  onClick={handleState_hypercar}
                  type="button"
                  className="mx-auto w-10 h-10 rounded-full border-2 border-white"
                  title="expand"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            ) : (
              <div className="items-center text-white font-extrabold text-xl mt-3">
                {/* Open Button */}
                <button
                  onClick={handleState_hypercar}
                  type="button"
                  className="mx-auto animate-bounce w-10 h-10 rounded-full border-2 border-white"
                  title="expand"
                >
                  <i className="fa-solid fa-angle-down align-middle"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
