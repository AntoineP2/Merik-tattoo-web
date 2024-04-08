import Description from "./components/homePage/Description";
import TattoDescription from "./components/homePage/TattoDescription";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-7">
        <div className="mb-10 md:mb-14">
          <div className="divider divider-primary">
            <h1 className="md:text-lg text-md font-bold text-primary">
              Présentation
            </h1>
          </div>
          <Description />
        </div>
        <div>
          <div className="divider divider-primary">
            <h1 className="md:text-lg text-md font-bold text-primary">
              Tattoo Style
            </h1>
          </div>
          <TattoDescription />
        </div>
      </div>
    </main>
  );
}
