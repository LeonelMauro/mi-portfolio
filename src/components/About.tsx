import { Box, Typography } from "@mui/material";
import {
  sectionTitleStyles,
  contentContainerStyles,
  fullSectionStyles,
} from "../styles/sectionStyles";

function About (){
    return(
        <Box
        id='About'
       sx={fullSectionStyles} >
					<Box>
						
					<Typography
					variant="h2"
					sx={sectionTitleStyles}
					>
						Sobre Mí
					</Typography>
					</Box>
					<Box>
						
					<Typography
					variant="h5"
					sx={{
            fontFamily: "Kaushan Script",
						maxWidth:'650px',
						fontWeight:600,
						background:
              "linear-gradient(90deg,#ffffff,#38BDF8,#ffffff)",
            backgroundSize: "200% auto",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation:"waveColor 6s ease-in-out infinite"

					}}
					>
            Transformo ideas en aplicaciones web escalables y eficientes.
					</Typography>
					</Box>
					<Box
            sx={contentContainerStyles}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#bdbdbd",
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                  md: "1.1rem",
                },
                lineHeight: {
                  xs: 1.7,
                  md: 1.9,
                },
                textAlign: {
                  xs: "center",
                  md: "justify",
                },
                mb: 3,
              }}
            >
              Soy Técnico Superior en Desarrollo de Software especializado en
              React y NestJS. Desarrollo aplicaciones web, APIs REST y
              soluciones escalables con bases de datos relacionales,
              priorizando el rendimiento, la mantenibilidad y la experiencia
              del usuario.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#bdbdbd",
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                  md: "1.1rem",
                },
                lineHeight: {
                  xs: 1.7,
                  md: 1.9,
                },
                textAlign: {
                  xs: "center",
                  md: "justify",
                },
              }}
            >
              Me apasiona crear software de calidad, aprender nuevas
              tecnologías y trabajar en equipo. Actualmente continúo ampliando
              mis conocimientos y estoy abierto a oportunidades remotas y
              proyectos desafiantes donde pueda aportar valor y seguir
              creciendo profesionalmente.
            </Typography>
          </Box>

        </Box>
    )
}
export default About;