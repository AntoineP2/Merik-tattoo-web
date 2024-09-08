import ListTattoo from "./components/homePage/ListTattoo";
import Description from "./components/homePage/Description";
import TattooDescription from "./components/homePage/TattooDescription";
import lettragePresentation from "../public/lettrage-presentation.png";
import lettrageTattooList from "../public/lettrage-tattoo-list.png";
import lettrageContact from "../public/lettrage-contact.png";
import lettrageTattooCare from "../public/lettrage-tattoo-care.png";
import Image from "next/image";
import HomeContact from "./components/homePage/HomeContact";
import TattooCare from "./components/homePage/TattooCare";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center mb-10">
        <Image src={lettragePresentation} alt="lettrage" width={150} />
      </div>
      <div className="flex flex-col gap-7 mb-14">
        <div className="mb-5 md:mb-14">
          <div className="divider divider-primary">
            <h1 className="md:text-lg text-md font-bold text-primary">
              Qui est Merikos ?
            </h1>
          </div>
          <Description />
        </div>
        <div>
          <div className="divider divider-primary">
            <h1 className="md:text-lg text-md font-bold text-primary">
              Son tattoo style
            </h1>
          </div>
          <TattooDescription />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image src={lettrageTattooList} alt="lettrage" width={150} />
      </div>
      <div className="flex justify-center items-center mt-10">
        <ListTattoo />
      </div>
      <div className="mt-14">
        <div className="flex justify-center items-center">
          <Image src={lettrageContact} alt="lettrage" width={150} />
        </div>
        <HomeContact />
      </div>
      <div className="mt-14">
        <div className="flex justify-center items-center">
          <Image src={lettrageTattooCare} alt="lettrage" width={150} />
        </div>
        <TattooCare />
      </div>
    </main>
  );
}


// TODO : Dans formulaire Remplacer Choix Emplacement par Champ vide