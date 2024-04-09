import { StaticImageData } from "next/image";

export enum DISPONIBILITY_ENUM {
  NOW = "Dès que possible",
  ONE_WEEK = "Dans 1 semaine",
  TWO_WEEKS = "Dans 2 semaines",
  THREE_WEEKS = "Dans 3 semaines",
  ONE_MONTH = "Dans 1 mois",
  TWO_MONTHS = "Dans 2 mois",
  THREE_MONTHS = "Dans 3 mois",
  MORE = "Dans plus de 3 mois",
}

export enum PLACEMENT_ENUM {
  ARM = "Bras",
  LEG = "Jambe",
  BACK = "Dos",
  CHEST = "Torse",
  HAND = "Main",
  FOOT = "Pied",
  HEAD = "Tête",
  OTHER = "Autre",
}

export enum TATTOO_SIZE_ENUM {
  SMALL = "Petit",
  MEDIUM = "Moyen",
  LARGE = "Grand",
  XLARGE = "Très grand",
}

export type FlashFormInputs = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  reference: string;
  placement: PLACEMENT_ENUM;
  disponibility: DISPONIBILITY_ENUM;
};

export type CustomTattooFormInputs = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  description: string;
  placement: PLACEMENT_ENUM;
  disponibility: DISPONIBILITY_ENUM;
  size: TATTOO_SIZE_ENUM;
};

export type TattoosListType = {
  id: number;
  description: string;
  image: StaticImageData;
};

export type AppInitialStateType = {
  isOpen: boolean;
};
