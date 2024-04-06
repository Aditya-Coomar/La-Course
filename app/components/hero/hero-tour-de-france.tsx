import bicycle_clip_art from "~/assets/images/bicyler-clip-art.png";
import {ReactTyped} from "react-typed";

export default function Hero({}) {
    return (
      <section>
        <div className="hero-tour-de-france h-screen w-full">
          <div className="flex my-auto justify-between text-2xl md:text-4xl bg-yellow-300 font-[Anta] font-bold text-black py-3 uppercase">
            <div className="pl-2 sm:pl-5 my-auto">
              <img src={bicycle_clip_art} className=" w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px]" alt="Cycle" />
            </div>
            <div className="my-auto">Tour de France</div>
            <div className="pr-2 sm:pr-5 my-auto"> 
              <img src={bicycle_clip_art} className=" w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px]" alt="Cycle" />
            </div>
          </div>
          <div className="text-white italic font-extrabold text-[3rem] md:text-[5rem] md:pl-10 md:pt-[100px] vertical-center uppercase text-center md:text-left drop-shadow-lg">
          {"Testing "}
          <ReactTyped
            strings={[
              "Endurance",
              "Strength",
              "Tactical Acumen",
              "Innovation",
            ]}
            typeSpeed={70}
            backSpeed={60}
            backDelay={750}
            showCursor={false}
            loop
          />
          {"!"}
            <div className="date">29 June to 21 July</div>
            <div className="mt-10 md:mt-0 md:pt-3">
              <a href="#description_tour_de_france" type="button" className="align-middle py-3 px-5 md:py-4 md:px-6 bg-white text-xl md:text-2xl rounded-md animate-bounce"><span className="bg-gradient-to-r from-amber-300 to-neutral-900 bg-clip-text text-transparent">Know More</span></a>
          </div>
          </div>
        </div>
      </section>
    );
  }