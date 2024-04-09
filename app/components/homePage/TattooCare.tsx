"use client";
import { careList } from "@/utils/list";

const TattooCare = () => {
  return (
    <>
      <div className="mt-8 md:mt-10 flex justify-center items-center">
        <div className="bg-base-300 flex flex-col gap-3 rounded-md py-3 px-2 border border-primary shadow-sm shadow-primary md:w-[60vw] md:self-end order-2 md:order-1">
          {careList.map((care, index) => {
            return (
              <div key={index}>
                <div className="flex gap-2 items-center">
                  <h2 className="font-bold text-accent">{care.title}</h2>
                  {care.icon}
                </div>
                <p className="px-5">{care.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TattooCare;
