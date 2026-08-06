import {
  SiReact,
  SiTypescript,
  SiMui,
  SiNestjs,
  SiPostgresql,
  SiTypeorm,
} from "react-icons/si";

import CEM1 from "../assets/CEM/CEm.png";
import DLFlogo from "../assets/DLF/LogoNegocio.jpeg";
import scroll from "../assets/BESTIX/scroll.png";
import BestixLogo from "../assets/BESTIX/Bestix_logo.svg";
import SkolLogo from "../assets/SKOL/SkolLogo.svg";
import CEMlogo from "../assets/CEM/CEM_logo.svg";
import Vantex1 from "../assets/VANTEX/Logo.png";
import Vantex2 from "../assets/VANTEX/Captura de pantalla 2026-05-21 - 18.14.18-fullpage.png";

const technologies = {
  react: { icon: SiReact, name: "React" },
  nest: { icon: SiNestjs, name: "NestJS" },
  postgres: { icon: SiPostgresql, name: "PostgreSQL" },
  typeorm: { icon: SiTypeorm, name: "TypeORM" },
  typescript: { icon: SiTypescript, name: "TypeScript" },
  mui: { icon: SiMui, name: "Material UI" },
};

export const projects = [
  {
    id: 1,
    logo: SkolLogo,
    name: "SKOL",
    description:"Sistema de gestión para barberías con turnos online, métricas y administración de sucursales.",
    technologies: [technologies.react,technologies.nest,technologies.postgres,technologies.typeorm,technologies.typescript,technologies.mui,],
    color: "#38BDF8",
    images: [CEM1],
    github: "https://github.com/LeonelMauro/skol",
    demo: "",
  },
  {
     id:2,
     logo:Vantex1,
     name:'Vantex',
     description:"Sitio web institucional para empresa de servicios tecnicos industriales.",
     technologies: [technologies.react,technologies.mui,],
     color: "#8B5CF6",
     images:[Vantex2],
     github: "",

     demo: "https://vantexindustrial.com",
    },
    {
     id:3,
     logo:BestixLogo,
     name:'Bestix',
     description:"Sitio para fabricante de uniformes y ropa corporativa. Servicios:estampado y bordado profesional para empresas.",
     technologies: [technologies.react,technologies.mui,],
     color: "#EC4899",
     images:[scroll] ,
     github: "",

     demo: "https://bestixa.netlify.app",
    },
    {
     id:4,
     logo:CEMlogo,
     name:'Comer Entre Montañas',
     description:"Plataforma de turismo gastronomico en Mendoza con visualizacion derestaurantes, menus, eventos y sistema de reservas.",
     technologies: [technologies.react,technologies.nest,technologies.postgres,technologies.typeorm,technologies.typescript,technologies.mui,],
     color:"#10B981",
     images:[CEM1],
     github: "",

     demo: "",
    },
    {
     id:5,
     logo:DLFlogo,
     name:'DLF',
     description:"App full stack con registro de usuarios, CRUD de productos, gestion destock, metricas ventas y generacion de facturas en PDF.",
     technologies: [technologies.react,technologies.nest,technologies.postgres,technologies.typeorm,technologies.typescript,technologies.mui,],
     color:"#38BDF8",
     images:[CEM1],
     github: "https://github.com/LeonelMauro/DLF-PERFORMANCE",

     demo: "",
    }
];