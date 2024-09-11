import CustomTattooForm from '@/components/booking/CustomTattooForm'
import Image from 'next/image'
import customImage from "../../../public/custom-tattoo.png"

const customPage = () => {
    return (
        <div className='flex flex-col items-center justify-center '>
            <Image src={customImage} alt="Flash" width={300} className='hidden md:block' />
            <Image src={customImage} alt="Flash" width={200} className='md:hidden' />
            <CustomTattooForm />
        </div>
    )
}

export default customPage