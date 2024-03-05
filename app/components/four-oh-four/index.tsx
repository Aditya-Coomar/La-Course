import { ReactTyped } from "react-typed";

export default function PageNotFound() {
  return (
    <section className="page-center">
      <div className="text-center font-extrabold bg-gradient-to-r from-amber-100 to-red-900 bg-clip-text text-transparent text-8xl">
        <span>
          {" "}
          {"{"}
          <ReactTyped
            strings={["404"]}
            typeSpeed={150}
            backSpeed={150}
            showCursor={false}
            loop
          />
          {"}"}
        </span>
        <div className="text-5xl pt-5">
        {"Oops!! You lost your way . . ."}
        </div>
        <div className="pt-3">
            <a href="\" type="button" className="align-middle py-3 px-5 bg-white text-lg rounded-md hover:animate-bounce"><span className="bg-gradient-to-br from-amber-500 to-orange-900 bg-clip-text text-transparent">Help me Back</span></a>
        </div>
      </div>
    </section>
  );
}
