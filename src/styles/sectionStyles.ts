export const sectionStyles = {
  minHeight: '100vh',//abarca todo el tamaño de la pantalla
        display:'flex',//Indica que los componente sean flexibles 
        flexDirection:{xs:'column', md:'column' }, 
        alignItems:'center',//Alinear verticalmente los elemnto
        alignContent:'center',//distribuye el espacion en el centro
         gap: 4,//Agrega espacio entre columnas 
         px: { xs: 3, md: 8, }, 
         pt:{ xs:6, md:0 }//espacio en altura 
};

export const sectionTitleStyles = {
  color: "#ffffff",
  textAlign: "center",
  fontFamily: "Kaushan Script",
  fontWeight: 600,
  mb: 6,
  fontSize: {
    xs: "2.5rem",
    md: "3rem",
  },
};

export const contentContainerStyles = {
  width: "100%",
  maxWidth: "800px",
  mx: "auto",
};