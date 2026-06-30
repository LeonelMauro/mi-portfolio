import {
  AppBar,
  Toolbar,
  Button,
  Box,
} from "@mui/material";
import { selectButton } from "../styles/sectionStyles";

function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        display:'flex',
        alignItems:'center',
        backgroundColor: "rgba(10,10,10,0.75)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 70,
          px: { xs: 2, md: 6 },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        
        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            gap: 1,
            
          }}
        >
          <Button
            sx={selectButton}
          >
            INICIO
          </Button>

          <Button
            color="inherit"
            sx={selectButton}
          >
            SOBRE MI
          </Button>

          <Button
            color="inherit"
            sx={selectButton}
          >
            PROYECTOS
          </Button>

          <Button
            color="inherit"
            sx={selectButton}
          >
            CONTACTO
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;