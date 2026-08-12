import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


interface ProjectImage {
  image: string;
  function: string;
}
interface ProjectImageDialogProps {
  open: boolean;
  onClose: () => void;
  images: ProjectImage[];
  color: string;
}

function ProjectImageDialog({
  open,
  onClose,
  images,
  color,
}: ProjectImageDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullWidth
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(220, 220, 220, 0.45)",
            backdropFilter: "blur(12px)",
          },
        },
        paper: {
          sx: {
            background: "transparent",
            boxShadow: "none",
            border: "none",
            borderRadius: 0,
            width: "100%",
            maxWidth: "1400px",
            height: "100vh",
            margin: 0,
          },
        },
      }}
    >
      <DialogContent
  sx={{
    p: 0,
    overflow: "hidden",
    background: "transparent",

    // Flechas
    "& .project-image-swiper .swiper-button-prev, & .project-image-swiper .swiper-button-next":
      {
        width: 38,
        height: 38,

        background: `${color}DD`,

        border: "1px solid rgba(255, 255, 255, 0.3)",

        borderRadius: "10px",

        color: "#fff",

        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.35)",

        transition: "all 0.25s ease",

        "&:hover": {
          background: color,
          transform: "scale(1.08)",
        },
      },

    // Icono de la flecha
    "& .project-image-swiper .swiper-button-prev::after, & .project-image-swiper .swiper-button-next::after":
      {
        fontSize: "16px",
        fontWeight: 700,
      },

    // Ocultar flechas en celulares
    "@media (max-width: 599px)": {
      "& .project-image-swiper .swiper-button-prev, & .project-image-swiper .swiper-button-next":
        {
          display: "none",
        },
    },

    // Puntos
    "& .swiper-pagination": {
      bottom: "5px",
    },

    "@media (min-width: 600px)": {
      "& .swiper-pagination": {
        bottom: "10px",
      },
    },

    "@media (min-width: 900px)": {
      "& .swiper-pagination": {
        bottom: "20px",
      },
    },
  }}
>
        {images.length === 0 ? (
          <Typography
            sx={{
              color: "#BDBDBD",
              textAlign: "center",
              py: 8,
            }}
          >
            No hay imágenes disponibles para esta sección.
          </Typography>
        ) : (
          <Swiper
            modules={[Pagination, Navigation]}
            className="project-image-swiper"
            pagination={{ clickable: true }}
            navigation
            style={{
              width: "100%",
              height: "80vh",
            }}
          >
            {images.map((item, index) => (
              <SwiperSlide key={index} onClick={onClose}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    px: {
                      xs: 2,
                      sm: 3,
                      md: 4,
                    },
                    boxSizing: "border-box",
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.function}
                    sx={{
                      maxWidth: {
                        xs: "88vw",
                        sm: "90vw",
                        md: "85vw",
                      },
                      maxHeight: {
                        xs: "62vh",
                        sm: "72vh",
                        md: "75vh",
                      },
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      display: "block",
                      transition: ".3s",

                      "&:hover": {
                        transform: "scale(1.02)",
                      },
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#fff",
                      mt: 2,
                      px: 2,
                      textAlign: "center",
                    }}
                  >
                    {item.function}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default ProjectImageDialog;