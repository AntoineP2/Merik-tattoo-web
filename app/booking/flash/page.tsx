import FlashForm from '@/app/components/booking/FlashForm'
import Image from 'next/image'
import flashImage from "../../../public/flash.png"

const flashPage = () => {
    return (
        <div className='flex flex-col items-center justify-center '>
            <Image src={flashImage} alt="Flash" width={300} className='hidden md:block' />
            <Image src={flashImage} alt="Flash" width={150} className='md:hidden' />
            <FlashForm />
        </div>
    )
}

export default flashPage