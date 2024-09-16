import TattooCare from "@/components/homePage/TattooCare"
import Image from "next/image"
import { GiHealthNormal } from "react-icons/gi"
import lettrageTattooCare from "@/public/lettrage-tattoo-care.png"
import DivTitle from "@/components/homePage/DivTitle"


const healthPage = () => {
    return (
        <div>
            <DivTitle>
                <Image src={lettrageTattooCare} alt="lettrage" width={150} />
            </DivTitle>
            <TattooCare />
        </div>
    )
}

export default healthPage