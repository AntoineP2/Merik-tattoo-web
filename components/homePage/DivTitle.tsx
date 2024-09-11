"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const DivTitle = ({
    children
}: Readonly<{
    children: React.ReactNode;
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
                className="flex justify-center items-center mb-10">
                {children}
            </motion.div>
        </>
    )
}

export default DivTitle