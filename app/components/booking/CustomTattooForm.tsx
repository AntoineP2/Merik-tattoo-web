"use client";
import {
  CustomTattooFormInputs,
  DayPreference,
  DISPONIBILITY_ENUM,
  PLACEMENT_ENUM,
  TATTOO_SIZE_ENUM,
} from "@/utils/enum";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaInstagram, FaLongArrowAltDown, FaUser } from "react-icons/fa";
import { IoIosArrowBack, IoMdMail } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { toast } from "sonner";

const CustomTattooForm = () => {
  const [image, setImage] = useState<string | null>(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const router = useRouter();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variantsList = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const variantsItem = {
    hidden: { opacity: 0, x: 35 },
    visible: { opacity: 1, x: 0 },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomTattooFormInputs>();

  const onSubmit: SubmitHandler<CustomTattooFormInputs> = async (data) => {
    try {
      const {
        name,
        surname,
        email,
        instagram,
        description,
        size,
        placement,
        dayOfWeek,
        disponibility,
      } = data;
      setSubmitLoading(true);
      await axios.post("/api/mail/custom", { name, surname, email });
      await axios.post("/api/mail/custom/recap", {
        name,
        surname,
        email,
        instagram,
        description,
        size,
        dayOfWeek,
        placement,
        disponibility,
        image
      });
      setSubmitLoading(false);
      toast.success("Ta demande de réservation a bien été envoyé");
      router.push("/booking/success");
    } catch (e) {
      setSubmitLoading(false);
      toast.error("Une erreur est survenue, veuillez réessayer plus tard");
      console.error(e);
    }
  };

  const handleClickBack = () => {
    router.push("/booking");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/gif")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
    } else {
      setImage(null);
    }
  };

  return (
    <>
      <div className="relative md:w-[45vw] w-[85vw] mx-3 my-10">
        <div className="flex justify-center items-center mb-6 gap-3">
          <FaLongArrowAltDown size={15} />
          <h2 className="font-bold text-lg md:text-xl">
            Remplis le formulaire{" "}
          </h2>
          <FaLongArrowAltDown size={15} />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <motion.div
            ref={ref}
            variants={variantsList}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-5">
            {/*------------------------  Nom et prénom -----------------------------*/}
            <motion.div variants={variantsItem} className="flex flex-col bg-base-200 rounded-lg shadow-sm p-4 shadow-primary gap-3">
              <div className="flex flex-col gap-3">
                <div>
                  {/*Nom*/}
                  <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                    <FaUser size={15} className="text-accent" />
                    <input
                      disabled={submitLoading}
                      type="text"
                      placeholder="Nom"
                      {...register("name", {
                        required: true,
                        pattern: /^[A-Za-z]+$/,
                        maxLength: 20,
                      })}
                    />
                  </label>
                  {errors.name?.type === "pattern" && (
                    <span className="text-error text-xs">
                      Le nom doit être composé de lettre uniquement
                    </span>
                  )}
                  {errors.name?.type === "required" && (
                    <span className="text-error text-xs">
                      Le nom est obligatoire
                    </span>
                  )}
                  {errors.name?.type === "maxLength" && (
                    <span className="text-error text-xs">
                      Le nomn est trop long
                    </span>
                  )}
                </div>
                <div>
                  {/*Prénom*/}
                  <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                    <FaUser size={15} className="text-accent" />
                    <input
                      disabled={submitLoading}
                      type="text"
                      placeholder="Prénom"
                      {...register("surname", {
                        required: true,
                        pattern: /^[A-Za-z]+$/,
                        maxLength: 20,
                      })}
                    />
                  </label>
                  {errors.surname?.type === "pattern" && (
                    <span className="text-error text-xs">
                      Le prénom doit être composé de lettre uniquement
                    </span>
                  )}
                  {errors.surname?.type === "required" && (
                    <span className="text-error text-xs">
                      Le prénom est obligatoire
                    </span>
                  )}
                  {errors.surname?.type === "maxLength" && (
                    <span className="text-error text-xs">
                      Le prénom est trop long
                    </span>
                  )}
                </div>
              </div>
            </motion.div>

            {/*------------------------  phone et mail  -----------------------------*/}
            <motion.div variants={variantsItem} className="flex flex-col bg-base-200 rounded-lg shadow-sm p-4 shadow-primary gap-3">
              {/*Mail*/}
              <div>
                <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                  <IoMdMail size={15} className="text-accent" />
                  <input
                    disabled={submitLoading}
                    type="text"
                    className="grow"
                    placeholder="Adresse mail"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                      maxLength: 50,
                    })}
                  />
                </label>
                {errors.email?.type === "pattern" && (
                  <span className="text-error text-xs">
                    Le mail doit être valide
                  </span>
                )}
                {errors.email?.type === "required" && (
                  <span className="text-error text-xs">
                    Le mail est obligatoire
                  </span>
                )}
                {errors.email?.type === "maxLength" && (
                  <span className="text-error text-xs">
                    Le mail est trop long
                  </span>
                )}
              </div>
              {/*Phone*/}
              <div>
                <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                  <FaInstagram size={15} className="text-accent" />
                  <input
                    disabled={submitLoading}
                    type="text"
                    className="grow"
                    placeholder="Ton Instagram"
                    {...register("instagram", {
                      required: true,
                      pattern: /^[a-zA-Z0-9._]+$/, // Pattern pour un pseudo Instagram valide
                    })}
                  />
                </label>
                {errors.instagram?.type === "pattern" && (
                  <span className="text-error text-xs">
                    Le pseudo doit contenir uniquement des lettres, chiffres, points ou underscores
                  </span>
                )}
                {errors.instagram?.type === "required" && (
                  <span className="text-error text-xs">
                    Le pseudo Instagram est obligatoire
                  </span>
                )}
              </div>
            </motion.div>

            {/*------------------------  Reference, Placement, Disponibility, Image -----------------------------*/}
            <motion.div variants={variantsItem} className="flex flex-col bg-base-200 rounded-lg shadow-sm p-4 shadow-primary gap-3">
              <div>
                {/*Emplacement*/}
                <div className="flex justify-center items-center pt-2 pb-2 md:justify-start">
                  <h2 className="text-md font-bold text-accent md:ml-2">
                    {" "}
                    Emplacement du Tattoo
                  </h2>
                </div>
                <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                  <input
                    disabled={submitLoading}
                    type="text"
                    placeholder="Ton emplacement de tatouage"
                    {...register("placement", {
                      required: true,
                      maxLength: 300,
                      pattern: /^[A-Za-z0-9!@#$_/\s\-,\.]+$/,
                    })}
                    className="w-full"
                  />
                </label>
                {errors.surname?.type === "pattern" && (
                  <span className="text-error text-xs">
                    Le prénom doit être composé de lettre uniquement
                  </span>
                )}
                {errors.surname?.type === "required" && (
                  <span className="text-error text-xs">
                    Le prénom est obligatoire
                  </span>
                )}
                {errors.surname?.type === "maxLength" && (
                  <span className="text-error text-xs">
                    Le prénom est trop long
                  </span>
                )}
              </div>

              <div>
                {/*Taille*/}
                <div className="flex justify-center items-center pt-2 pb-2 md:justify-start">
                  <h2 className="text-md font-bold text-accent md:ml-2">
                    {" "}
                    Taille du Tattoo
                  </h2>
                </div>

                <select
                  disabled={submitLoading}
                  className="select select-primary w-full bg-base-300 select-sm"
                  {...register("size", { required: true, value: undefined })}
                >
                  <option value="" disabled>
                    Taille du Tattoo
                  </option>
                  {Object.values(TATTOO_SIZE_ENUM).map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                {/*Disponibility*/}
                <div className="flex justify-center items-center pt-2 pb-2 md:justify-start">
                  <h2 className="text-md font-bold text-accent md:ml-2">
                    {" "}
                    Ta dispo ?
                  </h2>
                </div>

                <select
                  disabled={submitLoading}
                  className="select select-primary w-full bg-base-300 select-sm"
                  {...register("disponibility", {
                    required: true,
                    value: undefined,
                  })}
                >
                  <option value="" disabled>
                    Ta dispo ?
                  </option>
                  {Object.values(DISPONIBILITY_ENUM).map((disponibility) => (
                    <option key={disponibility} value={disponibility}>
                      {disponibility}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                {/*DayPreference*/}
                <div className="flex justify-center items-center pt-2 pb-2 md:justify-start">
                  <h2 className="text-md font-bold text-accent md:ml-2">
                    {" "}
                    Tu préfère quel jour de la semaine ?
                  </h2>
                </div>

                <select
                  disabled={submitLoading}
                  className="select select-primary w-full bg-base-300 select-sm"
                  {...register("dayOfWeek", {
                    required: true,
                    value: undefined,
                  })}
                >
                  <option value="" disabled>
                    Ton jour de la semaine péférentiel ?
                  </option>
                  {DayPreference.map((dayOfWeek) => (
                    <option key={dayOfWeek} value={dayOfWeek}>
                      {dayOfWeek}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                {/*Description*/}
                <div className="flex justify-center items-center pt-2 pb-2 md:justify-start">
                  <h2 className="text-md font-bold text-accent md:ml-2">
                    Description du tattoo
                  </h2>
                </div>
                <label className=" bg-base-300 flex items-center gap-2">
                  <textarea
                    disabled={submitLoading}
                    className="grow textarea textarea-textarea textarea-sm textarea-primary bg-base-300"
                    placeholder="Décrit ton projet au maximum, taille, style, emplacement, couleur, etc..."
                    {...register("description", {
                      required: true,
                      maxLength: 10000,
                      pattern: /^[A-Za-z0-9!@#$_/\s\-,\.]+$/,
                    })}
                  />
                </label>
                {errors.description?.type === "required" && (
                  <span className="text-error text-xs">
                    La référence est obligatoire
                  </span>
                )}
                {errors.description?.type === "maxLength" && (
                  <span className="text-error text-xs">
                    La référence est trop longue
                  </span>
                )}
                {errors.description?.type === "pattern" && (
                  <span className="text-error text-xs">
                    La référence doit être composée de lettre et de chiffre
                    uniquement
                  </span>
                )}
              </div>
              <div>
                <div className="flex justify-center items-center pt-2 pb-2 md:justify-start">
                  <h2 className="text-md font-bold text-accent md:ml-2">
                    {" "}
                    Une Image pour illustrer <span className="italic">*Facultatif*</span>
                  </h2>
                </div>
                <input
                  type="file"
                  className="file-input w-full max-w-xs mb-5"
                  accept=".png, .jpeg, .jpg, .gif"
                  onChange={handleImageChange}
                />
                {image && (
                  <img
                    src={image}
                    alt="Prévisualisation"
                    className="mt-4 max-w-xs hidden md:block"
                  />
                )}
              </div>
            </motion.div>

            {/*SUBMIT*/}
            <motion.div variants={variantsItem} className="flex justify-between mt-2">
              <button
                onClick={handleClickBack}
                className="btn btn-active btn-secondary btn-sm hover:scale-105 active:scale-95"
              >
                <IoIosArrowBack size={20} />
              </button>
              <button
                type="submit"
                className="btn btn-active btn-primary btn-sm hover:scale-105 active:scale-95 min-w-20"
              >
                {submitLoading ? (
                  <span className="loading loading-dots "></span>
                ) : (
                  "Envoyer"
                )}
              </button>
            </motion.div>
          </motion.div>
        </form>
      </div>
    </>
  );
};

export default CustomTattooForm;
