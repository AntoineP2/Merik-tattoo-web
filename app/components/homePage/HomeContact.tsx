"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomeContact = () => {
  const router = useRouter();
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

  const handleClickReservations = () => {
    router.push("/booking");
  };

  return (
    <>
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col flex-wrap gap-5 items-center md:justify-around md:items-center mt-8 md:mt-10">
        <div className="flex flex-col gap-3 bg-base-300 rounded-md py-3 px-2 border border-primary shadow-sm shadow-primary md:w-[40vw] w-[80vw]">
          <p>
            Es-tu intéressé par ce que tu as vu ? Souhaites-tu toi aussi avoir
            ton{" "}
            <span className="text-accent font-bold">
              tatouage unique et personnalisé
            </span>{" "}
            ?
          </p>
          <p>
            Ou préfères-tu te lancer dans un{" "}
            <span className="text-accent font-bold">flash</span> proposé par
            Merikos ?
          </p>
          <p>Aucun souci, clique sur le bouton juste en dessous.</p>
          <div className="flex justify-center items-center mt-8 mb-3">
            {" "}
            <button
              onClick={handleClickReservations}
              className="px-5 py-2 md:bg-primary bg-primary rounded-md font-bold scale-100 active:scale-90 hover:bg-accent transtion duration-150 ease-in-out"
            >
              Reservations
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HomeContact;
