import { Box,  Typography ,Tooltip,} from "@mui/material"
import { sectionTitleStyles, skillsSectionStyles } from "../styles/sectionStyles"
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";
import { projects } from "../data/projects";
import { SiGithub } from "react-icons/si";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";


function Projects(){


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
                width: 70,
                height: 'auto',
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