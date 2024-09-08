"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const DivHome = ({
    children, title
}: Readonly<{
    children: React.ReactNode;
    title: string;
}>) => {
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
        <>
            <motion.div
                ref={ref}
                variants={variants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="mb-5 md:mb-14">
                <div className="divider divider-primary">
                    <h1 className="md:text-lg text-md font-bold text-primary">
                        {title}
                    </h1>
                </div>
                {children}
            </motion.div>
        </>
    )
}

export default DivHome