"use client";
import Image from "next/image";
import logo from "../../../public/logo-merik.png";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const [isClick, setIsClick] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsClick(!isClick);
  };

  const handleClickLink = (path: string, isMobile: boolean) => {
    router.push(path);
    if (isMobile) {
      setIsClick(!isClick);
    }
  };

  return (
    <div className="absolute w-screen z-40">
      <div
        className={`flex items-center justify-between px-3 py-2 ${
          isClick ? "bg-base-200" : "bg-base-100"
        } transition ease-in-out duration-150 md:shadow-sm md:shadow-base-200`}
      >
        <div className="flex-1 md:relative">
          <button onClick={() => handleClickLink("/", false)}>
            {" "}
            <Image
              src={logo}
              alt="Logo merik"
              width={50}
              className="md:relative md:left-9"
            />
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={handleClick}>
            {isClick ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-center">
          LETTRAGE MERIKO !
        </div>
        <div className="md:flex flex-1 relative hidden gap-5 items-center justify-center ">
          <div className="flex gap-5">
            <button
              onClick={() => handleClickLink("/", false)}
              className="hover:-translate-y-1 transition duration-300 ease-in-out"
            >
              <p>Accueil</p>
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
        className={`md:hidden absolute transition ease-in-out duration-150 ${
          isClick
            ? "-z-10 bg-base-200 border-b border-accent"
            : "-translate-y-32 -z-10 bg-base-100"
        } py-5`}
      >
        <div className="flex flex-col gap-2 items-center w-screen">
          <button onClick={() => handleClickLink("/", true)}>
            <p>Accueil</p>
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
