import aco from "~/assets/images/aco.png";

export default function Hero({}) {
  return (
    <section>
      <div className="hero-le-mans h-screen w-full">
        <div className="flex my-auto justify-between text-3xl md:text-4xl bg-[#0d64ff] font-[Anta] font-bold text-white py-3 uppercase">
          <div className="pl-2 sm:pl-5 my-auto">
            <img
              src={aco}
              className="bg-white w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] rounded-full"
              alt="ACO"
            />
          </div>
          <div className="my-auto">24h Le Mans</div>
          <div className="pr-2 sm:pr-5 my-auto">
            <img
              src={aco}
              className="bg-white w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] rounded-full"
              alt="ACO"
            />
          </div>
        </div>
        <div className="text-white italic font-extrabold text-[3rem] md:text-[5rem] md:pl-10 md:pt-[100px] vertical-center uppercase text-center md:text-left">
          Celebrating Centenary!
          <div className="date">12 to 16 June</div>
          <div className="mt-10 md:mt-0 md:pt-3">
            <a
              href="#description_le_mans"
              type="button"
              className="align-middle py-3 px-5 md:py-4 md:px-6 bg-white text-xl md:text-2xl rounded-md animate-bounce"
            >
              <span className="bg-gradient-to-r from-red-900 to-blue-600 bg-clip-text text-transparent">
                Know More
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
