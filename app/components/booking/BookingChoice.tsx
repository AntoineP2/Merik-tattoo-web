"use client"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useInView } from "react-intersection-observer"

const BookingChoice = () => {
    const router = useRouter()
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

    const handleClick = (path: string) => {
        router.push(path)
    }
    return (
        <>
            <motion.div
                ref={ref}
                variants={variantsList}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className='flex flex-col gap-5 justify-center items-center md:mt-20 '
            >
                <motion.div variants={variantsItem} className="w-[75%] md:w-[60%]">
                    <button onClick={() => handleClick("/booking/flash")} className="bg-primary w-full rounded-md py-2 hover:scale-105 active:scale-100 transition ease-in-out duration-150"><p className="font-bold">Je veux un flash !</p></button>
                </motion.div>
                <motion.div variants={variantsItem} className="w-[75%] md:w-[60%]">
                    <button onClick={() => handleClick("/booking/custom")} className="bg-primary w-full rounded-md py-2 hover:scale-105 active:scale-100 transition ease-in-out duration-150"><p className="font-bold">Je veux un tatouage perso !</p></button>
                </motion.div>
            </motion.div>
        </>
    )
}

export default BookingChoice