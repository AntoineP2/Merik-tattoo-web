import { FaSwimmer, FaWind } from "react-icons/fa";
import { GiClothes, GiTripleScratches } from "react-icons/gi";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoWater } from "react-icons/io5";
import { MdOutlineCleanHands } from "react-icons/md";
import { TbSunOff } from "react-icons/tb";

const TattooCare = () => {
  return (
    <>
      <div className="mt-8 md:mt-10 flex justify-center items-center">
        <div className="bg-base-300 flex flex-col gap-3 rounded-md py-3 px-2 border border-primary shadow-sm shadow-primary md:w-[60vw] md:self-end order-2 md:order-1">
          <div>
            <div className="flex gap-2 items-center">
              <h2 className="font-bold text-accent">Nettoyage doux </h2>
              <MdOutlineCleanHands className="text-accent" size={20} />
            </div>
            <p className="px-5">
              Dans les premières heures suivant la réalisation de ton tatouage,
              nettoie délicatement la zone avec de l&apos;eau tiède et un savon
              doux sans parfum. Utilise tes mains propres pour éviter toute
              irritation.
            </p>
          </div>

          <div>
            <div className="flex gap-2 items-center">
              <h2 className="font-bold text-accent">Séchage délicat</h2>
              <FaWind className="text-accent" size={20} />
            </div>
            <p className="px-5">
              Tapote doucement la zone tatouée avec une serviette propre pour la
              sécher, évitant de frotter vigoureusement pour ne pas irriter la
              peau fraîchement tatouée.
            </p>
          </div>

          <div>
            <div className="flex gap-2 items-center">
              <h2 className="font-bold text-accent">Hydratation régulière </h2>
              <IoWater className="text-accent" size={20} />
            </div>
            <p className="px-5">
              Dans les premières heures suivant la réalisation de ton tatouage,
              nettoie délicatement la zone avec de l&apos;eau tiède et un savon
              doux sans parfum. Utilise tes mains propres pour éviter toute
              irritation.
            </p>
          </div>

          <div>
            <div className="flex gap-2 items-center">
              <h2 className="font-bold text-accent">
                Évite l&apos;exposition au soleil{" "}
              </h2>
              <TbSunOff className="text-accent" size={20} />
            </div>
            <p className="px-5">
              Protège ton tatouage des rayons directs du soleil pendant au moins
              les deux premières semaines après sa réalisation. Les rayons UV
              peuvent endommager la peau et estomper les couleurs du tatouage.
            </p>
          </div>

          <div>
            <div className="flex gap-2 items-center">
              <h2 className="font-bold text-accent">
                Évite de gratter ou de peler
              </h2>
              <GiTripleScratches className="text-accent" size={20} />
            </div>
            <p className="px-5">
              Bien que la zone tatouée puisse démanger pendant la guérison,
              évite de la gratter ou de la peler. Cela pourrait compromettre
              l&apos;intégrité du tatouage et entraîner une cicatrisation
              inégale.
            </p>
          </div>

          <div>
            <div className="flex gap-2 items-center">
              <h2 className="font-bold text-accent">
                Porte des vêtements amples
              </h2>
              <GiClothes className="text-accent" size={20} />
            </div>
            <p className="px-5">
              Opte pour des vêtements amples et confortables qui ne frotteront
              pas contre ton tatouage, surtout pendant les premiers jours de
              guérison.
            </p>
          </div>

          <div>
            <div className="flex gap-2 items-center">
              <h2 className="font-bold text-accent">
                Consulte Merikos en cas de problème
              </h2>
              <IoIosPhonePortrait className="text-accent" size={20} />
            </div>
            <p className="px-5">
              Si tu remarques des signes d&apos;infection tels que rougeur
              excessive, gonflement, chaleur ou drainage de la plaie, consulte
              immédiatement ton tatoueur ou un professionnel de la santé.
            </p>
          </div>

          <div>
            <div className="flex gap-2 items-center">
              <h2 className="font-bold text-accent">
                Évite les baignades prolongées{" "}
              </h2>
              <FaSwimmer className="text-accent" size={20} />
            </div>
            <p className="px-5">
              Évite de tremper ton tatouage dans l&apos;eau pendant de longues
              périodes, que ce soit dans un bain, une piscine ou dans
              l&apos;océan, pendant les premières semaines de guérison.
              L&apos;eau peut ramollir la peau et augmenter le risque
              d&apos;infection.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TattooCare;
