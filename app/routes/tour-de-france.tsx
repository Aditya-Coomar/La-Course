import { MetaFunction } from "@remix-run/node";
import Hero from "~/components/hero/hero-tour-de-france";
import Description from "~/components/about/desc-tour-de-france";
import History from "~/components/history/history-tour-de-france";
import Season2024 from "~/components/season-2024/tour-de-france-2024";
import Season2023 from "~/components/season-2023/tour-de-france-2023";
import GalleryTourDeFrance from "~/components/gallery/gallery-tour-de-france";
import { continental } from "~/assets";
import { Helmet } from "react-helmet";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "24h Le Mans | La Course" },
    { name: "description", content: "Le Mans" },
  ];
};

export default function TourDeFrance() {
  return (
    <main>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/05168aa044.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <Hero />
      <div className="px-10 py-16 sm:px-14 sm:py-20 bg-gradient-to-br from-neutral-950 via-stone-800 to-yellow-950">
        <div className="md:scale-[97%]">
          <Description />
          <History />
          <Season2024 />
          <Season2023 />
          <GalleryTourDeFrance />
        </div>
        <div className="px-8 pt-2 md:pt-0 pb-2 md:pb-5 md:-m-8">
          <hr className="w-full h-[2px] bg-gradient-to-r from-yellow-400 via-stone-800 to-yellow-600 border-0" />
        </div>
        <div className="mt-6 md:pt-3 flex flex-wrap gap-3 justify-center">
          <a
            href="https://www.letour.fr/en/"
            type="button"
            className="align-middle py-3 px-5 bg-white text-xl md:text-2xl rounded-md font-extrabold"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="bg-gradient-to-r from-yellow-400 via-stone-800 to-yellow-950 bg-clip-text text-transparent">
              Official Website <i className="fa-solid fa-arrow-right"></i>
            </span>
          </a>
          <a
            href="https://www.letour.fr/en/club"
            type="button"
            className="align-middle py-3 px-5 bg-white text-xl md:text-2xl rounded-md font-extrabold"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="bg-gradient-to-r from-yellow-400 via-stone-800 to-yellow-950 bg-clip-text text-transparent">
              Join the Club <i className="fa-solid fa-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
      <div>
        <img
          src={continental}
          alt="Continental Tires"
          className="w-full max-h-[650px]"
        />
      </div>
      <div className="flex justify-between bg-black text-white text-sm sm:text-base md:text-lg px-3 font-[Montserrat]">
        <div className="py-3">
          <Link
            to="/le-mans"
            className="underline underline-offset-4"
          >
            &#x2190;{" "}Le Mans
          </Link>
        </div>
        <div className="py-3">
          <Link to="https://github.com/Aditya-Coomar"><i className="fa-regular fa-copyright"></i> 2024&nbsp;<span className="hover:underline hover:underline-offset-4">Aditya Coomar</span></Link>
        </div>
      </div>
    </main>
  );
}
