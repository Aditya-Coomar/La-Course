import { MetaFunction } from "@remix-run/node";
import Hero from "~/components/hero/hero-le-mans";
import Description from "~/components/about/desc-le-mans";
import History from "~/components/history/history-le-mans";
import Season2024 from "~/components/season-2024/le-mans-2024";
import Season2023 from "~/components/season-2023/le-mans-2023";
import GalleryLeMans from "~/components/gallery/gallery-le-mans";
import { Helmet } from "react-helmet";
import { michelin } from "~/assets";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "24h Le Mans | La Course" },
    { name: "description", content: "Le Mans" },
  ];
};

export default function LeMans() {
  return (
    <main>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/05168aa044.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <Hero />
      <div className="px-8 py-8 sm:px-8 sm:py-8 bg-gradient-to-br from-neutral-950 to-indigo-950">
        <div className="md:scale-[97%]">
          <Description />
          <History />
          <Season2024 />
          <Season2023 />
          <GalleryLeMans />
        </div>
        <div className="px-8 pt-2 md:pt-0 pb-2 md:pb-5 md:-m-8">
          <hr className="w-full h-[2px] bg-gradient-to-r from-red-600 via-blue-600 to-blue-600 border-0" />
        </div>
        <div className="mt-4 md:pt-3 flex flex-wrap gap-3 justify-center">
          <a
            href="https://www.24h-lemans.com"
            type="button"
            className="align-middle py-3 px-5 bg-white text-xl md:text-2xl rounded-md font-extrabold"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="bg-gradient-to-r from-red-900 to-blue-600 bg-clip-text text-transparent">
              Official Website <i className="fa-solid fa-arrow-right"></i>
            </span>
          </a>
          <a
            href="https://www.24h-lemans.com/en/news"
            type="button"
            className="align-middle py-3 px-5 bg-white text-xl md:text-2xl rounded-md font-extrabold"
            rel="noopener noreferrer"
            target="_blank" 
          >
            <span className="bg-gradient-to-r from-red-900 to-blue-600 bg-clip-text text-transparent">
              What's in the News ?
            </span>
          </a>
        </div>
      </div>
      <div className="">
        <img src={michelin} alt="Michelin" className="w-full max-h-[600px]" />
      </div>
      <div className="flex justify-between bg-black text-white text-sm sm:text-base md:text-lg px-3 font-[Montserrat]">
      <div className="py-3">
          <Link to="https://github.com/Aditya-Coomar"><i className="fa-regular fa-copyright"></i> 2024,&nbsp;<span className="hover:underline hover:underline-offset-4">Aditya Coomar</span></Link>
        </div>
        <div className="py-3">
          <Link
            to="/tour-de-france"
            className="underline underline-offset-4"
          >
            Tour de France{" "}&#x2192;
          </Link>
        </div>
      </div>
    </main>
  );
}
