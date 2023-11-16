import React from "react";
import livraison1 from "../../../public/carouselmages/camion dans les montagnes.webp"
import livraison2 from "../../../public/carouselmages/Camion rouge avec une remorque à plateau.webp"
import livraison3 from "../../../public/carouselmages/Semi remorque tirant un semi remorque.webp"
import livraison4 from "../../../public/carouselmages/Photo en noir et blanc d'un camion.webp"
import { GrValidate } from "react-icons/gr"
import { GrUserWorker } from "react-icons/gr";
import { TfiRulerPencil } from "react-icons/tfi";
import { VscWorkspaceTrusted } from "react-icons/vsc"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa"




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

export const skills = [
  {
    title: "Initiative",
    icon: React.createElement(GrValidate),
    description: "Being proactive in the search of solutions, in learning, in professional development and, in understanding our customers’ needs.",
  },
  {
    title: "Teamwork",
    icon: React.createElement(GrValidate),
    description: "Collaborate with team members, seek team recognition, and commit to the team’s objectives.  Assume responsibility for all the team members’ actions.",
  },
  {
    title: "Innovation",
    icon: React.createElement(GrValidate),
    description: "Challenge processes and solutions while searching for an alternative that adds more value. Identify areas of opportunity for innovation.",
  },
  {
    title: "Integrity",
    icon: React.createElement(GrValidate),
    description: "Honesty, assertiveness, transparency, follow internal and customers’ policies and rules; and communicate.",
  },
] as const;

export const competences = [
  {
    title: "We are Professionals",
    icon: React.createElement(GrUserWorker),
    description: "We are a multi-competent enterprise transforming car haulage industry. Safe Haulage was founded on its in-depth expertise and authority in the field of car haulage and car recovery services.",
  },
  {
    title: "We are Trusted",
    icon: React.createElement(VscWorkspaceTrusted),
    description: "We have made a great reputation for ourselves having been in the business for 10yrs, our services speaks for us. We specializes in a variety of haulage and car recovery services",
  },
  {
    title: "We are Creative",
    icon: React.createElement(TfiRulerPencil),
    description: "We have a unique and highly-technical approach to car haulage. We Pride ourselves with the fact that we have tremendous testimonies about services",
  },
] as const;


export const socials = [
   {
    name: "WhatsApp",
    icon: React.createElement(FaWhatsappSquare),
  },
  {
    name: "Facebook",
    icon: React.createElement(FaFacebookSquare),
  },
  {
    name: "LinkedIn",
    icon: React.createElement(FaLinkedin),
  },
  {
    name: "Twitter",
    icon: React.createElement(FaTwitterSquare),
  },
  {
    name: "Instagram",
    icon: React.createElement(FaInstagramSquare),
  },
  
] as const;

export const contacts = [
  { 
    title: "Address", 
    details: {
      street: "50 Abimbola street Seaside Estate Badore Ajah",
      city: "Ajah, Lagos State",
      country: "Nigeria",
    },
  },
  { 
    title: "24/7 Quick Response", 
    details: {
      phone: '08023378995',
      mobile: '07030873672',
      email: 'info@safehaulrecovery.com',
    },
  },
  { 
    title: "Working Hours", 
    details: {
      mon_fri: '7am to 6pm',
      Sat: '10.00am to 16.00pm',
      Sun: 'We are Closed',
    },
  }
  
] as const;