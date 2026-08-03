import { Box,  Typography ,Tooltip,} from "@mui/material"
import { sectionTitleStyles, skillsSectionStyles } from "../styles/sectionStyles"
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";

import {
  SiReact,SiTypescript,SiMui,SiNestjs,SiPostgresql,SiTypeorm,SiGithub,
} from "react-icons/si";
import CEM1 from '../assets/CEM/CEm.png';
import scroll from '../assets/BESTIX/scroll.png';
import Vantex1 from '../assets/VANTEX/Vantex_Logo_Web-1.svg'
import Vantex2 from '../assets/VANTEX/Captura de pantalla 2026-05-21 - 18.14.18-fullpage.png'

import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";

function Projects(){

  const technologies = {
    react: {
      icon: SiReact,
      name: "React",
    },
    nest: {
      icon: SiNestjs,
      name: "NestJS",
    },
    postgres: {
      icon: SiPostgresql,
      name: "PostgreSQL",
    },
    typeorm: {
      icon: SiTypeorm,
      name: "TypeORM",
    },
    typescript: {
      icon: SiTypescript,
      name: "TypeScript",
    },
    mui: {
      icon: SiMui,
      name: "Material UI",
    },
  };
  const projects = [
    {
     id:1,
     logo:Vantex1,
     name:'SKOL',
     description:"Sistema de gestión para barberías con turnos online, métricas y administración de sucursales.",
     technologies: [technologies.react,technologies.nest,technologies.postgres,technologies.typeorm,technologies.typescript,technologies.mui,],
     color: "#38BDF8",
     images:[CEM1],
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
     logo:Vantex1,
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
     logo:Vantex1,
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
     logo:Vantex1,
     name:'DLF',
     description:"App full stack con registro de usuarios, CRUD de productos, gestion destock, metricas ventas y generacion de facturas en PDF.",
     technologies: [technologies.react,technologies.nest,technologies.postgres,technologies.typeorm,technologies.typescript,technologies.mui,],
     color:"#38BDF8",
     images:[CEM1],
     github: "https://github.com/LeonelMauro/DLF-PERFORMANCE",

     demo: "",
    }
  ]
  return(

  <Box
  id = 'projects'
  sx={skillsSectionStyles}
  >
    <Box>
      <Typography
      sx={sectionTitleStyles}
      >
        Proyectos
      </Typography>
    </Box>
         <Typography
         sx={{
           color:"#BDBDBD",
           textAlign: "center",
           mt:1,
           maxWidth:700,
           mx: "auto",
         }}
         >
           Algunos de los proyectos que desarrollé utilizando React, NestJS, PostgreSQL y MaterialUI
         </Typography>
     <Box
       sx={{
       display:'grid',
       gridTemplateColumns:{
        xs:'1fr',
        md: 'repeat(2,1fr)'
          },
        gap:4,
        width:'100%',
        maxWidth:'1200px',
        mx:'auto'
        }}
        >
      {projects.map((project) => (
        <Box
        key = {project.id}
        sx={{
            display: "flex",
            flexDirection: "column",
            p: 3,
            borderRadius: 4,
            background: "rgba(255,255,255,.03)",
            border: "1px solid rgba(255,255,255,.1)",
            borderLeft: `4px solid ${project.color}`,
            backdropFilter: "blur(10px)",
            transition: ".35s",

            "&:hover": {
              transform: "translateY(-8px)",
              borderColor: project.color,
              boxShadow: `0 18px 35px ${project.color}30`,
            },
          }}
        >
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          style={{
            width: "100%",
            height: 250,
          }}
        >
          {project.images.map((img, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={img}
                sx={{
                  width: "100%",
                  height: 220,
                  objectFit: "contain",
                  borderRadius: 2,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
          {/*Contenido */}
          <Box
          sx={{
            p:2,
            display:'flex',
            flexDirection: 'column',
            flexGrow:1
          }}
          >
          <Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 2,
    mb: 2,
  }}
>
  <Box
    component="img"
    src={project.logo}
    alt={project.name}
    sx={{
      width: 50,
      height: 50,
      objectFit: "contain",
      flexShrink: 0,
    }}
  />

  <Typography
    sx={{
      flex: 1,
      textAlign: "center",
      fontFamily: "Kaushan Script",
      color: "#fff",
      fontWeight: 100,
      fontSize: {
        xs: "1.5rem",
        md: "1.8rem",
      },
    }}
  >
    {project.name}
  </Typography>

  {/* Espaciador para compensar el logo */}
  <Box sx={{ width: 50, flexShrink: 0 }} />
</Box>
            <Typography
            sx={{
            color:"#BDBDBD",
            mt:1,
            lineHeight:1.8,
            fontSize:'.95rem',
            flexGrow:1
            }}
            >
              {project.description}
            </Typography>
            <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 3,
              gap: 2,
            }}
          >
            {/* Tecnologías */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,

                "& svg": {
                  transition: ".3s",
                  cursor: "default",
                },

                "& svg:hover": {
                  transform: "scale(1.2)",
                },
              }}
            >
             {project.technologies.map((tech) => {
                const Icon = tech.icon;

                return (
                  <Tooltip title={tech.name} arrow key={tech.name}>
                    <Box>
                      <Icon size={22} color={project.color} />
                    </Box>
                  </Tooltip>
                );
              })}
            </Box>

            {/* Acciones + Número */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              {project.github && (
                <Box
                  component="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    transition: ".3s",

                    "&:hover": {
                      color: project.color,
                      transform: "scale(1.15)",
                    },
                  }}
                >
                  <SiGithub size={24} />
                </Box>
              )}

              {project.demo && (
                <Box
                  component="a"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    transition: ".3s",

                    "&:hover": {
                      color: project.color,
                      transform: "scale(1.15)",
                    },
                  }}
                >
                  <LaunchRoundedIcon fontSize="small" />
                </Box>
              )}

              <Typography
                sx={{
                  color: project.color,
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  letterSpacing: 1,
                  ml: 1,
                }}
              >
                0{project.id}
              </Typography>
            </Box>
          </Box>
              
            </Box>
          </Box>
      ))}

    </Box>
  </Box>
  )

};

export default Projects;