import {
  rolex_advertisement_1,
  rolex_advertisement_2,
  le_mans_2024,
  le_mans_circuit,
} from "~/assets";
import { useState } from "react";
import { dataHypercar, dataLMGT3, dataLMP2 } from "~/components/season-2024/data/teams-data-le-mans-2024";

interface TeamCardProps {
  country: string;
  team: string;
  cat: string;
  car: string;
  tires: string;
  team_numbers: { number: string }[];
}

const TeamCard = ({
  country,
  team,
  cat,
  car,
  tires,
  team_numbers,
}: TeamCardProps) => {
  return (
    <main>
      <div className="text-white font-[Montserrat] bg-[rgba(0,0,0,0.5)] px-2 py-3 text-center items-center rounded-md">
        <div className="w-[40px] h-[22px] mx-auto md:w-[60px] md:[34px]">
          <img src={country} alt={`${country}`} />
        </div>
        <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl py-3 mt-2 sm:mt-4">
          {team}
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center md:gap-4 lg:gap-6 text-sm sm:text-base md:text-lg lg:text-xl mt-2">
          <div>
            <span className="text-red-800">CAT</span>&nbsp;<span>{cat}</span>
          </div>
          <div>
            <span className="text-red-800">CAR</span>&nbsp;<span>{car}</span>
          </div>
          <div>
            <span className="text-red-800">TIRES</span>&nbsp;
            <span>{tires}</span>
          </div>
        </div>
        <div className="font-bold text-base sm:text-lg md:text-xl lg:text-xl py-1 md:py-2 mt-2 sm:mt-3">
          Car Numbers
        </div>
        <div className="flex flex-wrap items-center justify-center gap-7 md:gap-8 lg:gap-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold">
          {team_numbers.map((data) => (
            <div key={data.number}>
              <span className="team-number">{data.number}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default function Season2024() {
  const [hypercarOpen, hypercarAccordian] = useState(false);
  const handleState_hypercar = () => {
    hypercarAccordian(!hypercarOpen);
  };

  const [lmp2Open, lmp2Accordian] = useState(false);
  const handleState_lmp2 = () => {
    lmp2Accordian(!lmp2Open);
  };

  const [lmgt3Open, lmgt3Accordian] = useState(false);
  const handleState_lmgt3 = () => {
    lmgt3Accordian(!lmgt3Open);
  };

  return (
    <section>
      <br />
      <br />
      <div
        id="le_mans_2024"
        className="bg-gradient-to-r from-red-600 via-blue-600 to-blue-600 bg-clip-text text-transparent font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-8xl pt-14"
      >
        The Season of 2024
      </div>
      <div className="pt-2 pb-8">
        <hr className="w-full h-[2px] bg-gradient-to-r from-red-600 via-blue-600 to-blue-600 border-0" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-stretch items-stretch">
        <img
          src={le_mans_2024}
          alt="Le Mans 2024"
          className="w-full rounded-md"
        />
        <img
          src={le_mans_circuit}
          alt="Le Mans 2024"
          className="w-full rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-stretch items-stretch gap-5 pt-6">
        <div className="bg-[rgba(0,0,0,0.5)] rounded-md">
          <div className="bg-white py-3 px-4 rounded-t-md font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl history-period">
            <span className="bg-gradient-to-br from-blue-500 to-red-800 bg-clip-text text-transparent">
              Background
            </span>
          </div>
          <div className="font-[Quicksand] py-5 px-6 bg-gradient-to-br from-white to-white bg-clip-text text-transparent text-base sm:text-lg md:text-xl">
            The 2024 24 Hours of Le Mans will be the 92nd running of the 24-hour
            race organised by the Automobile Club de l'Ouest. The LM GTE Am
            class of 2023 will be transitioned to LMGT3 for the 2024 race. While
            LMP2 cars will not be running in the 2024 FIA World Endurance
            Championship, Automobile Club de l’Ouest will allocate a minimum of
            15 grid slots to LMP2 cars for the race. A number of new and
            returning manufacturers are hoping to field cars in the 2024 event,
            including Alpine, Ford, BMW, and McLaren. LMGT3 models that do not
            compete for the full 2024 FIA WEC seasons are not permitted to enter
            at the 24 hour race.
            <br />
            <br />
            Le Mans automatic invites include WEC, ELMS, ALMS, and GTWCE
            championship winners. Second-place LMP2 ELMS finishers and 3 IMSA
            teams receive invites, one in Hypercar at IMSA's discretion, and one
            each for Jim Truman and Bob Akin awards.
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <img
            className="w-1/2 rounded-tl-md rounded-bl-md"
            src={rolex_advertisement_2}
            alt="Rolex"
          />
          <img
            className="w-1/2 rounded-tr-md rounded-br-md"
            src={rolex_advertisement_1}
            alt="Rolex"
          />
        </div>
      </div>

      {/* CATEGORY HYPERCAR */}
      <div className="bg-[rgba(0,0,0,0.3)] rounded-md mt-6">
        <div className="bg-white py-3 px-4 rounded-t-md font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl history-period">
          <span className="bg-gradient-to-br from-blue-500 to-red-800 bg-clip-text text-transparent">
            Entries for 2024 - Hypercar
          </span>
        </div>
        <div>
          <div
            className={
              hypercarOpen
                ? "grid grid-cols-1 md:grid-cols-2 items-stretch justify-between py-4 px-4 gap-4"
                : "hidden"
            }
          >
            {dataHypercar.map((column) => (
              <TeamCard
                key={column.index}
                country={column.country}
                team={column.team}
                cat={column.cat}
                car={column.car}
                tires={column.tires}
                team_numbers={column.team_number}
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
                className="mx-auto w-10 h-10 rounded-full border-2 border-white" title="expand"
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
                  className="mx-auto animate-bounce w-10 h-10 rounded-full border-2 border-white" title="expand"
                >
                  <i className="fa-solid fa-angle-down align-middle"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CATEGORY LM P2 */}
      <div className="bg-[rgba(0,0,0,0.3)] rounded-md mt-6">
        <div className="bg-white py-3 px-4 rounded-t-md font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl history-period">
          <span className="bg-gradient-to-br from-blue-500 to-red-800 bg-clip-text text-transparent">
            Entries for 2024 - LM P2
          </span>
        </div>
        <div>
          <div
            className={
              lmp2Open
                ? "grid grid-cols-1 md:grid-cols-2 items-stretch justify-between py-4 px-4 gap-4"
                : "hidden"
            }
          >
            {dataLMP2.map((column) => (
              <TeamCard
                key={column.index}
                country={column.country}
                team={column.team}
                cat={column.cat}
                car={column.car}
                tires={column.tires}
                team_numbers={column.team_number}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center py-5">
            {lmp2Open ? (
              <div className="items-center text-white font-extrabold text-xl">
              {/* Close Button */}
              <button
                onClick={handleState_lmp2}
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
                  onClick={handleState_lmp2}
                  type="button"
                  className="mx-auto animate-bounce w-10 h-10 rounded-full border-2 border-white" title="expand"
                >
                  <i className="fa-solid fa-angle-down align-middle"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CATEGORY LMGT3 */}
      <div className="bg-[rgba(0,0,0,0.3)] rounded-md mt-6">
        <div className="bg-white py-3 px-4 rounded-t-md font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl history-period">
          <span className="bg-gradient-to-br from-blue-500 to-red-800 bg-clip-text text-transparent">
            Entries for 2024 - LMGT3
          </span>
        </div>
        <div>
          <div
            className={
              lmgt3Open
                ? "grid grid-cols-1 md:grid-cols-2 items-stretch justify-between py-4 px-4 gap-4"
                : "hidden"
            }
          >
            {dataLMGT3.map((column) => (
              <TeamCard
                key={column.index}
                country={column.country}
                team={column.team}
                cat={column.cat}
                car={column.car}
                tires={column.tires}
                team_numbers={column.team_number}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center py-5">
            {lmgt3Open ? (
              <div className="items-center text-white font-extrabold text-xl">
              {/* Close Button */}
              <button
                onClick={handleState_lmgt3}
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
                  onClick={handleState_lmgt3}
                  type="button"
                  className="mx-auto animate-bounce w-10 h-10 rounded-full border-2 border-white" title="expand"
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
