const dataLeMans = [
  {
    index: "1",
    time: "1923 to 1939",
    color: "blue",
    content:
      "The 24 Hours of Le Mans began in 1923 with a planned three-year format, including cumulative distances. However, this idea was dropped in 1928. The early years saw French, British, and Italian dominance, led by Bugatti, Bentley, and Alfa Romeo. Innovations, like aerodynamic designs, emerged in the late 1930s. General strikes and World War II led to a ten-year hiatus until the event resumed in 1949.",
  },
  {
    index: "2",
    time: "1949 to 1969",
    color: "red",
    content:
      "The post-1949 era of the 24 Hours of Le Mans saw increased competition as major manufacturers like Ferrari joined. Ferrari secured its first victory in 1949. The 1955 Le Mans disaster prompted safety improvements. Despite enhancements, speeds rose with the shift to closed-cockpit coupés. Ford's GT40 ended Ferrari's dominance, winning four straight from 1966 to 1969.",
  },
  {
    index: "3",
    time: "1970 to 1980",
    color: "blue",
    content:
      "The 1970s at Le Mans witnessed a shift to extreme speeds and specialized sportscar designs. A rolling Indianapolis start replaced the traditional standing start for faster acceleration. Dominant purpose-built sportscars like the Porsche 917, 935, and 936 became commonplace. French manufacturers Matra-Simca and Renault secured victories, ending a French victory drought since 1950. Privateer constructors, including John Wyer's Mirage and Jean Rondeau's chassis, achieved notable wins in 1975 and 1980.",
  },
  {
    index: "4",
    time: "1981 to 1993",
    color: "red",
    content:
      "In the 1980s, Porsche's dominance at Le Mans unfolded with the Group C race car formula, emphasizing fuel efficiency. The affordable 956 and 962 secured six consecutive wins. Jaguar and Mercedes-Benz interrupted Porsche's streak with victories in 1988 and 1990. Peugeot's 905 dominated in 1992-1993. Significant safety changes, including chicanes, occurred in 1990. Mazda's rotary-powered 787B clinched Japan's first win in 1991.",
  },
  {
    index: "5",
    time: "1994 to 1999",
    color: "blue",
    content:
      "Post-World Sportscar Championship demise, the 1990s at Le Mans saw a resurgence of production-based grand tourer cars. Porsche utilized a loophole with the Dauer 962 Le Mans in 1994. Supercars, including McLaren's BMW V12-powered F1 GTR in 1995, exploited production rules. Porsche, Mercedes-Benz, Toyota, Nissan, Panoz, and Lotus entered GT categories. BMW's 1999 overall win marked the era's peak. The ACO's influence led to the American Le Mans Series in 1999, later merging into the United SportsCar Championship.",
  },

  {
    index: "6",
    time: "2000 to 2005",
    color: "red",
    content: "Post-1999, escalating costs prompted major manufacturers to exit sports car racing, leaving only Audi and Cadillac. Audi continued dominance with the R8 after Cadillac's 2002 exit. Privateer Bentleys surpassed Audi in 2003. Chevrolet Corvette Racing Team secured GTS victories from 2001 to 2004. Attempts by Panoz, Chrysler, and MG to challenge Audi were unsuccessful."
  },
  {
    index: "7",
    time: "2006 to 2013",
    color: "blue",
    content: "Audi's R8 dominance led to a new era in 2006 with the diesel-powered R10 TDI, achieving the first diesel win at Le Mans. Peugeot joined with the 908 HDi FAP in 2007. In 2008, Audi's R10 TDI won by less than 10 minutes. Peugeot's 2009 victory featured an energy-recovery system. Audi's reliability prevailed in 2010, securing a 1-2-3 finish. The subsequent years saw Audi's hybrid R18 e-tron quattro claim victory in 2012, marking the first hybrid win."
  },
  {
    index: "8",
    time: "2014 to 2020",
    color: "red",
    content: "Le Mans regulations in 2014 mandated closed cockpits, altered hybrid systems, and introduced the slow zone system. Porsche reentered, winning from 2015 to 2017 with the 919 hybrid. Audi withdrew in 2016, and Nissan's 2015 attempt was its last. Toyota secured victories from 2018 to 2022, with the 2020 race held without spectators due to the COVID-19 pandemic."
  },
  {
    index: "9",
    time: "2021 to Present",
    color: "blue",
    content: "In 2021, the Hypercar class debuted at Le Mans, allowing Le Mans Hypercars and, from 2023, LMDh cars. The race was postponed to August. Non-hybrid LMP1 cars participated in 2021-2022, mainly by Alpine. Toyota and Glickenhaus also competed. Hypercar regulations granted design freedom, leading to unique entries like the wingless Peugeot 9X8 in 2022. LMP2 regulations extended to 2024. LMDh cars, hydrogen-powered prototypes, and LMGT3 will debut in 2025."
  },
];

