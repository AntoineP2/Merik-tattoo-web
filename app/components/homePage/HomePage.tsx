"use client"
import React from 'react'
import DivTitle from './DivTitle'
import DivHome from './DivHome'
import lettragePresentation from "../../../public/lettrage-presentation.png";
import lettrageTattooList from "../../../public/lettrage-tattoo-list.png";
import lettrageContact from "../../../public/lettrage-contact.png";
import lettrageTattooCare from "../../../public/lettrage-tattoo-care.png";
import Description from './Description';
import TattooDescription from './TattooDescription';
import ListTattoo from './ListTattoo';
import HomeContact from './HomeContact';
import TattooCare from './TattooCare';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HomePage = () => {
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
                animate={inView ? "visible" : "hidden"}>
                <motion.div variants={variantsItem}>
                    <DivTitle>
                        <Image src={lettragePresentation} alt="lettrage" width={150} />
                    </DivTitle>
                </motion.div>

                <div className="flex flex-col gap-7 mb-14">
                    <motion.div variants={variantsItem}>
                        <DivHome title="Qui est Merikos ?">
                            <Description />
                        </DivHome>
                    </motion.div>
                    <motion.div variants={variantsItem}>
                        <DivHome title="Son tattoo Style">
                            <TattooDescription />
                        </DivHome>
                    </motion.div>
                </div>
            </motion.div>

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
        </>
    )
}

export default HomePage