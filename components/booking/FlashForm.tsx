"use client";
import {
  DayPreference,
  DISPONIBILITY_ENUM,
  FlashFormInputs,
  PLACEMENT_ENUM,
} from "@/utils/enum";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  FaFacebook,
  FaHashtag,
  FaInstagram,
  FaLongArrowAltDown,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { IoIosArrowBack, IoMdMail } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { toast } from "sonner";

const FlashForm = () => {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [daysOfWeek, setDaysOfWeek] = useState<string[]>([]);
  const [instagramChoice, setInstagramChoice] = useState(false);
  const [facebookChoice, setFacebookChoice] = useState(false);
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

  const onChangeDayOfWeek = (day: number) => {
    if (daysOfWeek.includes(DayPreference[day])) {
      setDaysOfWeek(daysOfWeek.filter((d) => d !== DayPreference[day]))
    } else {
      setDaysOfWeek([...daysOfWeek, DayPreference[day]])
    }
  }


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FlashFormInputs>();

  const onSubmit: SubmitHandler<FlashFormInputs> = async (data) => {
    try {
      const {
        name,
        surname,
        email,
        instagram,
        facebook,
        reference,
        placement,
        disponibility,
      } = data;
      setSubmitLoading(true);
      await axios.post("/api/mail/flash", { name, surname, email });
      await axios.post("/api/mail/flash/recap", {
        name,
        surname,
        email,
        instagram: instagramChoice ? instagram : "Non renseigné",
        facebook: facebookChoice ? facebook : "Non renseigné",
        reference,
        placement,
        daysOfWeek,
        disponibility,
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
                <div className="flex justify-center items-center pt-2 pb-2 md:justify-start">
                  <h1 className="text-lg font-bold md:ml-2 text-primary">
                    {" "}
                    Tes informations personnelles
                  </h1>
                </div>
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
                        pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9_\-\.\s]+$/,
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
                        pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9_\-\.\s]+$/,
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
                      Le prénomn est trop long
                    </span>
                  )}
                </div>

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
              </div>
            </motion.div>

            {/*------------------------  reseau  -----------------------------*/}
            <motion.div variants={variantsItem} className="flex flex-col bg-base-200 rounded-lg shadow-sm p-4 shadow-primary gap-3">
              <div className="flex justify-center items-center pt-2 pb-2 md:justify-start">
                <h1 className="text-lg font-bold md:ml-2 text-primary">
                  {" "}
                  Tes reseaux sociaux
                </h1>
              </div>
              <div className="flex justify-center items-center pt-2 pb-2 md:justify-start">
                <h1 className="text-md font-bold md:ml-2 text-accent">
                  {" "}
                  Selectionne tes reseaux sociaux
                </h1>
              </div>
              <div className="flex justify-center max-md:justify-evenly items-center gap-2 mt-5">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <FaInstagram size={35} />
                  <input type="checkbox" className="checkbox" onChange={() => setInstagramChoice(!instagramChoice)} />
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <FaFacebook size={35} />
                  <input type="checkbox" className="checkbox" onChange={() => setFacebookChoice(!facebookChoice)} />
                </div>

              </div>
              {/*Instagram*/}
              {instagramChoice && <div>
                <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                  <FaInstagram size={15} className="text-accent" />
                  <input
                    disabled={submitLoading}
                    type="text"
                    className="grow"
                    placeholder="Instagram"
                    {...register("instagram", {
                      required: false,
                      maxLength: 30,
                      pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9_\-\.\s]+$/,
                    })}
                  />
                </label>
                {errors.instagram?.type === "pattern" && (
                  <span className="text-error text-xs">
                    Ton pseudo instagram comprend des caractères interdit
                  </span>
                )}
                {errors.instagram?.type === "maxLength" && (
                  <span className="text-error text-xs">
                    Le pseudo instagram est trop long
                  </span>
                )}
              </div>}
              {facebookChoice && <div>
                <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                  <FaFacebook size={15} className="text-accent" />
                  <input
                    disabled={submitLoading}
                    type="text"
                    className="grow"
                    placeholder="Facebook"
                    {...register("facebook", {
                      required: false,
                      maxLength: 30,
                      pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9_\-\.\s]+$/,
                    })}
                  />
                </label>
                {errors.instagram?.type === "pattern" && (
                  <span className="text-error text-xs">
                    Ton pseudo facebook comprend des caractères interdit
                  </span>
                )}
                {errors.instagram?.type === "maxLength" && (
                  <span className="text-error text-xs">
                    Le pseudo facebook est trop long
                  </span>
                )}
              </div>}
            </motion.div>

            {/*------------------------  Reference, Placement, Disponibility -----------------------------*/}
            <motion.div variants={variantsItem} className="flex flex-col bg-base-200 rounded-lg shadow-sm p-4 shadow-primary gap-3">
              <div className="flex justify-center items-center pt-2 pb-2 md:justify-start">
                <h1 className="text-lg text-primary font-bold md:ml-2">
                  {" "}
                  Le tattoo
                </h1>
              </div>
              <div>
                {/*Reference*/}
                <label className="input input-bordered input-sm input-primary bg-base-300 flex items-center gap-2">
                  <FaHashtag size={15} className="text-accent" />
                  <input
                    disabled={submitLoading}
                    type="text"
                    className="grow"
                    placeholder="Référence du flash"
                    {...register("reference", {
                      required: true,
                      maxLength: 10,
                    })}
                  />
                </label>
                {errors.reference?.type === "required" && (
                  <span className="text-error text-xs">
                    La référence est obligatoire
                  </span>
                )}
                {errors.reference?.type === "maxLength" && (
                  <span className="text-error text-xs">
                    La référence est trop longue
                  </span>
                )}
              </div>
              <div>
                {/*Placement*/}
                <div className="flex justify-center items-center pt-2 pb-2 md:justify-start">
                  <h2 className="text-md font-bold text-accent md:ml-2">
                    {" "}
                    Selectionne ton emplacement
                  </h2>
                </div>
                <select
                  disabled={submitLoading}
                  className="select select-primary w-full bg-base-300 select-sm"
                  {...register("placement", { required: true })}
                >
                  <option value="" disabled>
                    Selectionne ton emplacement
                  </option>
                  {Object.values(PLACEMENT_ENUM).map((placement) => (
                    <option key={placement} value={placement}>
                      {placement}
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

                <div className="form-control">
                  {DayPreference.map((day, index) => (
                    <label key={index} className="label cursor-default rounded-lg">
                      <span className="label-text">{day}</span>
                      <input type="checkbox" disabled={submitLoading} onChange={() => onChangeDayOfWeek(index)} className="checkbox" />
                    </label>
                  ))}
                </div>
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

export default FlashForm;
