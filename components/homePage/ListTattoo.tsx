"use client"
import Image from "next/image";
import merikAction from "../../public/merikAction.jpg";
import { TattoosListType } from "@/utils/enum";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const tattoosList: TattoosListType[] = [
  {
    id: 1,
    description: "Description 1",
    image: merikAction,
  },
  {
    id: 2,
    description: "Description 2",
    image: merikAction,
  },
  {
    id: 3,
    description: "Description 3",
    image: merikAction,
  },
  {
    id: 4,
    description: "Description 4",
    image: merikAction,
  },
  {
    id: 5,
    description: "Description 5",
    image: merikAction,
  },
];

const ListTattoo = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="collapse bg-base-300 border border-primary shadow-sm shadow-primary md:w-[70vw]">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary peer-checked:bg-primary ">
        <p className="font-bold flex justify-center items-center">
          Clique pour voir les Tattos
        </p>
      </div>
      <div className="collapse-content bg-base-300 peer-checked:bg-base-300">
        <div className="flex flex-col gap-3 md:gap-5 md:flex-row md:flex-wrap justify-center items-center pt-2">
          {tattoosList.map((tattoo) => {
            return (
              <Image
                src={tattoo.image}
                alt={tattoo.description}
                width={350}
                key={tattoo.id}
                className="rounded-md md:brightness-50 md:blur-[2px] hover:md:filter-none transition duration-300 ease-in-out"
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ListTattoo;
