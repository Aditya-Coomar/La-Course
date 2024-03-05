import type { MetaFunction } from "@remix-run/node";
import NavPage from "~/components/NavPage";
import { Helmet } from "react-helmet";

export const meta: MetaFunction = () => {
  return [
    { title: "La Course" },
    { name: "description", content: "Le Mans & Tour de France" },
  ];
};

export default function Index() {
  return (
    <main>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/05168aa044.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <NavPage />
    </main>
  );
}
