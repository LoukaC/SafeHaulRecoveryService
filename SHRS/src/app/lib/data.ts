import React from "react";
import livraison1 from "../../../public/carouselmages/camion dans les montagnes.webp"
import livraison2 from "../../../public/carouselmages/Camion rouge avec une remorque à plateau.webp"
import livraison3 from "../../../public/carouselmages/Semi remorque tirant un semi remorque.webp"
import livraison4 from "../../../public/carouselmages/Photo en noir et blanc d'un camion.webp"



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Deliveries",
    hash: "#deliveries",
  },
  {
    name: "Testimonies",
    hash: "#testimonies",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const carrouselImages = [
  {
    name: "livraison 1",
    alt: "Camion dans les montages",
    imageUrl: livraison1,
  },
  {
    name: "livraison 2",
    alt: "Camion rouge avec une remorque à plateau",
    imageUrl: livraison2,
  },
  {
    name: "livraison 3",
    alt: "Semi remorque tirant un semi remorque",
    imageUrl: livraison3,
  },
  {
    name: "livraison 4",
    alt: "Photo en noir et blanc d'un camion",
    imageUrl: livraison4,
  },
  
] as const;