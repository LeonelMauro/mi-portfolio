import {
  SiReact,
  SiTypescript,
  SiMui,
  SiNestjs,
  SiPostgresql,
  SiTypeorm,
} from "react-icons/si";
//SKOL
import SkolLogo from "../assets/SKOL/SkolLogo.svg";
import ScrollSkol from "../assets/SKOL/ScrollSkol.png";
import perfilSkol from "../assets/SKOL/perfil.png";
import loginSkol from "../assets/SKOL/login.png";

  //Admin
import PanelAdmin from "../assets/SKOL/admin/PanelAdmin.png";
import DisposicionygestiondeBarbers from "../assets/SKOL/admin/DisposicionygestiondeBarbers.png";
import gestionDeUsuarios from "../assets/SKOL/admin/gestionDeUsuarios.png";
import GestionDeLocales from "../assets/SKOL/admin/GestionDeLocales.png";
import adminReportes_baber from "../assets/SKOL/admin/adminReportes_baber.png";
import ServiciosGestion from "../assets/SKOL/admin/ServiciosGestion.png";
  //barber
import barberDash from "../assets/SKOL/barber/barberDash.png";
import disponibilidadBarber from "../assets/SKOL/barber/disponibilidadBarber.png";
import historialbarber from "../assets/SKOL/barber/historialbarber.png";
 //client
import dashboardclient from '../assets/SKOL/client/dashboardclient.png';
import elegirSucursal from '../assets/SKOL/client/elegirSucursal.png';
import selectBarber from '../assets/SKOL/client/selectBarber.png';
import elegirServer from '../assets/SKOL/client/elegirServer.png';
import Fechayhorario from '../assets/SKOL/client/Fechayhorario.png';
import confirmar from '../assets/SKOL/client/confirmar.png';

//VANTEX
import Vantex1 from "../assets/VANTEX/Logo.png";
import homeVantex from "../assets/VANTEX/homeVantex.png";
import contactoVantex from "../assets/VANTEX/contactoVantex.png";
import ServiciosVantex from "../assets/VANTEX/ServiciosVantex.png";
import Vantex2 from "../assets/VANTEX/Captura de pantalla 2026-05-21 - 18.14.18-fullpage.png";

//CEM
import CEM1 from "../assets/CEM/CEm.png";

//BESTIX
import scroll from "../assets/BESTIX/scroll.png";
import BestixLogo from "../assets/BESTIX/Bestix_logo.svg";
import contactBestix from "../assets/BESTIX/contactBestix.png";
import homeBestix from "../assets/BESTIX/homeBestix.png";
//DLF
import DLFlogo from "../assets/DLF/LogoNegocio.jpeg";
import CEMlogo from "../assets/CEM/CEM_logo.svg";

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
    images: [ScrollSkol,PanelAdmin,barberDash,perfilSkol,loginSkol],
    sections: {
    Admin: [
      {
        image: PanelAdmin,
        function: "Panel administrativo",
      },
      {
        image: DisposicionygestiondeBarbers,
        function: "Gestión de barbers",
      },
      {
        image: gestionDeUsuarios,
        function: "Gestión de usuarios",
      },
      {
        image: GestionDeLocales,
        function: "Gestión de locales",
      },
      {
        image: adminReportes_baber,
        function: "Reportes",
      },
      {
        image: ServiciosGestion,
        function: "Gestión de servicios",
      },
    ],

    Barber: [
      {
        image: barberDash,
        function: "Panel de barber",
      },
      {
        image: disponibilidadBarber,
        function: "Gestión de disponibilidad",
      },
      {
        image: historialbarber,
        function: "Historial",
      },
    ],

    Cliente: [
      {
        image: dashboardclient,
        function: "Dashboard del cliente",
      },
      {
        image: elegirSucursal,
        function: "Elegir sucursal",
      },
      {
        image: selectBarber,
        function: "Seleccionar barbero",
      },
      {
        image: elegirServer,
        function: "Seleccionar servicio",
      },
      {
        image: Fechayhorario,
        function: "Elegir fecha y horario",
      },
      {
        image: confirmar,
        function: "Confirmar reserva",
      },
    ],
  },
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
     images:[Vantex2,ServiciosVantex,homeVantex,contactoVantex],
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
     images:[scroll,homeBestix,contactBestix] ,
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
