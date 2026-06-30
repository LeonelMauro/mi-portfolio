import { Box, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import foto from '../assets/fot-perfil.png'
import { styleIcon } from "../styles/sectionStyles";

function Hero () {

  return(
    <Box sx={{
      minHeight: '100vh',//abarca todo el tamaño de la pantalla
      display: 'flex',//indica que sea flexible y se mueva los componentes
      flexDirection:{//que indica la dirección.
        xs:'column',//xs → celulares → columna.
        md: 'row'//md → notebook → fila
      },
      alignItems:"center",//Alinea verticalmente.
      justifyContent: {
        xs:'center',
        md:"space-between"},//Distribuye el espacio horizontal.ej: A       B
      
      gap:{
      xs:2,
      sm:3,
      md:8
    },
      px: {
        xs: 3,
        md: 8,
      },
      pt:{
      xs:0,
      md:0
      }// espacio de altura 
      }}>
      <Box
      sx={{
        display:'flex',
        flexDirection:'column',
        gap:2 ,//Agrega espacio entre los hijos.
        maxWidth:"650px",
      }}
      >
        <Typography
         variant="h1"
        sx={{
          color:"#ffffff",
          fontFamily: 'Kaushan Script',
          fontWeight: 700,
          textAlign: 'center',
          fontSize:{
            xs:'2.5rem',
            md:'4rem'
          },
          whiteSpace: "nowrap",//El texto no tiene salto de linea
        }}
        >
          Leonel Carcereri
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Kaushan Script",
            fontWeight: 600,
            fontSize: {
              xs: "1.5rem",
              md: "2.5rem",
            },
            textAlign: "center",
            background:
              "linear-gradient(90deg,#ffffff,#38BDF8,#ffffff)",
            backgroundSize: "200% auto",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation:"waveColor 6s ease-in-out infinite"
          }}
        >
          — Full Stack Dev.
        </Typography>
        <Typography
        variant="body1"
        sx={{
          maxWidth:"600px",
          color:"#bdbdbd",
          lineHeight:1.8, //Aumenta el espacio entre líneas.
          textAlign:'center'

        }}
        >
          Desarrollador Full Stack especializado en React y NestJS.
        </Typography>
        <Box
        sx={{
          display:'flex',
          justifyContent: "center",//Distribuye el espacio horizontal.ej: A B
          gap:5,//distancia entre cada componente
          
        }}
        >
        <GitHubIcon
          sx={styleIcon}
        />

        <LinkedInIcon
          sx={styleIcon}
        />

        <EmailIcon
          sx={styleIcon}
        />
      </Box>
      </Box>
      <Box>

      <Box
      component='img'//Le dice a Material UI:Le dice a Material UI: html <img />
      src={foto}
      alt="Leonel"
      sx={{
        width:
        {xs: '200px',//En celular → 250 px.
        md:'300px'},// En PC → 350 px.
        transition:"0.3s",
        "&:hover":{
        transform:"scale(1.03)"
        },
        borderRadius:"50%",  //Hace la imagen circular
        border:"4px solid #38BDF8" ,// Agrega un bode celeste
        boxShadow:"0 0 35px rgba(56,189,248,.35)"// Agrega una sombra celeste
      }}
      >
      </Box>
        <Typography>
          📍 Mendoza · Argentina
        </Typography>
      </Box>
    </Box>

  )

}

export default Hero;