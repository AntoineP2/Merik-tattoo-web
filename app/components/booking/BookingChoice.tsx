"use client"
import { useRouter } from "next/navigation"

const BookingChoice = () => {
    const router = useRouter()

    const handleClick = (path: string) => {
        router.push(path)
    }
    return (
        <>
            <div className='flex flex-col gap-5 justify-center items-center md:mt-20 '>
                <button onClick={() => handleClick("/booking/flash")} className="bg-primary w-[75%] md:w-[60%] rounded-md py-2 hover:scale-105 active:scale-100 transition ease-in-out duration-150"><p className="font-bold">Je veux un flash !</p></button>
                <button onClick={() => handleClick("/booking/custom")} className="bg-secondary w-[75%] md:w-[60%] rounded-md py-2 hover:scale-105 active:scale-100 transition ease-in-out duration-150"><p className="font-bold">Je veux un tatouage perso !</p></button>
            </div>
        </>
    )
}

export default BookingChoice