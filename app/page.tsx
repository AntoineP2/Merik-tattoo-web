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
import DivHome from "./components/homePage/DivHome";
import DivTitle from "./components/homePage/DivTitle";

export default function Home() {
  return (
    <main>
      <DivTitle>
        <Image src={lettragePresentation} alt="lettrage" width={150} />
      </DivTitle>

      <div className="flex flex-col gap-7 mb-14">
        <DivHome title="Qui est Merikos ?">
          <Description />
        </DivHome>
        <DivHome title="Son tattoo Style">
          <TattooDescription />
        </DivHome>
      </div>
      <DivTitle>
        <Image src={lettrageTattooList} alt="lettrage" width={150} />
      </DivTitle>
      <div className="flex justify-center items-center mt-10">
        <ListTattoo />
      </div>
      <div className="mt-14">
        <DivTitle>
          <Image src={lettrageContact} alt="lettrage" width={150} />
        </DivTitle>
        <HomeContact />
      </div>
      <div className="mt-14">
        <DivTitle>
          <Image src={lettrageTattooCare} alt="lettrage" width={150} />
        </DivTitle>
        <TattooCare />
      </div>
    </main>
  );
}


// TODO : Dans formulaire Remplacer Choix Emplacement par Champ vide