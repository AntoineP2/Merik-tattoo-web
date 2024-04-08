import Image from "next/image";
import merikProfil from "../../../public/merikProfil.jpg";

const Description = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap gap-5 items-center md:justify-around md:items-center">
        <Image
          src={merikProfil}
          alt="Merik"
          width={300}
          className="rounded-md border border-primary shadow-sm shadow-primary"
        />
        <div className="bg-base-300 rounded-md py-3 px-2 border border-primary shadow-sm shadow-primary md:w-[40vw] md:self-end">
          <h1 className="text-accent font-bold text-md flex justify-center">
            Léo &ldquo;InkMaster Dupont
          </h1>
          <p>
            Avec une passion ardente pour l&apos;art du tatouage depuis son plus
            jeune âge, Léo &ldquo;InkMaster&ldquo; Dupont a commencé à graver
            son chemin dans le monde du tatouage dès qu&apos;il a pu tenir une
            machine à tatouer. Originaire d&apos;une famille d&apos;artistes, il
            a hérité d&apos;un talent inné pour transformer les idées en œuvres
            d&apos;art vivantes et vibrantes.
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;
