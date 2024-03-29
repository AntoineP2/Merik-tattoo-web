import Image from 'next/image'
import logo from '../../public/logo-merik.png'
import { MdEmail, MdPlace } from 'react-icons/md'
import { IoLogoInstagram } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="flex flex-col gap-4 md:flex-row md:justify-around md:items-center px-10 py-4 border-t bg-base-300 text-base-content border-base-200 md:mt-0">
            <aside className="items-center flex gap-2 text-sm">
                <Image src={logo} alt="Logo merik" width={70} />
                <div className="flex flex-col">
                    <p>Merikos Tattoo </p>
                    <div className="flex gap-2">
                        <p>  27 Bd de Strasbourg, 34000 Montpellier</p>
                        <MdPlace />
                    </div>
                </div>
            </aside>

            <nav className="md:place-self-center md:justify-self-end mt-7 md:mt-0">
                <div className="flex justify-center items-center gap-4 ">
                    <Link href=""><MdEmail size={25} /></Link>
                    <Link href="https://www.instagram.com/merikos.mi.corazon/"><IoLogoInstagram size={25} /></Link>
                    <Link href="https://www.facebook.com/merikmaldito"><FaFacebook size={25} /></Link>
                </div>
            </nav>
        </footer>
    )
}

export default Footer