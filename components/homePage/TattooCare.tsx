"use client";
import { careList } from "@/utils/list";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TattooCare = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variantsList = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const variantsItem = {
    hidden: { opacity: 0, x: 35 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.div
        ref={ref}
        variants={variantsList}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mt-8 md:mt-10 flex justify-center items-center">
        <div className="bg-base-300 flex flex-col gap-3 rounded-md py-3 px-2 border border-primary shadow-sm shadow-primary md:w-[60vw] md:self-end order-2 md:order-1">
          {careList.map((care, index) => {
            return (
              <motion.div variants={variantsItem} key={index}>
                <div className="flex gap-2 items-center">
                  <h2 className="font-bold text-primary">{care.title}</h2>
                  {care.icon}
                </div>
                <p className="px-5">{care.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default TattooCare;
