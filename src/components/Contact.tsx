import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        px: 2,
        backgroundColor: "#0F172A",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: "#fff",
          fontWeight: 700,
          mb: 2,
        }}
      >
        Contacto
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          color: "#BDBDBD",
          maxWidth: 600,
          mx: "auto",
          mb: 6,
        }}
      >
        ¿Tenés un proyecto en mente o querés trabajar conmigo? Completá el
        formulario y me pondré en contacto lo antes posible.
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 700,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          p: 4,
          borderRadius: 4,
          background: "rgba(255,255,255,.03)",
          border: "1px solid rgba(255,255,255,.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <TextField
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Correo electrónico"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Asunto"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={6}
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            py: 1.5,
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 600,
          }}
        >
          Enviar mensaje
        </Button>
      </Box>
    </Box>
  );
}

export default Contact;