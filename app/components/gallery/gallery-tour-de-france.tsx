import ImageComponent from "~/components/gallery/img-component";
import { useState } from "react";

export default function GalleryTourDeFrance() {
  const [lang, setLang] = useState(false);
  const handleTranslate = () => {
    setLang(!lang);
  };
  const imgData = [
    {
      index: 1,
      src: "https://m.economictimes.com/thumb/msid-102057050,width-1200,height-900,resizemode-4,imgsize-94072/2023-tour-de-france-finale.jpg",
      alt: "Tour De France 1",
    },
    {
      index: 2,
      src: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg/f_auto/v1690134633/primary/bm9yf7t8wc65qzucw2vb",
      alt: "Le Mans 2",
    },
    {
      index: 3,
      src: "https://hips.hearstapps.com/hmg-prod/images/general-view-of-the-peloton-passing-through-mariloz-passy-news-photo-1667323712.jpg?crop=0.88932xw:1xh;center,top&resize=1200:*",
      alt: "Tour De France 3",
    },
    {
      index: 5,
      src: "https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/4VRNNAISBDJC7GCGTOOA3U4NPY.jpg",
      alt: "Tour De France 5",
    },
    {
      index: 6,
      src: "https://www.tissotwatches.com/media/wysiwyg/Tissot_TDF_Image_2_3.jpg",
      alt: "Tour De France 6",
    },
    {
      index: 7,
      src: "https://cdn.skoda-storyboard.com/2016/04/20150706TDF0003-1920x1278.jpg",
      alt: "Tour De France 7",
    },
    {
      index: 8,
      src: "https://dims.apnews.com/dims4/default/49d7ea6/2147483647/strip/true/crop/8640x5760+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F85%2Ff5%2Fe1863e8f36b6328c5ca93eeb309e%2F98cd4f0233ef4500b3345ba3767353ac",
      alt: "Tour De France 8",
    },
    {
      index: 9,
      src: "https://www.combloux.com/app/uploads/iris-images/30684/20220712tdf0075-a.s.o.pauline-ballet-1920x1080-f50_50.webp",
      alt: "Tour De France 9",
    },
    {
      index: 10,
      src: "https://media.delius-klasing.de/images/dpr_auto,fl_progressive,f_auto,c_fill,g_face:auto,h_600,w_1068/q_auto:eco/GettyImages-1519586643_a546ju/tour-de-france-2023-tour-tech-briefing-for-stage-9",
      alt: "Tour De France 10",
    },
    {
      index: 12,
      src: "https://www.tvinsider.com/wp-content/uploads/2022/06/Tour-de-France-2017-1014x570.jpg",
      alt: "Tour De France 12",
    },
    {
      index: 13,
      src: "https://roadbikeaction.com/wp-content/uploads/2021/07/bettiniphoto_0529666_1_originali-scaled.jpg",
      alt: "Tour De France 13",
    },
    {
      index: 15,
      src: "https://live-production.wcms.abc-cdn.net.au/3a9e4f48afcf784bd4025f35727b52bc?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=521&width=862&height=485",
      alt: "Tour De France 15",
    },
  ];
  return (
    <section>
      <div className="bg-gradient-to-r from-yellow-400 via-stone-800 to-yellow-600 bg-clip-text text-transparent font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl pt-10 pb-4">
        {lang ? "Galerie" : "Gallery"}
      </div>
      <div className="pt-2 pb-4">
        <hr className="w-full h-[2px] bg-gradient-to-r from-yellow-400 via-stone-800 to-yellow-600 border-0" />
      </div>
      <div className="flex justify-end px-2 pb-6">
        <div className="align-middle py-1 px-2 bg-white text-sm sm:text-base md:text-lg rounded-sm font-bold">
          <button
            onClick={handleTranslate}
            className="bg-gradient-to-r from-yellow-400 via-stone-800 to-yellow-600 bg-clip-text text-transparent"
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
