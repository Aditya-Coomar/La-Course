import {
  rolex_advertisement_4,
  rolex_advertisement_5,
  le_mans_2023,
  le_mans_2023_podium,
} from "~/assets";
import { useState } from "react";
import {
  winnerHypercar,
  winnerLMGT3,
  winnerLMP2,
} from "~/components/season-2023/data/2023-le-mans";

interface WinnerCardProps {
  country: string;
  team: string;
  car: string;
  tires: string;
  car_number: string;
  position: string;
  laps: string;
  et: string;
}

const WinnerCard = ({
  country,
  team,
  laps,
  et,
  car,
  tires,
  car_number,
  position,
}: WinnerCardProps) => {
  return (
    <main>
      <div className="text-white font-[Montserrat] bg-[rgba(0,0,0,0.5)] px-2 py-3 text-center items-center rounded-md h-full uppercase">
        <div className="">
          <img
            src={`/position/${position}_badge.png`}
            alt={`${position}`}
            className="mb-0 w-[130px] h-[130px] mx-auto"
          />
        </div>
        <div className="w-[40px] h-[22px] mx-auto md:w-[60px] md:[34px] mt-4 sm:mt-6">
          <img src={country} alt={`${country}`} />
        </div>
        <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl py-3 mt-2 sm:mt-6">
          {team}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-7 md:gap-8 lg:gap-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold">
          <div>
            <span className="team-number">{car_number}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center md:gap-4 lg:gap-6 text-sm sm:text-base md:text-lg lg:text-xl mt-2 pb-5">
          <div>
            <span className="text-red-800">CAR</span>&nbsp;<span>{car}</span>
          </div>
          <div>
            <span className="text-red-800">TIRES</span>&nbsp;
            <span>{tires}</span>
          </div>
          <div>
            <span className="text-red-800">LAPS</span>&nbsp;
            <span>{laps}</span>
          </div>
          <div>
            <span className="text-red-800">ET</span>&nbsp;
            <span>{et}</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default function Season2024() {
    const [winner, show] = useState(false);
    const handleDisplay = () => {
        show(!winner);
    };
  return (
    <section>
      <br />
      <br />
      <div
        id="le_mans_2023"
        className="bg-gradient-to-r from-red-600 via-blue-600 to-blue-600 bg-clip-text text-transparent font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl pt-14 pb-4"
      >
        2023 - The Race of the Century
      </div>
      <div className="pt-2 pb-8">
        <hr className="w-full h-[2px] bg-gradient-to-r from-red-600 via-blue-600 to-blue-600 border-0" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-stretch items-stretch">
        <img
          src={le_mans_2023}
          alt="Le Mans 2023"
          className="w-full rounded-md"
        />
        <img
          src={le_mans_2023_podium}
          alt="Le Mans 2023"
          className="w-full rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-stretch items-stretch gap-5 pt-6">
        <div className="bg-[rgba(0,0,0,0.5)] rounded-md">
          <div className="bg-white py-3 px-4 rounded-t-md font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl history-period">
            <span className="bg-gradient-to-br from-blue-500 to-red-800 bg-clip-text text-transparent">
              Background
            </span>
          </div>
          <div className="font-[Quicksand] py-5 px-6 bg-gradient-to-br from-white to-white bg-clip-text text-transparent text-base sm:text-lg md:text-xl">
            The 2023 24 Hours of Le Mans, held at the Circuit de la Sarthe near
            Le Mans, France between 10 and 11 June, was the 91st running of the
            race, the 100th anniversary of its first edition in 1923 and the
            fourth round of the 2023 FIA World Endurance Championship.
            <br />
            <br />
            Toyota drivers Sébastien Buemi, Brendon Hartley, and Ryō Hirakawa
            led the Hypercar Drivers' Championship with 71 points, followed by
            teammates Mike Conway, Kamui Kobayashi, and José María López.
            Ferrari AF Corse's Antonio Fuoco, Miguel Molina, and Nicklas Nielsen
            were third, with Cadillac Racing's Earl Bamber, Alex Lynn, and
            Richard Westbrook fourth. In the FIA Endurance Trophy, United
            Autosports' Philip Hanson and Frederick Lubin led LMP2, while
            Corvette Racing's Nicky Catsburg, Ben Keating, and Nicolás Varrone
            led LMGTE Am. Toyota led Ferrari in the Hypercar World Endurance
            Championship, United Autosports led Team WRT in LMP2, and Corvette
            Racing led Richard Mille AF Corse in LMGTE Am.
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <img
            className="w-1/2 rounded-tl-md rounded-bl-md"
            src={rolex_advertisement_4}
            alt="Rolex"
          />
          <img
            className="w-1/2 rounded-tr-md rounded-br-md"
            src={rolex_advertisement_5}
            alt="Rolex"
          />
        </div>
      </div>

      <div className="bg-[rgba(0,0,0,0.5)] rounded-md mt-6">
        <div className="bg-white py-3 px-4 rounded-t-md font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl history-period">
          <span className="bg-gradient-to-br from-blue-500 to-red-800 bg-clip-text text-transparent">
            2023 - Podium Finish
          </span>
        </div>
        <div className={winner ? "grid grid-cols-1 lg:grid-cols-3 justify-center items-stretch gap-5 mt-2 md:mt-4 text-center px-3 py-3" : "hidden"}>
          {/* CATEGORY HYPERCAR */}
          <div className="bg-[rgba(0,0,0,0.4)] rounded-md mt-6">
            <div className="bg-white py-3 px-4 rounded-t-md font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl history-period text-center">
              <span className="bg-gradient-to-br from-blue-500 to-red-800 bg-clip-text text-transparent">Hypercar</span>
            </div>
            <div>
              <div
                className={
                  "grid grid-cols-1 items-stretch justify-between py-4 px-4 gap-4"
                }
              >
                {winnerHypercar.map((column) => (
                  <WinnerCard
                    key={column.index}
                    country={column.country}
                    team={column.team}
                    laps={column.laps}
                    et={column.et}
                    car={column.car}
                    tires={column.tires}
                    car_number={column.car_number}
                    position={column.position}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CATEGORY LM P2 */}
          <div className="bg-[rgba(0,0,0,0.4)] rounded-md mt-6">
            <div className="bg-white py-3 px-4 rounded-t-md font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl history-period text-center">
              <span className="bg-gradient-to-br from-blue-500 to-red-800 bg-clip-text text-transparent">LM P2</span>
            </div>
            <div>
              <div
                className={
                  "grid grid-cols-1 items-stretch justify-between py-4 px-4 gap-4"
                }
              >
                {winnerLMP2.map((column) => (
                  <WinnerCard
                    key={column.index}
                    country={column.country}
                    team={column.team}
                    laps={column.laps}
                    et={column.et}
                    car={column.car}
                    tires={column.tires}
                    car_number={column.car_number}
                    position={column.position}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CATEGORY LM GTE AM */}
          <div className="bg-[rgba(0,0,0,0.4)] rounded-md mt-6">
            <div className="bg-white py-3 px-4 rounded-t-md font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl history-period text-center">
              <span className="bg-gradient-to-br from-blue-500 to-red-800 bg-clip-text text-transparent">LM GTE AM</span>
            </div>
            <div>
              <div
                className={
                  "grid grid-cols-1 items-stretch justify-between py-4 px-4 gap-4"
                }
              >
                {winnerLMGT3.map((column) => (
                  <WinnerCard
                    key={column.index}
                    country={column.country}
                    team={column.team}
                    laps={column.laps}
                    et={column.et}
                    car={column.car}
                    tires={column.tires}
                    car_number={column.car_number}
                    position={column.position}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center py-5">
            {winner ? (
              <div className="items-center text-white font-extrabold text-xl">
              {/* Close Button */}
              <button
                onClick={handleDisplay}
                type="button"
                className="mx-auto w-10 h-10 rounded-full border-2 border-white" title="expand"
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
                  className="mx-auto animate-bounce w-10 h-10 rounded-full border-2 border-white" title="expand"
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