const dataLeMansFr = [
  {
    index : "1",
    time : "1923 à 1939",
    color: "blue",
    content:
      "Les 24 Heures du Mans ont débuté en 1923 avec un format prévu sur trois ans, incluant les distances cumulées. Cependant, cette idée a été abandonnée en 1928. Les premières années ont vu la domination française, britannique et italienne, menée par Bugatti, Bentley et Alfa Romeo. Les innovations, comme les conceptions aérodynamiques, sont apparues à la fin des années 1930. Les grèves générales et la Seconde Guerre mondiale ont conduit à une interruption de dix ans jusqu'à la reprise de l'événement en 1949. ",
  },
  {
    index : "2",
    time : "1949 à 1969",
    color: "red",
    content:
      "L'ère des 24 Heures du Mans après 1949 a vu une concurrence accrue avec l'arrivée de grands constructeurs comme Ferrari. Ferrari a remporté sa première victoire en 1949. La catastrophe du Mans en 1955 a entraîné des améliorations en matière de sécurité. Malgré les améliorations, les vitesses ont augmenté avec le passage aux 24 Heures du Mans. -coupés à cockpit. La GT40 de Ford a mis fin à la domination de Ferrari, en remportant quatre victoires consécutives de 1966 à 1969.",
  },
  {
    index : "3",
    time : "1970 à 1980",
    color: "blue",
    content:
      "Les années 1970 au Mans ont été marquées par une transition vers des vitesses extrêmes et des conceptions de voitures de sport spécialisées. Un départ lancé à Indianapolis a remplacé le départ arrêté traditionnel pour une accélération plus rapide. Les voitures de sport dominantes telles que les Porsche 917, 935 et 936 sont devenues monnaie courante. Les constructeurs français Matra -Simca et Renault ont remporté des victoires, mettant fin à une sécheresse de victoires françaises depuis 1950. Les constructeurs privés, dont le Mirage de John Wyer et le châssis de Jean Rondeau, ont remporté des victoires notables en 1975 et 1980.",
  },
  {
    index : "4",
    time : "1981 à 1993",
    color: "red",
    content:
      "Dans les années 1980, la domination de Porsche au Mans s'est manifestée avec la formule des voitures de course du Groupe C, mettant l'accent sur l'efficacité énergétique. Les abordables 956 et 962 ont remporté six victoires consécutives. Jaguar et Mercedes-Benz ont interrompu la séquence de victoires de Porsche en 1988 et 1990. La 905 de Peugeot a dominé en 1992 et 1993. Des changements importants en matière de sécurité, notamment des chicanes, ont eu lieu en 1990. La 787B à moteur rotatif de Mazda a remporté la première victoire du Japon en 1991. ",
  },
  {
    index : "5",
    time : "1994 à 1999",
    color: "blue",
    content:
      "Après la disparition du Championnat du monde de voitures de sport, les années 1990 au Mans ont vu une résurgence des voitures de grand tourisme de production. Porsche a utilisé une échappatoire avec la Dauer 962 Le Mans en 1994. Les supercars, y compris la BMW F1 GTR à moteur V12 de McLaren en 1995, ont exploité les règles de production. Porsche, Mercedes-Benz, Toyota, Nissan, Panoz et Lotus sont entrés dans les catégories GT. La victoire globale de BMW en 1999 a marqué l'apogée de l'time. L'influence de l'ACO a conduit à la création de l'American Le Mans Series en 1999, qui a ensuite fusionné avec United SportsCar. Championnat.",
  },

  {
    index : "6",
    time : "2000 à 2005",
    color: "red",
    content : "Après 1999, l'escalade des coûts a incité les grands constructeurs à abandonner les courses de voitures de sport, ne laissant qu'Audi et Cadillac. Audi a continué à dominer avec la R8 après la sortie de Cadillac en 2002. Les Bentley privées ont surpassé Audi en 2003. L'équipe Chevrolet Corvette Racing a remporté des victoires en GTS de 2001 à 2004. Les tentatives de Panoz, Chrysler et MG pour défier Audi ont échoué."
  },
  {
    index : "7",
    time : "2006 à 2013",
    color: "blue",
    content : "La domination d'Audi sur la R8 a conduit à une nouvelle ère en 2006 avec la R10 TDI à moteur diesel, remportant la première victoire diesel au Mans. Peugeot a rejoint la 908 HDi FAP en 2007. En 2008, la R10 TDI d'Audi a gagné par moins de 10 minutes. La victoire de Peugeot en 2009 reposait sur un système de récupération d'énergie. La fiabilité d'Audi a prévalu en 2010, assurant un classement 1-2-3. Les années suivantes ont vu l'hybride R18 e-tron quattro d'Audi remporter la victoire en 2012, marquant la première victoire hybride. "
  },
  {
    index : "8",
    time : "2014 à 2020",
    color: "red",
    content : "La réglementation du Mans en 2014 imposait des cockpits fermés, modifiait les systèmes hybrides et introduisait le système de zone lente. Porsche est réintégré, gagnant de 2015 à 2017 avec la 919 hybride. Audi s'est retiré en 2016 et la tentative de Nissan en 2015 était sa dernière. Toyota a remporté des victoires de 2018 à 2022, la course de 2020 s'étant déroulée sans spectateurs en raison de la pandémie de COVID-19."
  },
  {
    index : "9",
    time: "2021 à aujourd'hui",
    color: "blue",
    content :"En 2021, la catégorie Hypercar a fait ses débuts au Mans, autorisant les Hypercars du Mans et, à partir de 2023, les voitures LMDh. La course a été reportée au mois d'août. Les voitures LMP1 non hybrides ont participé en 2021-2022, principalement par Alpine. Toyota et Glickenhaus a également participé. La réglementation des hypercars a accordé une liberté de conception, conduisant à des inscriptions uniques comme la Peugeot 9X8 sans ailes en 2022. La réglementation LMP2 a été étendue jusqu'en 2024. Les voitures LMDh, les prototypes à hydrogène et les LMGT3 feront leurs débuts en 2025."
  },
];

export {
    dataLeMans, dataLeMansFr
}