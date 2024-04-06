import {
  skoda_advertisement_1,
  skoda_advertisement_2,
  tour_de_france_2023,
    tour_de_france_2023_podium,
} from "~/assets";
import { useState } from "react";
import { tdfPodiumFinish } from "~/components/season-2023/data/tdf-2023";

interface WinnerCardProps {
  category: string;
  podium: {
    country: string;
    rider: string;
    image: string;
    team: string;
    time: string;
    points: string;
    position: string;
  }[];
}

const WinnerCard = ({ category, podium }: WinnerCardProps) => {
  return (
    <main>
      <div className="bg-[rgba(0,0,0,0.4)] rounded-md mt-6">
        <div className="bg-white py-3 px-4 rounded-t-md font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl history-period text-center">
          <span className="bg-gradient-to-br from-yellow-400 via-stone-800 to-yellow-600 bg-clip-text text-transparent">
            {category}
          </span>
        </div>
        <div>
          <div
            className={
              "grid grid-cols-1 items-stretch justify-between py-4 px-4 gap-4"
            }
          >
            {podium.map((column) => (
              <div
                className="text-white font-[Montserrat] bg-[rgba(0,0,0,0.5)] px-2 py-3 text-center items-center rounded-md h-full uppercase"
                key={column.position}
              >
                <div className="">
                  <img
                    src={`/position/${column.position}_badge.png`}
                    alt={`${column.position}`}
                    className="mb-0 w-[130px] h-[130px] mx-auto"
                  />
                </div>
                <div className="w-[40px] h-[22px] mx-auto md:w-[60px] md:[34px] mt-4 sm:mt-6">
                  <img
                    src={column.country}
                    alt={`${column.country}`}
                    title={column.country}
                  />
                </div>
                <br />
                <div className="w-[125px] h-[125px] mx-auto mt-4 sm:mt-6 md:mt-8">
                  <img
                    src={column.image}
                    alt={`${column.image}`}
                    title={column.rider}
                  />
                </div>
                <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl py-3 mt-2 sm:mt-6">
                  {column.rider}
                </div>
                <br />
                <div className="flex flex-wrap items-center justify-center gap-7 md:gap-8 lg:gap-10 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                  <div>
                    <span className="text-yellow-400">{column.team}</span>
                  </div>
                </div>
                <br />
                <div className="flex flex-wrap gap-2 items-center justify-center md:gap-4 lg:gap-6 text-sm sm:text-base md:text-lg lg:text-xl mt-2 pb-5">
                  <div>
                    <span className="text-yellow-400">TIME</span>&nbsp;
                    <span>{column.time}</span>
                  </div>
                  <div>
                    <span className="text-yellow-400">POINTS</span>&nbsp;
                    <span>{column.points}</span>
                  </div>
                </div>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default function Season2023() {
  const [winner, show] = useState(false);
  const handleDisplay = () => {
    show(!winner);
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
        id="tdf_2023"
        className="bg-gradient-to-r from-yellow-400 via-stone-800 to-yellow-600 bg-clip-text text-transparent font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl pt-14 pb-4"
      >
        {lang ? "La Saison 2023" : "The Season of 2023"}
      </div>
      <div className="pt-2 pb-4">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-stretch items-stretch">
        <img
          src={tour_de_france_2023}
          alt="Tour De France 2023"
          className="w-full rounded-md"
        />
        <img
          src={tour_de_france_2023_podium}
          alt="Tour De France 2023 Podium Finish"
          className="w-full rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-stretch items-stretch gap-5 pt-6">
        <div className="bg-[rgba(0,0,0,0.5)] rounded-md">
          <div className="bg-white py-3 px-4 rounded-t-md font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl history-period">
            <span className="bg-gradient-to-br from-yellow-400 via-stone-800 to-yellow-600 bg-clip-text text-transparent">
              {lang ? "Aperçu" : "Background"}
            </span>
          </div>
          <div className="font-[Quicksand] py-5 px-6 bg-gradient-to-br from-white to-white bg-clip-text text-transparent text-base sm:text-lg md:text-xl">
            {lang ? (
              <div>
                Le Tour de France 2023 était la 110e édition du Tour de
                 France. Cela a commencé à Bilbao, en Espagne, le 1er juillet et s'est terminé par
                 la dernière étape sur les Champs-Élysées, à Paris, le 23 juillet.
                 <br />
                 <br />
                 Le champion en titre Jonas Vingegaard (Team Jumbo-Visma) a remporté le
                 classement général pour la deuxième année consécutive. Deux fois
                 le champion Tadej Pogačar (UAE Team Emirates) a terminé deuxième
                 place, avec Adam Yates (UAE Team Emirates) terminant troisième.
                 <br />
                 <br />
                 Le Tour de France a été le théâtre d'une bataille acharnée entre Vingegaard et
                 Pogacar, avec Vingegaard triomphant finalement après sa domination
                 performances dans les épreuves de contre-la-montre et alpines. Sa victoire
                 a marqué sa deuxième victoire consécutive, le plaçant à égalité avec Pogacar, avec
                 une marge significative de 7 minutes 29 secondes.
                 <br />
                 <br />
                 Le classement par points a été remporté par Jasper Philipsen
                 (Alpecin–Deceuninck) pour la première fois. Les montagnes
                 Le classement a été remporté par Giulio Ciccone (Trek – Segafredo), le
                 premier Italien à réaliser cet exploit depuis 1992. Le jeune cavalier
                 le classement a été remporté par Pogacar pour la quatrième année consécutive,
                 et l'équipe de Team Jumbo – Visma a remporté le classement par équipe.
                 Victor Campenaerts (Lotto–Dstny) a été choisi comme le plus
                 cavalier combatif.
              </div>
            ) : (
              <div>
                The 2023 Tour de France was the 110th edition of the Tour de
                France. It started in Bilbao, Spain, on 1 July and ended with
                the final stage at Champs-Élysées, Paris, on 23 July.
                <br />
                <br />
                Defending champion Jonas Vingegaard (Team Jumbo–Visma) won the
                general classification for the second year in a row. Two-time
                champion Tadej Pogačar (UAE Team Emirates) finished in second
                place, with Adam Yates (UAE Team Emirates) finishing third.
                <br />
                <br />
                The Tour de France saw a fierce battle between Vingegaard and
                Pogačar, with Vingegaard ultimately triumphing after dominant
                performances in the time trial and Alpine stages. His victory
                marked his second consecutive win, tying him with Pogačar, with
                a significant margin of 7 minutes 29 seconds.
                <br />
                <br />
                The points classification was won by Jasper Philipsen
                (Alpecin–Deceuninck) for the first time. The mountains
                classification was won by Giulio Ciccone (Trek–Segafredo), the
                first Italian to achieve this feat since 1992. The young rider
                classification was won by Pogačar for the fourth year in a row,
                and the team of Team Jumbo–Visma won the team classification.
                Victor Campenaerts (Lotto–Dstny) was chosen as the most
                combative rider.
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <img
            className="w-1/2 rounded-tl-md rounded-bl-md"
            src={skoda_advertisement_1}
            alt="Rolex"
          />
          <img
            className="w-1/2 rounded-tr-md rounded-br-md"
            src={skoda_advertisement_2}
            alt="Rolex"
          />
        </div>
      </div>

      <div className="bg-[rgba(0,0,0,0.5)] rounded-md mt-6">
        <div className="bg-white py-3 px-4 rounded-t-md font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl history-period">
          <span className="bg-gradient-to-br from-yellow-400 via-stone-800 to-yellow-600 bg-clip-text text-transparent">
            2023 - {lang ? "Arrivée sur le podium" : "Podium Finish"}
          </span>
        </div>
        <div
          className={
            winner
              ? "grid grid-cols-1 lg:grid-cols-3 justify-center items-stretch gap-5 mt-2 md:mt-4 text-center px-3 py-3"
              : "hidden"
          }
        >
          {tdfPodiumFinish.map((item) => (
            <WinnerCard
              key={item.index}
              category={item.category}
              podium={item.podium}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center py-5">
          {winner ? (
            <div className="items-center text-white font-extrabold text-xl">
              {/* Close Button */}
              <button
                onClick={handleDisplay}
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
                onClick={handleDisplay}
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
    </section>
  );
}
