import { MetaFunction } from "@remix-run/node";
import Hero from "~/components/hero/hero-le-mans";
import Description from "~/components/about/desc-le-mans";
import History from "~/components/history/history-le-mans";
import Season2024 from "~/components/season-2024/le-mans-2024";
import Season2023 from "~/components/season-2023/le-mans-2023";
import { Helmet } from "react-helmet";

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
      <div className="px-10 py-16 sm:px-14 sm:py-20 bg-gradient-to-br from-neutral-950 to-indigo-950">
        <Description />
        <History />
        <Season2024 />
        <Season2023 />
      </div>
    </main>
  );
}
