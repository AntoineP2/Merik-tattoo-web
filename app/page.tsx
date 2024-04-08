import ListTattoo from "./components/homePage/ListTattoo";
import Description from "./components/homePage/Description";
import TattoDescription from "./components/homePage/TattoDescription";
import lettragePresentation from "../public/lettrage-presentation.png";
import lettrageTattooList from "../public/lettrage-tattoo-list.png";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center mb-10">
        <Image src={lettragePresentation} alt="lettrage" width={150} />
      </div>
      <div className="flex flex-col gap-7 mb-14">
        <div className="mb-10 md:mb-14">
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
          <TattoDescription />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image src={lettrageTattooList} alt="lettrage" width={150} />
      </div>
      <div className="flex justify-center items-center mt-10">
        <ListTattoo />
      </div>
    </main>
  );
}
