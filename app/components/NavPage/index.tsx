import { Link } from "@remix-run/react";
import { useState } from "react";
import { bicycle_clip_art, car_clip_art } from "~/assets";

export default function NavPage() {
  const [menu, setNavigation] = useState(false);
  const handleMenu = () => {
    setNavigation(!menu);
  };
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-white font-[Quicksand] font-extrabold text-[3rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] md:pl-10 md:pt-[100px] uppercase text-center md:text-left drop-shadow-lg">
          Welcome to the Journey
        </h1>
        <p className="text-[1rem] sm:text-[1.5rem] md:text-[2.5rem] font-[Inconsolata] text-gray-300 mb-8 text-center">
          Discover the ocean that awaits for you.
        </p>
        <div>
          <button
            type="button"
            onClick={handleMenu}
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </button>
        </div>
        <div className="py-6 font-extrabold">
          <div className={menu ? "grid grid-cols-1 sm:grid-cols-2 gap-5" : "hidden"}>
          <Link
              to="le-mans"
              type="button"
              className="align-middle py-3 px-5 md:py-4 md:px-6 bg-white text-xl md:text-2xl rounded-md"><span className="bg-gradient-to-r from-red-900 to-blue-600 bg-clip-text text-transparent">Le Mans<img src={car_clip_art} className=" w-[24px] h-[24px] md:w-[32px] md:h-[32px] scale-150 float-right my-auto" alt="Car" /></span>
            </Link>
            <Link
              to="tour-de-france"
              type="button"
              className="align-middle py-3 px-5 md:py-4 md:px-6 bg-white text-xl md:text-2xl rounded-md"><span className="bg-gradient-to-r from-amber-300 to-neutral-900 bg-clip-text text-transparent">Tour de France&nbsp;&nbsp;<img src={bicycle_clip_art} className=" w-[24px] h-[24px] md:w-[32px] md:h-[32px] float-right my-auto" alt="Cycle" /></span>
              <span></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /*<section className="page-center">
      <div className="text-[2rem] md:text-[5rem] text-center font-extrabold bg-gradient-to-r from-amber-100 to-red-900 bg-clip-text text-transparent">
        La Course
      </div>
      <div className="grid grid-cols-2 gap-8 justify-items-center pt-16">
        <div className="p-4">
          <Link to="le-mans">
            <img src={le_mans_logo} alt="Le Mans" className="rounded-lg shadow-md shadow-red-950 ring-offset-2 ring-offset-red-950" />
          </Link>
        </div>
        <div className="p-4">
          <Link to="tour-de-france">
            <img src={tour_de_france_logo} alt="Tour De France" className="rounded-lg shadow-md shadow-red-950" />
          </Link>
        </div>
      </div>
  </section>*/
}
