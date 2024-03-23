import { MetaFunction } from "@remix-run/node";
import Hero from "~/components/hero/hero-tour-de-france";
import Description from "~/components/about/desc-tour-de-france";
import { Helmet } from "react-helmet";

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
        <div className="md:scale-95">
          <Description />
        </div>
      </div>
    </main>
  );
}
