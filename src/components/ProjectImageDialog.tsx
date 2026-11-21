import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

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
  const [swiperInstance, setSwiperInstance] =
  useState<SwiperType | null>(null);

const [isZoomed, setIsZoomed] = useState(false);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullWidth
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(146, 146, 146, 0.19)",
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
        position: "relative",

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
  <IconButton
  onClick={onClose}
  aria-label="Cerrar galería"
  sx={{
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 10,
    color: "#fff",
    background: "rgba(0,0,0,.65)",
    border: "1px solid rgba(255,255,255,.25)",

    "&:hover": {
      background: color,
      transform: "scale(1.08)",
    },
  }}
>
  <CloseRoundedIcon />
</IconButton>
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
            onSwiper={setSwiperInstance}
            allowTouchMove={!isZoomed}
            resistanceRatio={0}
            style={{
              width: "100%",
              height: "80vh",
            }}
            >
            {images.map((item, index) => (
              <SwiperSlide key={index} >
                <TransformWrapper
  key={`${item.image}-${index}`}
  initialScale={1}
  minScale={1}
  maxScale={4}
  centerOnInit
  limitToBounds
  wheel={{ step: 0.2 }}
  pinch={{ step: 5 }}
  doubleClick={{ mode: "toggle", step: 1.5 }}
  panning={{ disabled: !isZoomed }}
  onTransform={(_, state) => {
    const zoomActive = state.scale > 1.01;

    setIsZoomed(zoomActive);

    if (swiperInstance && !swiperInstance.destroyed) {
      swiperInstance.allowTouchMove = !zoomActive;
    }
  }}
>
                <TransformComponent
                  wrapperStyle={{
                    width: "100%",
                    height: "75vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  contentStyle={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
                      userSelect: "none",
                      WebkitUserDrag: "none",
                    }}
                  />
                </TransformComponent>
              </TransformWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default ProjectImageDialog;