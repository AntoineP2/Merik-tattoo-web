"use client";
import Image from "next/image";
import logo from "../../public/logo-merik.png";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useRouter } from "next/navigation";
import lettrage from "../../public/logo-lettrage.png";
import { useDispatch, useSelector } from "react-redux";
import { setOpenFalse, setToggleOpen } from "@/store/app.slice";
import { RootState } from "@/store/app.store";

const Navigation = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.app);
  const router = useRouter();

  const handleClick = () => {
    dispatch(setToggleOpen());
  };

  const handleClickLink = (path: string, isMobile: boolean) => {
    router.push(path);
    if (isMobile) {
      dispatch(setOpenFalse());
    }
  };

  return (
    <div className="absolute w-screen z-40">
      <div
        className={`flex items-center justify-between px-3 py-2 ${isOpen ? "bg-base-200" : "bg-base-100"
          } transition ease-in-out duration-150 md:shadow-sm md:shadow-base-200`}
      >
        <div className=" md:relative md:flex-1 md:flex justify-center">
          <button onClick={() => handleClickLink("/", false)}>
            <Image
              src={logo}
              alt="Logo merik"
              width={50}
              className="md:relative md:left-9"
            />
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center md:hidden">
          <Image src={lettrage} alt="Lettrage merik" width={180} />
        </div>
        <div className="md:hidden">
          <button onClick={handleClick}>
            {isOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-center">
          <Image src={lettrage} alt="Lettrage merik" width={400} />
        </div>
        <div className="md:flex flex-1 relative hidden gap-5 items-center justify-center ">
          <div className="flex gap-5">
            <button
              onClick={() => handleClickLink("/", false)}
              className="hover:-translate-y-1 transition duration-300 ease-in-out"
            >
              <p>Accueil</p>
            </button>
            <button className="hover:-translate-y-1 transition duration-300 ease-in-out" onClick={() => handleClickLink("/soin", true)}>
              <p>Soin</p>
            </button>
            <button
              onClick={() => handleClickLink("/booking", false)}
              className="hover:-translate-y-1 transition duration-300 ease-in-out"
            >
              <p>Booking</p>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden absolute transition ease-in-out duration-150 ${isOpen
          ? "-z-10 bg-base-200 border-b border-accent"
          : "-translate-y-32 -z-10 bg-base-100"
          } py-5`}
      >
        <div className="flex flex-col gap-2 items-center w-screen">
          <button onClick={() => handleClickLink("/", true)}>
            <p>Accueil</p>
          </button>
          <button onClick={() => handleClickLink("/soin", true)}>
            <p>Soin</p>
          </button>
          <button onClick={() => handleClickLink("/booking", true)}>
            <p>Booking</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
