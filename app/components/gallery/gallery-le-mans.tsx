import ImageComponent from "~/components/gallery/img-component";
import { useState } from "react";

export default function GalleryLeMans() {
  const [lang, setLang] = useState(false);
  const handleTranslate = () => {
    setLang(!lang);
  };
  const imgData = [
    {
      index: 1,
      src: "https://www.lemans.org/media/cache/api_news_small/assets/fileuploads/64/86/648606e17c5f5.jpg",
      alt: "Le Mans 1",
    },
    {
      index: 2,
      src: "https://www.lemans.org/media/cache/api_news_small/assets/fileuploads/64/85/6485f47b1e1fe.jpg",
      alt: "Le Mans 2",
    },
    {
      index: 3,
      src: "https://www.lemans.org/media/cache/api_news_small/assets/fileuploads/64/85/6485fa9def24b.jpg",
      alt: "Le Mans 3",
    },
    {
      index: 5,
      src: "https://www.lemans.org/media/cache/api_news_small/assets/fileuploads/64/85/6485f3b07e412.jpg",
      alt: "Le Mans 5",
    },
    {
      index: 6,
      src: "https://www.lemans.org/media/cache/api_news_small/assets/fileuploads/64/85/6485f360a8b69.jpg",
      alt: "Le Mans 6",
    },
    {
      index: 7,
      src: "https://www.lemans.org/media/cache/api_news_small/assets/fileuploads/64/85/6485e257d46b1.jpg",
      alt: "Le Mans 7",
    },
    {
      index: 8,
      src: "https://www.lemans.org/media/cache/api_news_small/assets/fileuploads/64/85/6485e9b59f918.jpg",
      alt: "Le Mans 8",
    },
    {
      index: 9,
      src: "https://www.lemans.org/media/cache/api_news_small/assets/fileuploads/64/86/648606b9e2768.jpg",
      alt: "Le Mans 9",
    },
    {
      index: 10,
      src: "https://www.lemans.org/media/cache/api_news_small/assets/fileuploads/64/85/6485cb1da3ef0.jpg",
      alt: "Le Mans 10",
    },
    {
      index: 12,
      src: "https://www.lemans.org/media/cache/api_news_small/assets/fileuploads/64/85/6485e3e0f1f0f.jpg",
      alt: "Le Mans 12",
    },
    {
      index: 13,
      src: "https://www.lemans.org/media/cache/api_news_small/assets/fileuploads/64/85/6485e25948979.jpg",
      alt: "Le Mans 13",
    },
    {
      index: 15,
      src: "https://www.lemans.org/media/cache/api_news_small/assets/fileuploads/64/85/6485cb120cc8d.jpg",
      alt: "Le Mans 15",
    },
  ];
  return (
    <section>
      <div className="bg-gradient-to-r from-red-600 via-blue-600 to-blue-600 bg-clip-text text-transparent font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl pt-10 pb-4">
        {lang ? "Galerie" : "Gallery"}
      </div>
      <div className="pt-2 pb-4">
        <hr className="w-full h-[2px] bg-gradient-to-r from-red-600 via-blue-600 to-blue-600 border-0" />
      </div>
      <div className="flex justify-end px-2 pb-6">
        <div className="align-middle py-1 px-2 bg-white text-sm sm:text-base md:text-lg rounded-sm font-bold">
          <button
            onClick={handleTranslate}
            className="bg-gradient-to-r from-red-900 to-blue-600 bg-clip-text text-transparent"
            type="button"
          >
            <i className="fa-solid fa-globe"></i>&nbsp;
            <span>{lang ? "English" : "Français"}</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4 pb-2">
        {imgData.map((img) => (
          <ImageComponent key={img.index} src={img.src} alt={img.alt} />
        ))}
      </div>
    </section>
  );
}
