// ==========================
// HEADER
// ==========================

// Estilos reutilizables para los botones del Header.
export const selectButton = {
  fontSize: "12px", // Tamaño del texto del botón.

  color: "#38BDF8", // Color del texto.

  minWidth: "auto", // Evita que Material UI les dé un ancho mínimo.

  px: 1.5, // Padding horizontal (izquierda y derecha).
            // 1.5 = 12px (Material UI multiplica por 8px).

  py: 0.5, // Padding vertical (arriba y abajo).
            // 0.5 = 4px.

  textTransform: "none", // Evita que el texto aparezca en MAYÚSCULAS.

  transition: "0.3s", // Hace suaves las animaciones.

  "&:hover": { // Estilos al pasar el mouse.
    transform: "translateY(-3px)", // Sube el botón 3px.
    color: "#6a8996ff", // Cambia el color.
  },
};

// ==========================
// HERO
// ==========================

// Estilos reutilizables para los iconos de redes sociales.
export const styleIcon = {
  fontSize: 30, // Tamaño del icono.

  cursor: "pointer", // Cambia el cursor a una mano.

  color: "#38BDF8", // Color inicial.

  transition: "0.3s", // Hace suave el cambio de color y movimiento.

  "&:hover": {
    transform: "translateY(-3px)", // Eleva el icono.
    color: "#6a8996ff", // Cambia el color.
  },
};

// ==========================
// SECCIONES
// ==========================

// Estilo base para todas las secciones del portfolio.
// Sirve para no repetir el mismo código en About,
// Skills, Projects, Contact, etc.
export const sectionStyles = {

  display: "flex", // Activa Flexbox.

  flexDirection: "column", // Coloca los elementos uno debajo del otro.

  alignItems: "center", // Centra todos los elementos horizontalmente.

  // Padding horizontal responsive.
  // En móvil deja menos espacio.
  // En escritorio deja más.
  px: {
    xs: 3, // 24px
    md: 8, // 64px
  },

  // Padding vertical.
  py: {
    xs: 8, // 64px
    md: 10, // 80px
  },

  // Espacio entre todos los hijos del Box.
  gap: 4, // 32px
};

// ==========================
// SECCIONES DE PANTALLA COMPLETA
// ==========================

// Hereda TODOS los estilos anteriores.
export const fullSectionStyles = {

  ...sectionStyles,

  // En escritorio ocupa toda la pantalla.
  // En móvil solo ocupa lo necesario.
  minHeight: {
    xs: "auto",
    md: "100vh",
  },

  // Centra el contenido verticalmente.
  justifyContent: "center",
};

// ==========================
// SECCIÓN SKILLS
// ==========================

// También hereda sectionStyles.
export const skillsSectionStyles = {

  ...sectionStyles,

  // Más separación porque contiene varias cards.
  gap: 6, // 48px
};

// ==========================
// TÍTULOS
// ==========================

// Estilos para todos los títulos principales.
export const sectionTitleStyles = {

  color: "#ffffff", // Color blanco.

  textAlign: "center", // Centra el texto.

  fontFamily: "Kaushan Script", // Fuente personalizada.

  fontWeight: 600, // Grosor de la fuente.

  mb: 6, // Margen inferior (48px).

  // Tamaño responsive.
  fontSize: {
    xs: "2.5rem",
    md: "3rem",
  },
};

// ==========================
// CONTENEDOR DE TEXTO
// ==========================

// Limita el ancho del texto para que sea cómodo de leer.
export const contentContainerStyles = {

  width: "100%", // Puede ocupar todo el ancho disponible.

  maxWidth: "800px", // Pero nunca supera 800px.

  mx: "auto", // Centra horizontalmente el contenedor.
};