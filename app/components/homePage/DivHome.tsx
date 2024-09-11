"use client"
import React from 'react'

const DivHome = ({
    children, title
}: Readonly<{
    children: React.ReactNode;
    title: string;
}>) => {
    return (
        <>
            <div className="mb-5 md:mb-14">
                <div className="divider divider-primary">
                    <h1 className="md:text-lg text-md font-bold text-primary">
                        {title}
                    </h1>
                </div>
                {children}
            </div>
        </>
    )
}

export default DivHome