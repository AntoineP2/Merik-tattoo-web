import { MdOutlineCleanHands } from "react-icons/md";
import { CareListType } from "./enum";
import { FaWind } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { TbSunOff } from "react-icons/tb";
import { GiClothes, GiHotSurface, GiTripleScratches } from "react-icons/gi";

export const careList: CareListType[] = [
  {
    title: "Nettoyage doux",
    icon: <MdOutlineCleanHands className="text-accent" size={20} />,
    description:
      "Dans les premières heures suivant la réalisation de ton tatouage, nettoie délicatement la zone avec de l'eau tiède et un savon doux sans parfum. Utilise tes mains propres pour éviter toute irritation.",
  },
  {
    title: "Séchage délicat",
    icon: <FaWind className="text-accent" size={20} />,
    description:
      "Tapote doucement la zone tatouée avec une serviette propre pour la sécher, évitant de frotter vigoureusement pour ne pas irriter la peau fraîchement tatouée.",
  },
  {
    title: "Hydratation régulière",
    icon: <IoWater className="text-accent" size={20} />,
    description:
      "Applique une fine couche de crème hydratante non parfumée ou de pommade recommandée par ton tatoueur sur la zone tatouée plusieurs fois par jour. Cela aidera à maintenir l'hydratation de ta peau et à favoriser la guérison.",
  },
  {
    title: "Évite l'exposition au soleil",
    icon: <TbSunOff className="text-accent" size={20} />,
    description:
      "Protège ton tatouage des rayons directs du soleil pendant au moins les deux premières semaines après sa réalisation. Les rayons UV peuvent endommager la peau et estomper les couleurs du tatouage.",
  },
  {
    title: "Évite de gratter ou de peler",
    icon: <GiTripleScratches className="text-accent" size={20} />,
    description:
      "Même si cela peut être tentant, évite de gratter ou de peler la peau de ton tatouage. Cela peut endommager les couleurs et la qualité de ton tatouage.",
  },
  {
    title: "Évite les bains chauds",
    icon: <GiHotSurface className="text-accent" size={20} />,
    description:
      "Évite les bains chauds, les saunas et les hammams pendant les premières semaines suivant la réalisation de ton tatouage. La chaleur et l'humidité peuvent irriter la peau et endommager la qualité de ton tatouage.",
  },
  {
    title: "Évite les vêtements serrés",
    icon: <GiClothes className="text-accent" size={20} />,
    description:
      "Évite de porter des vêtements serrés qui pourraient frotter contre ton tatouage et irriter la peau. Opte pour des vêtements amples et confortables pour permettre à ta peau de respirer.",
  },
];
