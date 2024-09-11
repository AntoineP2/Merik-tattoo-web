import Image from "next/image";
import merikAction from "../../public/merikAction.jpg";

const TattooDescription = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row flex-wrap gap-5 md:gap-10 items-center md:justify-around md:items-center">
        <Image
          src={merikAction}
          alt="Merik"
          width={350}
          className="rounded-md border border-primary shadow-sm shadow-primary order-1 md:order-2"
        />
        <div className="bg-base-300 rounded-md py-3 px-2 mt-5 md:w-[40vw] md:self-end hover:shadow-gold-centered md:active:shadow-gold-centered transition duration-150">
          <h1 className="text-primary font-bold text-md flex justify-center">
            Style de Tattoo
          </h1>
          <p>
            Polyvalent et innovant, Léo ne se limite pas à un seul style de
            tatouage. Son style est une fusion de tradition et de modernité,
            combinant des techniques classiques avec des éléments contemporains
            pour créer des designs uniques et captivants. Qu&apos;il
            s&apos;agisse de dotwork, de néotraditionnel, de réalisme ou de
            géométrie sacrée, chaque pièce qu&apos;il crée est une expression
            authentique de l&apos;individualité de son client.
          </p>
        </div>
      </div>
    </>
  );
};

export default TattooDescription;
