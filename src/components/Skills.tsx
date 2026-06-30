import { Box, Typography } from "@mui/material";
import {
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiMui,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiTypeorm,
  SiSvg,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import {  sectionTitleStyles, skillsSectionStyles } from "../styles/sectionStyles";

function Skills (){
  const frontend = [
    {name:"React", icon:<SiReact size={28}/>},
    {name:"TypeScript", icon:<SiTypescript size={28}/>},
    {name:"Material UI", icon:<SiMui size={28}/>},
    {name:"HTML5", icon:<SiHtml5 size={28}/>},
    {name:"CSS3", icon:<SiCss size={28}/>},
  ];
  const backend =[
    {name:"Nestjs", icon:<SiNestjs size={28}/>},
    {name:"Node", icon:<SiNodedotjs size={28}/>},
    {name:"JWT", icon:<SiSvg size={28}/>},
    {name:"TypeORM", icon:<SiTypeorm size={28}/>}
  ];
  const basededatos =[
    {name:"Postgresql", icon:<SiPostgresql size={28}/>},
    {name:"SqlServer", icon:<DiMsqlServer size={28}/>},

  ]
  const otros =[
    {name:"Docker", icon:<SiDocker size={28}/>},
    {name:"Git", icon:<SiGit size={28}/>},
    {name:"Github", icon:<SiGithub size={28}/>},
    {name:"Postman", icon:<SiPostman size={28}/>}
  ];

    return(
        <Box id="Skills" sx={skillsSectionStyles}>
          <Box
          >
          <Typography
          variant="h2"
          sx={sectionTitleStyles}
          >
            Tecnologias
          </Typography>
          </Box>
            <Box
            sx={{
              display:'grid',
              gridTemplateColumns:{
                xs:'1fr',
                sm:'1fr 1fr'
              },
              gap:4,
              width:'100%',
              maxWidth:'900px'
            }}
            >
              <Box
              sx={{
                p:3,
                border:'1px solid rgba(255,255,255,.1)',//color del borde del card
                borderRadius:'20px',//el borde de las esquinas
                background:'rgba(255,255,255,.03)',//color dentro del card
                 backdropFilter:'blur(10px)'
              }}
              >
                <Typography
                variant="h5"
                sx={{
                color:'#fff',
                mb:3,
                 fontWeight: 600,
    textAlign: "center",
    borderBottom: "1px solid rgba(255,255,255,.1)",
    pb: 1,
                }}
                >
                    Frontend
                </Typography>
              <Box
              sx={{
              display:'flex',
              flexWrap:'wrap',
              gap:2
            }}
              >
                {frontend.map((tech) => (
                  <Box
                    key={tech.name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        color: "#38BDF8",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {tech.icon}
                    </Box>

                    <Typography
                      sx={{
                        color: "#bdbdbd",
                        fontSize: "1rem",
                      }}
                    >
                      {tech.name}
                    </Typography>
                  </Box>
                ))}
              </Box>                
            </Box>            
            <Box
            sx={{
                p:3,
                border:'1px solid rgba(255,255,255,.1)',//color del borde del card
                borderRadius:'20px',//el borde de las esquinas
                background:'rgba(255,255,255,.03)',//color dentro del card
                 backdropFilter:'blur(10px)'
              }}
            >
                <Typography
                  variant="h5"
                sx={{
                color:'#fff',
                mb:3
                }}
                >
                    Backend
                </Typography>
            <Box
            sx={{
              display:'flex',
              flexWrap:'wrap',
              gap:2
            }}
            >
              {backend.map((tech)=>(
              <Box
              key={tech.name}
              sx={{
                display:'flex',
                alignItems:'center',
                gap:2,
                mb:2
              }}
              >
                <Box
                sx={{
                        color: "#38BDF8",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {tech.icon}
                </Box>
                 <Typography
                      sx={{
                        color: "#bdbdbd",
                        fontSize: "1rem",
                      }}
                    >
                      {tech.name}
                    </Typography>
              </Box>

              ))}
            </Box>
            </Box>
            <Box
            sx={{
                p:3,
                border:'1px solid rgba(255,255,255,.1)',//color del borde del card
                borderRadius:'20px',//el borde de las esquinas
                background:'rgba(255,255,255,.03)',//color dentro del card
                backdropFilter:'blur(10px)',
                 
              }}
            >
                <Typography
                  variant="h5"
                sx={{
                color:'#fff',
                mb:3
                }}
                >
                    Base de datos
                </Typography>
            <Box
            sx={{
              display:'flex',
              flexWrap:'wrap',
              gap:2
            }}>
              {basededatos.map((tech)=>(
              <Box
              key={tech.name}
              sx={{
                display:'flex',
                alignItems:'center',
                gap:2,
                mb:2
              }}
              >
                <Box
                sx={{
                        color: "#38BDF8",
                        display: "flex",
                        alignItems: "center",//Centra verticalmente. uno al lado del otro
                      }}
                    >
                      {tech.icon}
                </Box>
                 <Typography
                      sx={{
                        color: "#bdbdbd",
                        fontSize: "1rem",
                      }}
                    >
                      {tech.name}
                    </Typography>
              </Box>

              ))}
            </Box>
            </Box>
            <Box
            sx={{
                p:3,
                border:'1px solid rgba(255,255,255,.1)',//color del borde del card
                borderRadius:'20px',//el borde de las esquinas
                background:'rgba(255,255,255,.03)',//color dentro del card
                backdropFilter:'blur(10px)'
              }}
            >
                <Typography
                  variant="h5"
                sx={{
                color:'#fff',
                mb:3
                }}
                >
                    Herramientas
                </Typography>
            <Box
            sx={{
              display:'flex',
              flexWrap:'wrap',
              gap:2
            }}
            >
              {otros.map((tech)=>(
              <Box
              key={tech.name}
              sx={{
                display:'flex',
                alignItems:'center',
                gap:2,
                mb:2
              }}
              >
                <Box
                sx={{
                        color: "#38BDF8",
                        display: "flex",
                        alignItems: "center",//Centra verticalmente. uno al lado del otro
                      }}
                    >
                      {tech.icon}
                </Box>
                 <Typography
                      sx={{
                        color: "#bdbdbd",
                        fontSize: "1rem",
                      }}
                    >
                      {tech.name}
                    </Typography>
              </Box>

              ))}
            </Box>
            </Box>
          </Box>  
        </Box>
    )
}
export default Skills;