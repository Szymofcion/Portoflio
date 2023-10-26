import { createContext } from "react";
import { ReactNode } from "react";
import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoSass,
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoRedux,
} from "react-icons/bi";
import {
  SiReactrouter,
  SiGreensock,
  SiVitess,
  SiExpress,
} from "react-icons/si";
import { LiaCookieSolid } from "react-icons/lia";

interface Slide {
  title: string;
  src: string;
  icons: ReactNode;
  link: string;
  code: string;
}

import adRespect from "../assets/Untitled.png";
import shoesShop from "../assets/ShoesShop.png";
import carOrders from "../assets/carOrders.png";
import ultraGamers from "../assets/UltraGamers.png";
import portfolio from "../assets/Portfolio.png";
import netflix from "../assets/Netflix2.png";

const slides: Slide[] = [
  {
    src: adRespect,
    title: "GiardDesign",
    icons: (
      <>
        <BiLogoJavascript />
        <BiLogoHtml5 /> <BiLogoSass />
        <BiLogoBootstrap />
      </>
    ),
    link: "https://szymofcion.github.io/adRespect/",
    code: "https://github.com/Szymofcion/adRespect",
  },
  {
    src: portfolio,
    title: "Portfolio",
    icons: (
      <>
        <BiLogoReact />
        <BiLogoTypescript />
        <BiLogoHtml5 /> <SiGreensock />
        <BiLogoSass />
        <SiVitess />
      </>
    ),
    link: "",
    code: "https://szymofcion.github.io/adRespect/",
  },
  {
    src: shoesShop,
    title: "ShoesShop",
    icons: (
      <>
        <BiLogoReact />
        <BiLogoJavascript />
        <BiLogoHtml5 /> <BiLogoSass />
        <SiReactrouter />
      </>
    ),
    link: "https://szymofcion.github.io/ShoesShopRedux/",
    code: "https://github.com/Szymofcion/ShoesShopRedux",
  },
  {
    src: netflix,
    title: "NetflixClone",
    icons: (
      <>
        <BiLogoReact />
        <BiLogoRedux />
        <SiExpress />
        <BiLogoJavascript />
        <BiLogoHtml5 /> <BiLogoSass />
      </>
    ),
    link: "",
    code: "https://github.com/Szymofcion/Netflix-Clon",
  },
  {
    src: carOrders,
    title: "CarOrders",
    icons: (
      <>
        <BiLogoJavascript />
        <BiLogoHtml5 />
        <BiLogoCss3 />
        <LiaCookieSolid />
      </>
    ),
    link: "https://szymofcion.github.io/car_orders/",
    code: "https://github.com/Szymofcion/car_orders",
  },
  {
    src: ultraGamers,
    title: "UltraGamers",
    icons: (
      <>
        <BiLogoJavascript />
        <BiLogoHtml5 />
        <BiLogoCss3 />
        <BiLogoBootstrap />
      </>
    ),
    link: "https://szymofcion.github.io/UltraGamers/",
    code: "https://github.com/Szymofcion/UltraGamers",
  },
];

export const ProjectsContext = createContext({ slides });
